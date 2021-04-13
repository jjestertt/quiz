import Input from "../components/UI/Input/Input";


// 1) Need create state in form component. For Example;
// const [formControl] = useState({
//     email:{
//         label:"Email",
//         id :"email",
//         name:"email",
//         type:"email" ,
//     }
// });
// 2) Need call this function with parameter formic name and state component

const renderInput = (formik, formControl) => {
    return Object.keys(formControl).map(item => {
        return (<Input
            key={formControl[item].name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched}
            label={formControl[item].label}
            id={formControl[item].id}
            name={formControl[item].name}
            type={formControl[item].type}
            value={formik.values[formControl[item].name]}
            errors={formik.errors[formControl[item].name]}
        />)
    });
}
export default renderInput;