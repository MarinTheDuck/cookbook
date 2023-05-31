import { useContext } from "react";
import { GlobalContext } from "../App";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const { username, setUsername, setToken, setPage, token } =
    useContext(GlobalContext);

  const handleLogout = () => {
    // Perform logout logic, e.g., clear token from local storage
    token && localStorage.removeItem("token");

    // Clear the username and token in the global context
    setUsername("");
    setToken("");

    // Change the page to Login or any other page you desire
    setPage("");
  };

  return (
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2>Welcome, {username}!</h2>
          <p>Here you can view your recipes and add new ones.</p>
        </div>
      </div>
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <RecipeCard
          title="Spaghetti Bolognese"
          text="Spaghetti Bolognese is a classic Italian dish consisting of al dente spaghetti pasta topped with a rich and hearty meat sauce. The sauce is typically made with ground beef, onions, garlic, tomatoes, and various herbs and spices, resulting in a flavorful and comforting meal."
        />
        <RecipeCard
          title="Chicken Tikka Masala"
          text="Chicken Tikka Masala is a popular Indian dish known for its vibrant flavors and creamy tomato-based sauce. It features marinated pieces of grilled chicken cooked in a spiced curry sauce made with tomatoes, onions, garlic, ginger, and a blend of aromatic spices. It is often served with basmati rice or naan bread."
        />
        <RecipeCard
          title="Caesar Salad"
          text="Caesar Salad is a classic salad that originated in Mexico but gained popularity in the United States. It typically consists of crisp romaine lettuce leaves tossed with a creamy Caesar dressing, Parmesan cheese, croutons, and sometimes grilled chicken or shrimp. The combination of textures and flavors makes it a refreshing and satisfying meal."
        />
        <RecipeCard
          title="Beef Stir-Fry"
          text="Beef Stir-Fry is a versatile and quick meal that is commonly found in Asian cuisine. It involves thinly sliced beef cooked quickly in a hot wok or skillet with a variety of vegetables like bell peppers, broccoli, carrots, and onions. The dish is typically flavored with soy sauce, ginger, garlic, and other seasonings, resulting in a flavorful and nutritious one-pan meal."
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogout}>
        <i className="bi bi-box-arrow-left me-2"></i>Logout
      </button>
    </div>
  );
};

export default Home;
