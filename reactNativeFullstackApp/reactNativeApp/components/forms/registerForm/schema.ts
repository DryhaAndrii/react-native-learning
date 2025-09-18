import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z0-9_]+$/, "Only letters, numbers and underscores allowed")
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Username is required"),

  password: yup
    .string()
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+=\-{}\[\]:;"'<>,.?/\\|]+$/,
      "Password must contain only Latin letters, numbers or special characters"
    )
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be at most 50 characters")
    .required("Password is required")
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !/\s/.test(value)
    ),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
