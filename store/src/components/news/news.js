import React, { useState } from 'react';
import classes from './news.module.css';
import Chips from '../chips';
import Button from '../../UI/button';
import Slider from '../slider';
import NewsItem from './item';
import Container from '../container';


const News = props => {
    const news = [
        {
            id: '1',
            img: 'https://i.ibb.co/68MyfJ8/news01.jpg',
            title: 'В продажу поступили тренажеры Nautilus',
            text: 'Представляем тренажеры Nautilus 626 серии.',
            date: '2021.07.18'
        },
        {
            id: '2',
            img: 'https://i.ibb.co/68MyfJ8/news01.jpg',
            title: 'В продажу поступили тренажеры Nautilus',
            text: 'Представляем тренажеры Nautilus 626 серии.',
            date: '2021.07.18'
        },
        {
            id: '3',
            img: 'https://i.ibb.co/68MyfJ8/news01.jpg',
            title: 'В продажу поступили тренажеры Nautilus',
            text: 'Представляем тренажеры Nautilus 626 серии.',
            date: '2021.07.18'
        },
        {
            id: '4',
            img: 'https://i.ibb.co/68MyfJ8/news01.jpg',
            title: 'В продажу поступили тренажеры Nautilus',
            text: 'Представляем тренажеры Nautilus 626 серии.',
            date: '2021.07.18'
        },
        {
            id: '5',
            img: 'https://i.ibb.co/68MyfJ8/news01.jpg',
            title: 'В продажу поступили тренажеры Nautilus',
            text: 'Представляем тренажеры Nautilus 626 серии.',
            date: '2021.07.18'
        },
        {
            id: '6',
            img: 'https://i.ibb.co/68MyfJ8/news01.jpg',
            title: 'В продажу поступили тренажеры Nautilus',
            text: 'Представляем тренажеры Nautilus 626 серии.',
            date: '2021.07.18'
        },
        {
            id: '7',
            img: 'https://i.ibb.co/68MyfJ8/news01.jpg',
            title: 'В продажу поступили тренажеры Nautilus',
            text: 'Представляем тренажеры Nautilus 626 серии.',
            date: '2021.07.18'
        },
    ];
    const titles = ['Новости', 'Блог'];
    const [activeLink, setActiveLink] = useState(1);
    const changeActiveLink = (id) => {
        setActiveLink(id)
    }
    return (
        <div className={classes.news}>
            <Container>
                <Chips
                    changeActiveLink={changeActiveLink}
                    activeLink={activeLink}
                    titles={titles}
                />
            </Container>
            <Slider
                maxSlidesToShow={5}
            >
                {
                    news.map(item => {
                        const { img, title, text, date, id } = item;
                        return (
                            <NewsItem
                                key={id}
                                img={img}
                                title={title}
                                text={text}
                                date={date}
                            />
                        )
                    })
                }
            </Slider>
            <Container>
                <Button
                    style={{ margin: '30px 0 0 0' }}
                >
                    Все новости
                </Button>
            </Container>
        </div>
    );
}

export default News;