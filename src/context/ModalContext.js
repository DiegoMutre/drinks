import { createContext, useState } from "react";

// Create the context
export const ModalContext = createContext();

// Create the provider
const ModalProvider = props => {
    // State for id recipe
    const [idRecipe, setIdRecipe] = useState(null);

    return (
        <ModalContext.Provider value={{ idRecipe, setIdRecipe }}>
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
