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
app.config['MYSQL_DATABASE_PORT'] = 3307
CORS(app, support_credentials=True)

db = MySQL()
db.init_app(app)

ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg'}
UPLOAD_FOLDER = 'uploads/blogpost'

@app.route("/")
def index():
    return app.send_static_file('index.html')

@app.route("/uploadblogimage", methods=["GET", "POST"])
def upload_blog_post_image():
    dataimg = request.files.getlist('imgurl')
    print(dataimg)
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
    
    return url

if __name__=="__main__":
    app.run(debug=True)