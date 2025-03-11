import { useNavigate } from "react-router";
import { userService } from "../../services/userServices.js";
import { Link } from "react-router";

export default function Login() {
    const navigate = useNavigate();

    const loginAction = async (formData) => {
        const {email , password} = Object.fromEntries(formData);
        if(!email || !password){
            return alert("All fields must be filled")
        }

        await userService.login({email,password});
        navigate('/');
    }

    return (
        <>
            <section id="login-page" className="auth">
                <form id="login" action={loginAction}>
                    <div className="container">
                        <div className="brand-logo" />
                        <h1>Login</h1>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Sokka@gmail.com"
                        />
                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password" />
                        <input type="submit" className="btn submit" defaultValue="Login" />
                        <p className="field">
                            <span>
                                If you don't have profile click <Link to="/register">here</Link>
                            </span>
                        </p>
                    </div>
                </form>
            </section>
        </>
    );
}