import React from 'react';

export interface SmallProps {
    children: React.ReactNode,
}

const Small = (props: SmallProps) => {
    return <small className="small">{props.children}</small>
}

export default Small;
