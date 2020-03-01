const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExpirienceInput(data) {
  //krecemo empty errors
  let errors = {};
  //dal je undefined il null
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";

  //ako ne prodje errors bude napunjen
  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study field is required";
  }
  //ako prodje ostaje prazan
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
