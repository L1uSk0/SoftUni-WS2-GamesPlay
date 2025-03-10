import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { dataService } from "../../services/gameService.js";
import { Link } from "react-router";

export default function GameDetails() {
    const navigate = useNavigate();
    const {gameId} = useParams();
    const [game,setGame] = useState({})

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
       const hasConfirmed =  confirm(`Are you sure you want to delete ${game.title} game ?`);

       if(!hasConfirmed){
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
                    {/* Bonus ( for Guests and Users ) */}
                    <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            {/* list all comments for current game (If any) */}
                            <li className="comment">
                                <p>Content: I rate this one quite highly.</p>
                            </li>
                            <li className="comment">
                                <p>Content: The best game.</p>
                            </li>
                        </ul>
                        {/* Display paragraph: If there are no games in the database */}
                        <p className="no-comment">No comments.</p>
                    </div>
                    {/* Edit/Delete buttons ( Only for creator of this game )  */}
                    <div className="buttons">
                        <Link to="#" className="button">
                            Edit
                        </Link>
                        <Link onClick={onDeleteClickHandler} className="button">
                            Delete
                        </Link>
                    </div>
                </div>
                {/* Bonus */}
                {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form">
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            defaultValue={""}
                        />
                        <input
                            className="btn submit"
                            type="submit"
                            defaultValue="Add Comment"
                        />
                    </form>
                </article>
            </section>
        </>
    );
}