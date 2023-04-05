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
        price: 320,
        image: '/wishlist/zewa.jpg',
        text: 'Санкционный продукт, которого очень не хватает',
        links: [
            { name: 'Ozon (8 рулонов)', url: 'https://www.ozon.ru/product/tualetnaya-bumaga-zewa-just-1-4-sloya-8-rulonov-147774447/' },
            { name: 'Ozon (4 рулона)', url: 'https://www.ozon.ru/product/tualetnaya-bumaga-zewa-just-1-4-sloya-4-rulona-137989195/' },
        ]
    },
    {
        name: 'Фильтр воды для кофемашины De\'Longhi DLSC002',
        price: 1000,
        image: '/wishlist/filter.jpg',
        text: 'Меняю фильтр в кофемашине каждые 2 месяца. Можно выгодно купить в МВидео/Эльдорадо за бонусы.',
        links: [
            { name: 'Яндекс.Маркет', url: 'https://market.yandex.ru/product--filtr-vody-dlia-kofemashiny-de-longhi-dlsc002/43054656' },
            { name: 'De\'Longhi', url: 'https://delonghi.ru/product/de-longhi-filtr-dlya-kofemashin-de-longhisc002' },
        ]
    },
    {
        name: 'Средство De\'Longhi EcoDecalk DLSC500',
        price: 1000,
        image: '/wishlist/eco.jpg',
        text: 'Всё для той же кофемашины. Это средство требуется для промывки примерно раз в месяц. Одной банки хватает на 5 промывок.',
        links: [
            { name: 'Яндекс.Маркет', url: 'https://market.yandex.ru/product--sredstvo-de-longhi-ecodecalk-dlsc500-500-ml/388454715' },
            { name: 'De\'Longhi', url: 'https://delonghi.ru/product/de-longhi-sr-ochistki-ot-nakipi-de-longhisc500' },
        ]
    },
    {
        name: 'Трусы',
        price: 1000,
        image: '/wishlist/pantsu.png',
        text: 'Трусы только хлопковые, боксеры. Только компании: Columbia, FILA, Uniqlo. Отличный ассортимент в Спортмастере.',
        links: [
            { name: 'Спортмастер', url: 'https://www.sportmaster.ru/catalog/muzhskaya_odezhda/bele/?f-brand_id=6619,6638' },
        ]
    },
    {
        name: 'Ящик молока Parmalat 0.05% без лактозы',
        price: 1500,
        image: '/wishlist/milk.jpg',
        text: 'Пью молоко каждый день с кофе. На неделю хватает двух пачек.',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/moloko-parmalat-uht-comfort-bezlaktoznoe-0-05-1-l-h-12-sht-178324381' },
            { name: 'Яндекс.Маркет', url: 'https://market.yandex.ru/product--moloko-parmalat-comfort-ultrapasterizovannoe-bezlaktoznoe-0-05-12-sht-po-1-l/663641328' },
        ]
    },
    {
        name: 'Фисташки',
        price: 1600,
        image: '/wishlist/fistashki.jpg',
        text: 'Люблю фисташки, покупаю килограммами. Хорошие покупаю на Ozon',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/vkusnaya-zharenaya-solenaya-fistashka-fandogi-1-kg-iran-orehi-s-solyu-1-000-gr-iranskie-234062324' }
        ]
    },
    {
        name: 'Игры для PlayStation 5',
        price: 5000,
        image: '/wishlist/games.jpg',
        text: 'Хороших игр много, многие из них я пропустил, нужно наращивать упущенное. Чтобы не удлинять список, здесь оставляю ссылку на все игры, которые мне интересны (сверху самые интересные, ниже менее интересные). Купить можно где угодно. Важно, чтобы продавец продавал именно диск с игрой, а не аккаунт или цифровую версию.',
        links: [
            { name: 'Hogwarts Legacy - 5500 руб, Маркет', url: 'https://market.yandex.ru/product--igra-hogwarts-legacy-standard-edition-dlia-playstation-5/1812470565' },
            { name: 'Need for Speed Unbound - 4600 руб, Маркет', url: 'https://market.yandex.ru/product--igra-need-for-speed-unbound/1823018275' },
            { name: 'Человек-Паук: Майлз Моралес - 3700 руб, Маркет', url: 'https://market.yandex.ru/product--igra-chelovek-pauk-mailz-morales/749526764' },
            { name: 'The Callisto Protocol - 5000 руб, Маркет', url: 'https://market.yandex.ru/product--videoigra-the-callisto-protocol-ps5-s-russkimi-subtitrami/1773846968' },
            { name: 'Ratchet & Clank: Сквозь Миры - 4000 руб, Маркет', url: 'https://market.yandex.ru/product--igra-ratchet-clank-skvoz-miry/942818431' },
            { name: 'Kena: Bridge of Spirits - 3400 руб, Маркет', url: 'https://www.ozon.ru/product/igra-kena-bridge-of-spirits-deluxe-edition-playstation-5-russkie-subtitry-849053851' },
            { name: 'Sonic Frontiers - 3700 руб, Маркет', url: 'https://www.ozon.ru/product/igra-ps5-sonic-frontiers-russkie-subtitry-playstation-5-russkie-subtitry-825064316' },
        ]
    },
    {
        name: 'Док станция для квеста BOBOVR D2',
        price: 5000,
        image: '/wishlist/bobovrd2.jpg',
        text: 'Хочу немного охладить лицо во время игр в VR',
        links: [
            { name: 'Aliexpress', url: 'https://aliexpress.ru/item/1005003962050705.html' },
            { name: 'BOBOVR (из Америки)', url: 'https://www.bobovr.com/product/d2/' },
        ]
    },
    {
        name: 'Хороший набор Lego',
        price: 5000,
        image: '/wishlist/lego.jpg',
        text: 'Lego всегда тема. Серии Technic, Architecture, Ideas, Minecraft. Creator 3-in-1 не очень понравился, разбирать собранное не очень интересно.'
    },
    {
        name: 'Паяльник TS100',
        price: 5200,
        image: '/wishlist/ts100.jpg',
        text: 'Самый крутой и модный паяльник во вселенной. Подойдёт любое жало, если есть возможность выбрать - то жало лучше "BC-2".',
        links: [
            { name: 'Aliexpress', url: 'https://aliexpress.ru/item/32860309312.html' },
            { name: 'ЧипДип (дорого)', url: 'https://www.chipdip.ru/product0/8004056955' },
        ]
    },
    {
        name: 'Повязка для квеста BOBOVR M2',
        price: 5500,
        image: '/wishlist/bobovrm2.jpg',
        text: 'Очень удобная повязка для Oculus Quest 2, давно хочу себе такую',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/reguliruemoe-kreplenie-bobovr-m2-dlya-shlema-oculus-quest-2-halo-strap-355772757' },
            { name: 'BOBOVR (из Америки)', url: 'https://www.bobovr.com/product/m2/' },
        ]
    },
    {
        name: 'Роутер Keenetic Hopper',
        price: 7000,
        image: '/wishlist/router.jpg',
        text: 'Давно хочу обновить роутер. Но мой меня вполне устраивает. Но вот бы wifi 6 и USB порт не помешал бы совсем. Keenetic делает лучшие роутеры на данный момент. Hopper - минимально оптимальная модель, отвечающая всем моим требованиям. Можно и круче, например Giga.',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/wi-fi-router-keenetic-hopper-kn-3810-554543961' },
        ]
    },
    {
        name: 'Бытовой измельчитель Bort TITAN MAX Power FullControl',
        price: 16000,
        image: '/wishlist/bort.jpg',
        text: 'Очень хочу себе измельчитель бытовых отходов. Полностью устроит эта модель.',
        links: [
            { name: 'Яндекс.Маркет', url: 'https://market.yandex.ru/product--bytovoi-izmelchitel-bort-titan-max-power-fullcontrol/512987113' },
        ]
    },
    {
        name: 'Геймпад DualSense Edge',
        price: 24000,
        image: '/wishlist/gamepad.jpg',
        text: 'Самый крутой геймпад на данный момент. Но и стоит как половина консоли.',
        links: [
            { name: 'Aliexpress', url: 'https://aliexpress.ru/item/1005005149345063.html?sku_id=12000032597391279' },
            { name: 'CDEK Shopping', url: 'https://cdek.shopping/p/353106/besprovodnoi-geimpad-sony-dualsense-edge-belyi' },
            { name: 'ИгроРай', url: 'https://igroray.ru/catalog/geympad-sony-dualsense-edge/' },
            { name: 'Яндекс.Маркет', url: 'https://market.yandex.ru/product--besprovodnoi-geimpad-dualsense-edge-cfi-zcp1/1810726144' },
        ]
    },
    {
        name: 'Steam Deck',
        price: 45000,
        image: '/wishlist/deck.jpg',
        text: 'Нормальная портативная консоль. Стоит немало. Чтобы сэкономить лучше купить версию с 64ГБ памяти, а потом вставить SD-карту.',
        links: [
            { name: 'Яндекс.Макрет', url: 'https://market.yandex.ru/product--igrovaia-pristavka-valve-steam-deck/1786450461' },
            { name: 'DNS', url: 'https://www.dns-shop.ru/product/a087d8a03a28ed20/portativnaa-igrovaa-konsol-steam-deck/' },
        ]
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
