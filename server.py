from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def root():
    return render_template("HomePage.html")

@app.route("/entrance")
def entrance():
    return render_template("Entrance.html")

@app.route("/services")
def services():
    return render_template("ServicesPage.html")

@app.route("/questions")
def questions():
    return render_template("QuestionPage.html")

app.run("0.0.0.0", 5000)