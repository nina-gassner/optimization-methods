import random
import numpy as np
from optimizers.simulated_annealing.situation_class import situation_class
from optimizers.evaluation_with_penalty import evaluate_with_penalty;

def true_with_p(p):
    return random.random() < p


def get_next_situation(function, current_situation, temperature_decrease, p_function, speed_range, search_space, penalty, penalty_strength):

    step = speed_range * current_situation.temperature

    random_velocity = [random.uniform(-step, step), random.uniform(-step, step)]

    new_position = np.array(current_situation.position) + np.array(random_velocity)

    new_fitness = evaluate_with_penalty(new_position, function, penalty, penalty_strength, search_space)

    new_temperature = current_situation.temperature - temperature_decrease

    if new_fitness < current_situation.fitness:
        return situation_class(
            position = new_position.tolist(), 
            fitness = new_fitness, 
            temperature = new_temperature)

    delta = new_fitness - current_situation.fitness
    probability = p_function(current_situation.temperature, delta)

    if true_with_p(probability):
        return situation_class(
            position = new_position.tolist(),
            fitness = new_fitness, 
            temperature = new_temperature)


    return situation_class(
        position = current_situation.position, 
        fitness = current_situation.fitness, 
        temperature = new_temperature)