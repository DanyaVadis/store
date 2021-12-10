import React, { useState, useEffect } from 'react';
import classes from './cards.module.css';

import CardItem from '../../../card-item/card-item';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const Cards = ({ currentItems, manufacturers, setManufacturers, changePriceFilter, maxPriceProduct, minPriceProduct }) => {
    const min = minPriceProduct;
    const max = maxPriceProduct
    const [minPriceFilter, setMinPriceFilter] = useState(null);
    const [maxPriceFilter, setMaxPriceFilter] = useState(null);
    // useEffect(() => {
    //     setMinPriceFilter(minPriceProduct);
    //     setMaxPriceFilter(maxPriceProduct);
    //     changePriceFilter({
    //         minPrice: minPriceProduct,
    //         maxPrice: maxPriceProduct
    //     })
    // }, [minPriceProduct, maxPriceProduct])
    return (
        <div className={classes.catalog}>
            <div className={classes.cards}>
                {currentItems && currentItems.map((item, index) => {
                    const { img, name, oldPrice, newPrice, rating, amount,
                        manufacturer, descriptions } = item;
                    const manufacturerName = manufacturers.filter(item => item.id === manufacturer)[0].name;
                    return (
                        <CardItem
                            key={name + index}
                            img={img}
                            title={name}
                            oldPrice={oldPrice}
                            newPrice={newPrice}
                            rating={rating}
                            amount={amount}
                            descriptions={descriptions}
                            manufacturer={manufacturerName}
                        />
                    )
                })
                }
            </div>
            <div className={classes.filter}>
                <div className={classes.filter}>
                    <form>
                        <div className={classes.filterBlock}>
                            <h4>Check boxes</h4>

                            <ul className={`${classes.filterContent} ${classes.filters} ${classes.list}`}>
                                {
                                    manufacturers.map(item => {
                                        return (
                                            <li
                                                key={item.id}
                                                className={classes.listItem}
                                            >
                                                <label for={`${item.name}${item.id}`} className={classes.checkboxLabel}>
                                                    <input onClick={() => setManufacturers(item.id)} id={`${item.name}${item.id}`} type="checkbox" className={classes.checkboxInput} />
                                                    <div className={classes.checkbox}>
                                                        <svg width="16px" height="16px" viewBox="0 0 20 20">
                                                            <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                                                            <polyline points="4 11 8 15 16 6"></polyline>
                                                        </svg>
                                                    </div>
                                                    <span>{item.name}</span>
                                                </label>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <button>
                            <span>Цена</span>
                        </button>
                        <div className={classes.priceFilter}>
                            <div className={classes.rangeBlock}>
                                <input
                                    className={classes.inputRange}
                                    onBlur={() => {
                                        if (minPriceFilter > maxPriceFilter) {
                                            setMinPriceFilter(maxPriceFilter)
                                        }
                                    }}
                                    value={minPriceFilter ? minPriceFilter : min}
                                    type="text"
                                    onChange={(e) => {
                                        setMinPriceFilter(e.target.value)
                                    }}
                                />
                                <span> — </span>
                                <input
                                    className={classes.inputRange}
                                    onBlur={() => {
                                        if (maxPriceFilter < minPriceFilter) {
                                            setMaxPriceFilter(minPriceFilter)
                                        }
                                    }}
                                    value={maxPriceFilter ? maxPriceFilter : max}
                                    type="text"
                                    onChange={(e) => {
                                        setMaxPriceFilter(e.target.value)
                                    }}
                                />
                            </div>
                            <Range
                                min={minPriceProduct}
                                max={maxPriceProduct}
                                value={[minPriceFilter ? minPriceFilter : min, maxPriceFilter ? maxPriceFilter : max]}
                                allowCross={false}
                                onChange={value => {
                                    setMinPriceFilter(value[0]);
                                    setMaxPriceFilter(value[1]);
                                }}
                            />
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    changePriceFilter({
                                        minPrice: minPriceFilter,
                                        maxPrice: maxPriceFilter
                                    })
                                }}
                            >
                                Применить
                            </button>
                        </div>

                        <div className={classes.filterBlock}>
                            <h4>Select</h4>

                            <div className={classes.filterContent}>
                                <div className={`${classes.select} ${classes.filters}`}>
                                    <select className={classes.filter} name="selectThis" id="selectThis">
                                        <option value="">Choose an option</option>
                                        <option value=".option1">Option 1</option>
                                        <option value=".option2">Option 2</option>
                                        <option value=".option3">Option 3</option>
                                        <option value=".option4">Option 4</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className={classes.filterBlock}>
                            <h4>Radio buttons</h4>

                            <ul className={`${classes.filterContent} ${classes.filters} ${classes.list}`}>
                                <li>
                                    <input className={classes.filter} data-filter="" type="radio" name="radioButton" id="radio1" checked />
                                    <label className={classes.radioLabel} for="radio1">All</label>
                                </li>

                                <li>
                                    <input className={classes.filter} data-filter=".radio2" type="radio" name="radioButton" id="radio2" />
                                    <label className={classes.radioLabel} for="radio2">Choice 2</label>
                                </li>

                                <li>
                                    <input className={classes.filter} data-filter=".radio3" type="radio" name="radioButton" id="radio3" />
                                    <label className={classes.radioLabel} for="radio3">Choice 3</label>
                                </li>
                            </ul>
                        </div>
                    </form>

                    <a href="#0" className={classes.close}>Close</a>
                </div>
            </div>
        </div>
    );
}

export default Cards;