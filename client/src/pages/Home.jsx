import { useEffect, useState } from "react";
import "../App.css";

function Home() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetch("/api/get-all-food-trucks")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched trucks:", data);
        setTrucks(data);
      })
      .catch((error) => console.log("Fetch error:", error));
  }, []);

  return (
    <div className="home-container">
      <h1>All Food Trucks</h1>
      <p>Total number of food trucks: {trucks.length}</p>

      <div className="card-container">
        {trucks.map((truck) => (
          <div key={truck.id} className="card">
            <h3>{truck.name}</h3>
            <p><strong>Id:</strong> {truck.id}</p>
            <p><strong>Location:</strong> {truck.current_location}</p>
            <p><strong>Daily Special:</strong> {truck.daily_special}</p>
            <p><strong>Slogan:</strong> {truck.slogan}</p>
            <p><strong>Has Vegan Options:</strong> {truck.has_vegan_options ? "Yes ✅" : "No ❌"}</p>
            <p><strong>Price Level:</strong> {truck.price_level}</p>
            <p><strong>Rating:</strong> {truck.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;