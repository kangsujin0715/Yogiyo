
import React, {useState, useEffect} from 'react';
import styled from "styled-components";
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
        <StyledHeader>
            <div id='header' style={{ background: `rgba(255,255,255,${scrollPosition / 30})` }}>
                <button className="btn_prev"></button>
                <h1 className="title">선물하기</h1>
                <button className="btn_gift"></button>
            </div>
        </StyledHeader>
    )
    
}

export default MainHeader


const StyledHeader = styled.div`
    position: sticky;
    z-index: 100;
`;