import { useParams } from "react-router-dom";
import plantData from "../data/plants"; // Assuming you have the plant data somewhere

function PlantDetail() {
  const { id } = useParams();
  const plant = plantData.find((plant) => plant.id === parseInt(id));

  if (!plant) {
    return <h2>Plant not found</h2>;
  }

  return (
    <div className="plant-detail">
      <img src={plant.imageUrl} alt={plant.title} />
      <h2>{plant.title}</h2>
      <p>{plant.description}</p>
      <p>Price: {plant.price * 10}</p>
      <p>Rating: {plant.rating} stars</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default PlantDetail;
