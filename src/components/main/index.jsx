import React, {useEffect, useState} from "react"
import style from "./index.module.scss"
import Cards from "../card"

const MainPage = ({searchParam}) => {
    const [beers, setBeers] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        if (searchParam) {
            fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchParam}`)
                .then(response => response.json())
                .then((response) => setBeers(response))
        } else {
            fetch(`https://api.punkapi.com/v2/beers?page=${page}`)
                .then(response => response.json())
                .then((response) => setBeers(response))
        }
        window.scrollTo(0, 0)
    }, [page, searchParam])

    return (
        <>
            <div className={style.container}>
                <Cards beers={beers} />
            </div>
            {beers.length && !searchParam ? (
                <div className={style.pagination}>
                    {page > 2 ? (<button onClick={() => setPage(1)}> start </button>) : null}
                    {page > 1 ? (<button onClick={() => setPage(page - 1)}> back </button>) : null}
                    <div> {page} </div>
                    <button onClick={() => setPage(page + 1)}> next</button>
                </div>
            ) : null}
        </>
    )
}

export default MainPage
