import { findFromDb, sendResponse } from "../../services/common_services.js";
import { saveAndSendResponse } from "../../services/common_services.js";
import { Users } from "../../model/auth/user_model.js";

export async function userLogin(req, res) {
  const payload = {
    phone: req.body.cust_phone,
    password: req.body.cust_pass,
  };
  try {
    await findFromDb(
      req,
      res,
      Users,
      {
        $and: [
          { phone: { $eq: payload.phone } },
          { password: { $eq: payload.password } },
        ],
      },
      "logged in successfully"
    );
  } catch (error) {
    sendResponse(res, 500, false, error.message, null);
  }
}
export async function userSignUp(req, res) {
  const payload = {
    phone: req.body.cust_phone,
    password: req.body.cust_pass,
  };
  try {
    await saveAndSendResponse(
      req,
      res,
      Users,
      payload,
      "Signed Up Successfully"
    );
  } catch (error) {
    sendResponse(res, 500, false, error.message, null);
  }
}
