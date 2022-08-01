import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product Details</h1>
      <h1>{params.productDetail}</h1>
    </section>
  );
};

export default ProductDetails;
