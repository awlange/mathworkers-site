"""
The back-end app for mathworkersjs.org
"""
__author__ = 'alange'

from flask import Flask, render_template

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/')
def root():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()