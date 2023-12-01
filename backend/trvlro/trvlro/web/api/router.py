from fastapi.routing import APIRouter
from trvlro.services.database import add_data

from trvlro.web.api import docs, echo, monitoring, cities

api_router = APIRouter()
add_data()
api_router.include_router(monitoring.router)
api_router.include_router(docs.router)
api_router.include_router(echo.router, prefix="/echo", tags=["echo"])
api_router.include_router(cities.router, prefix="/cities", tags=["cities"])
