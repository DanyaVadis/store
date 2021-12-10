import React, { useState } from 'react';
import classes from './catalog.module.css';
import { Link } from 'react-router-dom';

const renderCatalog = (catalog, activeItem, changeActiveItem, width) => {
    return catalog.map(menuItem => {
        return (
            <li key={menuItem.id} className={classes.menuItem}>
                <Link
                    className={`${classes.menuItemTitle} ${menuItem.id === activeItem ? classes.activeItem : ''}`}
                    to="/"
                    onMouseOver={() => changeActiveItem(menuItem.id)}
                >{menuItem.title}
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.50034H8.89189M8.89189 5.50034L5 1.44629M8.89189 5.50034L5 9.5544" stroke="#909CB5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
                <div style={{ width: `${width}px` }} className={`${classes.wrapper} ${menuItem.id === activeItem ? classes.active : ''}`}>
                    <div className={classes.categoryContent}>
                        {
                            menuItem.categories.map(category => {
                                return (
                                    <div className={classes.categoryItem} key={category.id}>
                                        <Link to='/'>
                                            <img className={classes.contentImg} src={category.img} alt="" />
                                            {category.title}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </li>
        )
    })
}

const Catalog = ({ activeCatalog, width }) => {
    const [activeHomeItem, setActiveHomeItem] = useState('1');
    const [activeClubItem, setActiveClubItem] = useState('1');
    const [partCatalog, setpartCatalog] = useState('home');
    const changeActiveHomeItem = (id) => {
        setActiveHomeItem(id)
    }
    const changeActiveClubItem = (id) => {
        setActiveClubItem(id)
    }
    const forHome = [
        {
            id: '1',
            title: 'Кардиотренажеры',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Беговые дорожки',
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img02.jpg',
                    title: 'Эллиптические тренажеры',
                },
                {
                    id: '3',
                    img: '/images/catalog/home/cardioEquipment/img03.jpg',
                    title: 'Велотренажеры',
                },
                {
                    id: '4',
                    img: '/images/catalog/home/cardioEquipment/img04.jpg',
                    title: 'Cтепперы',
                },
                {
                    id: '5',
                    img: '/images/catalog/home/cardioEquipment/img05.jpg',
                    title: 'Гребные тренажеры',
                },
                {
                    id: '6',
                    img: '/images/catalog/home/cardioEquipment/img06.jpg',
                    title: 'Сайклинг',
                },
                {
                    id: '7',
                    img: '/images/catalog/home/cardioEquipment/img07.jpg',
                    title: 'Горнолыжные тренажеры',
                },
            ]
        },
        {
            id: '2',
            title: 'Силовые тренажеры',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Мультистанции'
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Рамы и комплексы'
                },
                {
                    id: '3',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Скамьи'
                },
            ]
        },
        {
            id: '3',
            title: 'Уличные виды спорта',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Батуты'
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Баскетбол'
                },
                {
                    id: '3',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Футбол'
                },
            ]
        },
        {
            id: '4',
            title: 'Свободные веса',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Гантели и гантельные ряды'
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Гири'
                },
                {
                    id: '3',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Диски и грифы'
                },
                {
                    id: '4',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Стойки и хранение'
                },
            ]
        },
        {
            id: '5',
            title: 'Игровые столы',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Аэрохоккей'
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Настольный футбол'
                },
            ]
        },
        {
            id: '6',
            title: 'Массажное оборудование',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Массажные кресла'
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Массажеры'
                },
                {
                    id: '3',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Массажные столы'
                },
                {
                    id: '4',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Бесконтактные гидромассажные ванны'
                },
            ]
        },
        {
            id: '7',
            title: 'Фитнес аксессуары',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Йога и пилатес'
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Фитнес аксессуары'
                },
                {
                    id: '3',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Эспандеры'
                },
                {
                    id: '4',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Массажные аксессуары'
                },
                {
                    id: '5',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Тяги и рукоятки'
                },
            ]
        },
        {
            id: '8',
            title: 'Функциональный тренинг',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Функциональные петли Variosling'
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Тренировочный комплекс HyGear'
                },
            ]
        },
    ]

    const forClub = [
        {
            id: '1',
            title: 'Кардиотренажеры',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Беговые дорожки',
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Эллиптические тренажеры',
                },
                {
                    id: '3',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Велотренажеры',
                },
                {
                    id: '4',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Cтепперы',
                },
                {
                    id: '5',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Гребные тренажеры',
                },
                {
                    id: '6',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Сайклинг',
                },
            ]
        },
        {
            id: '2',
            title: 'Силовые тренажеры',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Грузоблочные'
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Нагружаемые дисками'
                },
                {
                    id: '3',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Мультистанции'
                },
                {
                    id: '4',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Рамы и комплексы'
                },
                {
                    id: '5',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Скамьи'
                },
            ]
        },
        {
            id: '3',
            title: 'Функциональный тренинг',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Комплексы для ФТ'
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Горнолыжные тренажеры'
                },
                {
                    id: '3',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Slide&FIT'
                },
            ]
        },
        {
            id: '4',
            title: 'Свободные веса',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Гантели и гантельные ряды'
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Гири'
                },
                {
                    id: '3',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Диски и грифы'
                },
                {
                    id: '4',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Стойки и хранение'
                },
            ]
        },
        {
            id: '5',
            title: 'Аэробика',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Аэробика'
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Для групповых программ'
                },
                {
                    id: '3',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Для персонального тренинга'
                },
            ]
        },
        {
            id: '6',
            title: 'Wellness, СПА, массаж',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Бесконтактные гидромассажные ванны'
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Солярии'
                },
                {
                    id: '3',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Массажные столы'
                },
                {
                    id: '4',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Массажеры'
                },
            ]
        },
        {
            id: '7',
            title: 'Реабилитация и спортивная медицина',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Диагностические комплексы'
                },
                {
                    id: '2',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Реабилитационные тренажеры'
                },
                {
                    id: '3',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Фитнес тестирование'
                },
            ]
        },
        {
            id: '8',
            title: 'Оборудование для бассейнов',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Тренажеры для бассейнов'
                },
            ]
        },
        {
            id: '9',
            title: 'Средства гигиены',
            categories: [
                {
                    id: '1',
                    img: '/images/catalog/home/cardioEquipment/img01.jpg',
                    title: 'Средства гигиены'
                },
            ]
        },
    ]
    const homeList = renderCatalog(forHome, activeHomeItem, changeActiveHomeItem, width);
    const clubList = renderCatalog(forClub, activeClubItem, changeActiveClubItem, width);
    return (
        <div className={`${classes.catalog} ${activeCatalog ? classes.activeCatalog : ''}`}>
            <div style={{ width: `${width}px` }} className={classes.btnsWrapper}>
                <button
                    className={`${classes.homeBtn} ${partCatalog === 'home' ? classes.activeCatalog : classes.inactiveCatalog}`}
                    onClick={() => {
                        setpartCatalog('home')
                        setActiveClubItem('1');
                    }}
                >
                    Для дома
                </button>
                <button
                    className={`${classes.clubBtn} ${partCatalog === 'club' ? classes.activeCatalog : classes.inactiveCatalog}`}
                    onClick={() => {
                        setpartCatalog('club');
                        setActiveHomeItem('1');
                    }}
                >
                    Для фитнес клубов
                </button>
            </div>
            {
                partCatalog === 'home'
                    ? <ul className={`${classes.menuCategories}`}>
                        {homeList}
                    </ul>
                    : <ul className={`${classes.menuCategories}`}>
                        {clubList}
                    </ul>
            }

        </div >
    );
}

export default Catalog;