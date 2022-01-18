import React, {Fragment, useEffect, useState} from "react";
import classes from "../Css/Image.module.css";
const Image = (props)=>{
    const[imageSrc, setImageSrc] = useState();



    useEffect(() => {
        fetch("https://demo5110359.mockable.io/images").then(response => {
            return response.json();
        }).then(data => {
            setImageSrc(data.images[0]);
            props.onImageLoad(true);
        });
    }, []);

    return(
        <Fragment>
            <div className={classes.Containers}>
                <img className={classes.img} src={`${imageSrc}`}/>
            </div>
            <div className={classes.Containers}>
                <img className={classes.img} src="https://picsum.photos/200/300"/>
            </div>
            <div className={classes.Containers}>
                <img className={classes.img} src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ"/>
            </div>
            <div className={classes.Containers}>
                <img className={classes.img} src="https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc"/>
            </div>
            <div className={classes.Containers}>
                <img className={classes.img} src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"/>
            </div>


        </Fragment>
    )
};
export default Image;