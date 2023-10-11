const mongo = require("mongoose");

exports.Database = () => {
  mongo
    .connect("mongodb+srv://root:root@cluster0.b9pzoz9.mongodb.net/")
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("Error in the Database connection", err));
};
