from app.db.db_connection import connect_to_commandsTable
import boto3
from datetime import datetime
from dotenv import load_dotenv
import os

load_dotenv()

# Database ENV variables
DB_NAME = os.getenv("DATABASE_NAME")
DB_USER = os.getenv("DATABASE_USER")
DB_PASSWORD = os.getenv("DATABASE_PASSWORD")
DB_PORT = os.getenv("DATABASE_PORT")

# S3 ENV variables
BUCKET_NAME = os.getenv("S3_BUCKET_NAME")
ACCESSKEY_ID = os.getenv("S3_ACCESS_KEY_ID")
ACCESS_KEY = os.getenv("S3_ACCESS_KEY")


def upload_command(file):
    s3 = boto3.resource("s3", aws_access_key_id=ACCESSKEY_ID,
         aws_secret_access_key= ACCESS_KEY)
    bucket = s3.Bucket(BUCKET_NAME)
    bucket.upload_fileobj(file.file, file.filename, ExtraArgs={"ACL":"public-read"})
    upload_file_url = f"""https://{BUCKET_NAME}.s3.us-west-2.amazonaws.com/{file.filename}"""

    connect_to_commandsTable(file, upload_file_url)
    
    response = f"Your file has been uploaded; filename = {file.filename}"
    return response
