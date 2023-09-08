import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/companydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
  })
  .then((db) => console.log("Base de datos conectada"))
  .catch((error) => console.error(error));

// import { connect } from "mongoose";

// (async () => {
//   try {
//     const db = await connect("mongodb://localhost:27017/companydb", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Base de datos conectada", db.connection.name);
//   } catch (error) {
//     console.error(error);
//   }
// })();
