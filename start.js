import axios from "axios";
const main = () => {
  const zohoImportUploadApp = async () => {
    try {
      const res = await axios.get("https://zoho-product-upload.onrender.com");
      console.log("res?.data", res?.data);
    } catch (error) {
      console.log("error in zoho upload api");
    }
  };
  const zohoDesignApp = async () => {
    try {
      const res = await axios.get("https://zoho-new-design.onrender.com");
      console.log("res?.data", res?.data);
    } catch (error) {
      console.log("error in zoho upload api");
    }
  };
  const nodeSetupApp = async () => {
    try {
      const res = await axios.get("https://node-setup-server.onrender.com/");
      console.log("res?.data", res?.data);
    } catch (error) {
      console.log("error in zoho upload api");
    }
  };
  setInterval(() => {
    console.log("cron job trigger");
    zohoImportUploadApp();
    zohoDesignApp();
    nodeSetupApp();
  }, 1000 * 60 * 10);
};
main();
