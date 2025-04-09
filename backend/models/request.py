from datetime import datetime
from sqlalchemy import Column, Integer, String, Date, Numeric
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Request(Base):
    __tablename__ = 'Requests'
    
    id = Column(Integer, primary_key=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    description = Column(String(500), nullable=False)  
    file_path = Column(String(255), nullable=False)
    date_of_purchase = Column(Date, nullable=False)
    amount = Column(Numeric(10, 2), nullable=False)

    
    def __repr__(self):
        return f"<Request: (id={self.id}, name='{self.first_name} {self.last_name}', amount='{self.amount}, date_of_purchase='{self.date_of_purchase}')>"