import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongodb connected");
    });

    connection.on("error", (err) => {
      console.log("mongodb connection error" + err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong !");
    console.log(error);
  }
}
