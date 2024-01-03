from trvlro.assets.prompts import system_prompt
from trvlro.services.database import get_user_personality
import json

from openai import OpenAI
client = OpenAI()


class AIUtil:
    def create_itinerary(user_id, itinerary_meta):
        user_personality = get_user_personality(user_id)
        user_prompt = itinerary_meta.json() + "\n USERID: " + user_id + "\n" + user_personality
        print(user_prompt)
        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ]
        )
        # print(completion.choices[0].message.content)
        return completion.choices[0].message.content