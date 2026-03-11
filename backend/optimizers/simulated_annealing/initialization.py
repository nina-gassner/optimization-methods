import random
import numpy as np
from optimizers.evaluation_with_penalty import evaluate_with_penalty
from optimizers.simulated_annealing.situation_class import situation_class


def get_init_situation(function, search_space, init_temperature, penalty, penalty_strength):

    x = random.uniform(search_space[0][0], search_space[0][1])
    y = random.uniform(search_space[1][0], search_space[1][1])

    position = [x, y]
    fitness = evaluate_with_penalty(position, function, penalty, penalty_strength, search_space)
    
    return situation_class(
        position = position,
        fitness = fitness,
        temperature = init_temperature)

