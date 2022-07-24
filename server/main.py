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

@app.route('/uploads/blog/post/add/id', methods=["GET", "POST"])
def upload_blog_post_add_id():
    aid = random_with_N_digits(10)
    return jsonify({'blog_id': aid})

@app.route('/uploads/blogpost/<aid>/<img>', methods=["GET", "POST"])
def getimg(aid, img):
    filename = 'uploads\\blogpost\\'+ aid +'\\' + img
    return send_file(filename, mimetype='image/jpg')

@app.route('/blog/add/article', methods=["GET", "POST"])
def blog_add_article():
    data = request.get_json()
    conn = db.connect()
    cur = conn.cursor()
    cur.execute("INSERT INTO article (aid, title_img, title, date, subject, author_id, context) VALUES(%s, %s, %s, %s, %s, %s, %s)", 
        (data["blog_article_id"], data["title_img"], data["title"], data["date"], data["subject"],  "Jaegeun Oh", data["context"]))
    conn.commit()
    cur.close()
    return jsonify({'message': "Successfully register to the website."})

@app.route('/blog/get/article', methods=["GET", "POST"])
def blog_get_article():
    data = request.get_json()
    aid = data["aid"]
    conn = db.connect()
    cur = conn.cursor()

    cur.execute('SELECT title FROM article WHERE aid = %s', [aid])
    title = str(cur.fetchone())[2:-3]

    cur.execute('SELECT date FROM article WHERE aid = %s', [aid])
    date = str(cur.fetchone())[2:-3]

    cur.execute('SELECT subject FROM article WHERE aid = %s', [aid])
    subject = str(cur.fetchone())[2:-3]

    cur.execute('SELECT author_id FROM article WHERE aid = %s', [aid])
    author_id = str(cur.fetchone())[2:-3]

    cur.execute('SELECT context FROM article WHERE aid = %s', [aid])
    context = str(cur.fetchone())[2:-3]

    cur.close()
    print(context)
    return jsonify({
        'title': title,
        'created_date': date,
        'subject': subject,
        'author_id': author_id,
        'context': context
        })

@app.route('/files/<path:filename>')
def uploaded_files(filename):
    path = '/the/uploaded/directory'
    return send_from_directory(path, filename)

@app.route("/uploadblogimage", methods=["GET", "POST"])
def upload_blog_post_image():
    dataimg = request.files.getlist('files')
    data_aid = request.form['aid']
    custompath = UPLOAD_FOLDER + '/' + data_aid

    if((os.path.exists(custompath)) == False):
        os.makedirs(custompath)

    url = ""
    for file in dataimg:
        if(file.filename != ''):
            filename = secure_filename(file.filename)
            file.save(os.path.join(custompath, filename))
            #url = url_for('uploaded_files', filename=file.filename)
            #    os.remove(custompath + '/' + filename)
            url = str(custompath + '/' + filename)
    #    print(url)
    return jsonify({'link': custompath + '/' + filename})

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

@app.route("/user/get/info/namenid", methods=["GET", "POST"])
def check_user_info():
    conn = db.connect()
    cur = conn.cursor()
    cur.execute('SELECT id FROM accounts WHERE Role = %s', ["P"])
    ids = cur.fetchall()
    idslst = [str(list(i))[2:-2] for i in ids]

    return 0


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