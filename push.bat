@echo off
cd /d "%~dp0"
echo Adding all changes...
git add .
echo Committing changes...
git commit -m "Complete Rosemary Cafe website release"
echo Pushing to GitHub...
git push -u origin main
echo.
echo Done! If you see any message above, please check it.
pause
