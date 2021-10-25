import React from 'react';

export interface HeaderProps {
    children: React.ReactNode
}

const Header = (props: HeaderProps) => {
    return <h2 className="header">{props.children}</h2>
}

export default Header;
