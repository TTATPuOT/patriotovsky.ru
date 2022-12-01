import React from 'react';
import styles from './Header.module.sass';
import Link from 'next/link';

const Header = () => {
    return <div className={styles.header}>
        <ul>
            <li><Link href="/">Обо мне</Link></li>
            <li><Link href="/projects">Проекты</Link></li>
            <li><Link href="/books">Книги</Link></li>
            <li><Link href="/articles">Статьи</Link></li>
            <li><a href="https://github.com/TTATPuOT/patriotovsky.ru" target="_blank">Исходники <i className="icon-link" /></a></li>
        </ul>
    </div>
}

export default Header;
