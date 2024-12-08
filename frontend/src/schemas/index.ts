import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().trim().required('Name is required!'),
  surname: yup.string().trim().required('Surname is required!'),
  phone: yup
    .string()
    .trim()
    .max(11, 'Must be 11 characters')
    .min(11, 'Must be 11 characters')
    .required('Phone Number is required!'),
  email: yup
    .string()
    .trim()
    .email('Invalid email')
    .required('E-mail is required!'),
  gender: yup.string().trim().required('Gender is required!'),
  age: yup
    .number()
    .max(99, 'Must be 99 or less')
    .min(1, 'Must be 1 or more')
    .required('Age is required!'),
});

export default schema;
