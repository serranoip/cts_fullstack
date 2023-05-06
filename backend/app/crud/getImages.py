from app.schemas.imagesSchema import ImagesBase
from app.db.db_connection import connect_to_imagesTable
from dotenv import load_dotenv
import os

load_dotenv()

DB_NAME = os.getenv("DATABASE_NAME")
DB_USER = os.getenv("DATABASE_USER")
DB_PASSWORD = os.getenv("DATABASE_PASSWORD")
DB_PORT = os.getenv("DATABASE_PORT")

def get_image():
    images = connect_to_imagesTable()
    return images