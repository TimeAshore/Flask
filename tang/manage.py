#-*- coding:utf-8 -*-

from app import create_app
from flask_script import Manager
from flask_bootstrap import Bootstrap

app = create_app()


if __name__ == '__main__':
	app.run()
