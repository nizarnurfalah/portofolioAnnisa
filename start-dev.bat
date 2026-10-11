@echo off
cd /d "%~dp0"
set "PATH=C:\laragon\bin\nodejs\node-v18;%PATH%"
echo ==============================================
echo  Menjalankan Website Portofolio (Next.js)
echo  Buka di Browser: http://localhost:3000
echo ==============================================
npm run dev
pause
