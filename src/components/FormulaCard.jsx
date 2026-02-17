export default function FormulaCard({ formula }) {

  const saveFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(formula);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Saved to favorites!");
  };

  return (
    <div style={{border: "1px solid #ccc", padding: "15px", margin: "15px 0"}}>
      <h3>{formula.name}</h3>
      <p><strong>Platforms:</strong> {formula.platforms.join(", ")}</p>
      <p>{formula.description}</p>
      <pre>{formula.formula}</pre>
      <button onClick={saveFavorite}>Save to Favorites</button>
    </div>
  );
}
