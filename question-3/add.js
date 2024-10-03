
const fs = require('fs');


if(!fs.existsSync('./Logs')){
    fs.mkdirSync('./Logs');
}

process.chdir('./Logs');
for (let i = 0; i < 10; i++) {
    let filename = `log${i}.txt`;
    console.log(filename);
    fs.writeFileSync(`./${filename}`, `Log text for log file number ${i}`);    
}