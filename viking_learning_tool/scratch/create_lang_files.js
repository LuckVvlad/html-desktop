const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, '../scripts/viking_data.js');
const data = fs.readFileSync(srcFile, 'utf8');

const langs = ['fr', 'en', 'is', 'da', 'es', 'de', 'uk'];

langs.forEach(lang => {
    const newContent = data.replace('const vikingData = {', `const vikingData_${lang} = {`);
    fs.writeFileSync(path.join(__dirname, `../scripts/viking_data_${lang}.js`), newContent);
});

console.log('Files generated!');
