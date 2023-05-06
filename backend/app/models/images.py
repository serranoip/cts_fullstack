from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship, declarative_base
import datetime
from db.base_class import Base

class Images(Base):

    id = Column(Integer, primary_key=True, index=True)
    dateReceived = Column(DateTime, default=datetime.datetime.utcnow)
    imageFilename = Column(String(256), nullable=False)
    imageUrl = Column(String(512), nullable=False)