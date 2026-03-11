from pydantic import BaseModel

class situation_class(BaseModel):
    position: list[float]
    fitness: float
    temperature: float



