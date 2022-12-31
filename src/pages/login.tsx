import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg"; 
import hero from "../assets/pablo-sign-in 1.svg";
import "../styles/login.scss";


export const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);

    const navigate = useNavigate();


    // RESET FORM HANDLER
    function resetForm(): void{
        setEmail('');
        setPassword('');
    }

    //  PASSWORD VISIBILITY HANDLER
    function showPasswd(): void{
        !show ? setShow(true) : setShow(false);
    }

    // FORM SUBMIT HANDLER
    function handleSubmit(e: any): void {
        e.preventDefault();

        if(email === "test@test.com" && password === "passCoode"){
            resetForm();

            // REDIRECT USER TO DASHBOARD
            navigate('/dashboard');
        } else {
            setIsError(true);
            setTimeout(() => {
                setIsError(false)
            }, 2000);

            console.log({email, password});
        }
    }

  return (
    <main>
        <section className="left">
            <div className="logo">
                <img src={logo} alt="company logo" />
            </div>
            <div className="hero_img">
                <img src={hero} alt="pablo sign-in" />
            </div>
        </section>
        <section className="right">
           <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Welcome!</h1>
                <h3>Enter details to login.</h3>
                { isError && <div className="error_msg">Incorrect Credientials!!</div>}
                <div className="input_container">
                    <input 
                        value={email}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        value={password}
                        type={show ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span className="shw_pass" onClick={showPasswd}>show</span>
                </div>

                <p className="fg_pass">Forgot password</p>
                <button type="submit">Log in</button>
           </form>
        </section>
    </main>
  )
}
