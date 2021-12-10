import React from "react";
import classes from './card-item.module.css';
import ImgButton from "../../UI/imgButton";
import Rating from '../rating';
import { Link } from 'react-router-dom';

const CardItem = ({ img, title, oldPrice, newPrice, rating, amount, widthItem, manufacturer, descriptions }) => {
    const calcAmount = (count) => {
        switch (true) {
            case count <= 0:
                return {
                    title: 'Нет в наличии',
                    itemClass: 'zero'
                }
            case (count > 0 && count < 10):
                return {
                    title: 'Осталось мало',
                    itemClass: 'one'
                }
            case (count > 10 && count < 25):
                return {
                    title: 'В наличии',
                    itemClass: 'two'
                }
            case count > 25:
                return {
                    title: 'В наличии',
                    itemClass: 'three'
                }
            default:
                break;
        }
    }
    const cardClass = calcAmount(amount).itemClass;
    const label = calcAmount(amount).title;
    return (
        <div className={classes.cardItem} style={{ flex: `0 0 ${widthItem}px` }}>
            <div className={classes.cardItemInner}>
                <div className={classes.icons}>
                    <img className={classes.sale} src='https://i.ibb.co/4JVRbp5/sale.png' alt="" />
                    <img className={classes.like} src='https://i.ibb.co/jJDGC1S/like.png' alt="" />
                    <img className={classes.new} src='https://i.ibb.co/3vhksqr/new.png' alt="" />
                </div>
                <div className={classes.cardImg}>
                    <img src={img} alt="" />
                </div>
                <div className={classes.content}>
                    <div className={classes.stock}>
                        <div className={`${classes.amount} ${classes[cardClass]}`}>
                            <div className={classes.amountTitle}>
                                {label}
                            </div>
                            <div className={`${classes.dots}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className={classes.stockInShop}>
                            {
                                cardClass !== 'zero' ? 'Есть в шоу-руме' : null
                            }
                        </div>
                    </div>
                    <Link
                        className={classes.title}
                        to="/"
                    >
                        {title}
                    </Link>

                    {
                        descriptions
                            ? <div className={classes.characteristics}>
                                {
                                    descriptions.map(item => {
                                        return (
                                            <div key={item.id} className={classes.characteristicsItem}>
                                                <div className={classes.characteristicLabel}>
                                                    <span>{item.title}:</span>
                                                </div>
                                                <div className={classes.characteristicValue}>
                                                    <span>{item.description}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className={classes.characteristicsItem}>
                                    <div className={classes.characteristicLabel}>
                                        <span>Производитель:</span>
                                    </div>
                                    <div className={classes.characteristicValue}>
                                        <span>{manufacturer}</span>
                                    </div>
                                </div>
                            </div>
                            : null
                    }
                    <Rating
                        rating={rating}
                        style={{ marginBottom: '16px' }}
                    />
                    <div className={classes.buy}>
                        <div className={classes.price}>
                            <div className={classes.newPrice}>
                                {newPrice}
                            </div>
                            <div className={classes.oldPrice}>
                                {oldPrice}
                            </div>
                        </div>
                        <ImgButton
                            style={{
                                padding: '7px 12px 6.5px',
                                fontSize: '12px'
                            }}
                            imgStyle={{
                                marginRight: '4px',
                                width: '19px',
                                height: '20px'
                            }}
                            img={'https://i.ibb.co/BgW7DjL/image.png'}
                        >
                            Купить
                        </ImgButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem