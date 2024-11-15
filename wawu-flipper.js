let submenu = require("submenu");
let notify = require("notification");
let badusb = require("badusb");

badusb.setup({ vid: 0xAAAA, pid: 0xBBBB, mfr_name: "Flipper", prod_name: "Zero" });

submenu.setHeader("Select a choice");
submenu.addItem("Windows 11/10 Pro", 0);
submenu.addItem("Windows 11/10 Pro N", 1);
submenu.addItem("Windows 11/10 Pro Edu", 2);
submenu.addItem("Windows 11/10 Pro Edu N", 3);
submenu.addItem("Windows 11/10 Edu", 4);
submenu.addItem("Windows 11/10 Edu N", 5);
submenu.addItem("Windows 11/10 Corp", 6);
submenu.addItem("Windows 11/10 Corp N", 7);
submenu.addItem("Windows 11/10 Corp G", 8);
submenu.addItem("Windows 11/10 Corp G N", 9);
let choice = submenu.show();

if (choice === 0) {
    badusb.press("GUI", "r");
    delay(300);
    badusb.println("cmd");
    delay(3000);
    badusb.press("ENTER");
    delay(3000);
    badusb.println("powershell -Command \"Start-Process cmd -Verb RunAs -ArgumentList '/c slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX && slmgr /skms kms.loli.best && slmgr /ato'\"")
    delay(3000);
    badusb.press("ENTER");
} else if (choice === 1) {
    badusb.press("GUI", "r");
    delay(300);
    badusb.println("cmd");
    delay(3000);
    badusb.press("ENTER");
    delay(3000);
    badusb.println("powershell -Command \"Start-Process cmd -Verb RunAs -ArgumentList '/c slmgr/ipk MH37W-N47XK-V7XM9-C7227-GCQG9 && slmgr /skms kms.loli.best && slmgr /ato'\"")
    delay(3000);
    badusb.press("ENTER");
} else if (choice === 2) {
    badusb.press("GUI", "r");
    delay(300);
    badusb.println("cmd");
    delay(3000);
    badusb.press("ENTER");
    delay(3000);
    badusb.println("powershell -Command \"Start-Process cmd -Verb RunAs -ArgumentList '/c slmgr/ipk 6TP4R-GNPTD-KYYHQ-7B7DP-J447Y && slmgr /skms kms.loli.best && slmgr /ato'\"")
    delay(3000);
    badusb.press("ENTER");
} else if (choice === 3) {
    badusb.press("GUI", "r");
    delay(300);
    badusb.println("cmd");
    delay(3000);
    badusb.press("ENTER");
    delay(3000);
    badusb.println("powershell -Command \"Start-Process cmd -Verb RunAs -ArgumentList '/c slmgr/ipk YVWGF-BXNMC-HTQYQ-CPQ99-66QFC && slmgr /skms kms.loli.best && slmgr /ato'\"")
    delay(3000);
    badusb.press("ENTER");
} else if (choice === 4) {
    badusb.press("GUI", "r");
    delay(300);
    badusb.println("cmd");
    delay(3000);
    badusb.press("ENTER");
    delay(3000);
    badusb.println("powershell -Command \"Start-Process cmd -Verb RunAs -ArgumentList '/c slmgr/ipk NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 && slmgr /skms kms.loli.best && slmgr /ato'\"")
    delay(3000);
    badusb.press("ENTER");
} else if (choice === 5) {
    badusb.press("GUI", "r");
    delay(300);
    badusb.println("cmd");
    delay(3000);
    badusb.press("ENTER");
    delay(3000);
    badusb.println("powershell -Command \"Start-Process cmd -Verb RunAs -ArgumentList '/c slmgr/ipk 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ && slmgr /skms kms.loli.best && slmgr /ato'\"")
    delay(3000);
    badusb.press("ENTER");
} else if (choice === 6) {
    badusb.press("GUI", "r");
    delay(300);
    badusb.println("cmd");
    delay(3000);
    badusb.press("ENTER");
    delay(3000);
    badusb.println("powershell -Command \"Start-Process cmd -Verb RunAs -ArgumentList '/c slmgr/ipk NPPR9-FWDCX-D2C8J-H872K-2YT43 && slmgr /skms kms.loli.best && slmgr /ato'\"")
    delay(3000);
    badusb.press("ENTER");
} else if (choice === 7) {
    badusb.press("GUI", "r");
    delay(300);
    badusb.println("cmd");
    delay(3000);
    badusb.press("ENTER");
    delay(3000);
    badusb.println("powershell -Command \"Start-Process cmd -Verb RunAs -ArgumentList '/c slmgr/ipk DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 && slmgr /skms kms.loli.best && slmgr /ato'\"")
    delay(3000);
    badusb.press("ENTER");
} else if (choice === 8) {
    badusb.press("GUI", "r");
    delay(300);
    badusb.println("cmd");
    delay(3000);
    badusb.press("ENTER");
    delay(3000);
    badusb.println("powershell -Command \"Start-Process cmd -Verb RunAs -ArgumentList '/c slmgr/ipk YYVX9-NTFWV-6MDM3-9PT4T-4M68B && slmgr /skms kms.loli.best && slmgr /ato'\"")
    delay(3000);
    badusb.press("ENTER");
} else if (choice === 9) {
    badusb.press("GUI", "r");
    delay(300);
    badusb.println("cmd");
    delay(3000);
    badusb.press("ENTER");
    delay(3000);
    badusb.println("powershell -Command \"Start-Process cmd -Verb RunAs -ArgumentList '/c slmgr/ipk 44RPN-FTY23-9VTTB-MP9BX-T84FV && slmgr /skms kms.loli.best && slmgr /ato'\"")
    delay(3000);
    badusb.press("ENTER");
}
