from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class CommandsBase(BaseModel):
    dateReceived: str
    CommandsUrl: str

class CommandsCreate(CommandsBase):
    CommandsFilename: str


class CommandsInDBBase(CommandsBase):
    id: int

    class Config:
        orm_mode = True