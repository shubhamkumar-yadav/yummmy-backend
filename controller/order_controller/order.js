import { findFromDb, sendResponse } from "../../services/common_services.js";
import { saveAndSendResponse } from "../../services/common_services.js";
import { Orders } from "../../model/order/order_model.js";

export async function placeOrder(req, res) {
  const payload = {
    customer_detail: req.body.customer_detail,
    ordered_products: req.body.ordered_products
  };
  try {
    await saveAndSendResponse(req,res,Orders,payload,'order placed');
  } catch (error) {
    sendResponse(res, 500, false, error.message, null);
  }
}
export async function fetchOrders(req, res) {
  const orderPlacedBy = req.query.orderPlacedBy;
  try {
    await findFromDb(req,res,Orders,{'customer_detail.orderPlacedBy':orderPlacedBy},'All Orders Placed by you');
  } catch (error) {
    sendResponse(res, 500, false, error.message, null);
  }
}