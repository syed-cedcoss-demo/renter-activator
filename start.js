import axios from "axios";
import express from "express";
const app = express();
const main = () => {
  const zohoImportUploadApp = async () => {
    try {
      await axios.get("https://zoho-product-upload.onrender.com");
    } catch (error) {
      console.log("error in zoho upload api");
    }
  };
  const zohoDesignApp = async () => {
    try {
      axios.get("https://zoho-new-design.onrender.com");
    } catch (error) {
      console.log("error in zoho upload api");
    }
  };
  const nodeSetupApp = async () => {
    try {
      await axios.get("https://node-setup-server.onrender.com/");
    } catch (error) {
      console.log("error in zoho upload api");
    }
  };
  setInterval(() => {
    console.log("cron job trigger");
    zohoImportUploadApp();
    zohoDesignApp();
    nodeSetupApp();
  }, 1000 * 60 * 5);
};

app.get("/start", (req, res) => {
  main();
  res.status(200).send("interval start");
});
app.listen(3002, () => console.log("server started"));
