const fs = require('fs');
const path = require('path');

async function outputConfigJson(file) {
  const outputFile = file.replace(/\.js$/, '.json');
  const config = await import(path.resolve(process.env.PWD, file));

  const parsedConfig = Object.assign(
    {},
    {
      "###": "NOTE! THIS FILE IS AUTO GENERATED",
      "##_": "==== Edit tconfig.js instead ====",
    },
    config.default || config,
  );

  const fileContents = JSON.stringify(parsedConfig, null, 4);
  fs.writeFileSync(outputFile, fileContents);
}

module.exports = async () => {
  await outputConfigJson('tsconfig.js');
}
