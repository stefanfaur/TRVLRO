from fastapi.routing import APIRouter

from trvlro.web.api import docs, echo, monitoring, cities, users, itineraries

api_router = APIRouter()
api_router.include_router(monitoring.router)
api_router.include_router(docs.router)
api_router.include_router(echo.router, prefix="", tags=["echo"])
api_router.include_router(cities.router, prefix="", tags=["cities"])
api_router.include_router(users.router, prefix="", tags=["users"])
api_router.include_router(itineraries.router, prefix="", tags=["itineraries"])


# really barebones testing ;)
from trvlro.web.api.runna import test_update_user_knowledge
test_update_user_knowledge()