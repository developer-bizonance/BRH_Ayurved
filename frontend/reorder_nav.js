const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'layout', 'Header.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

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
const newContent = content.substring(0, arrayStart) + newArrayString + content.substring(arrayEnd);

fs.writeFileSync(filePath, newContent, 'utf-8');
console.log('Successfully reordered navItems in Header.tsx');
