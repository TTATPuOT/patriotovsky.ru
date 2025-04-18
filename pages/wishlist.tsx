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
        name: 'Мясные наборы',
        price: 1000,
        image: '/wishlist/meat.png',
        text: 'Люблю любое тонко нарезанное мясо и колбасы: прошутто, хамон, балык и т.д.'
    },
    {
        name: 'Мармеладки от Мармеладыча',
        price: 1000,
        image: '/wishlist/mar.png',
        text: 'Очень люблю их наборы. Можно дарить любые, кроме лакрицы. Сладкие, кислые - все съем.',
        links: [
            { name: 'Мармеладыч на Ozon', url: 'https://www.ozon.ru/seller/marmeladych-2079989/products/?miniapp=seller_2079989' },
        ]
    },
    {
        name: 'Cменные лезвия для Philips OneBlade',
        price: 1500,
        image: '/wishlist/oneblade.png',
        text: 'Раз в год нужно менять лезвия на моём триммере. Текущее лезвие уже очень давно устало. Лучше всего покупать в офлайн магазине, там меньше вероятность купить подделку. Но на Ozon/Маркете тоже можно найти.'
    },
    {
        name: 'Сертификат на полную мойку авто',
        price: 2000,
        image: '/wishlist/wash.png',
        text: 'Сертификат на мойку авто с протиркой панелей салона и пылесосом. В любую автомойку на северо-западе Питера'
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
        name: 'Наушники проводные MoonDrop Chu 2',
        price: 2000,
        image: '/wishlist/phones.png',
        text: 'Мне давно нужны проводные наушники для Steam Deck\'а. Эти - подходят идеально.',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/naushniki-provodnye-moondrop-chu-2-vnutrikanalnye-bez-mikrofona-3-5-mm-1849317726/' },
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
        name: 'Ящик сладких напитков',
        price: 2500,
        image: '/wishlist/cola.png',
        text: 'Люблю всякие напитки. Чтобы не дарить чуть-чуть, можно подарить сразу ящик! Я люблю: Coca-Cola обычная/ванильная/без сахара, капучино/латте от Lotte/Parmalat, Милкис обычный, Chupa Chups, Dr. Pepper, Dr.Pepper Flat Vanilla (мой любимый)',
        links: [
            { name: 'Dr Pepper Vanilla Float, Ozon', url: 'https://www.ozon.ru/product/gazirovannyy-napitok-dr-pepper-vanilla-float-335-ml-h-12-sht-1644902228' },
            { name: 'Dr Pepper, Ozon', url: 'https://www.ozon.ru/product/napitok-gazirovannyy-dr-pepper-classic-24-sht-h-330-ml-doktor-pepper-1215351614' },
        ]
    },
    {
        name: 'Корейские/Японские сладости',
        price: 2500,
        image: '/wishlist/candy.png',
        text: 'Любые интересные корейские или японские сладости. Продаются даже наборами. А можно купить и по-отдельности.',
        links: [
            { name: 'Набор от JCANDY, Ozon', url: 'https://www.ozon.ru/product/sladkiy-podarok-jcandy-prime-box-premium-edition-yaponskie-koreyskie-aziatskie-sladosti-1194574600' },
        ]
    },
    {
        name: 'Джин Bombay Sapphire',
        price: 5000,
        image: '/wishlist/bombay.png',
        text: 'Люблю этот джин, но его очень сложно найти в России. К тому же он очень дорогой, самое то для подарка! Где купить - не знаю, штука редкая.'
    },
    {
        name: 'Оригинальный чехол от Google для Pixel 9 Pro, цвет Porcelain',
        price: 5000,
        image: '/wishlist/case.png',
        text: 'Чехол для Pixel 9 (pro и без pro - одно и то же), цвет Porcelain (светлосерый). Купить в России можно только на Авито через перекупов.',
        links: [
            { name: 'Google Store (для примера)', url: 'https://store.google.com/us/product/pixel_9_pro_phone_case?hl=en-US&selections=eyJwcm9kdWN0RmFtaWx5IjoiWkdWMmFXTmxYMlpoYldsc2VWOWZjR2w0Wld4Zk9WOWhibVJmT1Y5d2NtOWZZMkZ6WlY5bVlXMD0iLCJoZXJvUHJvZHVjdHMiOltbIlgzQnBlR1ZzWHpsZllXNWtYemxmY0hKdlgyTmhjMlZmY0c5eVkyVnNZV2x1IiwxLG51bGxdXX0%3D' },
        ]
    },
    {
        name: 'Игры для PlayStation 5',
        price: 5000,
        image: '/wishlist/games.jpg',
        text: 'Хороших игр много, многие из них я пропустил, нужно наращивать упущенное. Чтобы не удлинять список, здесь оставляю ссылку на все игры, которые мне интересны (сверху самые интересные, ниже менее интересные). Купить можно где угодно. Важно, чтобы продавец продавал именно диск с игрой, а не аккаунт или цифровую версию.',
        links: [
            { name: 'Astro Bot - 6500 руб, Ozon', url: 'https://www.ozon.ru/product/igra-igra-astro-bot-playstation-5-russkie-subtitry-1695798659' },
            { name: 'Monster Hunter Wilds - 5500 руб, Ozon', url: 'https://www.ozon.ru/product/igra-monster-hunter-wilds-playstation-5-russkaya-versiya-1924944680' },
            { name: 'Ratchet & Clank: Сквозь Миры - 3500 руб, Ozon', url: 'https://www.ozon.ru/product/igra-ratchet-clank-rift-apart-skvoz-miry-ps5-playstation-5-russkaya-versiya-1632635442' },
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
            { name: 'Ozon', url: 'https://www.ozon.ru/product/analizator-kachestva-vozduha-xiaomi-qingping-air-monitor-2-cgs2-white-1687280637' },
        ]
    },
    {
        name: 'Стул Herman Miller Aeron Mineral - размер B',
        price: 175000,
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
