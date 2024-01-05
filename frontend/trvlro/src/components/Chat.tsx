// src/components/Chat.tsx
import React, { useContext, useEffect, useState } from "react";
import { Input, Button, Row, Col, Spin } from "antd";
import Message from "./Message";
import OpenAI from "openai";
import { MessageDto } from "../models/MessageDto";
import { AuthContext } from "../context/AuthContext";
import { getUserThreadId, updateThreadId } from "../utils/API";

const Chat: React.FC = () => {
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [messages, setMessages] = useState<Array<MessageDto>>(
    new Array<MessageDto>()
  );
  const [input, setInput] = useState<string>("");
  const [assistant, setAssistant] = useState<any>(null);
  const [thread, setThread] = useState<any>(null);
  const [openai, setOpenai] = useState<any>(null);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    initChatBot();
  }, []);

  useEffect(() => {
    setMessages([
      {
        content:
          "Salut! Sunt ghidul tau de calatorie in Timisoara. Cum te pot ajuta?",
        isUser: false,
      },
    ]);
  }, [assistant]);

  const initChatBot = async () => {
    //console.log("initChatBot" + process.env.REACT_APP_OPENAI_API_KEY);
    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    // Create an assistant
    const assistant = await openai.beta.assistants.retrieve(
      "asst_oKI0YcZtDVKYFyx51YlvTLfP"
    );

    // Create a thread
    const userId = currentUser?.uid ?? "";
    let threadId;

    try {
      threadId = await getUserThreadId(userId);
    } catch (error) {
      // Handle error
    }
    let thread;
    try {
      thread = await openai.beta.threads.retrieve(threadId);
      console.log("retrieving thread ", thread);
    } catch (error) {
      thread = await openai.beta.threads.create();
      const newThreadId = thread.id;
      console.log("threadId", newThreadId);
      console.log("userId", userId);
      updateThreadId(userId, newThreadId);
    }

    setOpenai(openai);
    setAssistant(assistant);
    setThread(thread);
  };

  const createNewMessage = (content: string, isUser: boolean) => {
    const newMessage = new MessageDto(isUser, content);
    return newMessage;
  };

  const handleSendMessage = async () => {
    messages.push(createNewMessage(input, true));
    setMessages([...messages]);
    setInput("");

    // Send a message to the thread
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: input,
    });

    // Run the assistant
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistant.id,
    });

    // Create a response
    let response = await openai.beta.threads.runs.retrieve(thread.id, run.id);

    // Wait for the response to be ready
    while (response.status === "in_progress" || response.status === "queued") {
      console.log("waiting...");
      setIsWaiting(true);
      await new Promise((resolve) => setTimeout(resolve, 5000));
      response = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    }

    setIsWaiting(false);

    // Get the messages for the thread
    const messageList = await openai.beta.threads.messages.list(thread.id);

    // Find the last message for the current run
    const lastMessage = messageList.data
      .filter(
        (message: any) =>
          message.run_id === run.id && message.role === "assistant"
      )
      .pop();

    // Print the last message coming from the assistant
    if (lastMessage) {
      console.log(lastMessage.content[0]["text"].value);
      setMessages([
        ...messages,
        createNewMessage(lastMessage.content[0]["text"].value, false),
      ]);
    }
  };

  // detect enter key and send message
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div>
      {messages.map((message, index) => (
        <Row justify={message.isUser ? "end" : "start"} key={index}>
          <Col>
            <Message key={index} message={message} />
          </Col>
        </Row>
      ))}
      <Row>
        <Col style={{ padding: "10px", width: "100%" }}>
          {isWaiting && <Spin style={{ padding: "10px" }} />}
          <Input
            style={{ width: "100%" }}
            placeholder="Type your message"
            disabled={isWaiting}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </Col>
      </Row>
      {!isWaiting && (
        <Row justify="end">
          <Col>
            <Button
              type="primary"
              onClick={handleSendMessage}
              disabled={isWaiting}
              style={{ marginLeft: "auto", marginRight: "15px" }}
            >
              Send
            </Button>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Chat;
