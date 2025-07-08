import {useEffect, useState} from "react";

const ClipReveal = ({children, onLoad = false, delay = 100, behavior="clip-hidden-right", classNames=""}) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (onLoad) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, delay);
            return () => clearTimeout(timer)
        }
    }, [onLoad, delay])

    return (
        <div className={`clip-animation ${isVisible ? 'clip-visible' : behavior} clip-fast ${classNames}`}>
            {children}
        </div>
    )
}

export default ClipReveal;