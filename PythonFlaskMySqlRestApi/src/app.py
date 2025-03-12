from flask import Flask

app = Flask(__name__)
app.config['SQL_ALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'