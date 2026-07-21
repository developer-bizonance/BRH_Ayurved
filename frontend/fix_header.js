const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'layout', 'Header.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Fix Under Graduate Link
content = content.replace(
          " label\: \Under Graduate Courses\,\n \href\: \https://brharneayurved.in/assets/pdf/College Infrastructure/College-Infrastructure.pdf\,
 \label\: \Under Graduate Courses\,\n \href\: \/courses/under-graduate\
);

// 2. Add New Badge
content = content.replace(
 <Link\n href={item.href}\n className={\\flex items-center px-1.5 lg:px-2 py-2 text-[9px] lg:text-[10px] xl:text-[11px] font-medium transition-all capitalize tracking-wide whitespace-nowrap\n \\\\}\n >\n {item.label}\n </Link>,
 <Link\n href={item.href}\n className={\\flex items-center px-1.5 lg:px-2 py-2 text-[9px] lg:text-[10px] xl:text-[11px] font-medium transition-all capitalize tracking-wide whitespace-nowrap\n \\\\}\n >\n {item.label}\n {item.label === 'Admission' && (\n <img src=\https://brharneayurved.in/assets/images/new.gif\ alt=\New\ className=\ml-1 h-3\ />\n )}\n </Link>
);

content = content.replace(
 <button className=\flex items-center px-1.5 lg:px-2 py-2 text-[9px] lg:text-[10px] xl:text-[11px] font-medium text-white hover:text-[#22c55e] transition-all capitalize tracking-wide cursor-pointer whitespace-nowrap\>\n {item.label}\n {item.children && <ChevronDown size={14} className=\ml-0.5 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180\ />}\n </button>,
 <button className=\flex items-center px-1.5 lg:px-2 py-2 text-[9px] lg:text-[10px] xl:text-[11px] font-medium text-white hover:text-[#22c55e] transition-all capitalize tracking-wide cursor-pointer whitespace-nowrap\>\n {item.label}\n {item.label === 'Admission' && (\n <img src=\https://brharneayurved.in/assets/images/new.gif\ alt=\New\ className=\ml-1 h-3\ />\n )}\n {item.children && <ChevronDown size={14} className=\ml-0.5 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180\ />}\n </button>
);

// 3. Reorder Nav Array
const prefix = 'const navItems: NavItem[] = [';
const startIndex = content.indexOf(prefix);
const arrayStart = startIndex + prefix.length - 1; // points to '['
let braceCount = 0;
let arrayEnd = -1;

for (let i = arrayStart; i < content.length; i++) {
 if (content[i] === '[') braceCount++;
 if (content[i] === ']') braceCount--;
 if (braceCount === 0) {
 arrayEnd = i + 1;
 break;
 }
}

const arrayString = content.substring(arrayStart, arrayEnd);
let navItems;
eval('navItems = ' + arrayString + ';');

const requestedOrder = [
 'Home', 'About', 'Academic', 'Examination', 'Hospital', 'NCISM', 'MUHS', 
 'Facilities', 'Departments', 'Committees', 'Administration', 'Imp. Links', 'Admission'
];

const nameMappings = {
 'Academics': 'Academic',
 'Results': 'Examination',
 'Committee/Councils': 'Committees',
 'Admissions': 'Admission'
};

navItems.forEach(item => {
 if (nameMappings[item.label]) {
 item.label = nameMappings[item.label];
 }
});

const newNavItems = [];
requestedOrder.forEach(label => {
 const existing = navItems.find(item => item.label === label);
 if (existing) {
 newNavItems.push(existing);
 } else {
 newNavItems.push({ label: label, children: [] });
 }
});

const newArrayString = JSON.stringify(newNavItems, null, 2);
content = content.substring(0, arrayStart) + newArrayString + content.substring(arrayEnd);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed Header.tsx!');
