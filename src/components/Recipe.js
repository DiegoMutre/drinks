const Recipe = ({ recipe }) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>
            </div>
        </div>
    );
};

export default Recipe;
