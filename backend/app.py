from flask import Flask

app = Flask(__name__)

@app.route("/getImage/<id>")
def get_image(id):
    pass

@app.route('upload')
def upload_receipt():
    pass

