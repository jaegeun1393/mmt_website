from flask import *
from werkzeug.utils import secure_filename
from werkzeug.datastructures import  FileStorage
from flask_ckeditor import upload_success, upload_fail
from datetime import timedelta
from flaskext.mysql import MySQL
from flask_cors import CORS
from random import randint

import os
import shutil

app = Flask(__name__, static_folder='../build', static_url_path='/')

app.config.from_object('config.Config')
app.permanent_session_lifetime = timedelta(minutes = 6)
app.config['CKEDITOR_FILE_UPLOADER'] = 'upload'
app.config['SECRET_KEY'] = '_lhvudxs%wfhb-ks2vh1l+_g&y)3rw$338d)ia4j&gf&^e_y-='
#app.config['MYSQL_DATABASE_HOST'] = 'localhost'
#app.config['MYSQL_DATABASE_USER'] = 'aiden1393_root'
#app.config['MYSQL_DATABASE_PASSWORD'] = 'IB4GhjI-%z3n'
#app.config['MYSQL_DATABASE_DB'] = 'aiden1393_cloud_sat_data'

app.config['MYSQL_DATABASE_HOST'] = '127.0.0.1'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'hunter2'
app.config['MYSQL_DATABASE_DB'] = 'mmt_website'
app.config['MYSQL_DATABASE_PORT'] = 3306
CORS(app, support_credentials=True)

db = MySQL()
db.init_app(app)

ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg'}
UPLOAD_FOLDER = 'uploads/blogpost'

def random_with_N_digits(n):
    range_start = 10**(n-1)
    range_end = (10**n)-1
    return randint(range_start, range_end)

@app.route("/")
def index():
    return app.send_static_file('index.html')

@app.route('/files/<path:filename>')
def uploaded_files(filename):
    path = '/the/uploaded/directory'
    return send_from_directory(path, filename)

@app.route("/uploadblogimage", methods=["GET", "POST"])
def upload_blog_post_image():
    dataimg = request.files.getlist('files')
    custompath = UPLOAD_FOLDER + '/1294'

    if((os.path.exists(custompath)) == False):
        os.makedirs(custompath)
    else:
        shutil.rmtree(custompath)
        os.makedirs(custompath)

    url = ""
    for file in dataimg:
        if(file.filename != ''):
            filename = secure_filename(file.filename)
            file.save(os.path.join(custompath, filename))
            url = url_for('uploaded_files', filename=file.filename)
            #    os.remove(custompath + '/' + filename)
    
    return upload_success(url, filename=file.filename)

@app.route('/user/add/info', methods=["GET", "POST"])
def user_add_info():
    data = request.get_json()
    conn = db.connect()
    cur = conn.cursor()
    cur.execute("INSERT INTO accounts (id, Fname, Lname, Role, Pnumber, Address, Zip, email, password, child) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", 
        (random_with_N_digits(5), data["fname"], data["lname"], data["role"], data["pnum"], data["address"], data["zip"], data["email"], data["pswd"], ""))
    conn.commit()
    cur.close()
    return jsonify({'success': "Successfully register to the website."})

@app.route("/user/get/login", methods=["GET", "POST"])
def check_login():
    #REMOVE
    session["response"] = True
    if "response" in session:
        return jsonify({'message': "True"})
    else:
        return jsonify({'message': "False"})

@app.route("/user/login", methods=["GET", "POST"])
def login():
    data = request.get_json()
    conn = db.connect()
    cur = conn.cursor()
    cur.execute('SELECT password FROM accounts WHERE email = %s', [data["id"]])
    pwd = str(cur.fetchone())[2:-3]
    cur.close()
    if (pwd == data["password"]):
        session["response"] = data
        
        conn = db.connect()
        cur = conn.cursor()
        cur.execute('SELECT Fname FROM accounts WHERE email = %s', [data["id"]])
        name = str(cur.fetchone())[2:-3]
        cur.execute('SELECT id FROM accounts WHERE email = %s', [data["id"]])
        s_id = str(cur.fetchone())[2:-3]
        cur.close()
        session["user_name"] = name

        return jsonify({'message': "Successfully register to the website.",
        'login': "True"})
    return jsonify({'message': "Wrong password.",
        'login': "False"})

if __name__=="__main__":
    app.run(debug=True)