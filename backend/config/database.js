let uri = "mongodb+srv://Hriday330:sarod123@cluster0.xzmpfdi.mongodb.net/myportfolio?retryWrites=true&w=majority";
import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(uri)
    .then((c) => {
      console.log(`Mongodb connect to : ${c.connection.host}`)
    })
    .catch((e) => {
      console.log(e);
    });
}

