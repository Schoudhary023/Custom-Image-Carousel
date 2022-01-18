import React, { useEffect, useRef, useState} from "react";
import classes from "../Css/Button.module.css";
import styles from "../Css/Image.module.css"
import {changeImageOnClickHandler, changeImageAutomatically, resetTimeout} from "../Utils/util";
import Image from "./Image";

const Form = () => {
    const [direction, setDirection] = useState('Forward');
    const [duration, setDuration] = useState(2)
    const [imageLoaded, setImageLoaded] = useState(false);

    const DurationRef = useRef();
    const PrevClickHandler = () => {
        changeImageOnClickHandler('rev', direction, duration);
    }
    const NextClickHandler = () => {
        changeImageOnClickHandler('for',direction,duration);
    }

    const ImageLoadedHandler = () =>{
        setImageLoaded(true);
    }

    useEffect(() => {
        resetTimeout();
        console.log('useEffect  direction='+direction+' duration= '+duration);
        if(imageLoaded)
        changeImageAutomatically(direction, duration);
    }, [direction, duration, imageLoaded]);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let radioButton = document.getElementsByName('direction')
        let radioButtonValue;
        for (let i = 0; i < radioButton.length; i++) {
            if (radioButton[i].checked)
                radioButtonValue = radioButton[i].value;
        }
        setDirection(radioButtonValue);
        setDuration(parseInt(DurationRef.current.value));
    }

   return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor='duration'> Duration </label>
            <input type='number' id='duration' ref={DurationRef}/> <br/>
            <label htmlFor='direction'> Direction </label>
            <div>
                <input type="radio" value="Forward" name="direction"/> Forward
                <input type="radio" value="Reverse" name="direction"/> Reverse
            </div>
            <br/>
            <button className={classes.button}> Submit</button>
            <Image direction={direction} duration={duration} onImageLoad={ImageLoadedHandler}/>
            <a className={styles.prev} onClick={PrevClickHandler}>&#10094;</a>
            <a className={styles.next} onClick={NextClickHandler}>&#10095;</a>
        </form>
    );
}

export default Form;
