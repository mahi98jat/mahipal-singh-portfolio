import fs from 'node:fs';
import path from 'node:path';
const html = fs.readFileSync('src/index.html', 'utf8');
for (const match of html.matchAll(/(?:href|src)="((?:\/(?!\/)|\.\/)[^"#?]*)"/g)) {
 const target=path.join('src',match[1]);
 if(!fs.existsSync(target))throw new Error(`Missing linked file: ${target}`);
}
for(const match of html.matchAll(/href="#([^"]+)"/g))if(!html.includes(`id="${match[1]}"`))throw new Error(`Missing section: ${match[1]}`);
for(const term of ['700','30','Qapita','GYTWorkz','Stripe','Twilio'])if(!html.includes(term))throw new Error(`Missing profile content: ${term}`);
console.log('Portfolio checks passed: assets, navigation anchors, and profile content.');
