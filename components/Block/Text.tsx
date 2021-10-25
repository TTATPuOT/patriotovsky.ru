import React from 'react';

export interface TextProps {
    children: React.ReactNode
}

const Text = (props: TextProps) => {
    return <div className="text">{props.children}</div>
}

export default Text;
