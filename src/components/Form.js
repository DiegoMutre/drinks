import { useContext, useState } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

const Form = () => {
    // Use Categories Context
    const { categories } = useContext(CategoriesContext);

    // State for search data
    const [search, setSearch] = useState({
        name: "",
        category: "",
    });

    // Read the content of the form
    const handleChange = e => {
        setSearch({ ...search, [e.target.name]: e.target.value });
    };

    return (
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Search Drinks by Category or Ingredients</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Search by ingredient"
                        onChange={handleChange}
                        value={search.name}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={handleChange}
                        value={search.category}
                    >
                        <option value="">-- Select Category --</option>
                        {categories.map(category => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            >
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search Drinks"
                    />
                </div>
            </div>
        </form>
    );
};

export default Form;
