const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

console.log('REACT_HOT_TOAST_MAGIC:', process.env.REACT_HOT_TOAST_MAGIC);
const version = process.env.REACT_HOT_TOAST_MAGIC || '^0.0.2';
const packageJsonPath = './package.json';

fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading package.json:', err);
    process.exit(1);
  }

  const packageJson = JSON.parse(data);
  packageJson.dependencies['react-hot-toast-magic'] = version;

  fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing package.json:', err);
      process.exit(1);
    }

    console.log(`Set react-hot-toast-magic version to: ${version}`);
  });
});
