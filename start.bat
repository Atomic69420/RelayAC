@echo off
if not exist package-lock.json cmd /c npm i
node index.js