from pydantic import BaseModel
from typing import Sequence, Optional
from datetime import datetime

class AdminBase(BaseModel):
    superUser: bool = True

class AdminInDBBase(AdminBase):
    id: Optional[int] = None

    class Config:
        orm_mode = True

