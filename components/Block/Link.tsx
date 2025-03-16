import React from 'react';
import NextLink from 'next/link';

export interface LinkProps {
    children: React.ReactNode,
    href: string
    target?: "_blank"
}

const Link = (props: LinkProps) => {
    return <NextLink href={props.href} target={props.target} className="link">
        {props.children} <i className="icon-link" />
    </NextLink>
}

export default Link;
