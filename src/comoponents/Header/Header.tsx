import React from "react";
import StyleHeader from "./Header.module.css";

const Header = () => {
    return (
        <header className={StyleHeader.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
                alt=""/>
        </header>
    )
}

export default Header;