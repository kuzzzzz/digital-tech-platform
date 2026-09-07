/**
 * Runs the build pipeline for one target.
 *
 *   node scripts/build.js student   -> out/ and usb/
 *   node scripts/build.js teacher   -> out-teacher/
 *
 * This exists only to set BUILD_TARGET portably. "BUILD_TARGET=teacher npm run
 * ..." in package.json is a shell-ism that does not run on Windows, and this
 * has to work on whatever machine the teacher actually has. The alternative was
 * a cross-env dependency for one environment variable.
 *
 * Anything other than "teacher" is a student build - see lib/buildTarget.js for
 * why the default falls that way.
 */

const { spawnSync } = require('child_process');
const path = require('path');

const target = process.argv[2] === 'teacher' ? 'teacher' : 'student';

console.log(`\n[build] target: ${target}\n`);

const result = spawnSync('npm', ['run', 'build:pipeline'], {
  cwd: path.join(__dirname, '..'),
  env: { ...process.env, BUILD_TARGET: target },
  stdio: 'inherit',
  // npm is npm.cmd on Windows; the shell resolves whichever is there.
  shell: true,
});

process.exit(result.status === null ? 1 : result.status);
