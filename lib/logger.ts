import { Console } from "node:console";

const logger = new Console({
  stdout: process.stdout,
  stderr: process.stderr,
});

export default logger;
