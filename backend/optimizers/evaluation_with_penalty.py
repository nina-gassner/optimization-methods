def evaluate_with_penalty(point, function, penalty, penalty_strength, search_space):
    if (not penalty):
        return function(point)
    
    if (penalty == "squared distance"):
        squared_distances = 0
        dimension = len(point)
        for i in range(dimension):
            squared_distances += max(search_space[i][0] - point[i], 0, point[i] - search_space[i][1])**2
        return function(point) + squared_distances * penalty_strength
    
    print("unknown penalty type")
    return function(point)