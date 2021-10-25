import React from 'react';
import styles from './Block.module.sass';

export interface SmallProps {
    children: React.ReactNode,
}

const Small = (props: SmallProps) => {
    return <small className={styles.small}>{props.children}</small>
}

export default Small;
