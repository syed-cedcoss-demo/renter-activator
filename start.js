import axios from "axios";
const main = () => {
  const zohoImportUploadApp = async () => {
    try {
      await axios.get("https://zoho-product-upload.onrender.com");
      helper();
    } catch (error) {
      helper();
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
  const helper = () => {
    setTimeout(() => {
      console.log("cron job trigger");
      zohoImportUploadApp();
      zohoDesignApp();
      nodeSetupApp();
    }, 1000 * 60 * 5);
  };
  helper();
};
main();
