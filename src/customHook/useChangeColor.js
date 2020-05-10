import {useEffect, useRef, useState} from 'react';


const randomColor = (currentColor) => {
    console.log(currentColor)
    let listColor = ['green', 'red', 'blue', 'yellow']

    const currentIndex = listColor.indexOf(currentColor);
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 4);
    }

    return listColor[newIndex];
}

const useChangeColor = () => {

    const [color, setColor] = useState('green');

    const colorRef = useRef('green')

    useEffect(() => {
        const colorInterVal = setInterval(() => {
            let newColor = randomColor(colorRef.current);
            setColor(newColor)
            colorRef.current = newColor
        }, 1000)
        return () => {
            clearInterval(colorInterVal)
        }
    }, [])

    return {color};
}

export default useChangeColor;
