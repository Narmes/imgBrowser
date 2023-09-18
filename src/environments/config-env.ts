const setEnv = () => {
    const fs = require('fs');
    const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
    const targetPath = './src/environments/environment.ts';
    const targetPathE = './src/environments/environment.prod.ts';
  // Load node modules
    require('dotenv').config({
      path: 'src/environments/.env'
    });
  // `environment.ts` file structure
    const envConfigFile = `export const environment = {
    unplashKey: '${process.env.UNPLASH_KEY}',
    production: true,
  };
  `;

    // `environment.ts` file structure
    const envConfigFileE = `export const environment = {
        unplashKey: '${process.env.UNPLASH_KEY}',
        production: false,
      };
      `;

    writeFile(targetPath, envConfigFile, (err:any) => {
      if (err) {
        console.error(err);
        throw err;
      } else {
        console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
      }
    });

    writeFile(targetPathE, envConfigFileE, (err:any) => {
        if (err) {
          console.error(err);
          throw err;
        } else {
          console.log(`Angular environment.prod.ts file generated correctly at ${targetPathE} \n`);
        }
      });

  };

  
  setEnv();
  