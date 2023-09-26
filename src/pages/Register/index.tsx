import { useEffect, useState } from "react"
import Header from "../../Layouts/header"
import registerData from "./registerInputFields"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../../redux/actions/product.actions"
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({})
    const onchange = (e) => {
        let inputName = e.target.name
        let inputValue = e.target.value
        setValues({ ...values, [inputName]: inputValue })
    }
    let dispatch = useDispatch()
    let userDetails = useSelector((state) => state.allProducts.useDetails)
    useEffect(() => {
        if (userDetails) {
            navigate("/")
        }
    }, [userDetails])



    return <>
        <Header />
        <br />
        <br />
        <div className="register">
            {registerData.map(({ label, type }) =>
                <div key={label} className="input-group d-flex-column">
                    <label>{label}</label>
                    <input name={label} onChange={(e) => onchange(e)} type={type} />
                </div>
            )}
            <div>
                <center>
                    <button className="product-button1" onClick={() => dispatch(addUser(values))}>Continue</button>
                </center>
            </div>
        </div>
    </>
}
export default Register
