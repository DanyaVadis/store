import React, { useRef, useState, useEffect } from 'react';
import classes from './slider.module.css';
import useCalcWidthBlock from '../../hooks/useCalcWidthBlock';

const Slider = ({ maxSlidesToShow = 5, size = 220, children }) => {
    const targetRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(1);
    const [slides, setSlides] = useState(0);
    const [offset, setOffset] = useState(0);
    const [widthItem, setWidthItem] = useState(0);
    const width = useCalcWidthBlock(targetRef);

    useEffect(() => {
        if (maxSlidesToShow === 6) {
            if (width / 6 < size && width / 5 >= size) {
                setWidthItem(width / 5)
                setSlides(Math.ceil(children.length / 5))
            
            } else if (width / 5 < size && width / 4 >= size) {
                setWidthItem(width / 4)
                setSlides(Math.ceil(children.length / 4))
            } else if (width / 4 < size) {
                setWidthItem(width / 3)
                setSlides(Math.ceil(children.length / 3))
            } else {
                setWidthItem(width / 6)
                setSlides(Math.ceil(children.length / 6))
            }
        } else if (maxSlidesToShow === 5) {
            if (width / 5 < size && width / 4 >= size) {
                setWidthItem(width / 4)
                setSlides(Math.ceil(children.length / 4))

            } else if (width / 4 < size && width / 3 >= size) {
                setWidthItem(width / 3)
                setSlides(Math.ceil(children.length / 3))
            } else if (width / 3 < size) {
                setWidthItem(width / 2)
                setSlides(Math.ceil(children.length / 2))
            } else {
                setWidthItem(width / 5)
                setSlides(Math.ceil(children.length / 5))
            }
        } else if (maxSlidesToShow === 4) {
            if (width / 4 < 270 && width / 3 >= 250) {
                setWidthItem(width / 3)
                setSlides(Math.ceil(children.length / 3))

            } else if (width / 3 < 250) {
                setWidthItem(width / 2)
                setSlides(Math.ceil(children.length / 2))
            } else {
                setWidthItem(width / 4)
                setSlides(Math.ceil(children.length / 4))
            }
        }

    }, [width, children.length, maxSlidesToShow, size])

    useEffect(() => {
        if (currentSlide > slides) {
            setOffset(0 - (slides - 1) * width)
        } else {
            setOffset(0 - (currentSlide - 1) * width);
        }
    }, [width, currentSlide, slides]);

    const innerWidth = widthItem * children.length;

    return (
        <div className={classes.container}>
            <div ref={targetRef} className={classes.slider}>
                <div className={classes.sliderInner} style={{ width: `${innerWidth}px`, transform: `translateX(${offset}px)` }}>
                    {React.Children.map(children, child => {
                        return React.cloneElement(child, { widthItem })
                    })}
                </div>
            </div>
            <button
                className={classes.prevBtn}
                onClick={() => {
                    setOffset(offset + width);
                    setCurrentSlide(currentSlide - 1);
                }}
                style={{ display: `${offset >= 0 ? 'none' : 'block'}` }}
            >
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 6.99414H1M1 6.99414L6.42466 1.49414M1 6.99414L6.42466 12.4941" stroke="#F53B49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </button>
            <button
                className={classes.nextBtn}
                onClick={() => {
                    setOffset(offset - width);
                    setCurrentSlide(currentSlide + 1);
                }}
                style={{ display: `${Math.abs(offset) >= innerWidth - width ? 'none' : 'block'}` }}
            >
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6.5H14M14 6.5L8.57534 1M14 6.5L8.57534 12" stroke="#F53B49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}

export default Slider;