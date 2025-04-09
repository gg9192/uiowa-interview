from flask import Flask, jsonify
import sqlalchemy
import os
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from backend.models import request
import 

app = Flask(__name__)

DATADIR = os.path.join(os.path.dirname(__file__), 'data')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'  
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)  # This line sets up Flask-Migrate

@app.route("/getImage/<id>", methods=['GET'])
def get_image(id):
    pass

@app.route("/upload", methods=['POST'])
def upload_receipt():
    if 'file' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    form_data = request.form
    first_name = form_data.get('firstName', None)
    last_name = form_data.get('lastName', None)
    purchase_date = form_data.get('purchaseDate', None)
    description = form_data.get('description', None)
    amount = form_data.get('amount', None)

    
    if not all([first_name, last_name, purchase_date, description, amount]):
        return jsonify({"error": "Missing required form data"}), 400
    

@app.route("/getReceipt/<id>", methods=['GET'])
def get_receipt(id):
    pass

@app.route('/getPaginated/reciepts/<pageno>', methods=['GET'])
def get_paginated_receipts(pageno):
    pass

