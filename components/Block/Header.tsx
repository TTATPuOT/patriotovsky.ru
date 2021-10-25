import React from 'react';
import styles from './Block.module.sass';

export interface HeaderProps {
    children: React.ReactNode
}

const Header = (props: HeaderProps) => {
    return <h2 className={styles.header}>{props.children}</h2>
}

export default Header;
