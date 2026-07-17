import {useState} from "react";
import {useAuth} from "../context/AuthContext"
import SignupPopup from "../components/SignupPopup"
import CallPopup from "../components/CallPopup"

export default function HomePage(){
    const {user} = useAuth();
    const [showSignupPopup, setShowSignupPopup] = useState(false)
}