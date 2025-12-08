@echo off
echo SSP Nakamura Enginering co.
timeout /t 2
echo Atom OS.
echo Atom-4; cores 4; MHz 3,45
echo RAM 2; Gb 8
echo GPU 650; Gb 4
echo SSD Gb 500
timeout /t 2
echo Site an localhost turn on in
call start_site.bat
node server.js