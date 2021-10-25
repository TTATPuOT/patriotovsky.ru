import {NextPage} from "next";
import {MainLayout} from "@components/Layout";
import Block, {Header, Link, Text} from "@components/Block";

const Pulsar: NextPage = () => {
    return <MainLayout>
        <Block>
            <Header>Боты для аниме-магазина Pulsar.ua</Header>
            <Text>PHP, Smarty, MySQL, JavaScript, Telegram API, Viber API, Facebook API, Вконтакте API</Text>
        </Block>

        <Block>
            <Header>Кратко</Header>
            <Text>
                Заказчик обратился с просьбой создать четыре бота для автоматизации поддержки покупателей в самых популярных мессендерах: Telegram, Viber, Facebook и Вконтакте.
                <br/><br/>
                Заказчик хотел, чтобы бот общался как человек и понимал вопросы в свободной форме.
                <br/><br/>
                Также необходимо было создать виджет на сайт, чтобы можно было быстро начать диалог в любом мессенджере.
            </Text>
        </Block>

        <Block>
            <Header>Результаты</Header>
            <Text>
                На момент написания этого текста боты работают уже 10 месяцев. За это время у заказчика не возникло никаких проблем.
                <br/><br/>
                В день все боты суммарно обрабатывают до 4000 сообщений. Понимание ботом сообщений в среднем не менее 90%.
                <br/><br/>
                Практически отсутствует нагрузка менеджеров по сложным вопросам и нет надобности отвечать покупателям на типовые вопросы.
            </Text>
        </Block>
    </MainLayout>;
}

export default Pulsar;
