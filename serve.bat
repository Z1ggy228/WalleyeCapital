@echo off
REM Double-click this to run the Walleye local copy properly (recommended).
cd /d "%~dp0"
start "" "http://localhost:8000/index.html"
python -m http.server 8000
