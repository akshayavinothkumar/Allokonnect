@echo off
cd /d "%~dp0"
echo Starting AlloKonnect website...
echo.
npm.cmd install
if errorlevel 1 (
  echo.
  echo Dependency installation failed.
  pause
  exit /b 1
)
echo.
echo Opening http://localhost:5173
npm.cmd run dev
pause
