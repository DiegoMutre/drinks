import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Recipe = ({ recipe }) => {
    // Use the modal Context
    const { setIdRecipe } = useContext(ModalContext);

    // Click the button
    const handleButtonClick = () => {
        setIdRecipe(recipe.idDrink);
    };

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>
                <img
                    className="card-img-top"
                    src={recipe.strDrinkThumb}
                    alt={recipe.strDrink}
                />
                <div className="card-body">
                    <button
                        className="btn btn-block btn-primary"
                        onClick={handleButtonClick}
                    >
                        See Recipe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
