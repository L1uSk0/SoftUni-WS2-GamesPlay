import { useNavigate } from "react-router";
import { userService } from "../../services/userServices.js";
import { Link } from "react-router";

export default function Register() {
    const navigate = useNavigate();

    const registerAction = async (formData) => {
        const {email , password , 'confirm-password':rePass} = Object.fromEntries(formData);
        if(!email || !password || !rePass){
            return alert("All fields must be filled")
        }
        if(password !== rePass){
            return alert("Password and repassword must match !!!");
        }
        await userService.register({email,password});
        navigate('/');
    }

    return (
        <>
            <section id="register-page" className="content auth">
                <form id="register" action={registerAction}>
                    <div className="container">
                        <div className="brand-logo" />
                        <h1>Register</h1>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="maria@email.com"
                        />
                        <label htmlFor="pass">Password:</label>
                        <input type="password" name="password" id="register-password" />
                        <label htmlFor="con-pass">Confirm Password:</label>
                        <input type="password" name="confirm-password" id="confirm-password" />
                        <input className="btn submit" type="submit" defaultValue="Register" />
                        <p className="field">
                            <span>
                                If you already have profile click <Link to="/login">here</Link>
                            </span>
                        </p>
                    </div>
                </form>
            </section>
        </>
    );
}