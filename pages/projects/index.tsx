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
                <Text>
                    <Link href="https://play.google.com/store/apps/details?id=ru.patriotovsky.pricecalculator" target="_blank">
                        Приложение Price Calculator для Android
                    </Link>
                </Text>
                <div className={styles.small}>
                    <Small>
                        Уже более осмысленная разработка на Kotlin под Android. Является красивым реворком «Срванятиля цен» из списка ниже.
                        Ну и работает быстрее, чем PWA.
                    </Small>
                    <Small>
                        <Link href="https://github.com/TTATPuOT/price-calculator" target="_blank">Исходный код</Link>
                    </Small>
                </div>
            </div>

            <div className={styles.item}>
                <Text>
                    <Link href="https://play.google.com/store/apps/details?id=ru.patriotovsky.gamesdatabase" target="_blank">
                        Приложение Games Database для Android
                    </Link>
                </Text>
                <div className={styles.small}>
                    <Small>
                        Простенький враппер вокруг API RAWG.io. Написал для практики в Kotlin и мобильных приложениях, всегда мечтал разрабатывать на нативных языках.
                    </Small>
                    <Small>
                        <Link href="https://github.com/TTATPuOT/games-database" target="_blank">Исходный код</Link>
                    </Small>
                </div>
            </div>

            <div className={styles.item}>
                <Text>
                    <Link href="https://play.google.com/store/apps/details?id=com.tinkoffjournal" target="_blank">
                        Приложение Тинькофф Журнал для Android
                    </Link>
                </Text>
                <div className={styles.small}>
                    <Small>
                        Приложение написал так, как люблю этот журнал, но до какого-то момента, у редакции не было своего приложения.
                    </Small>
                    <Small>
                        <Link href="https://github.com/TTATPuOT/tinkoff-journal-react-native" target="_blank">Исходный код</Link>
                    </Small>
                </div>
            </div>

            <div className={styles.item}>
                <Text><Link href="https://pass.patriotovsky.ru/" target="_blank">Генератор паролей</Link></Text>
                <div className={styles.small}>
                    <Small>
                        Простенькое PWA на Next.js.
                        Генерирует пароли на стороне клиента, не делиться и не хранит их. Очень удобно и быстро, мало кнопок.
                    </Small>
                    <Small>
                        <Link href="https://github.com/TTATPuOT/pass.patriotovsky.ru" target="_blank">Исходный код</Link>
                    </Small>
                </div>
            </div>

            <div className={styles.item}>
                <Text><Link href="https://patriotovsky.ru/compare/" target="_blank">Сравнение цен</Link></Text>
                <div className={styles.small}>
                    <Small>
                        Простенькое PWA на React с использование фронтенд ферймворка Ant Design.
                        Сравнивает цены на разные продукты, которые имеют разную стоимость и
                        количество. Можно добавить на главный экран телефона.
                        Вместо этого, выше есть моё приложение для Android, которое работает быстрее.
                    </Small>
                    <Small>
                        <Link href="https://github.com/TTATPuOT/price-compare" target="_blank">Исходный код</Link>
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
