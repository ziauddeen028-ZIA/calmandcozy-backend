const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx')) results.push(file);
    }
  });
  return results;
};

const files = walk('./src');
let changed = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let initial = content;

  // Replace full constant definition
  content = content.replace(/const STRAPI_URL = import\.meta\.env\.VITE_STRAPI_URL \|\| ['"]http:\/\/localhost:1337['"];/g, 'const API_URL = import.meta.env.VITE_API_URL;');
  content = content.replace(/const STRAPI_URL =\s*import\.meta\.env\.VITE_STRAPI_URL \|\| ['"]http:\/\/localhost:1337['"];/g, 'const API_URL = import.meta.env.VITE_API_URL;');
  
  // Replace inline fallback
  content = content.replace(/import\.meta\.env\.VITE_STRAPI_URL \|\| ['"]http:\/\/localhost:1337['"]/g, 'import.meta.env.VITE_API_URL');
  
  // Replace remaining VITE_STRAPI_URL
  content = content.replace(/import\.meta\.env\.VITE_STRAPI_URL/g, 'import.meta.env.VITE_API_URL');
  
  // Replace remaining STRAPI_URL with API_URL
  content = content.replace(/STRAPI_URL/g, 'API_URL');
  
  // If there are still any localhost:1337 strings left
  content = content.replace(/['"]http:\/\/localhost:1337['"]/g, 'import.meta.env.VITE_API_URL');

  // Handle case where import.meta.env.VITE_API_URL might have been incorrectly embedded inside a template literal
  // Wait, if it was `${import.meta.env.VITE_STRAPI_URL || "http://localhost:1337"}` it gets converted to `${import.meta.env.VITE_API_URL}` which is correct.
  // If it was `http://localhost:1337` we might need to be careful not to break strings, but our regex replaces it with import.meta.env.VITE_API_URL
  // Let's also check for exact "http://localhost:1337" inside template literals
  
  if (content !== initial) {
    fs.writeFileSync(file, content);
    changed++;
    console.log('Updated:', file);
  }
});

console.log('Total files changed:', changed);
