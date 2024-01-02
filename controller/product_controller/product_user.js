import { findFromDb, sendResponse } from "../../services/common_services.js";
import { Products } from "../../model/product/product_model.js";

export async function getProduct(req, res) {
  const product_category = req.query.category;
  try {
    await findFromDb(req, res, Products, {
      product_category: product_category,
    });
  } catch (error) {
    sendResponse(res, 500, false, error.message, null);
  }
}
export async function searchProduct(req, res) {
  const searchText = req.query.searchText;
  try {
    const searchedData = await Products.find({
      $or: [
        { product_name: { $regex: searchText, $options: "i" } },
        { product_description: { $regex: searchText, $options: "i" } },
        { product_category: { $regex: searchText, $options: "i" } },
      ],
    });
    sendResponse(res, 200, true, null, searchedData);
  } catch (error) {
    sendResponse(res, 500, false, error.message, null);
  }
}
