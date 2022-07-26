import React from "react"
import style from "./index.module.scss"
import {NavLink} from "react-router-dom"

const Cards = ({beers}) => {

    return (
        <>
            {beers && beers.map((beer) => (
                <div className={style.card}>
                    <img src={beer.image_url} alt=""/>
                    <div className={style.info}>
                        <NavLink to={`/beer/${beer.id}`}><h3>{beer.name}</h3></NavLink>
                        <span>
                            {beer.description.length > 140 ? beer.description.slice(0, 139) + '...' : beer.description}
                        </span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Cards
