"""
The back-end app for http://mathworkersjs.org
"""
__author__ = 'alange'

from flask import Flask, render_template

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/')
def root():
    return render_template('root.html')

@app.route('/quickstart')
def quickstart():
    return render_template('quickstart.html')

if __name__ == '__main__':
    app.run()