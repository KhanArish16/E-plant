import Card from "./Card";
import SkeletonLoader from "./SkeletonLoader";

const CardList = ({ data, isLoading }) => {
  return (
    <div className="grid">
      {isLoading
        ? [...new Array(6)].map((_, index) => <SkeletonLoader key={index} />)
        : data.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              sizes={product.sizes}
              price={product.price}
            />
          ))}
    </div>
  );
};

export default CardList;
