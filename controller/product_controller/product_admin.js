import { sendResponse } from "../../services/common_services.js";
import { saveAndSendResponse } from "../../services/common_services.js";
import { Products } from "../../model/product/product_model.js";

export async function postProduct(req, res) {
  const payload = {
    product_name: req.body.product_name,
    product_description: req.body.product_description,
    product_price: req.body.product_price,
    product_category:req.body.product_category
  };
  try {
    await saveAndSendResponse(
      req,
      res,
      Products,
      payload,
      "Successfully Posted Product !!"
    );
  } catch (error) {
    sendResponse(res, 500, false, error.message, null);
  }
}
