const fs = require('fs');
const content = fs.readFileSync('frontend/src/components/layout/Header.tsx', 'utf-8');
const start = content.indexOf('const navItems: NavItem[] = [');
const end = content.indexOf('];', start);

const arrStr = content.slice(start + 28, end + 1);
let arr = [];
try {
  arr = eval(arrStr);
} catch(e) {
  console.log("Error parsing:", e);
  process.exit(1);
}

const order = ['Home', 'About', 'Academics', 'Results', 'Hospital', 'NCISM', 'MUHS', 'Courses', 'Faculty', 'Committee/Councils', 'Admissions', 'Student Zone', 'Biometric Attendance', 'Imp. Links', 'Contact'];

arr.sort((a, b) => {
  const idxA = order.indexOf(a.label);
  const idxB = order.indexOf(b.label);
  
  const finalIdxA = idxA === -1 ? 999 : idxA;
  const finalIdxB = idxB === -1 ? 999 : idxB;
  return finalIdxA - finalIdxB;
});

const formattedArr = JSON.stringify(arr, null, 2);
const newContent = content.slice(0, start + 28) + formattedArr + content.slice(end + 1);
fs.writeFileSync('frontend/src/components/layout/Header.tsx', newContent);
console.log("Done");
