import os

def init_db_credentials():
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/faur/Desktop/facultate/PDSS/TRVLRO/backend/trvlro/_service_account_keys.json"

def add_data():
    import firebase_admin
    from firebase_admin import firestore

    init_db_credentials()
    app = firebase_admin.initialize_app()
    db = firestore.client()

    doc_ref = db.collection("users").document("cornelgaie")
    doc_ref.set({
        "first": "Cocu",
        "last": "Gaie",
        "born": 1815
    })