# -*- coding:utf8 -*-
from . import ranking
from flask import render_template, current_app, abort, request, url_for
import json
@ranking.route('/')
def index():
    current_app.cur.execute('SELECT * from geted_hotjob limit 10')
    datas = current_app.cur.fetchall()
    data = [[a[0],a[1],a[2]] for a in datas]
    #增长最快
    current_app.cur.execute('SELECT * from geted_risejob limit 10')
    datas = current_app.cur.fetchall()
    data1 = [[a[0],a[1],a[2]] for a in datas]
    #关注
    current_app.cur.execute('SELECT * from geted_attention limit 10')
    datas = current_app.cur.fetchall()
    data2 = [[a[0],a[1],a[2]] for a in datas]
    #冷门
    current_app.cur.execute('SELECT * from geted_coldjob limit 10')
    datas = current_app.cur.fetchall()
    data3 = [[a[0],a[1],a[2]] for a in datas]
    return render_template("rank.html",data=data, data1=data1, data2=data2, data3=data3)