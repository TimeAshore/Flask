#-*- coding:utf-8 -*-

from flask import Flask
from config import config
from flask_bootstrap import Bootstrap
# 工厂函数
def create_app(ConfigName='DefultConfigName'):
	app = Flask(__name__)
	bootstrap = Bootstrap(app)
	app.config.from_object(config[ConfigName])
	
	from .homepage import homepage
	app.register_blueprint(homepage)
	
	from .city import city
	app.register_blueprint(city, url_prefix='/city')#蓝本挂载，'/city/<other>'
	
	from .jobs import jobs
	app.register_blueprint(jobs, url_prefix='/type')
	
	from .salary import salary
	app.register_blueprint(salary, url_prefix='/salary')
	
	from .soft_ware import software
	app.register_blueprint(software, url_prefix='/software')
	
	from .recommend import recommend
	app.register_blueprint(recommend, url_prefix='/recommend')

	from .ranking_list import ranking
	app.register_blueprint(ranking, url_prefix='/rank')
	
	return app
