import React from 'react';
import styles from './Block.module.sass';
import Image from "next/image";
import Link from 'next/link';

export interface Thumbnail {
    src: string|StaticImageData
    href: string
    backgroundColor?: string
}

const Thumbnail = (props: Thumbnail) => {
    return <div className={styles.thumbnail} style={{ backgroundColor: props.backgroundColor }}>
        <Image src={props.src} quality={95} />
        <Link href={props.href}>
            <a>Подробности</a>
        </Link>
    </div>
}

export default Thumbnail;
