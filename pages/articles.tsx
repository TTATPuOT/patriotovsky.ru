import {NextPage} from "next";
import {MainLayout} from "@components/Layout";
import Block, {Header, Link, Text} from "@components/Block";
import CodeApi, {WpPost} from "../lib/CodeApi";
import {useMemo} from "react";
import { stripHtml } from "string-strip-html";

interface IndexProps {
    posts: WpPost[]
}

const Index: NextPage<IndexProps> = (props) => {
    const items = useMemo<JSX.Element[]|null>(() => {
        if (!props.posts || props.posts.length <= 0) return null;

        return props.posts.map(p => {
            return <Block key={p.id}>
                <Header><Link href={`https://code.patriotovsky.ru/${p.slug}`} target="_blank">{p.title.rendered}</Link></Header>
                <Text>{stripHtml(p.excerpt.rendered).result}</Text>
            </Block>
        })
    }, []);

    return <MainLayout>
        <Block>
            <h1><Link href="https://code.patriotovsky.ru/" target="_blank">Чистый код</Link></h1>
            <h2>Быстрые заметки о вечных вещах</h2>
        </Block>
        {items}
        <Block>
            <Header>
                Больше статей на <Link href="https://code.patriotovsky.ru/" target="_blank">Чистом коде</Link>
            </Header>
        </Block>
    </MainLayout>;
}

export async function getServerSideProps() {
    const posts = await CodeApi.getLastArticles();

    return { props: { posts } }
}

export default Index;
