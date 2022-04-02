import React from 'react';
import { WishlistItemData } from '@lib/types';
import styles from './WishlistScrollspy.module.sass';

//TODO: Доделать скролспай, чтобы удобно было листать список

export interface WishlistScrollspyProps {
    items: WishlistItemData[]
}

const WishlistScrollspy = (props: WishlistScrollspyProps) => {
    return <div className={styles.container}>
    </div>;
};

export default WishlistScrollspy;
