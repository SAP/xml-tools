const { exec } = require("child_process").exec;

const circleTag = process.env["CIRCLE_TAG"];
const isReleaseTag = /RELEASE/.test(circleTag);

if (isReleaseTag) {
  // spawn sync process that does "lerna publish --yes"
  exec("lerna publish from-git --yes", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
} else {
  console.log("skipping publish to npm, because not running under RELEASE tag");
}
