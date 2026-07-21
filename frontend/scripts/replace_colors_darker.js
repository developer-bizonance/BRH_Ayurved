const fs = require('fs');
const path = require('path');

const dir = 'd:/B.R Harne/frontend/src';

const REPLACEMENTS = {
  // Replace the lime colors with a darker, true green
  '#65a30d': '#16a34a', // green-600
  '#84cc16': '#22c55e', // green-500
  '#4d7c0f': '#15803d', // green-700
  '#3f6212': '#14532d', // green-900
  '#a3e635': '#4ade80', // green-400
  'lime-600': 'green-600',
  'lime-500': 'green-500',
  'lime-700': 'green-700',
  'lime-50': 'green-50',
  'lime-100': 'green-100',
};

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = content;
      
      for (const [oldVal, newVal] of Object.entries(REPLACEMENTS)) {
        const regex = new RegExp(oldVal, 'g');
        modified = modified.replace(regex, newVal);
      }
      
      if (modified !== content) {
        fs.writeFileSync(fullPath, modified);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

walk(dir);
console.log('Done replacing colors.');
