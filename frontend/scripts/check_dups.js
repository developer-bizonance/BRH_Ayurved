const fs = require('fs');

const content = fs.readFileSync('d:/B.R Harne/frontend/src/components/layout/Header.tsx', 'utf8');
const match = content.match(/const navItems: NavItem\[\] = (\[[\s\S]*?\]);\n\nexport/);
if (match) {
  // Use a quick regex approach or eval
  // Actually, let's just write a regex to find all arrays and check for duplicates within them.
  console.log("Found navItems");
}

// A simpler way: let's just check the keys in the render loop by changing `key={child.label}` to `key={child.label + idx}`
// Wait, changing the render loop is easier and fixes all duplicates safely!
