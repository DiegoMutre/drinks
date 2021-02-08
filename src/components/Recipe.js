import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: "absolute",
        width: 600,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: "auto",
        maxHeight: "100vh",
    },
}));

const Recipe = ({ recipe }) => {
    // Modal Config
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleModalClick = () => {
        setOpen(!open);
    };

    // Use the modal Context
    const { recipeInfo, setRecipeInfo, setIdRecipe } = useContext(ModalContext);

    // Click the button
    const handleButtonClick = () => {
        setIdRecipe(recipe.idDrink);
        handleModalClick();
    };

    // Show ordered ingredients
    const showIngredients = recipeInfo => {
        let ingredients = [];

        for (let i = 1; i < 16; i++) {
            if (recipeInfo[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={i}>
                        {recipeInfo[`strIngredient${i}`]} -
                        {recipeInfo[`strMeasure${i}`]}
                    </li>
                );
            }
        }

        return ingredients;
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
                    <Modal
                        open={open}
                        onClose={() => {
                            handleModalClick();
                            setIdRecipe(null);
                            setRecipeInfo({});
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipeInfo.strDrink}</h2>
                            <h3 className="mt-4">Instructions:</h3>
                            <p>{recipeInfo.strInstructions}</p>
                            <img
                                className="img-fluid"
                                src={recipeInfo.strDrinkThumb}
                                alt={recipeInfo.strDrink}
                            />
                            <h3>Ingredients</h3>
                            <ul>{showIngredients(recipeInfo)}</ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
