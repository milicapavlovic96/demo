const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExpirienceInput(data) {
  //krecemo empty errors
  let errors = {};
  //dal je undefined il null
  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  //ako ne prodje errors bude napunjen
  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title field is required";
  }
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }
  //ako prodje ostaje prazan
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
