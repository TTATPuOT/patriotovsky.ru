import {NextPage} from "next";
import {MainLayout} from "@components/Layout";
import Block, { Text } from '@components/Block';
import styles from '@styles/Books.module.sass'
import Image from 'next/image';
import React, { useMemo } from 'react';

interface Book {
    title: string
    author: string
    description: string
    image: string
}

const books: Book[] = [
    {
        title: 'Паттерны объектно-ориентированного проектирования',
        author: 'Гамма Эрих, Хелм Ричард, Джонсон Роберт, Влиссидес Джон',
        description: 'Эта книга открыла для меня прекрасный мир ООП. По факту, это справочник из самых популярных паттернов проектирования. На практике пригодятся они не все, разумеется. Но это база, это знать надо.',
        image: '/books/oop.png',
    },
    {
        title: 'Чистый код: создание, анализ и рефакторинг',
        author: 'Роберт Мартин',
        description: 'Сборник советов как надо и не надо писать красивый, хороший, рабочий и главное поддерживаемый в дальнейшем код. Книга не столько о визуальной красоте, сколько о функциональности выразительности кода.',
        image: '/books/code.jpg',
    },
]

const Index: NextPage = () => {
    const booksItems = useMemo<JSX.Element[]>(() => {
        return books.map(b => {
            return <div key={b.title} className={styles.book}>
                <div className={styles.cover}>
                    <Image
                        src={b.image}
                        alt={b.title}
                        layout="responsive"
                        width={250}
                        height={140}
                        objectFit="cover"
                    />
                </div>
                <div className={styles.text}>
                    <div className={styles.title}>
                        <h2>{b.title}</h2>
                        <small>{b.author}</small>
                    </div>
                    <div className={styles.description}>
                        <Text>{b.description}</Text>
                    </div>
                </div>
            </div>
        })
    }, [])

    return <MainLayout>
        <Block>
            <h1>Книги, которые я прочитал</h1>
            <Text>Они помогли мне понять многие вещи и я их искренне рекомендую прочитать каждому разработчику</Text>

            {booksItems}
        </Block>
    </MainLayout>;
}

export default Index;
