const fs = require('fs');
let footer = fs.readFileSync('./components/Footer.tsx', 'utf8');

const linkMakeup = `            <li><Link href="/collections/Makeup%20Products" className="hover:text-white transition-colors">Makeup Products</Link></li>\n`;
footer = footer.replace(linkMakeup, '');

const linkLush = `            <li><Link href="/collections/Lush%20Products" className="hover:text-white transition-colors">Lush Products</Link></li>\n`;
footer = footer.replace(linkLush, linkLush + linkMakeup);

fs.writeFileSync('./components/Footer.tsx', footer);
console.log("Moved link successfully.");
