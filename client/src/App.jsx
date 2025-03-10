import { Routes, Route } from 'react-router'

import './App.css'
import Header from "./components/header/Header.jsx"
import Home from './components/home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/register/register.jsx'
import GameCreate from './components/game-create/GameCreate.jsx'
import GameCatalog from './components/game-catalog/GameCatalog.jsx'
import GameDetails from './components/game-details/GameDetails.jsx'

function App() {
    return (
        <>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/games/:gameId/details' element={<GameDetails />} />
                        <Route path='/games/create' element={<GameCreate />} />
                        <Route path='/games' element={<GameCatalog />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default App
