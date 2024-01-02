"""
Data models for trvlro.
Given that we're using Firestore, we're schema-less
so we're using Pydantic for validation.
FastAPI now uses PydanticV2 so even with our large and growing data,
speed isn't an issue, the models will scale well.
*especially since we will get some data from an LLM, 
which may not always be in the proper format*
We NEED to ensure we only store it if it's in the proper format.
"""
