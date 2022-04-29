import { Grid } from "semantic-ui-react";
import Link from "next/link";
export default function ItemList({ list }) {
  return (
    <div className="itemList">
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column>
              <Link href={`/view/${item.id}`}>
                <a>
                  <div>
                    <img
                      className="item_image"
                      src={item.image_link}
                      alt={item.name}
                      key={item.id}
                    />
                    <div className="item_name">{item.name}</div>
                    <div className="item_type">Type: {item.product_type}</div>
                    <div className="item_price">${item.price}</div>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
