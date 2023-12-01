"""
Data models for trvlro.
Given that we're using Firestore, we're schema-less
so we're using Pydantic for validation.
*especially since we will get some data from an LLM, 
which may not always be in the proper format*
We NEED to ensure we only store it if it's in the proper format.
"""
