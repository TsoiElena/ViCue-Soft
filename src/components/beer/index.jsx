import React, {useEffect, useState} from "react"
import style from "./index.module.scss"
import {useLocation} from "react-router"

function getIdentifier(text, after) {
    return text.slice(text.indexOf(after) + after.length).slice(0, 20)
}

const BeerPage = () => {
    const location = useLocation();
    const id = getIdentifier(location.pathname, 'beer/')
    const [beer, setBeer] = useState()

    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers?ids=${id}`)
            .then(response => response.json())
            .then((response) => setBeer(response))
    }, [])
    return (
        <>
            {beer ? (
                <div className={style.container}>
                    <img src={beer[0].image_url} alt=""/>
                    <div className={style.main}>
                        <div className={style.info}>
                            <h1>{beer[0].name}</h1>
                            <div>
                                <span className={style.tags}>Tagline: </span>
                                <span>{beer[0].tagline}</span>
                            </div>
                            <div>
                                <span className={style.tags}>Abv: </span>
                                <span>{beer[0].abv}</span>
                            </div>
                            <div>
                                <span className={style.tags}>Food pairing: </span>
                                {beer[0].food_pairing.map((food) => (
                                    <span>{food},</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className={style.tags}>Description:</p>
                            <p>{beer[0].description}</p>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default BeerPage
