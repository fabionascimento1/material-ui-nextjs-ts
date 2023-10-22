import * as yup from "yup";

import yupLocale, { INVALID_FIELD } from "./yupLocale";

const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

yup.addMethod(yup.string, "isValidEmail", function () {
  return this.test("isValidEmail", INVALID_FIELD, function (value) {
    if (value) {
      return emailRegex.test(value) ? true : false;
    }

    return true;
  });
});

yup.addMethod(yup.string, "isValidUrl", function () {
  return this.test("isValidUrl", INVALID_FIELD, function (value) {
    if (value) {
      return urlRegex.test(value) ? true : false;
    }

    return true;
  });
});

yup.setLocale(yupLocale);

export default yup;
