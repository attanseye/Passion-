const fs = require('fs');
let data = fs.readFileSync('./lib/data.ts', 'utf8');

const makeupRegex = /  \{\n    name: "Makeup Products"[\s\S]*?  \},/;
const match = data.match(makeupRegex);

if (match) {
    const section = match[0];
    data = data.replace(section + '\n', '');
    const lushRegex = /  \{\n    name: "Lush Products"[\s\S]*?  \},/;
    data = data.replace(lushRegex, (match) => match + '\n' + section);
    fs.writeFileSync('./lib/data.ts', data);
    console.log("Moved Makeup Products successfully.");
} else {
    console.error("Could not find Makeup Products section.");
}
