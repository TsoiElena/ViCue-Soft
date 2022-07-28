import "./App.css"
import React, {useState} from "react"
import {Route, Routes} from "react-router-dom"

import MainPage from "./components/main"
import Header from "./components/header"
import BeerPage from "./components/beer"

function App() {
    const [searchLine, setSearchLine] = useState('')

    return (
        <>
            <Header str={searchLine} setStr={setSearchLine} />
            <Routes>
                <Route path="/" element={<MainPage
                    searchParam={searchLine.replace(' ', '_')}
                />} />
                <Route path="/beer/:beerId" element={<BeerPage />} />
            </Routes>
        </>
    )
}

export default App
