const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  const targetPath = './src/environments/environment.prod.ts';
  const colors = require('colors');
  require('dotenv').config({
    path: 'src/environments/.env'
  });
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
  unplashKey: '${process.env.unplashKey}',
  production: true,
  };
  `;

  writeFile(targetPath, envConfigFile, (err) => {
    if (err) {
      console.error(err);
      throw err;
    }
  });

  setEnv();}