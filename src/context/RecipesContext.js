import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Create the context
export const RecipesContext = createContext();

// Create the provider
const RecipesProvider = props => {
    // State for search data
    const [searchData, setSearchData] = useState({
        name: "",
        category: "",
    });

    // State for recipes
    const [recipes, setRecipes] = useState([]);

    // State if can consult
    const [canConsult, setCanConsult] = useState(false);

    const { name, category } = searchData;

    useEffect(() => {
        if (canConsult) {
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
                const res = await axios(url);
                setRecipes(res.data.drinks);
            };
            getRecipes();
        }
    }, [canConsult, category, name]);

    return (
        <RecipesContext.Provider
            value={{ recipes, setSearchData, setCanConsult }}
        >
            {props.children}
        </RecipesContext.Provider>
    );
};

export default RecipesProvider;
