import mongoose from "mongoose";

const database = mongoose.connect(
  "mongodb+srv://aqua2022yalaltgandush:t7Zg4gQrdwhd75BG@cluster0.uqiga9k.mongodb.net/restapi?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  }
);

export default (await database).connection;
