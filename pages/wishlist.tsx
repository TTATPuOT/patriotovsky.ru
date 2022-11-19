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
        name: 'Твердый шампунь «Это я»',
        price: 560,
        image: '/wishlist/soap2.jpg',
        text: 'Вкусно пахнет и хорошо моет. Хватает только совсем не надолго. Нравится с лавандой, но интересно попробовать и другие ароматы',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/eto-ya-tvoy-tverdyy-shampun-s-lavandoy-218644052' },
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
        name: 'Охлаждатель лица для квеста BOBOVR F2',
        price: 4200,
        image: '/wishlist/bobovrf2.jpg',
        text: 'Хочу немного охладить лицо во время игр в VR',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/litsevoy-interfeys-s-aktivnoy-tsirkulyatsiey-vozduha-bobovr-f2-dlya-oculus-quest-2-302054936' },
            { name: 'BOBOVR (из Америки)', url: 'https://www.bobovr.com/product/f2/' },
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
        name: 'Паяльник TS100',
        price: 7000,
        image: '/wishlist/ts100.jpg',
        text: 'Самый крутой и модный паяльник во вселенной. Подойдёт любое жало, если есть возможность выбрать - то жало лучше "BC-2".',
        links: [
            { name: 'Aliexpress', url: 'https://aliexpress.ru/item/33007795183.html' },
            { name: 'ЧипДип (дорого)', url: 'https://www.chipdip.ru/product0/8004056955' },
        ]
    },
    {
        name: 'Набор для сборки механической клавиатуры',
        price: 7000,
        image: '/wishlist/keyboard.jpg',
        text: 'Нужно купить всё из комплекта: корпус, свичи (кнопочки) и кейкапы (насадки на кнопочки). Доставка с Алиэксперсса в МСК/Спб быстрая. Ключевые моменты: корпус EPOMAKER GK108 белый, производитель свичей Gateron, цвет свичей Brown, нужно 110 штук (110pcs) минимум. Кейкапы какие хочу приложил в ссылках.',
        links: [
            { name: 'Корпус EPOMAKER GK108 белый', url: 'https://aliexpress.ru/item/1005002782953368.html?sku_id=12000022162330737' },
            { name: 'Свичи Gateron Brown 110 штук минимум', url: 'https://aliexpress.ru/item/1005002148465444.html?sku_id=12000018893310563' },
            { name: 'Кейкапы белые', url: 'https://aliexpress.ru/item/1005001474971032.html?sku_id=12000016271171401' },
        ]
    },
    {
        name: 'Мышь Logitech PRO X SUPERLIGHT белая',
        price: 12000,
        image: '/wishlist/mouse.png',
        text: 'Logitech ушёл из России, найти может быть не просто. Некоторые магазины уже продают дороже, чем она стоила раньше.',
        links: [
            { name: 'Дороже в DNS', url: 'https://www.dns-shop.ru/product/d3fdf4c73da01b80/mys-besprovodnaa-logitech-pro-x-superlight-910-005942-belyj/' },
        ]
    },
    {
        name: 'Телефон Samsung S22',
        price: 55000,
        image: '/wishlist/s22.jpg',
        text: 'Цвет - белый',
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
