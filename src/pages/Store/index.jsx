import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";

const Store = () => {
  const { categoryId } = useParams();

  return (
    <>
      <ItemList category={categoryId} />
    </>
  )
}

export default Store;
