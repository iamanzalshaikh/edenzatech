const fs = require('fs');
const path = './src/lib/projects-data.ts';
let content = fs.readFileSync(path, 'utf8');

const newProject = `  {
    title: "EGC India - Premium E-Commerce",
    category: "web",
    categoryLabel: "E-Commerce",
    description: "A highly optimized e-commerce platform built for EGC India to handle large product catalogs and secure checkout.",
    image: "/uiux-frontend-showcase.png",
    metric: "High Conversion E-Commerce",
    bgClass: "bg-[#FFF9F5]",
    iconBg: "bg-[#FEEAD9]",
    textClass: "text-brand-orange",
    tags: ["React", "E-Commerce", "Node.js"],
    href: "https://shop.egcindia.in/"
  },
`;

content = content.replace('const rawProjectsList: ProjectItem[] = [', 'const rawProjectsList: ProjectItem[] = [\n' + newProject);

fs.writeFileSync(path, content);
console.log('Successfully re-added EGC India to projects-data.ts');
