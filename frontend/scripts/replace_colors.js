const fs = require('fs');
const path = require('path');

const dir = 'd:/B.R Harne/frontend/src';

const REPLACEMENTS = {
  '#1a6b3c': '#65a30d',
  '#1A6B3C': '#65a30d',
  '#047857': '#84cc16',
  '#047857': '#84cc16',
  '#1a3c2e': '#4d7c0f',
  '#1A3C2E': '#4d7c0f',
  '#064e3b': '#3f6212',
  '#064E3B': '#3f6212',
  '#10b981': '#a3e635',
  '#10B981': '#a3e635',
  'emerald-700': 'lime-600',
  'emerald-600': 'lime-500',
  'emerald-800': 'lime-700',
  'emerald-500': 'lime-500',
  'emerald-50': 'lime-50',
  'emerald-100': 'lime-100',
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
