from trvlro.services.database import update_user_knowledge
def test_update_user_knowledge():
    tags = [
        "bigman",
        "mista",
        "scooby",
    ]
    # make a pairs map
    pairs = {
        "question1": "answer1",
        "question2": "answer2",
        "question3": "answer3"
    }
    user_id = "uuid01"
    update_user_knowledge(user_id, tags=tags, questionAnswerPairs=pairs)