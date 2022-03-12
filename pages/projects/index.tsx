import {NextPage} from "next";
import {MainLayout} from "@components/Layout";
import Block, {Header, Link, Text} from "@components/Block";
import styles from '@styles/Projects.module.sass';
import Project from "@components/Project";
import detsadImg from '@public/projects/detsad.jpg';
import aronImg from '@public/projects/aron.jpg';
import pulsarImg from '@public/projects/pulsar.jpg';
import Small from "@components/Block/Small";

const Index: NextPage = () => {
    return <MainLayout>
        <Block>
            <Header>Мои самые крутые проекты</Header>
            <div className={styles.columns}>
                <Project
                    backgroundColor="#2D2D2D"
                    src={detsadImg}
                    href="/projects/1"
                    title={'Фотостудия "Непоседы"'}
                    description="Высоконагруженный сервис для клиентов и автоматизация бизнес-процессов для сети детских фотосутдий"
                />
                <Project
                    backgroundColor="#3E3E3E"
                    src={aronImg}
                    href="/projects/2"
                    title="CRM для школы Арон Оноре"
                    description="CRM-система для отслеживания прогресса учеников школы художников"
                />
                <Project
                    backgroundColor="#CACBCD"
                    src={pulsarImg}
                    href="/projects/3"
                    title="Чат-боты для Pulsar"
                    description="Система управления для четырёх чат ботов для упрощения работы поддержки и решения однотипных вопросов"
                />
            </div>
        </Block>

        <Block>
            <Header>Разработки «Для себя»</Header>

            <div className={styles.item}>
                <Text><Link href="https://pass.patriotovsky.ru/" target="_blank">Генератор паролей</Link></Text>
                <div className={styles.small}>
                    <Small>
                        Простенькое PWA на Next.js.
                        Генерирует пароли на стороне клиента, не делиться и не хранит их. Очень удобно и быстро, мало кнопок.
                        <Link href="https://github.com/TTATPuOT/pass.patriotovsky.ru" target="_blank">Исходный код</Link> есть
                        у меня на Github
                    </Small>
                </div>
            </div>

            <div className={styles.item}>
                <Text><Link href="https://patriotovsky.ru/compare/" target="_blank">Сравнение цен</Link></Text>
                <div className={styles.small}>
                    <Small>
                        Простенькое PWA на React с использование фронтенд ферймворка Ant Design.
                        Сравнивает цены на разные продукты, которые имеют разную стоимость и
                        количество. <Link href="https://github.com/TTATPuOT/price-compare" target="_blank">Исходный код</Link> есть
                        у меня на Github. Можно добавить на главный экран телефона — сам пользуюсь очень часто
                    </Small>
                </div>
            </div>

            <div className={styles.item}>
                <Text><Link href="https://csgo-analytics.ru/" target="_blank">CSGO Analytics</Link></Text>
                <div className={styles.small}>
                    <Small>
                        Сервис для игроков в компьютерную онлайн-игру Counter-Strike: Global Offensive на чистом
                        PHP без фреймворков. Позволяет записывать результаты и анализировать их. Также, были
                        написаны расширения для сервиса онлайн-трансляций
                        Twitch: <Link href="https://dashboard.twitch.tv/extensions/zyt20fl337b4xbaisl72m23j5ipkce-0.1.0" target="_blank">оверлей</Link> и <Link href="https://dashboard.twitch.tv/extensions/fw3xzmoe7jgzc4w6mnwhznvq9rkr3g-0.0.2" target="_blank">панель</Link>
                    </Small>
                </div>
            </div>

            <div className={styles.item}>
                <Text><Link href="https://github.com/TTATPuOT/FishGulpBootstrap" target="_blank">Удобная рыба для Gulp</Link></Text>
                <div className={styles.small}>
                    <Small>Простенькая заготовка для Gulp, чтобы было удобно верстать лично мне</Small>
                </div>
            </div>

            <div className={styles.item}>
                <Text>Ещё, я раньше делал видео на YouTube</Text>
                <div className={styles.small}>
                    <Small>
                        Всегда испытывал симпатию к профессии телеведущих, дикторов и журналистов
                        <br/>
                        <Link href="https://www.youtube.com/neverov11" target="_blank">Патриотовский канал</Link> — канал об аниме
                        <br/>
                        <Link href="https://www.youtube.com/easy4us" target="_blank">EasyForUs</Link> — канал об онлайн-игре CS:GO
                    </Small>
                </div>
            </div>
        </Block>
    </MainLayout>;
}

export default Index;
