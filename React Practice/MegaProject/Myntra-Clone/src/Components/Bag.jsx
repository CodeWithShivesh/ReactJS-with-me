import { useSelector } from "react-redux";
import BagItems from "./BagItem";
import BagSummary from "./BagSummary";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItems item={item} />
          ))}
        </div>
        <BagSummary></BagSummary>
      </div>
    </main>
  );
};

export default Bag;
