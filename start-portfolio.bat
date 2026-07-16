@echo off
:: Portfolio Web3 - Quick Start Script
:: Lancement facile du serveur

echo.
echo =====================================
echo   Portfolio Web3 - Lancement Rapide
echo =====================================
echo.

cd /d "c:\Users\HP\Documents\porto"

echo Vérification de Node.js...
"C:\Program Files\nodejs\node.exe" --version

echo.
echo Démarrage du serveur...
echo.

"C:\Program Files\nodejs\node.exe" server.js

echo.
pause
