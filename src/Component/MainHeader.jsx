import React, {useState, useEffect} from 'react';
import '../css/mainHeader.css';

function MainHeader() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    return (
        <div className={scrollPosition < 100 ? "original_header" : "change_header"}>
            <button className="btn_prev"></button>
            <h1 className="title">선물하기</h1>
            <button className="btn_gift"></button>
        </div>
    )
}

export default MainHeader


