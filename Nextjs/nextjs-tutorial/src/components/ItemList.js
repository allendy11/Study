import { Grid } from "semantic-ui-react";

export default function ItemList({ list }) {
  return (
    <div>
      <span>Item List</span>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column>
              <img src={item.image_link} alt={item.name} key={item.id} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
