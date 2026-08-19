const fs = require('fs');

const path = 'src/lib/projects-data.ts';
let lines = fs.readFileSync(path, 'utf8').split(/\r?\n/);

const replacements = {
  "Clawbot – AI Lead Management": "https://clawbot-ai-lead.vercel.app/login",
  "SchoolFMS - Multi-Tenant SaaS": "https://schoolfms.com/",
  "ZorivaPOS – Next-Gen Point of Sale": "https://pos-frontend-rudu.onrender.com/",
  "EduLaunch – Interactive EdTech": "https://www.edulaunch.shop/",
  "Stag Chemist – Health & Pharmacy": "http://stagchemist.com/",
  "WearUp – Premium Clothing Store": "https://clothing-frontend-zqt8.onrender.com/",
  "Codsyn – Digital Agency Portfolio": "https://codsyn.com/",
  "EGC India – Escrow B2B B2C Marketplace Platform": "https://econs.egcindia.in/",
  "E8 Productions – Video & Media Solutions": "https://www.e8productions.com/",
  "JKF Group – Furniture E-Commerce": "https://jkf-final.onrender.com/",
  "Raj TVS Showroom": "https://rajtvs.com/",
  "DTD Gym Management Software": "https://dtdgym.com"
};

let currentTitle = null;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  if (line.includes('title:')) {
    const match = line.match(/title:\s*"(.*?)"/);
    if (match) {
      currentTitle = match[1];
    }
  }
  
  if (line.includes('href:') && line.includes('"#"')) {
    if (currentTitle && replacements[currentTitle]) {
      lines[i] = line.replace('"#"', `"${replacements[currentTitle]}"`);
    }
  }
}

fs.writeFileSync(path, lines.join('\n'));
console.log('Fixed URLs successfully.');
