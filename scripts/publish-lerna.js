const { spawnSync } = require("child_process").exec;

const circleTag = process.env["CIRCLE_TAG"];
const isReleaseTag = /RELEASE/.test(circleTag);

if (isReleaseTag) {
  // spawn sync process that does "lerna publish --yes"
  const result = spawnSync("lerna", ["publish", "from-git", "--yes"], {
    cwd: process.cwd(),
    stdio: "inherit"
  });
} else {
  console.log("skipping publish to npm, because not running under RELEASE tag");
}
