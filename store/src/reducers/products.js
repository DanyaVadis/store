const initialState = {
    products: [
        {
            id: 1,
            name: 'Беговая дорожка CardioPower S35 Беговые дорожки',
            categoryId: 20,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: '34 900 ₽',
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 2,
            name: 'Беговая дорожка CardioPower S35 Эллиптические тренажеры',
            categoryId: 21,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 3,
            name: 'Беговая дорожка CardioPower S35 Велотренажеры',
            categoryId: 22,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 4,
            name: 'Беговая дорожка CardioPower S35 Cтепперы',
            categoryId: 23,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 5,
            name: 'Беговая дорожка CardioPower S35 Гребные тренажеры',
            categoryId: 24,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 6,
            name: 'Беговая дорожка CardioPower S35 Сайклинг',
            categoryId: 25,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 7,
            name: 'Беговая дорожка CardioPower S35 Горнолыжные тренажеры',
            categoryId: 26,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 8,
            name: 'Беговая дорожка CardioPower S35 Мультистанции',
            categoryId: 27,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 9,
            name: 'Беговая дорожка CardioPower S35 Рамы и комплексы',
            categoryId: 28,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 10,
            name: 'Беговая дорожка CardioPower S35 Скамьи',
            categoryId: 29,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 11,
            name: 'Беговая дорожка CardioPower S35 Батуты',
            categoryId: 30,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 12,
            name: 'Беговая дорожка CardioPower S35 Баскетбол',
            categoryId: 31,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 13,
            name: 'Беговая дорожка CardioPower S35 Футбол',
            categoryId: 32,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 14,
            name: 'Беговая дорожка CardioPower S35 Гантели и гантельные ряды',
            categoryId: 33,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 15,
            name: 'Беговая дорожка CardioPower S35 Гири',
            categoryId: 34,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 16,
            name: 'Беговая дорожка CardioPower S35 Диски и грифы',
            categoryId: 35,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 17,
            name: 'Беговая дорожка CardioPower S35 Стойки и хранение',
            categoryId: 36,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 18,
            name: 'Беговая дорожка CardioPower S35 Аэрохоккей',
            categoryId: 37,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 19,
            name: 'Беговая дорожка CardioPower S35 Настольный футбол',
            categoryId: 38,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 20,
            name: 'Беговая дорожка CardioPower S35 Массажные кресла',
            categoryId: 39,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 21,
            name: 'Беговая дорожка CardioPower S35 Массажеры',
            categoryId: 40,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 22,
            name: 'Беговая дорожка CardioPower S35 Массажные столы',
            categoryId: 41,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 23,
            name: 'Беговая дорожка CardioPower S35 Бесконтактные гидромассажные ванны',
            categoryId: 42,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 24,
            name: 'Беговая дорожка CardioPower S35 Йога и пилатес',
            categoryId: 43,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 25,
            name: 'Беговая дорожка CardioPower S35 Фитнес аксессуары',
            categoryId: 44,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 26,
            name: 'Беговая дорожка CardioPower S35 Эспандеры',
            categoryId: 45,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 27,
            name: 'Беговая дорожка CardioPower S35 Массажные аксессуары',
            categoryId: 46,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 28,
            name: 'Беговая дорожка CardioPower S35 Тяги и рукоятки',
            categoryId: 47,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 29,
            name: 'Беговая дорожка CardioPower S35 Функциональные петли Variosling',
            categoryId: 48,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 30,
            name: 'Беговая дорожка CardioPower S35 Тренировочный комплекс HyGear',
            categoryId: 49,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 31,
            name: 'Беговая дорожка CardioPower S35 Беговые дорожки2',
            categoryId: 50,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 32,
            name: 'Беговая дорожка CardioPower S35 Эллиптические тренажеры2',
            categoryId: 51,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 33,
            name: 'Беговая дорожка CardioPower S35 Велотренажеры2',
            categoryId: 52,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 34,
            name: 'Беговая дорожка CardioPower S35 Лестницы и степперы2',
            categoryId: 53,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 35,
            name: 'Беговая дорожка CardioPower S35 Гребные тренажеры2',
            categoryId: 54,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 36,
            name: 'Беговая дорожка CardioPower S35 Сайклинг2',
            categoryId: 55,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 37,
            name: 'Беговая дорожка CardioPower S35 Грузоблочные2',
            categoryId: 56,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 38,
            name: 'Беговая дорожка CardioPower S35 Нагружаемые дисками2',
            categoryId: 57,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 39,
            name: 'Беговая дорожка CardioPower S35 Мультистанции2',
            categoryId: 58,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 40,
            name: 'Беговая дорожка CardioPower S35 Рамы и комплексы2',
            categoryId: 59,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 41,
            name: 'Беговая дорожка CardioPower S35 Скамьи, стойки2',
            categoryId: 60,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 42,
            name: 'Беговая дорожка CardioPower S35 Комплексы для ФТ2',
            categoryId: 61,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 43,
            name: 'Беговая дорожка CardioPower S35 Горнолыжные тренажеры2',
            categoryId: 62,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 44,
            name: 'Беговая дорожка CardioPower S35 Slide&FIT2',
            categoryId: 63,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 45,
            name: 'Беговая дорожка CardioPower S35 Гантели и гантельные ряды2',
            categoryId: 64,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 46,
            name: 'Беговая дорожка CardioPower S35 Гири2',
            categoryId: 65,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 47,
            name: 'Беговая дорожка CardioPower S35 Диски и грифы2',
            categoryId: 66,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 48,
            name: 'Беговая дорожка CardioPower S35 Стойки и хранение2',
            categoryId: 67,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 49,
            name: 'Беговая дорожка CardioPower S35 Аэробика2',
            categoryId: 68,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 50,
            name: 'Беговая дорожка CardioPower S35 Для групповых программ2',
            categoryId: 69,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 51,
            name: 'Беговая дорожка CardioPower S35 Для персонального тренинга2',
            categoryId: 70,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 52,
            name: 'Беговая дорожка CardioPower S35 Бесконтактные гидромассажные ванны2',
            categoryId: 71,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 53,
            name: 'Беговая дорожка CardioPower S35 Солярии2',
            categoryId: 72,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 54,
            name: 'Беговая дорожка CardioPower S35 Массажные столы2',
            categoryId: 73,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 55,
            name: 'Беговая дорожка CardioPower S35 Массажеры2',
            categoryId: 74,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 56,
            name: 'Беговая дорожка CardioPower S35 Диагностические комплексы2',
            categoryId: 75,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 57,
            name: 'Беговая дорожка CardioPower S35 Реабилитационные тренажеры2',
            categoryId: 76,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 58,
            name: 'Беговая дорожка CardioPower S35 Фитнес тестирование2',
            categoryId: 77,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 59,
            name: 'Беговая дорожка CardioPower S35 Тренажеры для бассейнов2',
            categoryId: 78,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 60,
            name: 'Беговая дорожка CardioPower S35 Средства гигиены2',
            categoryId: 79,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 132000,
            rating: 4.3,
            amount: 0,
            manufacturer: 1,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 61,
            name: 'Беговая дорожка CardioPower S35 Беговые дорожки',
            categoryId: 20,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 12000,
            rating: 4.3,
            amount: 0,
            manufacturer: 2,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 62,
            name: 'Беговая дорожка CardioPower S35 Беговые дорожки',
            categoryId: 20,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 732000,
            rating: 4.3,
            amount: 0,
            manufacturer: 3,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
        {
            id: 63,
            name: 'Беговая дорожка CardioPower S35 Беговые дорожки',
            categoryId: 20,
            img: '/images/forHome/catalogItems/kardiotrenazhery/treadmills/01.jpg',
            oldPrice: 132000,
            newPrice: 232000,
            rating: 4.3,
            amount: 0,
            manufacturer: 4,
            descriptions: [
                { id: 1, title: 'Тип дорожки', description: 'Домашняя' },
                { id: 2, title: 'Бег.полотно', description: '1200 х 450 мм' },
                { id: 3, title: 'Мощность двигателя', description: '2,0 л.с.' },
                { id: 4, title: 'Беговое полотно', description: '2-х слойное' },
            ]
        },
    ],
    filteredItems: [],
    subCategory: null,
    filterManufacturers: [],
    priceFilter: null,
    priceRange: {min: null, max: null}
}

function products(state = initialState, action) {
    switch (action.type) {
        case 'FILTER_PRODUCTS':
            let items = [...state.products];
            items = state.products.filter((item) => action.payload.indexOf(item.categoryId) !== -1);
            if (state.filterManufacturers.length > 0) {
                items = items.filter((item) => state.filterManufacturers.indexOf(item.manufacturer) !== -1)
            }
            if (state.subCategory) {
                items = items.filter(item => item.categoryId === state.subCategory.id);
            }
            if (state.priceFilter) {
                items = items.filter((item) => item.newPrice >= state.priceFilter.minPrice && item.newPrice <= state.priceFilter.maxPrice)
            }

            return {
                ...state,
                filteredItems: items
            }
        case 'CHANGE_SUBCATEGORY':
            return {
                ...state,
                subCategory: action.payload
            }
        case 'CHANGE_MANUFACTURERS':
            const idManufacturer = action.payload;
            const id = state.filterManufacturers.indexOf(idManufacturer);
            const newArray = [...state.filterManufacturers];
            if (id < 0) {
                newArray.push(idManufacturer)
            } else {
                newArray.splice(id, 1);
            }
            return {
                ...state,
                filterManufacturers: newArray
            }
        case 'CHANGE_PRICE_FILTER':
            return {
                ...state,
                priceFilter: action.payload
            }
        case 'CHANGE_PRICE_RANGE':
            let itemsForRange = [...state.products];
            let min, max = 0;
            if (state.filterManufacturers.length > 0) {
                itemsForRange = itemsForRange.filter((item) => state.filterManufacturers.indexOf(item.manufacturer) !== -1)
            }
            if (state.subCategory) {
                itemsForRange = itemsForRange.filter(item => item.categoryId === state.subCategory.id);
            }
            if (itemsForRange.length > 0) {
                min = itemsForRange[0].newPrice;
                max = itemsForRange[0].newPrice;
                itemsForRange.forEach(function (e) {
                    if (e.newPrice < min) min = e.newPrice;
                    if (e.newPrice > max) max = e.newPrice;
                });
            }
            return {
                ...state,
                priceRange: { min, max }
            }
        default:
            return state
    }
}
export default products;