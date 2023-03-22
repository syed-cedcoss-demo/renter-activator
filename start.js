const main = () => {
  const zohoImportUploadApp = async () => {
    try {
      await fetch("https://zoho-product-upload.onrender.com/");
    } catch (error) {
      console.log("error", error);
    }
  };
  setInterval(() => {
    zohoImportUploadApp();
  }, 1000 * 60 * 10);
};
main();
