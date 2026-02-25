import type { NextPage } from 'next'
import styles from '@styles/Home.module.sass';
import Image from "next/image";
import antohaImg from '@public/antoha.jpg';
import { MainLayout } from '@components/Layout';
import Block, {Button, Header as BlockHeader, Link, Text} from "@components/Block";
import Small from "@components/Block/Small";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";

const Home: NextPage = () => {
    return <MainLayout>
        <div className="block">
            <div className={styles.main}>
                <div>
                    <h1>Антон Неверов 🎉</h1>
                    <h2>Kotlin и PHP разработчик</h2>
                </div>
                <div>
                    <div className={styles.avatar}>
                        <Image src={antohaImg} quality={95} alt="Ну, это я" objectFit="cover" />
                    </div>
                </div>
            </div>
        </div>

        <Block>
            <BlockHeader>Кратко</BlockHeader>
            <Text>
                Работаю на фрилансе с 2015 года. Разрабатываю продукты в одиночку и в команде.
                Своим главным преимуществом считаю широту знаний. За время работы на фрилансе
                получил большое количество опыта в разных сферах разработки. Сейчас живу в
                Санкт-Петербурге. Самые интересные проекты собрал в портфолио.
            </Text>
            <div className="text-center">
                <Button href="/projects">Перейти в портфолио</Button>
            </div>
        </Block>

        <Block>
            <BlockHeader>Биография</BlockHeader>
            <Text>
                <div className={styles.bio}>
                    <div className={styles.year}>
                        н. в.
                        <br/>
                        2023
                    </div>
                    <div className={styles.text}>
                        Разработчик в команде Adfox, Яндекс
                        <Small>
                            Делаем бекенд и фронтенд для интерфейса рекламного движка Adfox. Легаси на PHP, новый код на Kotlin
                        </Small>
                    </div>
                </div>
                <div className={styles.bio}>
                    <div className={styles.year}>
                        2023
                        <br/>
                        2018
                    </div>
                    <div className={styles.text}>
                        <Link href="/projects/1">Ведущий разработчик в фотостудии “Непоседы”</Link>
                        <Small>
                            Развиваю интернет-магазин, внутреннюю CRM, оптимизирую бизнес-процессы. Работа и хранение с
                            большим количеством фото
                        </Small>
                    </div>
                </div>
                <div className={styles.bio}>
                    <div className={styles.year}>
                        2022
                        <br/>
                        2021
                    </div>
                    <div className={styles.text}>
                        Фулстак разработчик в агенстве ZooInSpace
                        <Small>
                            Занимался преимущественно бекендом для различных проектов, но также были задачи по
                            фронтенду и мобильным приложениям
                        </Small>
                    </div>
                </div>
                <div className={styles.bio}>
                    <div className={styles.year}>2015</div>
                    <div className={styles.text}>
                        Взял первый заказ на фриланс-бирже
                        <Small>Очень долго работал на фрилансе в одиночку и не видел в этом проблем</Small>
                    </div>
                </div>
            </Text>
        </Block>

        <Block>
            <BlockHeader>Стэк</BlockHeader>
            <Text>
                <div className={styles.stack}>
                    Чаще всего использую <b>JavaScript</b> и ему подобные. Просто обожаю <b>TypeScript</b>.
                    На бекенде чаще всего именно он, хотя иногда приходится использовать <b>PHP</b> и <b>Laravel</b>,
                    но если нужен очень простой API, можно и <b>Express</b>. Фронт будет на <b>React</b>, сильно
                    реже <b>Vue</b>. А иногда нужны шаблонизаторы: <b>Smarty</b>, <b>Blade</b>, <b>Mustache</b>, <b>Pug</b>.
                    Препроцессоры <b>Less</b>, <b>SCSS</b> и <b>Sass</b> — само собой. Если нужно сделать SSR — то,
                    конечно же <b>Next.js</b>. Что до нативных приложений — приходилось
                    использовать <b>React Native</b> и <b>Electron</b>. Сборкой всегда занимается <b>Webpack</b>, изредко <b>Gulp</b>.
                    Базу данных предпочитаю реляционную <b>MySQL</b>, жду проекта где наконец-то пригодится <b>MongoDB</b>.
                    Если нет ORM во фреймворке, то использую <b>Doctrine</b> или <b>Sequelize</b>, но лучше
                    чем <b>Eloquent</b> я ещё не встречал. Если проще — <b>Knex</b>. Система контроля версия — <b>Git</b>.
                    Очень хочу попробовать себя в Android-разработке. Есть даже немного опыта на Kotlin в
                    разделе <Link href="/projects">проектов</Link>
                </div>
            </Text>
        </Block>

        <Block>
            <BlockHeader>Хобби</BlockHeader>
            <Text>
                Люблю готовить, горные лыжи, новые технологии и видеоигры
                <br />
                В свободное время помогаю другим в освоении языков на Хабр Q&A
            </Text>
        </Block>

        <Block>
            <BlockHeader>Контакты</BlockHeader>

            <div className={styles.contacts}>
                <div className={styles.column}>
                    <div className={styles.contact}>
                        <a href="https://github.com/TTATPuOT" target="_blank" title="Github" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> TTATPuOT</a>
                    </div>
                    <div className={styles.contact}>
                        <a href="https://linkedin.com/in/neverov12" target="_blank" title="Linkedin" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> neverov12</a>
                    </div>
                    <div className={styles.contact}>
                        <a href="https://qna.habr.com/user/TTATPuOT" target="_blank" title="Хабр Q&A" rel="noreferrer"><FontAwesomeIcon icon={faQuestionCircle} /> TTATPuOT</a>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.contact}>
                        <a href="https://t.me/neverov12" target="_blank" title="Telegram" rel="noreferrer"><FontAwesomeIcon icon={faTelegram} /> @neverov12</a>
                    </div>
                    <div className={styles.contact}>
                        <a href="mailto:neverov12@gmail.com" target="_blank" title="Email" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /> neverov12@gmail.com</a>
                    </div>
                </div>
            </div>
        </Block>
    </MainLayout>
}

export default Home;
