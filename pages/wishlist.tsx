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
        name: 'Фисташки',
        price: 1600,
        image: '/wishlist/fistashki.jpg',
        text: 'Люблю фисташки, покупаю килограммами. Хорошие покупаю на Ozon',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/vkusnaya-zharenaya-solenaya-fistashka-fandogi-1-kg-iran-orehi-s-solyu-1-000-gr-iranskie-234062324' }
        ]
    },
    {
        name: 'Ящик молока Parmalat 0.05% без лактозы',
        price: 1700,
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
        text: 'Люблю всякие напитки. Чтобы не дарить чуть-чуть, можно подарить сразу ящик! Я люблю: Coca-Cola (Добрый кола) обычная/ванильная/без сахара, капучино/латте от Lotte/Parmalat, Милкис обычный, Chupa Chups, Dr. Pepper (обычный, Cream Soda), Dr.Pepper Flat Vanilla (мой любимый)',
        links: [
            { name: 'Добрый, Ozon', url: 'https://www.ozon.ru/product/gazirovannyy-napitok-dobryy-kola-24-sht-h-0-33-l-688376387/' },
            { name: 'Добрый без сахара, Ozon', url: 'https://www.ozon.ru/product/gazirovannyy-napitok-dobryy-kola-bez-sahara-12-sht-h-0-33-l-688375923' },
            { name: 'Dr Pepper, Ozon', url: 'https://www.ozon.ru/product/napitok-gazirovannyy-dr-pepper-classic-24-sht-h-330-ml-doktor-pepper-1215351614' },
            { name: 'Chupa-Chups клубинчный, Ozon', url: 'https://www.ozon.ru/product/chupa-chups-klubnika-so-slivkami-0-345l-12sht-chupa-chups-1418772607' },
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
        name: 'Зарядная станция для геймпадов PS5',
        price: 2500,
        image: '/wishlist/dock.png',
        text: 'ВАЖНО! Очень часто подделывают. Нужно читать отзывы или покупать в проверенных магазина (DNS, М.Видео, Эльдорадо). Ссылки на оригиналы добавил. Если цена ниже - скорее всего, подделка. На озоне не нашёл дешёвых оригинальных вариантов.',
        links: [
            { name: 'Яндекс.Маркет', url: 'https://market.yandex.ru/product--zariadnaia-stantsiia-dualsense-na-dva-geimpada-dlia-ps5' },
            { name: 'DNS', url: 'https://www.dns-shop.ru/product/ea7634350414ed20/zaradnaa-stancia-playstation-dualsense-charging-station-belyj' },
        ]
    },
    {
        name: 'Игры для PlayStation 5',
        price: 5000,
        image: '/wishlist/games.jpg',
        text: 'Хороших игр много, многие из них я пропустил, нужно наращивать упущенное. Чтобы не удлинять список, здесь оставляю ссылку на все игры, которые мне интересны (сверху самые интересные, ниже менее интересные). Купить можно где угодно. Важно, чтобы продавец продавал именно диск с игрой, а не аккаунт или цифровую версию.',
        links: [
            { name: 'Dragons Dogma 2 - 7500 руб, Ozon', url: 'https://www.ozon.ru/product/igra-dragons-dogma-ii-2-playstation-5-russkie-subtitry-1459408726' },
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
        text: 'Давно хочу обновить роутер. Но мой меня вполне устраивает. Но вот wifi 6 и USB порт не помешали бы совсем. Keenetic делает лучшие роутеры на данный момент. Hopper - минимально оптимальная модель, отвечающая всем моим требованиям. Можно и круче, например Giga.',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/wi-fi-router-keenetic-hopper-kn-3810-554543961' },
        ]
    },
    {
        name: 'Белая Яндекс.Станция Миди с Zigbee',
        price: 12000,
        image: '/wishlist/ya.png',
        text: 'Zigbee - это такой протокол для управлением умным домом',
        links: [
            { name: 'Ozon', url: 'https://www.ozon.ru/product/umnaya-kolonka-yandeks-stantsiya-midi-s-alisoy-s-zigbee-seryy-1406852214' },
            { name: 'Яндекс.Маркет', url: 'https://market.yandex.ru/product--stantsiia-midi/1910792707?sku=102224829824' },
        ]
    },
    {
        name: 'Galaxy Watch 6 Classic 43mm',
        price: 25000,
        image: '/wishlist/watch.png',
        text: 'Чёрные или серебристые часы с вензелем, 43мм. Бывает ещё более крутая версия на 47мм, иногда она даже дешевле младшей версии.',
        links: [
            { name: 'Серебристые, Яндекс.Маркет', url: 'https://market.yandex.ru/product--samsung-galaxy-watch-6-classic-43mm-silver/1934571910?sku=102399066883&do-waremd5=PDLByR3dnqxNbuNzaGvtTQ&uniqueId=965815' },
            { name: 'Черные, Ozon', url: 'https://www.ozon.ru/product/samsung-umnye-chasy-galaxy-watch-6-classic-47mm-r960-versiya-version-1-5-super-amoled-ekran-gps-1176165742/' },
        ]
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
