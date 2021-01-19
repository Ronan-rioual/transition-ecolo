from flask import Flask, render_template, request, url_for, flash, redirect
from werkzeug.exceptions import abort
import base64
from io import BytesIO
from matplotlib.figure import Figure
import html
import pandas as pd


app = Flask(__name__)

app.config['SECRET_KEY'] = 'your secret key'

def calcul(question):
    df = pd.read_csv('df_lite')
    del df['Unnamed: 0']
    result = df[question].value_counts()
    oui = result['Oui']
    non = result['Non']
    tot = oui + non
    pourcen_oui = round((oui/tot)*100)
    pourcen_non = round((non/tot)*100)
    return oui, non, pourcen_non, pourcen_oui, question


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/Question1')
def page1():
    question = "Diriez-vous que votre vie quotidienne est aujourd'hui touchée par le changement climatique ?"
    result = calcul(question)
    return render_template('Question1.html', result = result)

@app.route('/Question2')
def page2():
    question = "Par rapport à votre mode de chauffage actuel, pensez-vous qu'il existe des solutions alternatives plus écologiques ?"
    result = calcul(question)
    return render_template('Question2.html', result = result)

@app.route('/Question3')
def page3():
    question = "À titre personnel, pensez-vous pouvoir contribuer à protéger l'environnement ?"
    result = calcul(question)
    return render_template('Question3.html', result = result)


if __name__ == '__main__':
    app.run(debug=True)