import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
    children: React.ReactNode,
    href: string
}

const Button = (props: ButtonProps) => {
    return <Link href={props.href}>
        <span className="button">{props.children}</span>
    </Link>
}

export default Button;
