import * as Yup from 'yup';

// creating schema for validation requirements
export const loginSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
});