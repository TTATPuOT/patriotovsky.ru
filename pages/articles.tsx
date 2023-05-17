import {NextPage} from "next";
import {MainLayout} from "@components/Layout";
import Block, {Header, Link} from "@components/Block";
import CodeApi, {WpPost} from "../lib/CodeApi";
import {useEffect, useMemo, useState} from "react";
import { stripHtml } from "string-strip-html";
import Small from "@components/Block/Small";
import styles from '@styles/Articles.module.sass';


const Index: NextPage = () => {
    const [posts, setPosts] = useState<WpPost[]>([]);

    useEffect(() => {
        CodeApi.getLastArticles()
            .then(p => setPosts(p));
    }, []);

    const items = useMemo<JSX.Element[]|null>(() => {
        if (!posts || posts.length <= 0) return null;

        return posts.map(p => {
            return <div className={styles.item} key={p.id}>
                <div className={styles.title}>
                    <Link href={`https://code.patriotovsky.ru/${p.slug}`} target="_blank">
                        {p.title.rendered}
                    </Link>
                </div>
                <div className={styles.small}>{stripHtml(p.excerpt.rendered).result}</div>
            </div>
        })
    }, [posts]);

    return <MainLayout>
        <Block>
            <h1><Link href="https://code.patriotovsky.ru/" target="_blank">Чистый код</Link></h1>
            <h2>Мои статьи о веб-разработке</h2>
            {!items && <Small>🏎️ Загрузочка идёт...</Small>}
        </Block>
        {items}
        <Block>
            <Header>
                Больше статей на <Link href="https://code.patriotovsky.ru/" target="_blank">Чистом коде</Link>
            </Header>
        </Block>
    </MainLayout>;
}

export default Index;
