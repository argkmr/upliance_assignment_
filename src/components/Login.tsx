import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import GoogleButton from "react-google-button"
import { auth, googleAuthProvider } from '../utils/firebase.ts'
import { useNavigate } from "react-router-dom"


const Login = () => {

    const navigate = useNavigate();
    const handleSingInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            console.log(result)
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            if (token) {
                console.log(token);
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/dashboard");
            }

        } catch (error) {
            console.error(error)
        }

    }
    return (
        <div className="login">
            <GoogleButton onClick={handleSingInWithGoogle} />
        </div>
    )
}

export default Login