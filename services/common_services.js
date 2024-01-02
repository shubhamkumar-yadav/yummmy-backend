export const sendResponse = (
  res,
  responseCode,
  successStatus,
  message = null,
  data = null
) => {
  return res
    .status(responseCode)
    .json({ success: successStatus, message: message, data: data });
};
export async function findFromDb(
  req,
  res,
  collectionName,
  query = null,
  responseMessage = null
) {
  try {
    const resp = await collectionName.find(query !== null ? query : {});
    if(resp.length){
      sendResponse(res, 200, true, responseMessage, resp);
    }
    else{
      sendResponse(res, 400, false, "Failed", null);
    }
  } catch (error) {
    sendResponse(res, 500, false, error.message, null);
  }
}
export async function saveAndSendResponse(
  req,
  res,
  collectionName,
  payload,
  responseMessage = null
) {
  try {
    const resp = new collectionName(payload);
    await resp.save();
    sendResponse(res, 200, true, responseMessage, resp);
  } catch (error) {
    sendResponse(res, 500, false, error.message, null);
  }
}
