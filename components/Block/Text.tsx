import React from 'react';
import styles from './Block.module.sass';

export interface TextProps {
    children: React.ReactNode
}

const Text = (props: TextProps) => {
    return <div className={styles.text}>{props.children}</div>
}

export default Text;
