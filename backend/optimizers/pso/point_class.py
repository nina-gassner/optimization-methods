from pydantic import BaseModel

class PSO_Point(BaseModel):

    location: list[float]
    speed: list[float]
    best_fitness: float
    best_fitness_location: list[float]
