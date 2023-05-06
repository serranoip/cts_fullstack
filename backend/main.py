from fastapi import FastAPI, UploadFile, status
from app.schemas.telemetrySchema import TelemetryBase
from app.schemas.imagesSchema import ImagesBase
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security  import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from typing import List
from fastapi.responses import JSONResponse


from app.crud.getTelemetry import sat_telemetry
from app.crud.getImages import get_image
from app.crud.uploadCommands import upload_command


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/telemetry", response_model=List[TelemetryBase])
async def get_telemetry():
    telemetry_data = sat_telemetry()
    return telemetry_data
    
@app.get("/images", response_model=List[ImagesBase])
async def get_images():
    sat_images = get_image()
    return sat_images

@app.post("/commands", status_code=status.HTTP_201_CREATED)
async def add_command_files(file: UploadFile):
    responseStr = upload_command(file)
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=responseStr)