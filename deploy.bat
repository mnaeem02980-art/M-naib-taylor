@echo off
title Firebase Deploy - M. Naib Tailors
cd /d "%~dp0"
echo ========================================================
echo   M. NAIB MASTER TAILORS - FIREBASE DEPLOYMENT
echo   Target Project: taylor-fe2f1
echo ========================================================
echo.
echo [1/2] Checking Firebase Login...
call firebase login
echo.
echo [2/2] Deploying Website to Firebase Hosting...
call firebase deploy --only hosting
echo.
echo ========================================================
echo   DEPLOYMENT FINISHED!
echo   Your live site URL will be displayed above.
echo ========================================================
pause
