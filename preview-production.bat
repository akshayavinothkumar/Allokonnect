@echo off
cd /d "%~dp0"
echo Building AlloKonnect website...
echo.
npm.cmd run build
if errorlevel 1 (
  echo.
  echo Build failed.
  pause
  exit /b 1
)
echo.
echo Opening production preview at http://localhost:4173
npm.cmd run preview
pause
