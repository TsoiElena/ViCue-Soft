import React from "react"
import style from "./index.module.scss"
import {NavLink, useNavigate} from "react-router-dom"

const Header = ({str, setStr}) => {
    const navigate = useNavigate()
    return (
        <div className={style.container}>
            <div className={style.head}>
                <NavLink to="/"> <h1 onClick={() => setStr('')}>BEER</h1> </NavLink>
                <input type="text" value={str} onChange={(e) => {
                    setStr(e.target.value)
                    navigate('/')
                }} />
            </div>
        </div>
    )
}
export default Header
