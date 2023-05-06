from sqlalchemy import Column, Integer, Boolean,String
from sqlalchemy.orm import relationship
from db.base_class import Base

class Admin(Base):
    
    id = Column(Integer, primary_key=True, index=True)
    firstName = Column(String(256), nullable=True)
    lastName = Column(String(256), nullable=True)
    password = Column(String(256), default = True)
    userCommands = relationship("Commands", back_populates="satCommands")

