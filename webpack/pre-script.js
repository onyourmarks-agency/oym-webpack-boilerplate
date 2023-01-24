const checkNodeEnvironment = require('./pre-script/check-node-environment');
const copyTypeScriptConfiguration = require('./pre-script/copy-type-script-configuration');

(async () => {
  checkNodeEnvironment();
  await copyTypeScriptConfiguration();
  process.exit(0);
})();

