import socket
from flask import abort,make_response,request, render_template, jsonify
import pymongo
from pymongo import MongoClient
# print(socket.gethostbyname(socket.getfqdn(socket.gethostname())))

from flask import Flask
app = Flask(__name__)
client = pymongo.MongoClient("mongodb+srv://jommy:jommy348@songcluster-hq8sk.mongodb.net/test?retryWrites=true&w=majority")
db = client.users
# list_coll = db['data']

from flask_cors import CORS
CORS(app)


@app.route("/")
def home():
    return render_template('home.html')

@app.route("/test")
def test():
    return jsonify({"text":"Hello Test"})

@app.route("/getUserTest")
def getUserTest():
    result = db.data.find_one({'name' : 'pick'})
    return jsonify(result)

@app.route("/checkOwnership")
def checkOwnership(songCheck):
    result = db.data.find_one({'songOwn' : [songCheck]})
    return jsonify(result)
    # if result == songName:
    #     return True
    
    # else:
    #     return False

@app.route("/getUser")
def getUser(nameInput):
    result = db.data.find_one({"name" : nameInput})
    return jsonify(result)

@app.route("/buy")
def buy(newSong):
    db.data.insert_one(newSong)
    

@app.route("/sell")
def sell(oldSong):
    db.data.remove(oldSong)
    return jsonify("meow:cat is gay")
   

app.run()