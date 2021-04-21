import { extend } from "vee-validate";
import { required, min } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("min", {
  ...min,
  message: "This field must be 3 or more characters"
});