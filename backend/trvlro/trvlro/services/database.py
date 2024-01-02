import json
import os
from trvlro.models.city import City
from trvlro.models.user import User
import firebase_admin
from firebase_admin import firestore
import json

def init_db_credentials():
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/faur/Desktop/facultate/PDSS/TRVLRO/backend/trvlro/_service_account_keys.json"

    
init_db_credentials()
app = firebase_admin.initialize_app()
db = firestore.client()

def add_user(user):
    doc_ref = db.collection("users").document(user.userId)
    doc_ref.set({
        "userId": user.userId,
        "email": user.email,
        "username": user.username,
        "createdAt": user.createdAt,
        "questionAnswerPairs": user.questionAnswerPairs,
        "tags": user.tags
    })
    
def update_user_knowledge(userId, questionAnswerPairs=None, tags=None):
    doc_ref = db.collection("users").document(userId)
    user_data = doc_ref.get().to_dict()

    if user_data is None:
        return  # Handle the case when user does not exist

    update_data = {}
    if questionAnswerPairs is not None:
        current_question_answer_pairs = user_data.get("questionAnswerPairs", {})
        updated_question_answer_pairs = {**current_question_answer_pairs, **questionAnswerPairs}
        update_data["questionAnswerPairs"] = updated_question_answer_pairs

    if tags is not None:
        current_tags = user_data.get("tags", [])
        updated_tags = current_tags + tags
        update_data["tags"] = list(set(updated_tags))

    doc_ref.update(update_data)
    
    
def add_city_with_attractions(json_file):
    city_data = json.load(json_file)
    city = City(**city_data)

    doc_ref = db.collection("cities").document(city.cityId)
    doc_ref.set(city_data)
