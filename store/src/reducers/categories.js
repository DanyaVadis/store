const initialState = {
    categories: [
        {
            id: 1,
            parentId: 0,
            name: 'Тренажеры для дома',
            pathName: 'trenazhery-dlya-doma'
        },
        {
            id: 2,
            parentId: 0,
            name: 'Для фитнес клубов',
            pathName: 'trenazhery-dlya-kluba'
        },
        {
            id: 3,
            parentId: 1,
            name: 'Кардиотренажеры',
            pathName: 'kardiotrenazhery',
            img: '/images/forHome/catalogForHome/img01.jpg'
        },
        {
            id: 4,
            parentId: 1,
            name: 'Силовые тренажеры',
            pathName: 'silovyye-trenazhery',
            img: '/images/forHome/catalogForHome/img02.jpg'
        },
        {
            id: 5,
            parentId: 1,
            name: 'Уличные виды спорта',
            pathName: 'street-sports',
            img: '/images/forHome/catalogForHome/img03.jpg'
        },
        {
            id: 6,
            parentId: 1,
            name: 'Свободные веса',
            pathName: 'free-weights',
            img: '/images/forHome/catalogForHome/img04.jpg'
        },
        {
            id: 7,
            parentId: 1,
            name: 'Игровые столы',
            pathName: 'game-tables',
            img: '/images/forHome/catalogForHome/img05.jpg'
        },
        {
            id: 8,
            parentId: 1,
            name: 'Массажное оборудование',
            pathName: 'massage-equipment',
            img: '/images/forHome/catalogForHome/img06.jpg'
        },
        {
            id: 9,
            parentId: 1,
            name: 'Фитнес аксессуары',
            pathName: 'fitness-accessories',
            img: '/images/forHome/catalogForHome/img07.jpg'
        },
        {
            id: 10,
            parentId: 1,
            name: 'Функциональный тренинг',
            pathName: 'functional-training',
            img: '/images/forHome/catalogForHome/img08.jpg'
        },
        {
            id: 11,
            parentId: 2,
            name: 'Кардиотренажеры',
            pathName: 'kardiotrenazhery',
            img: '/images/forHome/catalogForHome/img01.jpg'
        },
        {
            id: 12,
            parentId: 2,
            name: 'Силовые тренажеры',
            pathName: 'silovyye-trenazhery',
            img: '/images/forHome/catalogForHome/img01.jpg'
        },
        {
            id: 13,
            parentId: 2,
            name: 'Функциональный тренинг',
            pathName: 'functional-training',
            img: '/images/forHome/catalogForHome/img01.jpg'
        },
        {
            id: 14,
            parentId: 2,
            name: 'Свободные веса',
            pathName: 'free-weights',
            img: '/images/forHome/catalogForHome/img01.jpg'
        },
        {
            id: 15,
            parentId: 2,
            name: 'Аэробика',
            pathName: 'aerobics',
            img: '/images/forHome/catalogForHome/img01.jpg'
        },
        {
            id: 16,
            parentId: 2,
            name: 'Wellness, СПА, массаж',
            pathName: 'massage',
            img: '/images/forHome/catalogForHome/img01.jpg'
        },
        {
            id: 17,
            parentId: 2,
            name: 'Реабилитация и спортивная медицина',
            pathName: 'rehabilitation-medicine',
            img: '/images/forHome/catalogForHome/img01.jpg'
        },
        {
            id: 18,
            parentId: 2,
            name: 'Оборудование для бассейнов',
            pathName: 'pool-equipment',
            img: '/images/forHome/catalogForHome/img01.jpg'
        },
        {
            id: 19,
            parentId: 2,
            name: 'Средства гигиены',
            pathName: 'hygiene-products',
            img: '/images/forHome/catalogForHome/img01.jpg'
        },
        {
            id: 20,
            parentId: 3,
            name: 'Беговые дорожки',
            pathName: 'treadmills'
        },
        {
            id: 21,
            parentId: 3,
            name: 'Эллиптические тренажеры',
            pathName: 'elliptical-rainers'
        },
        {
            id: 22,
            parentId: 3,
            name: 'Велотренажеры',
            pathName: 'exercise-bikes'
        },
        {
            id: 23,
            parentId: 3,
            name: 'Cтепперы',
            pathName: 'steppers'
        },
        {
            id: 24,
            parentId: 3,
            name: 'Гребные тренажеры',
            pathName: 'rowing-machines'
        },
        {
            id: 25,
            parentId: 3,
            name: 'Сайклинг',
            pathName: 'cycling'
        },
        {
            id: 26,
            parentId: 3,
            name: 'Горнолыжные тренажеры',
            pathName: 'ski-simulators'
        },
        {
            id: 27,
            parentId: 4,
            name: 'Мультистанции',
            pathName: 'multistations'
        },
        {
            id: 28,
            parentId: 4,
            name: 'Рамы и комплексы',
            pathName: 'frames-and-complexes'
        },
        {
            id: 29,
            parentId: 4,
            name: 'Скамьи',
            pathName: 'benches'
        },
        {
            id: 30,
            parentId: 5,
            name: 'Батуты',
            pathName: 'trampolines'
        },
        {
            id: 31,
            parentId: 5,
            name: 'Баскетбол',
            pathName: 'basketball'
        },
        {
            id: 32,
            parentId: 5,
            name: 'Футбол',
            pathName: 'football'
        },
        {
            id: 33,
            parentId: 6,
            name: 'Гантели и гантельные ряды',
            pathName: 'dumbbells'
        },
        {
            id: 34,
            parentId: 6,
            name: 'Гири',
            pathName: 'kettlebell'
        },
        {
            id: 35,
            parentId: 6,
            name: 'Диски и грифы',
            pathName: 'discs-and-necks'
        },
        {
            id: 36,
            parentId: 6,
            name: 'Стойки и хранение',
            pathName: 'racks-and-storage'
        },
        {
            id: 37,
            parentId: 7,
            name: 'Аэрохоккей',
            pathName: 'air-hockey'
        },
        {
            id: 38,
            parentId: 7,
            name: 'Настольный футбол',
            pathName: 'table-soccer'
        },
        {
            id: 39,
            parentId: 8,
            name: 'Массажные кресла',
            pathName: 'massage-chairs'
        },
        {
            id: 40,
            parentId: 8,
            name: 'Массажеры',
            pathName: 'massagers'
        },
        {
            id: 41,
            parentId: 8,
            name: 'Массажные столы',
            pathName: 'massage-tables'
        },
        {
            id: 42,
            parentId: 8,
            name: 'Бесконтактные гидромассажные ванны',
            pathName: 'on-contact-whirlpools'
        },
        {
            id: 43,
            parentId: 9,
            name: 'Йога и пилатес',
            pathName: 'yoga-and-pilates'
        },
        {
            id: 44,
            parentId: 9,
            name: 'Фитнес аксессуары',
            pathName: 'fitness-accessories'
        },
        {
            id: 45,
            parentId: 9,
            name: 'Эспандеры',
            pathName: 'expander'
        },
        {
            id: 46,
            parentId: 9,
            name: 'Массажные аксессуары',
            pathName: 'massage-accessories'
        },
        {
            id: 47,
            parentId: 9,
            name: 'Тяги и рукоятки',
            pathName: 'rods-and-handles'
        },
        {
            id: 48,
            parentId: 10,
            name: 'Функциональные петли Variosling',
            pathName: 'hinges-Variosling'
        },
        {
            id: 49,
            parentId: 10,
            name: 'Тренировочный комплекс HyGear',
            pathName: 'HyGear-complex'
        },
        {
            id: 50,
            parentId: 11,
            name: 'Беговые дорожки',
            pathName: ''
        },
        {
            id: 51,
            parentId: 11,
            name: 'Эллиптические тренажеры',
            pathName: 'elliptical-rainers'
        },
        {
            id: 52,
            parentId: 11,
            name: 'Велотренажеры',
            pathName: 'exercise-bikes'
        },
        {
            id: 53,
            parentId: 11,
            name: 'Лестницы и степперы',
            pathName: 'ladders'
        },
        {
            id: 54,
            parentId: 11,
            name: 'Гребные тренажеры',
            pathName: 'rowing-machines'
        },
        {
            id: 55,
            parentId: 11,
            name: 'Сайклинг',
            pathName: 'cycling'
        },
        {
            id: 56,
            parentId: 12,
            name: 'Грузоблочные',
            pathName: 'cargo-block'
        },
        {
            id: 57,
            parentId: 12,
            name: 'Нагружаемые дисками',
            pathName: 'disk-loaded'
        },
        {
            id: 58,
            parentId: 12,
            name: 'Мультистанции',
            pathName: 'multistations'
        },
        {
            id: 59,
            parentId: 12,
            name: 'Рамы и комплексы',
            pathName: 'frames-and-complexes'
        },
        {
            id: 60,
            parentId: 12,
            name: 'Скамьи, стойки',
            pathName: 'benches'
        },
        {
            id: 61,
            parentId: 13,
            name: 'Комплексы для ФТ',
            pathName: 'complexes-for-FT'
        },
        {
            id: 62,
            parentId: 13,
            name: 'Горнолыжные тренажеры',
            pathName: 'ski-simulators'
        },
        {
            id: 63,
            parentId: 13,
            name: 'Slide&FIT',
            pathName: 'slide&FIT'
        },
        {
            id: 64,
            parentId: 14,
            name: 'Гантели и гантельные ряды',
            pathName: 'dumbbells'
        },
        {
            id: 65,
            parentId: 14,
            name: 'Гири',
            pathName: 'Kettlebell'
        },
        {
            id: 66,
            parentId: 14,
            name: 'Диски и грифы',
            pathName: 'discs-and-necks'
        },
        {
            id: 67,
            parentId: 14,
            name: 'Стойки и хранение',
            pathName: 'racks-and-storage'
        },
        {
            id: 68,
            parentId: 15,
            name: 'Аэробика',
            pathName: 'aerobics'
        },
        {
            id: 69,
            parentId: 15,
            name: 'Для групповых программ',
            pathName: 'for-group-programs'
        },
        {
            id: 70,
            parentId: 15,
            name: 'Для персонального тренинга',
            pathName: 'for-personal-training'
        },
        {
            id: 71,
            parentId: 16,
            name: 'Бесконтактные гидромассажные ванны',
            pathName: 'on-contact-whirlpools'
        },
        {
            id: 72,
            parentId: 16,
            name: 'Солярии',
            pathName: 'solarium'
        },
        {
            id: 73,
            parentId: 16,
            name: 'Массажные столы',
            pathName: 'massage-tables'
        },
        {
            id: 74,
            parentId: 16,
            name: 'Массажеры',
            pathName: 'massagers'
        },
        {
            id: 75,
            parentId: 17,
            name: 'Диагностические комплексы',
            pathName: 'diagnostic-complexes'
        },
        {
            id: 76,
            parentId: 17,
            name: 'Реабилитационные тренажеры',
            pathName: 'rehabilitation-simulators'
        },
        {
            id: 77,
            parentId: 17,
            name: 'Фитнес тестирование',
            pathName: 'fitness-testing'
        },
        {
            id: 78,
            parentId: 18,
            name: 'Тренажеры для бассейнов',
            pathName: 'swimming-pool-simulators'
        },
        {
            id: 79,
            parentId: 19,
            name: 'Средства гигиены',
            pathName: 'hygiene-products'
        },
    ]
}

function categories(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
export default categories;