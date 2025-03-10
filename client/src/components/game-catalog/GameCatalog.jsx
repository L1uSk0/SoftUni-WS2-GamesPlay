import { useEffect, useState } from "react";
import { dataService } from "../../services/gameService.js";
import GameItem from "./game-catalog-item/GameCatalogItem.jsx";

export default function GameCatalog() {
    const [games, setGames] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await dataService.getAll();
                const gamesArray = Object.values(result);
                setGames(gamesArray);
            } catch (error) {
                console.error('Failed to fetch games:', error);
            }
        };
        fetchData();
    }, []);
    

    return (
        <>
            <section id="catalog-page">
                <h1>All Games</h1>
                {/* Display div: with information about every game (if any) */}
                {games.length > 0 
                ?   games.map(game => <GameItem key={game._id} {...game} />)
                :   <h3 className="no-articles">No articles yet</h3>
                }

                {/* Display paragraph: If there is no games  */}
            </section>
        </>
    );
}