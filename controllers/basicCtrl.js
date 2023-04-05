const basicModel = require("../models/basicModels.js");
const axios = require("axios");
const getDataController = async (req, res) => {
  try {
    const companyData = await axios.get(
      "https://api.wazirx.com/api/v2/tickers"
    );
    if (!companyData) {
      return res
        .status(200)
        .send({ message: "Request Failed", success: false });
    }
    var result = Object.values(companyData.data);
    for (let i = 0; i < 10; i++) {
      const a = result[i].name;
      const b = result[i].last;
      const c = result[i].buy;
      const d = result[i].sell;
      const e = result[i].volume;
      const f = result[i].base_unit;
      var final = {name:a, last:b, buy:c, sell:d , volume:e, base_unit:f}
      const newComp = new basicModel(final);
      await newComp.save();
    }
    
    res.status(201).send({ message: "Fetched Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: `FAILED ${error.message}` });
  }
};

module.exports = { getDataController };
