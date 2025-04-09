from flask import Flask
import sqlite3

app = Flask(__name__)

@app.route("/getImage/<id>")
def get_image(id):
    pass

@app.route("upload")
def upload_receipt():
    pass

@app.route("/getReceipt/<id>")
def get_receipt(id):
    pass

@app.route('/getPaginated/reciepts/<pageno>')
def get_paginated_receipts(pageno):
    pass

