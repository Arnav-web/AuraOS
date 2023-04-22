import sys
from PyQt5.QtCore import *
from PyQt5.QtWebEngineWidgets import *
from PyQt5.QtWidgets import * 
from PyQt5.QtGui import *  
 
app = QApplication(sys.argv)

web = QWebEngineView()
web.load(QUrl("file:///C:/Users/Arnav/Documents/HTMLApps/AuraOS/startup.html"))
web.setGeometry(0, 0, 1366, 768)
web.setWindowFlag(Qt.FramelessWindowHint)
web.show()
 
sys.exit(app.exec_())