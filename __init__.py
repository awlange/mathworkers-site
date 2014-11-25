"""
The back-end app for http://www.mathworkersjs.org
"""
__author__ = 'alange'

from flask import Flask, render_template, send_from_directory

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/')
def root():
    return render_template('root.html')

@app.route('/quickstart')
def quickstart():
    return render_template('quickstart.html')

@app.route('/documentation')
def documentation():
    return render_template('documentation.html')

@app.route('/performance')
def performance():
    return render_template('performance.html')

if __name__ == '__main__':
    app.run()