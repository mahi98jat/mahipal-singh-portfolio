import fs from 'node:fs';
import './check.mjs';
fs.rmSync('public', {recursive:true, force:true});
fs.cpSync('src','public',{recursive:true});
console.log('Built portfolio into public/.');
