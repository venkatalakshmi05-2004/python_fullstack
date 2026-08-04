
from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def about():
    return render_template("contact.html")
@app.route("/index")
def about():
    return render_template("index.html")
@app.route("/login")
def about():
    return render_template("login.html")
@app.route("/courses")
def about():
    return render_template(courses.html)
@app.route("/register")
def about():
    return render_template(register.html)
@app.route ("/trainers")
def about():
    return render_template(trainer.html)

if __name__=='__main__':
   app.run(debug=True)