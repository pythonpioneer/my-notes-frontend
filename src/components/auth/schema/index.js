import * as Yup from 'yup';

// creating schema for validation requirements of login 
export const loginSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
});

// creating schema for validation requirements for register
export const registrationSchema = Yup.object({
    name: Yup.string().min(3, 'Too Short!').required('required'),
    email: Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
    confirmPassword: Yup.string().min(6, 'Too Short!').required('Required'),
});