import { DATABASE_URL } from "./keys";
import { connect } from "mongoose";
import chalk from "chalk";

export const connectDB = async () => {
  try {
    const connection = await connect(DATABASE_URL);
    console.log(chalk.greenBright("[+] MongoDB Connected"));
    return connection;
  } catch (err) {
    if (err instanceof Error) console.error(chalk.redBright(`[-] Error while connectiong to MongoDB : ${err.message}`));
    process.exit(1);
  }
};
