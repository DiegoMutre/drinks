import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Create the context
export const ModalContext = createContext();

// Create the provider
const ModalProvider = props => {
    // State for id recipe
    const [idRecipe, setIdRecipe] = useState(null);

    // State for recipe information
    const [recipeInfo, setRecipeInfo] = useState({});

    // Get recipe info when idRecipe is a number
    useEffect(() => {
        if (idRecipe) {
            const getRecipe = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
                const res = await axios(url);
                setRecipeInfo(res.data.drinks[0]);
            };
            getRecipe();
        }
    }, [idRecipe]);

    return (
        <ModalContext.Provider value={{ idRecipe, setIdRecipe }}>
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
