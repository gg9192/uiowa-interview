from flask import Flask
import sqlalchemy
import os
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'  
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)  # This line sets up Flask-Migrate

@app.route("/getImage/<id>", methods=['GET'])
def get_image(id):
    pass

@app.route("/upload", methods=['POST'])
def upload_receipt():
    pass

@app.route("/getReceipt/<id>", methods=['GET'])
def get_receipt(id):
    pass

@app.route('/getPaginated/reciepts/<pageno>', methods=['GET'])
def get_paginated_receipts(pageno):
    pass

