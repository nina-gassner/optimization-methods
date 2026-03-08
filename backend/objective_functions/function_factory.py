import sympy as sp

def create_function(string):

    error_message = None;
    function = None;

    x, y = sp.symbols("x y")
    try:
        expr = sp.sympify(string)
    except Exception:
        error_message = "Invalid mathematical expression - please use SymPy syntax"
    
    if not error_message:
        allowed = {x, y}

        if not expr.free_symbols.issubset(allowed):
            error_message = "Only variables x and y are allowed"
            
    if not error_message:
        raw_function = sp.lambdify((x, y), expr, "numpy")
        function = lambda p: raw_function(p[0], p[1])

    return [function, error_message]