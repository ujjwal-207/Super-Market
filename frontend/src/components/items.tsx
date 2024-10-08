import { Button } from "../../@/components/ui/button";
import all_product from "../assets/data";

const Items = () => {
  return (
    <div>
      <Button />
      {all_product.map((data, i) => (
        <img src={data.image} alt={`Product ${i}`} key={i} />
      ))}
    </div>
  );
};

export default Items;
