import React from 'react';
import styles from './Block.module.sass';
import NextLink from 'next/link';

export interface LinkProps {
    children: React.ReactNode,
    href: string
    target?: "_blank"
}

const Link = (props: LinkProps) => {
    return <NextLink href={props.href}>
        <a target={props.target} className={styles.link}>{props.children} <i className="icon-link" /></a>
    </NextLink>
}

export default Link;
