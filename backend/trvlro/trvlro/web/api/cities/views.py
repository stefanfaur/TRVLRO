from fastapi import APIRouter, UploadFile
from trvlro.services.database import add_city_with_attractions


router = APIRouter()

@router.get("/cities") # just for testing
def get_all_cities():
    # Logic to retrieve all city profiles
    return {"message": "Retrieving all city profiles"}

@router.get("/cities/{cityId}") # just for testing
def get_city(cityId: int):
    # Logic to retrieve a specific city profile based on cityId
    return {"message": f"Retrieving city profile for cityId: {cityId}"}

@router.post("/cities")
async def add_city(file: UploadFile):
    try:
        json_file = file.file
        add_city_with_attractions(json_file)
        return {"message": "City added to the database"}
    except Exception as e:
        return {"message": "Error occurred while adding city to the database", "error": str(e)}

