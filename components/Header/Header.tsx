import React from 'react';
import styles from './Header.module.sass';
import Link from 'next/link';

export interface HeaderProps {
}

const Header = (props: HeaderProps) => {
    return <div className={styles.header}>
        <ul>
            <li><Link href="/">Обо мне</Link></li>
            <li><Link href="/projects">Проекты</Link></li>
            <li><Link href="/articles">Статьи</Link></li>
            <li><a href="#">Исходники <i className="icon-link" /></a></li>
        </ul>
    </div>
}

export default Header;
