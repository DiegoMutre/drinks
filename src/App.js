import Form from "./components/Form";
import Header from "./components/Header";
import CategoriesProvider from "./context/CategoriesContext";

function App() {
    return (
        <CategoriesProvider>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <Form />
                </div>
            </div>
        </CategoriesProvider>
    );
}

export default App;
