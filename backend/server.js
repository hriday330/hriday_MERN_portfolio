import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import cloudinary from "cloudinary";
let cloudName = process.env.CLOUDNAME || 'dsgdbhjzy';
let cloudAPIKey = process.env.CLOUDINARYAPIKEY || '298685784163772';
let cloudAPISecret = process.env.CLOUDINARYAPISECRET || '1KCYsJBUWY2iBL5m0Utguw76W0E';

cloudinary.v2.config({
    cloud_name: cloudName,
    api_key: cloudAPIKey,
    api_secret: cloudAPISecret
})


var port = process.env.PORT || 4000;
dotenv.config({ path: "./backend/config/config.env" });
connectDatabase();
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})