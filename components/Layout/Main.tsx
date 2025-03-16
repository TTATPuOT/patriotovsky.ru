import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

export interface MainProps {
    children: React.ReactNode
}

const Main = (props: MainProps) => {
    return <div className="container">
        <Header />
        {props.children}
        <Footer />
    </div>
}

export default Main;
