from fastapi.routing import APIRouter

from trvlro.web.api import docs, echo, monitoring, cities, users

api_router = APIRouter()
api_router.include_router(monitoring.router)
api_router.include_router(docs.router)
api_router.include_router(echo.router, prefix="", tags=["echo"])
api_router.include_router(cities.router, prefix="", tags=["cities"])
api_router.include_router(users.router, prefix="", tags=["users"])
