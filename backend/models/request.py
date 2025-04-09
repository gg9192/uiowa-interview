from backend.app import db 

class Request(db.Model):  
    __tablename__ = 'requests' 
    
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(500), nullable=False)  
    file_path = db.Column(db.String(255), nullable=False)
    date_of_purchase = db.Column(db.Date, nullable=False)
    amount = db.Column(db.Numeric(10, 2), nullable=False)

    def __repr__(self):
        return f"<Request: (id={self.id}, name='{self.first_name} {self.last_name}', amount='{self.amount}, date_of_purchase='{self.date_of_purchase}')>"