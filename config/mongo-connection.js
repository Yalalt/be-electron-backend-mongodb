import mongoose from "mongoose";

const connectDB = async () => {
  const conn = await mongoose.connect(
    process.env.MONGODBURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return conn.connection;
}

export default connectDB;
