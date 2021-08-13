import "./rightbar.css";
import {useHistory} from "react-router-dom";

export default function Rightbar() {
    const history=useHistory();
    const handleRoute=()=>{
        history.push("/signup");
    }
    return (
        <div className="rightbar">
            <div className="container">
                <h2>New to MyTimes?</h2>
                <p> Sign up now to get your own personalized timeline!</p>
                <button className="button" onClick={handleRoute}>Sign Up </button>
            </div>
        </div>
    )
}
