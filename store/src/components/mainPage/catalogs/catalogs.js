import React from 'react';
import classes from './catalogs.module.css';
import Category from './category';
import Button from '../../../UI/button';


const Сatalogs = props => {
    const forHome = [
        {
            title: 'Беговые дорожки',
            img: 'https://i.ibb.co/6wccZ92/01.png',
            high: true,
            titleColor: '#fff'
        },
        {
            title: 'Эллиптические тренажеры',
            img: 'https://i.ibb.co/8PnnJMf/02.png',
            high: true
        },
        {
            title: 'Велотренажеры',
            img: 'https://i.ibb.co/3hdzy1w/03.jpg'
        },
        {
            title: 'Горнолыжные тренажеры',
            img: 'https://i.ibb.co/3s6CZtT/04.jpg'
        },
        {
            title: 'Силовые тренажеры',
            img: 'https://i.ibb.co/pZNZxJB/05.jpg'
        },
        {
            title: 'Гребные тренажеры',
            img: 'https://i.ibb.co/MSDSbhB/06.jpg'
        },
        {
            title: 'Батуты',
            img: 'https://i.ibb.co/m4qZnsC/07.jpg'
        },
        {
            title: 'Игровые столы',
            img: 'https://i.ibb.co/TWqBWT2/08.jpg'
        },
        {
            title: 'Массажные кресла',
            img: 'https://i.ibb.co/9sNkyfK/09.jpg'
        },
        {
            title: 'Фитнес аксессуары ',
            img: 'https://i.ibb.co/68xHtgf/10.jpg'
        },
    ]
    const forClub = [
        {
            title: 'Профессиональные кардиотренажеры',
            img: 'https://i.ibb.co/Hr8XcvZ/01.jpg',
            wide: true,
            titleColor: '#fff'
        },
        {
            title: 'Грузоблочные тренажеры',
            img: 'https://i.ibb.co/WPGgxxg/02.jpg'
        },
        {
            title: `Тренажеры на свободных весах`,
            img: 'https://i.ibb.co/3WH7wMz/03.jpg'
        },
        {
            title: 'Функциональный тренинг',
            img: 'https://i.ibb.co/RCY2L5K/04.jpg'
        },
        {
            title: 'Wellness, СПА, Массаж',
            img: 'https://i.ibb.co/dbNb2tk/05.jpg'
        },
        {
            title: 'Спортивная медицина и реабилитация',
            img: 'https://i.ibb.co/jzhdnfN/06.jpg'
        },
        {
            title: 'Свободные веса',
            img: 'https://i.ibb.co/hmz65g4/07.jpg'
        }
    ]
    const renderForHome = forHome.map((item, index) => {
        const { img, title, high, wide, titleColor } = item
        return (
            <Category
                key={title+index}
                img={img}
                title={title}
                high={high}
                wide={wide}
                titleColor={titleColor}
                titleClass={'home'}
            />
        )
    })
    const renderForClub = forClub.map((item, index) => {
        const { img, title, high, wide, titleColor } = item
        return (
            <Category
                key={title+index}
                img={img}
                title={title}
                high={high}
                wide={wide}
                titleColor={titleColor}
                titleClass={'club'}
            />
        )
    })
    return (
        <div className={classes.catalog}>
            <div className={classes.container}>
                <div className={classes.blockWrapper}>
                    <p className={classes.title}>Тренажеры для дома</p>
                    <div className={classes.forHome}>
                        {renderForHome}
                    </div>
                    <Button path="/trenazhery-dlya-doma/">
                        Все категории
                    </Button>
                </div>
                <div className={classes.blockWrapper}>
                    <p className={classes.title}>Для фитнес клубов</p>
                    <div className={classes.forClub}>
                        {renderForClub}
                    </div>
                    <Button path="/trenazhery-dlya-kluba/">
                        Все категории
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Сatalogs;