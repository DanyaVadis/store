import { useEffect, useState, useLayoutEffect } from 'react';

const useCalcWidthBlock = (targetRef) => {
    const [width, setWidth] = useState(0);
    let movement_timer = null;
    const RESET_TIMEOUT = 100;

    const calcWidth = (targetRef) => {
        if (targetRef.current) {
            setWidth(targetRef.current.offsetWidth)
        }
    }

    const resetTimeout = () => {
        clearInterval(movement_timer);
        movement_timer = setTimeout(() => calcWidth(targetRef), RESET_TIMEOUT);
    }

    useLayoutEffect(() => {
        calcWidth(targetRef);
    }, [targetRef]);

    useEffect(() => {
        window.addEventListener('resize', resetTimeout);

        return window.addEventListener('resize', resetTimeout)
    }, [])

    return width;
}

export default useCalcWidthBlock;