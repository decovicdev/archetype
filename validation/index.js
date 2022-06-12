import { object, string } from "yup";

const earlyAccessSchema = object().shape({
  email: string()
    .required("Please enter your Email")
    .email("Please enter a valid Email"),
});

export { earlyAccessSchema };
