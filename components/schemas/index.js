import * as yup from 'yup';

const passwordRules = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

export const basicFormSchema = yup.object().shape({
  firstName: yup.string().min(3).required('First name is required.'),
  lastName: yup.string().min(3).required('Last name is required.'),
  email: yup
    .string()
    .email('Please enter a vaild email.')
    .required('Email is  required.'),
  password: yup
    .string()
    .min(8)
    .max(16)
    .matches(passwordRules, {
      message:
        '"Must contain at least one number and one uppercase and lowercase letter, and at least 8 - 16 characters',
    })
    .required('Password is required.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password doesnt match')
    .required('Password is required.'),
  country: yup.string().min(3).required('Country name is required.'),
  gender: yup.string().required('Please select a gender'),
  number: yup
    .number()
    .positive()
    .integer()
    .min(10)
    .required('Phone number is required'),
  checkbox: yup.string().required('Terms must be accepted'),
});
