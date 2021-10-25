import {NextPage} from "next";
import {MainLayout} from "@components/Layout";
import Block, {Header, Link, Text} from "@components/Block";
import CodeApi, {WpPost} from "../lib/CodeApi";
import {useEffect, useMemo, useState} from "react";
import { stripHtml } from "string-strip-html";
import Small from "@components/Block/Small";


const Index: NextPage = () => {
    const [posts, setPosts] = useState<WpPost[]>([]);

    useEffect(() => {
        CodeApi.getLastArticles()
            .then(p => setPosts(p));
    }, []);

    const items = useMemo<JSX.Element[]|null>(() => {
        if (!posts || posts.length <= 0) return null;

        return posts.map(p => {
            return <Block key={p.id}>
                <Header><Link href={`https://code.patriotovsky.ru/${p.slug}`} target="_blank">{p.title.rendered}</Link></Header>
                <Text>{stripHtml(p.excerpt.rendered).result}</Text>
            </Block>
        })
    }, [posts]);

    return <MainLayout>
        <Block>
            <h1><Link href="https://code.patriotovsky.ru/" target="_blank">Чистый код</Link></h1>
            <h2>Быстрые заметки о вечных вещах</h2>
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
