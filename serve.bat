@echo off
REM Runs the Walleve local site + contact-form mail backend.
cd /d "%~dp0"
start "" "http://localhost:8000/index.html"
python server.py
