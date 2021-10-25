import React from 'react';
import styles from "./Project.module.sass";
import {Thumbnail} from "@components/Block";
import Small from "@components/Block/Small";

export interface ProjectProps {
    backgroundColor: string
    src: string|StaticImageData
    href: string
    title: string
    description: string
}

const Project = (props: ProjectProps) => {
    return <div className={styles.project + ' text-center'}>
        <Thumbnail src={props.src} href={props.href} backgroundColor={props.backgroundColor} />
        <div className={styles.title}>{props.title}</div>
        <Small>{props.description}</Small>
    </div>
}

export default Project;
