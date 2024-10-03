const fs = require('fs');


if(!fs.existsSync('./Logs')){
    console.log('No Log files to delete');
    return;
}

for (let i = 0; i < 10; i++) {
    let filename = `log${i}.txt`;
    if(!fs.existsSync(`./Logs/${filename}`))
        continue;
    console.log('deleting files...' + filename);
    fs.rmSync(`./Logs/${filename}`);    
}
fs.rmdirSync('./Logs');
console.log('Purged Logs');
