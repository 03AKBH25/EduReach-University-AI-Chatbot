import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import { GraduationCap, User, Mail, Lock, Phone, ArrowLeft} from "lucide-react"
import toast from "react-hot-toast"
import {registerUser} from "../services/auth.service"
import {useAuth} from "../context/AuthContext"
import {images} from "../data/content"

export default function SignupPage(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(false)
    const {login} = useAuth()
    const navigate = useNavigate();

    const handleSubmit = async(e: React.SyntheticEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!name||!email||!password){
            toast.error("Please fill in required fields.");
            return ;
        }

        setLoading(true);
        try{
            const data = await registerUser({name, email, password, phone: phone || undefined});
            login(data.token)
            toast.success("Account created! Welcome to EduReach.");
            navigate("/");
        }catch(err: any){
            toast.error(err.response?.data?.message ?? "Registeration failed")
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex">
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-cream">
                <div className="w-full max-w-md">
                    <Link to="/" className="flex items-center gap-1 text-gray-500 hover:text-maroon transition-colors duration-200 mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm">Back to Home</span>
                    </Link>

                    <h1 className="font-heading text-3xl font-bold text-gray-900 mb-2">
                        Create Account
                    </h1>
                    <p className="text-gray-500 mb-8">
                        Join EduReach for unlimited access to AI chat & counselling calls
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name *
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 " />
                            </div>
                        </div>

                    </form>
                </div>
            </div>

            <div className="hidden lg:block lg:w-1/2 relative"></div>
        </div>
    )

}