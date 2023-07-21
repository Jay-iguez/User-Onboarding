import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    name: Yup
    .string()
    .trim()
    .required("You must create a username.")
    .min(5, "Your username must be at least 5 characters"),
    email: Yup
    .string()
    .email("You must have a valid email address.")
    .required("You must have a valid email address."),
    password: Yup
    .string()
    .trim()
    .required("You must creata a valid password.")
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*()]/, 'Password must contain at least one special character')
    .matches(/^\S*$/, 'Password must not contain spaces'),
    terms: Yup
    .boolean().oneOf([true], "You need to accept our super-duper terms."),
    money: Yup
    .string()
    .required("You must select a wage you receive")
})



export default formSchema