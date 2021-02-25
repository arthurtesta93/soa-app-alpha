import _ from "lodash";
import { requiredFormFields } from "./formFields";

export const formFieldsMissing = (jobObject) => {
  if (!_.has(jobObject, requiredFormFields)) {
    return true;
  } else {
    return false;
  }
};
