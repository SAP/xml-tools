const { spawnSync } = require("child_process").exec;

const circleTag = process.env["CIRCLE_TAG"];
const isReleaseTag = /^RELEASE$/.test(circleTag);

if (isReleaseTag) {
  // spawn sync process that does "lerna publish --yes"
  const result = spawnSync("lerna", ["publish", "from-git", "--yes"], {
    cwd: process.cwd(),
    env: process.env,
    stdio: "pipe",
    encoding: "utf-8"
  });

  const savedOutput = result.stdout;
  console.log(String(savedOutput));
} else {
  console.log("skipping publish to npm, because not running under RELEASE tag");
}
