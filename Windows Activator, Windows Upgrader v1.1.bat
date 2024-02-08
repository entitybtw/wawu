@echo off

>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"

if '%errorlevel%' NEQ '0' (
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    echo UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%temp%\getadmin.vbs"
    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
    exit /B
)

color 3
:menu
ping -n 1 pastebin.com >nul
if %errorlevel%==0 (
    curl https://pastebin.com/raw/QxRe8Ys3
) else (
    echo wawu
)
title Windows Activator, Windows upgrader v1.1
echo - Select option:
echo 1. Upgrade Windows to Windows Pro
echo 2. Activate Windows 11 Pro/Windows 10 Pro
echo 3. Activate Windows 11 Pro N/Windows 10 Pro N
echo 4. Activate Windows 11 Pro Education Edition/Windows 11 Pro Education Edition
echo 5. Activate Windows 11 Pro Education Edition N/Windows 10 Pro Education Edition N
echo 6. Activate Windows 11 Education Edition/Windows 10 Education Edition
echo 7. Acitvate Windows 11 Education Edition N/Windows 10 Education Edition N
echo 8. Activate Windows 11 Corp/Windows 10 Corp
echo 9. Acitvate Windows 11 Corp N/Windows 10 Corp N
echo 10. Activate Windows 11 Corp G/Windows 10 Corp G
echo 11. Activate Windows 11 Corp G N/Windows 10 Corp G N
set /p choice="Select Number, and click enter: "
if %choice%==1 (
    ver | find "Pro" > nul
    if %ERRORLEVEL% == 0 (
        cls
        color 4
        echo Your version is not supported/or Windows Pro is already installed
        timeout 3
        goto menu
    ) else (
        sc config LicenseManager start= auto & net start LicenseManager
        sc config wuauserv start= auto & net start wuauserv
        changepk.exe /productkey VK7JG-NPHTM-C97JM-9MPGT-3V66T
    )
)
if %choice%==2 (
    slmgr/ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
    slmgr /skms kms.loli.best
    slmgr /ato
    cls
    goto menu
)
if %choice%==3 (
    slmgr/ipk MH37W-N47XK-V7XM9-C7227-GCQG9
    slmgr /skms kms.loli.best
    slmgr /ato
    cls
    goto menu
)
if %choice%==4 (
    slmgr/ipk 6TP4R-GNPTD-KYYHQ-7B7DP-J447Y
    slmgr /skms kms.loli.best
    slmgr /ato
    cls
    goto menu
)
if %choice%==5 (
    slmgr/ipk YVWGF-BXNMC-HTQYQ-CPQ99-66QFC
    slmgr /skms kms.loli.best
    slmgr /ato
    cls
    goto menu
)
if %choice%==6 (
    slmgr/ipk NW6C2-QMPVW-D7KKK-3GKT6-VCFB2
    slmgr /skms kms.loli.best
    slmgr /ato
    cls
    goto menu
)
if %choice%==7 (
    slmgr/ipk 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ
    slmgr /skms kms.loli.best
    slmgr /ato
    cls
    goto menu
)
if %choice%==8 (
    slmgr/ipk NPPR9-FWDCX-D2C8J-H872K-2YT43
    slmgr /skms kms.loli.best
    slmgr /ato
    cls
    goto menu
)
if %choice%==9 (
    slmgr/ipk DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4
    slmgr /skms kms.loli.best
    slmgr /ato
    cls
    goto menu
)
if %choice%==10 (
    slmgr/ipk YYVX9-NTFWV-6MDM3-9PT4T-4M68B
    slmgr /skms kms.loli.best
    slmgr /ato
    cls
    goto menu
)
if %choice%==11 (
    slmgr/ipk 44RPN-FTY23-9VTTB-MP9BX-T84FV
    slmgr /skms kms.loli.best
    slmgr /ato
    cls
    goto menu
)
pause
