const { execSync, spawnSync } = require('child_process');

try {
    var build = spawnSync("git", ['status'], { encoding: 'utf8' });
    console.log( typeof build.stdout)
    // build.stdout && console.log(`${build.stdout}`);
    // build.stderr && console.log(`${build.stderr}`);
  } catch (error) {
    process.exit(1);
  }
