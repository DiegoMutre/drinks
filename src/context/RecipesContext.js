import { createContext, useState } from "react";

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

    return (
        <RecipesContext.Provider value={{ setSearchData }}>
            {props.children}
        </RecipesContext.Provider>
    );
};

export default RecipesProvider;
