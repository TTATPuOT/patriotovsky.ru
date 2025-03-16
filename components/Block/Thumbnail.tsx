import React from 'react';
import Image, {StaticImageData} from "next/image";
import Link from 'next/link';

export interface Thumbnail {
    src: string|StaticImageData
    href: string
    backgroundColor?: string
}

const Thumbnail = (props: Thumbnail) => {
    return <div className="thumbnail" style={{ backgroundColor: props.backgroundColor }}>
        <Image src={props.src} quality={95} alt={props.href} />
        <Link href={props.href}>
            Подробности
        </Link>
    </div>
}

export default Thumbnail;
