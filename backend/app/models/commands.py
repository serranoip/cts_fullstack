from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship, declarative_base
import datetime

from db.base_class import Base

class Commands(Base):


    id = Column(Integer, primary_key=True, index=True)
    dateReceived = Column(DateTime, default=datetime.datetime.utcnow)
    commandFilename = Column(String(256), nullable=False)
    fileUrl = Column(String(256), nullable=False)
    userID = Column(Integer, ForeignKey("admin.id"), nullable=True)
    satCommands = relationship("Admin", back_populates="userCommands")