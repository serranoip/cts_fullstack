from pydantic import BaseModel
from datetime import datetime

class ImagesBase(BaseModel):
    id: int
    dateReceived: datetime
    imageFilename: str
    imageUrl: str


class ImagesInDBBase(ImagesBase):
    ...

    class Config:
        orm_mode = True
