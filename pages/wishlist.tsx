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
        name: 'Твердый шампунь «Это я»',
        price: 650,
        image: '/wishlist/soap2.jpg',
        text: 'Вкусно пахнет и хорошо моет. Хватает только совсем не надолго. Нравится с лавандой, но интересно попробовать и другие ароматы',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/eto-ya-tvoy-tverdyy-shampun-s-lavandoy-218644052' },
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
        price: 600,
        image: '/wishlist/pantsu.png',
        text: 'Трусы только бренда Uniqlo размера XL (58 RUS). Заказывать можно только с Ламоды, больше нигде не продаются.',
        links: [
            { name: 'Lamoda - ссылка на модели, которые точно подойдут', url: 'https://www.lamoda.ru/c/5291/clothes-bokserymuj/?sitelink=breadcrumbs&brands=33366&size_values=58' },
        ]
    },
    {
        name: 'Ящик молока Parmalat 0.05% без лактозы',
        price: 1500,
        image: '/wishlist/milk.jpg',
        text: 'Пью молоко каждый день с кофе. На неделю хватает двух пачек.',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/moloko-parmalat-uht-comfort-bezlaktoznoe-0-05-1-l-h-12-sht-178324381' },
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
            { name: 'Ratchet & Clank: Сквозь Миры - 4000 руб, Маркет', url: 'https://market.yandex.ru/product--igra-ratchet-clank-skvoz-miry/942818431' },
        ]
    },
    {
        name: 'Хороший набор Lego',
        price: 5000,
        image: '/wishlist/lego.jpg',
        text: 'Lego всегда тема. Серии Technic, Architecture, Ideas, Minecraft. Creator 3-in-1 не очень понравился, разбирать собранное не очень интересно.'
    },
    {
        name: 'M2 SSD диск',
        price: 6000,
        image: '/wishlist/ssd.png',
        text: 'Вариантов масса. Главные характеристики, которые нужно учесть: форм-фактор 2280, PCIe 4, компании Samsung, Kingston, Western Digital. Объём от 500 и более гигабайт. Хорошие варианты собрал ниже, ссылки на Ozon.',
        links: [
            { name: 'Kingston FURY Renegade - 6000 руб', url: 'https://www.ozon.ru/product/500-gb-vnutrenniy-ssd-disk-kingston-fury-renegade-sfyrs-500g-396269989/' },
            { name: 'Samsung MZ-V8P500BW - 6000 руб', url: 'https://www.ozon.ru/product/500-gb-vnutrenniy-ssd-disk-samsung-mz-v8p500bw-mz-v8p500bw-1189261147/' },
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
        name: 'Курсы английского',
        price: 10000,
        image: '/wishlist/eng.png',
        text: 'В школах Инглекс или Яндекс.Практикум',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/wi-fi-router-keenetic-hopper-kn-3810-554543961' },
        ]
    },
    {
        name: 'Геймпад DualSense Edge',
        price: 24000,
        image: '/wishlist/gamepad.jpg',
        text: 'Самый крутой геймпад на данный момент. Но и стоит как половина консоли.',
        links: [
            { name: 'CDEK Shopping', url: 'https://cdek.shopping/p/353106/besprovodnoi-geimpad-sony-dualsense-edge-belyi' },
            { name: 'ИгроРай', url: 'https://igroray.ru/catalog/geympad-sony-dualsense-edge/' },
            { name: 'Яндекс.Маркет', url: 'https://market.yandex.ru/product--besprovodnoi-geimpad-dualsense-edge-cfi-zcp1/1810726144' },
        ]
    },
    {
        name: 'Nissan Qashqai',
        price: 2500000,
        image: '/wishlist/car.png',
        text: 'Ну тут всё понятно. Можно, конечно и X-Trail, отказываться не буду',
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
