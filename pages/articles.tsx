import {NextPage} from "next";
import {MainLayout} from "@components/Layout";
import Block, {Header, Link, Text} from "@components/Block";

const Index: NextPage = () => {
    return <MainLayout>
        <Block>
            <Header>Этот раздел ещё не готов</Header>
            <Text>Пока что почитать мои статьи можно только на <Link href="https://code.patriotovsky.ru/" target="_blank">Чистом коде</Link></Text>
        </Block>
    </MainLayout>;
}

export default Index;
