from flask import Flask
import sqlite3

app = Flask(__name__)

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

