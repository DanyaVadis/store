import React, { useState } from 'react';
import classes from './stock.module.css';
import CardItem from '../card-item/card-item';
import Button from '../../UI/button';
import Chips from '../chips';
import Slider from '../slider';
import Container from '../container';

const Stock = props => {
    const cards = [
        {
            img: 'https://i.ibb.co/sRfzbLb/01.jpg',
            title: 'Беговая дорожка CardioPower S35',
            oldPrice: '1 134 900 ₽',
            newPrice: '1 134 900 ₽',
            rating: 4.3,
            amount: 0
        },
        {
            img: 'https://i.ibb.co/0j1rN14/02.jpg',
            title: 'Беговая дорожка CardioPower T20 Plus',
            oldPrice: '37 900 ₽',
            newPrice: '34 900 ₽',
            rating: 5,
            amount: 8
        },
        {
            img: 'https://i.ibb.co/tpKqZzL/03.jpg',
            title: 'Беговая дорожка CardioPower T20 Plus',
            oldPrice: '1 434 900 ₽',
            newPrice: '1 124 900 ₽',
            rating: 3.7,
            amount: 19
        },
        {
            img: 'https://i.ibb.co/Jk7YYML/04.jpg',
            title: 'Беговая дорожка CardioPower S35',
            oldPrice: '1 734 900 ₽',
            newPrice: '1 334 900 ₽',
            rating: 4.5,
            amount: 45
        },
        {
            img: 'https://i.ibb.co/ygfHCZ2/05.jpg',
            title: 'Вертикальный велотренажер B37',
            oldPrice: '1 734 900 ₽',
            newPrice: '1 334 900 ₽',
            rating: 4.2,
            amount: 13
        },
        {
            img: 'https://i.ibb.co/sRfzbLb/01.jpg',
            title: 'Беговая дорожка CardioPower S35',
            oldPrice: '1 134 900 ₽',
            newPrice: '1 134 900 ₽',
            rating: 4.3,
            amount: 0
        },
        {
            img: 'https://i.ibb.co/0j1rN14/02.jpg',
            title: 'Беговая дорожка CardioPower T20 Plus',
            oldPrice: '37 900 ₽',
            newPrice: '34 900 ₽',
            rating: 5,
            amount: 8
        },
        {
            img: 'https://i.ibb.co/tpKqZzL/03.jpg',
            title: 'Беговая дорожка CardioPower T20 Plus',
            oldPrice: '1 434 900 ₽',
            newPrice: '1 124 900 ₽',
            rating: 3.7,
            amount: 19
        },
        {
            img: 'https://i.ibb.co/Jk7YYML/04.jpg',
            title: 'Беговая дорожка CardioPower S35',
            oldPrice: '1 734 900 ₽',
            newPrice: '1 334 900 ₽',
            rating: 4.5,
            amount: 45
        },
        {
            img: 'https://i.ibb.co/ygfHCZ2/05.jpg',
            title: 'Вертикальный велотренажер B37',
            oldPrice: '1 734 900 ₽',
            newPrice: '1 334 900 ₽',
            rating: 4.2,
            amount: 13
        }
    ]
    const titles = ['Акция', 'Новинки', 'Мы рекомендуем'];
    const [activeLink, setActiveLink] = useState(1);
    const changeActiveLink = (id) => {
        setActiveLink(id)
    }

    return (
        <div className={classes.cardsList}>
            <Container>
                <Chips
                    changeActiveLink={changeActiveLink}
                    activeLink={activeLink}
                    titles={titles}
                />
            </Container>

            <Slider
                maxSlidesToShow={5}
                size={250}
            >
                {
                    cards.map((item, index) => {
                        const { img, title, oldPrice, newPrice, rating, amount } = item;
                        return (
                            <CardItem
                                key={title + index}
                                img={img}
                                title={title}
                                oldPrice={oldPrice}
                                newPrice={newPrice}
                                rating={rating}
                                amount={amount}
                            />
                        )
                    })
                }
            </Slider>
            <Container>
                <Button
                    style={{ margin: '30px 0 0 0' }}
                >
                    Все товары по акции
                </Button>
            </Container>
        </div>
    );
}

export default Stock;