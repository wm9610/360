const fs = require('fs');
const path = require('path');
const os = require('os');

function getTodayDate(): string {
  const date = new Date();
  return `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
}

function createFolder(date: string): void {
  fs.mkdirSync('Log/' + date);
}

function getLocalIP(): string {
  const interfaceName = 'Wi-Fi';
  const networkInterfaces = os.networkInterfaces();
  // console.log(networkInterfaces);
  const network = networkInterfaces[interfaceName][1];
  return network.address;
}

function logUserInfo(): void {
  const fileName = 'user-IP.txt';
  const todayDate = getTodayDate();
  const folderPath = path.join(__dirname, 'Log', todayDate);
  if (!fs.existsSync(folderPath)) {
    createFolder(todayDate);
  }
  const filePath = path.join(folderPath, fileName);
  fs.appendFileSync(filePath, 'Local IP address: ' + getLocalIP() + '\n');
}

logUserInfo();
