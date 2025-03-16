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
        name: 'Датчики протечек с протоколом Zigbee или Metter',
        price: 1000,
        image: '/wishlist/water.png',
        text: 'Датчики, которые подключаются к Алиси Миди (протоколы Zigbee, Metter, умный дом Яндекса). Всего нужно 3-4 штуки, но хватит и 1-2 пока что',
        links: [
            { name: 'От китайцев (хорошая фирма), Ozon', url: 'https://www.ozon.ru/product/umnyy-datchik-protechki-zigbee-yandeks-alisoy-google-home-1567283765/' },
            { name: 'От Яндекса, Ozon', url: 'https://www.ozon.ru/product/datchik-protechki-yandeks-zigbee-yndx-00521-912307791' },
        ]
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
        name: 'Беспроводная кнопка Яндекс',
        price: 2200,
        image: '/wishlist/button.png',
        text: 'Это, просто, такая кнопка, куда можно кликать и она что-то сделает. Давно хочу такую на роль мастер-выключателя света',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/besprovodnaya-knopka-yandeks-zigbee-yndx-00524-912313227/' },
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
        name: 'Кейкапы для клавиатуры с прозрачными полосами',
        price: 2500,
        image: '/wishlist/keycaps.png',
        text: 'Набор кейкапов с прозрачными линиями. Видел такие кейкапы в тиктоке, но жаба душит самому купить. Можно поискать и другие на клавиатуру 100%, но много где это рисунок, а не реально прозрачные линии.',
        links: [
            { name: 'Aliexpress', url: 'https://aliexpress.ru/item/1005006583153939.html?sku_id=12000041564223043' },
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
