from flask import Flask, jsonify, request
import os
from flask_migrate import Migrate
from backend.utils.form_validators import is_valid_usd, parse_and_return_date
import uuid
from backend.models import ProcurementRequest
from backend.extensions import db  # Import db from extensions
from sqlalchemy import desc
from backend.utils.string_formatters import serialize_date



app = Flask(__name__)

DATADIR = os.path.join(os.path.dirname(__file__), 'data')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'  
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)  # Set up Flask-Migrate

@app.route("/api/getImage/<id>", methods=['GET'])
def get_image(id):
    pass

@app.route("/api/upload", methods=['POST'])
def upload_receipt():
    if not request.files:
        return jsonify({"error": "No file part in the request"}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    if not file.filename.split('.')[-1] in ['png', 'jpeg', 'jpg']:
        return jsonify({"error": "Selected file was not an image format"}), 400
    
    form_data = request.form
    first_name = form_data.get('firstName', None)
    last_name = form_data.get('lastName', None)
    purchase_date = parse_and_return_date(form_data.get('purchaseDate', None))
    description = form_data.get('description', None)
    amount = form_data.get('amount', None)

    print(first_name, last_name, purchase_date, description, amount)
    if not all([first_name, last_name, purchase_date, description, amount]):
        return jsonify({"error": "Missing required form data"}), 400
    
    if not is_valid_usd(amount):
        return jsonify({"error": "Currency is not valid"}), 400

    filename = f"{uuid.uuid4()}.{file.filename.split('.')[-1]}"

    filepath = os.path.join(DATADIR, filename)
    file.save(filepath)
    
    new_receipt = ProcurementRequest(
        first_name = first_name,
        last_name = last_name,
        description = description,
        file_path = filepath,
        date_of_purchase = purchase_date,
        amount = amount
    )

    db.session.add(new_receipt)
    db.session.commit()
    
    return jsonify({"message": "Receipt uploaded successfully", "image_url": filepath}), 200
    

@app.route("/api/getReceipt/<id>", methods=['GET'])
def get_receipt(id):
    pass

@app.route('/api/getPaginated/requests/', methods=['GET'])
def get_paginated_requests():
    page_no = request.args.get('pageno', default=1, type=int)

    per_page = 5

    paginated_requests = ProcurementRequest.query.order_by(desc(ProcurementRequest.date_of_purchase))\
                                                   .paginate(page=page_no, per_page=per_page, error_out=False)
    
    results = []
    for r in paginated_requests.items:
        results.append({
            'id': r.id,
            'firstName': r.first_name,
            'lastName': r.last_name,
            'description': r.description,
            'filePath': r.file_path,
            'dateOfPurchase': serialize_date(r.date_of_purchase),
            'amount': r.amount
        })

    return jsonify({
        'totalItems': paginated_requests.total,
        'items': results
    })


