import math
def get_p_function(name):

    if name == "Boltzmann":
        def p(T, delta):
            return math.exp(-delta / T)
        return p

    if name == "Logistic":
        def p(T, delta):
            return 1 / (1 + math.exp(delta / T))
        return p

    if name == "Linear":
        def p(T, delta):
            return max(0, 1 - delta / T)
        return p

    raise ValueError("Unknown probability function")