import {NextPage} from "next";
import {MainLayout} from "@components/Layout";
import Block, {Header, Text} from "@components/Block";

const NotFound: NextPage = () => {
    return <MainLayout>
        <Block>
            <Header>Нет, такой страницы точно нет 😔</Header>
            <Text>Хотя, это же тоже результат?</Text>
        </Block>
    </MainLayout>;
}

export default NotFound;
