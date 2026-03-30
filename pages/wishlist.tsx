import type { NextPage } from 'next'
import { MainLayout } from '@components/Layout';
import WishlistItem from '@components/WishlistItem';
import { WishlistItemData } from '@lib/types';
import { useMemo } from 'react';
import WishlistScrollspy from '@components/WishlistScrollspy';

const items: WishlistItemData[] = [
    {
        name: 'Деньги',
        price: 1,
        image: '/wishlist/money.jpg',
        text: 'Если лениво покупать что-либо из списка, всегда можно просто подарить деньги'
    },
    {
        name: 'Туалетная бумага Zewa Just 1',
        price: 250,
        image: '/wishlist/zewa.jpg',
        text: 'Санкционный продукт, которого очень не хватает',
        links: [
            { name: 'Ozon (8 рулонов)', url: 'https://www.ozon.ru/product/tualetnaya-bumaga-zewa-just-1-4-sloya-8-rulonov-147774447/' },
            { name: 'Ozon (4 рулона)', url: 'https://www.ozon.ru/product/tualetnaya-bumaga-zewa-just-1-4-sloya-4-rulona-137989195/' },
        ]
    },
    {
        name: 'Вкусный протеин',
        price: 900,
        image: '/wishlist/protein.png',
        text: 'Самый вкусный проетин, который я пробовал - от бренда USN Bluelab. Вкус - шоколадный, но готов попробовать и любой другой вкус, но тогда небольшую баночку (300-400 грамм). В офлайн магазине для качков СИЛЬНО ДЕШЕВЛЕ чем на озоне. Называется BlueLab Whey или BlueLab Whey+. Можно и дешёвый российский аналог - 1WIN или Первый Русский Протеин',
        links: [
            { name: 'USN Bluelab шоколадный маленький - 3000 руб, Ozon', url: 'https://www.ozon.ru/product/protein-100-bluelab-whey-premium-protein-usn-476-gr-shokolad-1723546345/' },
            { name: 'USN Bluelab шоколадный средний - 6500 руб, Ozon', url: 'https://www.ozon.ru/product/usn-syvorotochnyy-protein-shokolad-908-gr-blue-lab-whey-chocolate-2774926913/' },
            { name: '1WIN Клубничный маленький - 1700 руб, Ozon', url: 'https://www.ozon.ru/product/protein-syvorotochnyy-s-vsaa-whey-protein-vkus-klubnika-450gr-1297124238/' },
            { name: 'Первый Русский Протеин Шоколадный маленький - 900 руб, Ozon', url: 'https://www.ozon.ru/product/suhoy-pishchevoy-syvorotochnyy-protein-protein-so-vkusom-shokolada-450-gr-1580399782/' },
        ]
    },
    {
        name: 'Протеиновые батончики, печеньки и лакомства',
        price: 1000,
        image: '/wishlist/bars.png',
        text: 'Важно смотреть на КБЖУ! Всего калорий МЕНЬШЕ 190, белков БОЛЬШЕ углеводов, жиров МИНИМАЛЬНОЕ количество (обычно, 6-10 гр). Многие спортивные батончики - скам по КБЖУ. Пробовал Bombbar и Chikalab - у первых лучше КБЖУ, вторые вкуснее.',
        links: [
            { name: 'Разные вкусы печенек Chikalab, 800р, Ozon', url: 'https://www.ozon.ru/product/chikalab-proteinovoe-pechene-v-shokolade-bez-sahara-chikapie-troynoy-shokolad-9sht-h-60g-277959964/' },
            { name: 'Другие сладости от Chikalab, Ozon', url: 'https://www.ozon.ru/brand/chikalab-87353933/' },
        ]
    },
    {
        name: 'Мясные и рыбные наборы',
        price: 1000,
        image: '/wishlist/meat.png',
        text: 'Люблю любое тонко нарезанное мясо и колбасы: прошутто, хамон, балык, икра, вяленая рыба, красная рыба и т.д.'
    },
    {
        name: 'Вкусный ароматизированный чай',
        price: 1000,
        image: '/wishlist/tea.png',
        text: 'Офлайн сеть магазинов Кантата продают мой любимый Королевский Эрл Грей. Так же нравится Клубника со Сливками. Ещё хочу попробовать набор "Пора заварить".',links: [
            { name: 'Кантата', url: 'https://www.cantata.ru/' },
            { name: 'Набор "Пора заварить", 5000р, Ozon', url: 'https://www.ozon.ru/product/chay-pora-zavarit-podarochnyy-nabor-k-23-fevralya-3542297512/' },
        ]
    },
    {
        name: 'Дезодорант Clarins Men',
        price: 2000,
        image: '/wishlist/clarins.png',
        text: 'Хороший дезодорант, но стоит тоже хорошо',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/sharikovyy-dezodorant-antiperspirant-dlya-muzhchin-anti-transpirant-roll-on-144043545/' },
        ]
    },
    {
        name: 'Кофе в зернах Sibaristica Эфиопия Иргачефф',
        price: 2000,
        image: '/wishlist/coffee.png',
        text: 'Отличный кофе от питерского обжарщика, но можно и другое в зёрнах (только не ароматизированные зёрна, их нельзя в кофемашину)',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/kofe-v-zernah-sibaristica-efiopiya-irgacheff-srednyaya-obzharka-1kg-876315989/' },
        ]
    },
    {
        name: 'Ящик молока Parmalat 0.05% без лактозы',
        price: 2000,
        image: '/wishlist/milk.jpg',
        text: 'Пью молоко каждый день с кофе. На неделю хватает одной пачки.',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/moloko-parmalat-uht-comfort-bezlaktoznoe-0-05-1-l-h-12-sht-178324381' },
        ]
    },
    {
        name: 'Джин Bombay Sapphire',
        price: 2500,
        image: '/wishlist/bombay.png',
        text: 'Люблю этот джин, но его очень сложно найти в России. К тому же он очень дорогой, самое то для подарка! Где купить - не знаю, штука редкая.'
    },
    {
        name: 'Сертификат на полную мойку авто',
        price: 3500,
        image: '/wishlist/wash.png',
        text: 'Хорошая мойка - М3 на проспекте Просвещения. Тариф "Всё включено" или похожий, с внутренней уборкой салона. Можно купить сертификат на сайте',
        links: [
            { name: "Автомойка М3", url: 'https://yandex.ru/maps/-/CPerI6kJ' },
        ]
    },
    {
        name: 'Чехол Tomtoc G38 для Steam Deck',
        price: 3500,
        image: '/wishlist/case.png',
        text: 'Хороший компактный лёгкий чехол, лучше комплектного. Буду брать в поездки',
        links: [
            { name: "Ozon", url: 'https://www.ozon.ru/product/chehol-tomtoc-g38-na-steam-deck-na-molnii-udaroprochnyy-vodonepronitsaemyy-s-ruchkoy-dlya-1506181464/' },
        ]
    },
    {
        name: 'Игры для PlayStation 5 (и PS4)',
        price: 5000,
        image: '/wishlist/games.jpg',
        text: 'Хороших игр много, многие из них я пропустил, нужно наращивать упущенное. Чтобы не удлинять список, здесь оставляю ссылку на все игры, которые мне интересны (сверху самые интересные, ниже менее интересные). Купить можно где угодно. Важно, чтобы продавец продавал именно диск с игрой, а не аккаунт или цифровую версию.',
        links: [
            { name: 'Monster Hunter Wilds - 5500 руб, Ozon', url: 'https://www.ozon.ru/product/igra-monster-hunter-wilds-playstation-5-russkaya-versiya-1924944680' },
        ]
    },
    {
        name: 'Хороший набор Lego',
        price: 5000,
        image: '/wishlist/lego.jpg',
        text: 'Lego всегда тема. Серии Technic, Architecture, Ideas, Minecraft. Creator 3-in-1 не очень понравился, разбирать собранное не очень интересно.'
    },
    {
        name: 'Анализатор качества воздуха Xiaomi Qingping Air Monitor 2, белый',
        price: 12000,
        image: '/wishlist/airm.png',
        text: 'Давно хочу такой датчик себе в умный дом. Умеет мерить СО2, температуру, важность или, просто, показывать время. Глобальная версия, чтобы буквы были хотя бы английскими',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/analizator-kachestva-vozduha-xiaomi-qingping-air-monitor-cgs2-6-v-1-datchik-uglekislogo-gaza-1573686508/' },
        ]
    },
    {
        name: 'Стул Herman Miller Aeron Mineral - размер B',
        price: 150000,
        image: '/wishlist/chair.png',
        text: 'Отличный стул, сижу на похожем в офисе. Спина не устаёт и держит осанку. Домой хотелось бы такой же.'
    },
    {
        name: 'Nissan Qashqai',
        price: 2500000,
        image: '/wishlist/car.png',
        text: 'Можно, конечно и X-Trail, отказываться не буду',
    },
];

const Home: NextPage = () => {
    const elements = useMemo(() => {
        return items.map((i: WishlistItemData) => {
            return <WishlistItem key={i.name} data={i} />
        })
    }, []);

    return <MainLayout>
        <h1>Что мне подарить? 🎁</h1>
        <p>Список подарков и нужных вещей: от пары сотен тысяч, до миллионов миллиардов рублей.</p>
        <p>Подарки расположены по увеличению цены</p>
        <WishlistScrollspy items={items} />
        {elements}
    </MainLayout>
}

export default Home;
