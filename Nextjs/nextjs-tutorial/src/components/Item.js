import { Divider, Button } from "semantic-ui-react";
export default function Item({ item }) {
  return (
    <div className="item">
      <div className="item_contents">
        <div>
          <img src={item.image_link} alt={item.name} />
        </div>
        <div>
          <div className="item_name">{item.name}</div>
          <div className="item_type">Type: {item.product_type}</div>
          <div className="item_price">${item.price}</div>
          <Button color="orange">구매하기</Button>
        </div>
      </div>
      <Divider />
      <div className="item_description ">
        <strong>Description</strong>
        <div>{item.description}</div>
      </div>
    </div>
  );
}
