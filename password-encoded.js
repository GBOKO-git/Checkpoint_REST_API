require("dotenv").config();

const PASSWORD = process.env.PASSWORD;
const encodedPasword = encodeURIComponent(PASSWORD);
console.log("[] password encoded", encodedPasword);
