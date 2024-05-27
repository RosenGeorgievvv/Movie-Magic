const fs = require('fs/promises');

const filePath = './data/database.json';

async function readFile(){
const data = await fs.readFile(filePath);

return JSON.parse(data.toString());
}

async function writeFile(data){
    await fs.writeFile(filePath, JSON.stringify(data));
}

