import {NextPage} from "next";
import {MainLayout} from "@components/Layout";
import Block, {Header, Link, Text} from "@components/Block";

const Aron: NextPage = () => {
    return <MainLayout>
        <Block>
            <Header>CRM для школы художников Арона Оноре</Header>
            <Text>Laravel, React, MySQL, S3, Яндекс.Облако</Text>
        </Block>

        <Block>
            <Header>Кратко</Header>
            <Text>
                asd
            </Text>
        </Block>

        <Block>
            <Header>Результаты</Header>
            <Text>
                asd
            </Text>
        </Block>
    </MainLayout>;
}

export default Aron;
