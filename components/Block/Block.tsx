import React from 'react';

export interface BlockProps {
    children: React.ReactNode,
}

const Block = (props: BlockProps) => {
    return <div className="block">{props.children}</div>
}

export default Block;
