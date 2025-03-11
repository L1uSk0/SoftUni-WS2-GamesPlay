import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { dataService } from "../../services/gameService.js";
import { Link } from "react-router";
import CommentsShow from "../comments-show/CommentsShow.jsx";
import CommentsCreate from "../comments-create/CommentsCreate.jsx";

export default function GameDetails() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await dataService.getDetails(gameId);
                setGame(result);
            } catch (error) {
                console.error('Failed to fetch games:', error);
            }
        };
        fetchData();
    }, [gameId]);

    const onDeleteClickHandler = () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${game.title} game ?`);

        if (!hasConfirmed) {
            return;
        }
        dataService.deleteGame(gameId);
        navigate(`/games`)
    }

    return (
        <>
            <section id="game-details">
                <h1>Game Details</h1>
                <div className="info-section">
                    <div className="game-header">
                        <img className="game-img" src={game.imageUrl} />
                        <h1>{game.title}</h1>
                        <span className="levels">MaxLevel: {game.maxLevel}</span>
                        <p className="type">{game.category}</p>
                    </div>
                    <p className="text">
                        {game.summary}
                    </p>

                    <CommentsShow />
                    {/* Edit/Delete buttons ( Only for creator of this game )  */}
                    <div className="buttons">
                        <Link to={`/games/${gameId}/edit`} className="button">
                            Edit
                        </Link>
                        <Link onClick={onDeleteClickHandler} className="button">
                            Delete
                        </Link>
                    </div>
                </div>
                <CommentsCreate/>
            </section>
        </>
    );
}