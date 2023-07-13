import { Card, Metric, Text, List, ListItem, ProgressBar, Grid } from "@tremor/react";

const locationA = [
  {
    name: "Product A",
    share: 34,
    amount: "$ 11,715",
  },
  {
    name: "Product B",
    share: 24,
    amount: "$ 8,269",
  },
  {
    name: "Product C",
    share: 11,
    amount: "$ 3,790",
  },
  {
    name: "Product D",
    share: 10,
    amount: "$ 3,445",
  },
  {
    name: "Product E",
    share: 8,
    amount: "$ 2,756",
  },
];

const categories = [
  {
    title: "Sales • Location A",
    metric: "$ 34,456",
    data: locationA,
  },
];

export default function TabelaLicenca() {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
          <List className="mt-4">
            {item.data.map((product) => (
              <ListItem key={product.name}>
                <div className="w-full">
                  <Text>{product.name}</Text>
                  <ProgressBar
                    value={product.share}
                    label={`${product.share}%`}
                    tooltip={product.amount}
                  />
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      ))}
    </Grid>
  );
}