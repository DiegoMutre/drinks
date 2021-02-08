import Form from "./components/Form";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import CategoriesProvider from "./context/CategoriesContext";
import RecipesProvider from "./context/RecipesContext";

function App() {
    return (
        <CategoriesProvider>
            <RecipesProvider>
                <Header />
                <div className="container mt-5">
                    <div className="row">
                        <Form />
                    </div>
                    <RecipeList />
                </div>
            </RecipesProvider>
        </CategoriesProvider>
    );
}

export default App;
