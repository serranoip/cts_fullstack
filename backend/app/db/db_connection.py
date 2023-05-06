import psycopg2
from dotenv import load_dotenv
import os
from app.schemas.telemetrySchema import TelemetryBase
from app.schemas.imagesSchema import ImagesBase
from datetime import datetime

load_dotenv()

DB_NAME = os.getenv("DATABASE_NAME")
DB_USER = os.getenv("DATABASE_USER")
DB_PASSWORD = os.getenv("DATABASE_PASSWORD")
DB_PORT = os.getenv("DATABASE_PORT")

def connect_to_telemetryTable():
    conn = psycopg2.connect(
        database=DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_PORT
    )
    curr = conn.cursor()
    curr.execute("select * FROM telemetry")
    rows = curr.fetchall()

    telemetryList = []
    for row in rows:
        telemetryList.append(
            TelemetryBase(
                id = row[0],
                dateReceived=row[1],
                telemetryFilename=row[2],
                telemetryUrl=row[3],
                telemetryDataRet=''
            )
        )
    curr.close()
    conn.close()

    return telemetryList

def connect_to_imagesTable():
    conn = psycopg2.connect(
        database=DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_PORT
    )
    curr = conn.cursor()
    curr.execute("select * FROM images")
    rows = curr.fetchall()

    imagesList = []
    for row in rows:
        imagesList.append(
            ImagesBase(
                id = row[0],
                dateReceived=row[1],
                imageFilename=row[2],
                imageUrl=row[3]
            )
        )
    curr.close()
    conn.close()
    return imagesList

def connect_to_commandsTable(file, upload_file_url):
    conn = psycopg2.connect(
        database=DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_PORT
    )
    curr = conn.cursor()
    curr.execute(f"""INSERT INTO commands ("dateReceived", "commandFilename", "fileUrl") VALUES (DATE '{datetime.now()}', '{file.filename}', '{upload_file_url}')""")
    conn.commit()
    curr.close()
    conn.close()