import axios from "axios";
const main = () => {
  const zohoImportUploadApp = async () => {
    try {
      const res = await axios.get("https://zoho-product-upload.onrender.com/");
      console.log("res?.data", res?.data);
    } catch (error) {
      console.log("error in zoho upload api");
    }
  };
  setInterval(() => {
    zohoImportUploadApp();
  }, 1000 * 60 * 10);
};
main();
