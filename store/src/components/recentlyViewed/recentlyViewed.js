import React from 'react';
import classes from './recentlyViewed.module.css';
import Slider from '../slider';
import RecentlyViewedItem from './item';
import Container from '../container';


const RecentlyViewed = props => {
    const list = [
        {
            img: 'https://i.ibb.co/sRfzbLb/01.jpg',
            title: 'Беговая дорожка CardioPower S35',
            oldPrice: '1 134 900 ₽',
            price: '1 134 900 ₽',
            rating: 4.3
        },
        {
            img: 'https://i.ibb.co/0j1rN14/02.jpg',
            title: 'Беговая дорожка CardioPower T20 Plus',
            oldPrice: '37 900 ₽',
            price: '34 900 ₽',
            rating: 5
        },
        {
            img: 'https://i.ibb.co/tpKqZzL/03.jpg',
            title: 'Беговая дорожка CardioPower T20 Plus',
            oldPrice: '1 434 900 ₽',
            price: '1 124 900 ₽',
            rating: 3.7
        },
        {
            img: 'https://i.ibb.co/Jk7YYML/04.jpg',
            title: 'Беговая дорожка CardioPower S35',
            oldPrice: '1 734 900 ₽',
            price: '1 334 900 ₽',
            rating: 4.5
        },
        {
            img: 'https://i.ibb.co/ygfHCZ2/05.jpg',
            title: 'Вертикальный велотренажер B37',
            oldPrice: '1 734 900 ₽',
            price: '1 334 900 ₽',
            rating: 4.2
        },
        {
            img: 'https://i.ibb.co/sRfzbLb/01.jpg',
            title: 'Беговая дорожка CardioPower S35',
            oldPrice: '1 134 900 ₽',
            price: '1 134 900 ₽',
            rating: 4.3
        },
        {
            img: 'https://i.ibb.co/0j1rN14/02.jpg',
            title: 'Беговая дорожка CardioPower T20 Plus',
            oldPrice: '37 900 ₽',
            price: '34 900 ₽',
            rating: 5
        },
        {
            img: 'https://i.ibb.co/Jk7YYML/04.jpg',
            title: 'Беговая дорожка CardioPower S35',
            oldPrice: '1 734 900 ₽',
            price: '1 334 900 ₽',
            rating: 4.5
        },
        {
            img: 'https://i.ibb.co/ygfHCZ2/05.jpg',
            title: 'Вертикальный велотренажер B37',
            oldPrice: '1 734 900 ₽',
            price: '1 334 900 ₽',
            rating: 4.2
        },
        {
            img: 'https://i.ibb.co/sRfzbLb/01.jpg',
            title: 'Беговая дорожка CardioPower S35',
            oldPrice: '1 134 900 ₽',
            price: '1 134 900 ₽',
            rating: 4.3
        },
        {
            img: 'https://i.ibb.co/0j1rN14/02.jpg',
            title: 'Беговая дорожка CardioPower T20 Plus',
            oldPrice: '37 900 ₽',
            price: '34 900 ₽',
            rating: 5
        },
    ]
    return (
        <div className={classes.recentlyViewed}>
            <Container >
                <h4 className={classes.title}>Вы смотрели</h4>
            </Container>

            <Slider
                maxSlidesToShow={6}
                size={190}
            >
                {
                    list.map(item => {
                        const { img, title, rating, price, oldPrice } = item;
                        return (
                            <RecentlyViewedItem
                                title={title}
                                img={img}
                                rating={rating}
                                price={price}
                                oldPrice={oldPrice}
                            />
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default RecentlyViewed;