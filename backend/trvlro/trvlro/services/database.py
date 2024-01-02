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
        "personalityData": user.questionAnswerPairs,
        "tags": user.tags
    })
    
def update_user_knowledge(userId, questionAnswerPairs, tags):


    doc_ref = db.collection("users").document(userId)
    doc_ref.update({
        "personalityData": questionAnswerPairs,
        "preferences": tags
    })
    
def add_city_with_attractions(json_file):
    city_data = json.load(json_file)
    city = City(**city_data)

    
    doc_ref = db.collection("cities").document(city.cityId)
    doc_ref.set(city_data)
