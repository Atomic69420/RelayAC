@echo off
IF EXIST package-lock.json (
    DEL /F /Q package-lock.json
)

IF EXIST node_modules (
    RD /S /Q node_modules
)

npm update