from fastapi import APIRouter

from models.optimization_request import NelderMeadRequest, PSORequest, BaseOptimizationRequest
from services.nelder_mead_service import run_nelder_mead
from services.pso_service import run_pso

router = APIRouter()


@router.post("/nelder_mead")
def nelder_mead_endpoint(req: NelderMeadRequest):
    return run_nelder_mead(req)

@router.post("/particle-swarm-optimization")
def nelder_mead_endpoint(req: PSORequest):
    return run_pso(req)