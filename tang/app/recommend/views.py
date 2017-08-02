# -*- coding:utf8 -*-
from . import recommend
from flask import render_template, current_app, abort, request, jsonify
import json
@recommend.route('/',methods=["GET","POST"])
def index():
    current_app.cur.execute('SELECT type from data GROUP BY type ')
    results = current_app.cur.fetchall()
    result = [a[0] for a in results]
    current_app.cur.execute('select name,salary,location,size,url from data limit 40')
    datas = current_app.cur.fetchall()
    data = [a for a in datas]
    return render_template("recommend.html",result=result, data=data)
@recommend.route('/select',methods=["GET","POST"])
def select():
    type = request.args.get('type')
    current_app.cur.execute('SELECT one from data WHERE type=%s GROUP BY one ', (type,))
    datas = current_app.cur.fetchall()
    data = [a[0] for a in datas]
    return jsonify(data)
@recommend.route('/detail',methods=["GET","POST"])
def detail():
    if request.method == "POST":
        type = request.form.get('type')
        one = request.form.get('one')
        key = request.form.get('key')
        #print type, one ,key
        if type!='empty' and one!='empty' and key != 'empty':
            current_app.cur.execute('SELECT name,salary,location,size,url FROM (SELECT * FROM data WHERE type=%s and one=%s) data WHERE NAME like %s LIMIT 40',
                                    (type,one,'%'+key+'%',))
            datas = current_app.cur.fetchall()
            data = [a for a in datas]
            return jsonify(data)
        elif type!='empty'and one=='empty' and key != 'empty':
            current_app.cur.execute(
                'SELECT name,salary,location,size,url FROM (SELECT * FROM data WHERE type=%s ) data WHERE NAME like %s LIMIT 40',
                (type, '%' + key + '%',))
            datas = current_app.cur.fetchall()
            data = [a for a in datas]
            return jsonify(data)
        elif type!='empty'and one=='empty' and key == 'empty':
            current_app.cur.execute(
                'SELECT name,salary,location,size,url FROM (SELECT * FROM data WHERE type=%s ) data LIMIT 40',
                (type,))
            datas = current_app.cur.fetchall()
            data = [a for a in datas]
            return jsonify(data)
        elif type !='empty' and one != 'empty' and key == 'empty':
            current_app.cur.execute(
                'SELECT name,salary,location,size,url FROM (SELECT * FROM data WHERE type=%s and one=%s ) data LIMIT 40',
                (type,one))
            datas = current_app.cur.fetchall()
            data = [a for a in datas]
            return jsonify(data)
        elif type=='empty'and key != 'empty':
            current_app.cur.execute(
                'SELECT name,salary,location,size,url FROM  data WHERE NAME like %s LIMIT 40',
                ('%' + key + '%',))
            datas = current_app.cur.fetchall()
            data = [a for a in datas]
            return jsonify(data)
