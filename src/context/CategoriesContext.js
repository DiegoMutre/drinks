import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Create context
export const CategoriesContext = createContext();

// Create Provider
const CategoriesProvider = props => {
    // State of context
    const [categories, setCategories] = useState([]);

    // Fetch the api
    useEffect(() => {
        const getCategories = async () => {
            const url =
                "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
            const res = await axios(url);
            setCategories(res.data.drinks);
        };
        getCategories();
    }, []);

    return (
        <CategoriesContext.Provider value={{ categories, setCategories }}>
            {props.children}
        </CategoriesContext.Provider>
    );
};

export default CategoriesProvider;
