import React, { useMemo } from 'react';
import { WishlistItemData } from '@lib/types';
import styles from './WishlistItem.module.sass';
import Image from 'next/image';

export interface WishlistProps {
    data: WishlistItemData
}

const WishlistItem = (props: WishlistProps) => {
    const { data } = props;

    const links = useMemo<JSX.Element[]>(() => {
        if (!data.links) return [];

        return data.links.map(i => {
            return <li key={i.url}>
                <a href={i.url} target="_blank" rel="noreferrer">{i.name}</a>
            </li>
        })
    }, [data.links]);

    return <div className={styles.item}>
        <h2>{data.name} (~{new Intl.NumberFormat().format(data.price)} руб)</h2>

        {!!data.image &&
            <div className={styles.images}>
                <Image
                    src={data.image}
                    alt={data.name}
                    layout="responsive"
                    width="100%"
                    height="75"
                    objectFit="cover"
                />
            </div>
        }

        <p>{data.text}</p>

        {!!data.links &&
            <div className={styles.links}>
                <p>Где купить:</p>
                <ul>{links}</ul>
            </div>
        }
    </div>;
};

export default WishlistItem;
