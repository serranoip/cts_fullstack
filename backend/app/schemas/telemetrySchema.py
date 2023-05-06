from pydantic import BaseModel, Json
from datetime import datetime

class TelemetryBase(BaseModel):
    id: int
    dateReceived: datetime
    telemetryFilename: str
    telemetryUrl: str
    telemetryDataRet: str

class TelemetryInDBBase(BaseModel):
    ...

    class Config:
        orm_mode = True
