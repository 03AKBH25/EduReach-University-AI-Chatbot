import { useState, useEffect } from "react"
import { quotesContent } from "../data/content"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

export default function QuoteSection(){
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    // Auto-rotate every 5 seconds with fade effect
    useEffect(()=>{
        const timer = setInterval(()=>{
            setFade(false);
            setTimeout(()=>{
                setCurrent((prev)=>(prev+1)%quotesContent.length);
                setFade(true);
            },300)
        },5000);
        return ()=> clearInterval(timer)
    },[])
}