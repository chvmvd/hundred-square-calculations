import { useRouter } from "next/router";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

function NavigationCard(props: {
  title: string;
  description: string;
  example: string;
  href: string;
}) {
  const router = useRouter();
  return (
    <>
      <Card>
        <CardActionArea
          onClick={async () => {
            await router.push(props.href);
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h1">
              {props.title}
            </Typography>
            <Typography variant="body1" component="p">
              {props.description}
            </Typography>
            <Typography variant="body1" component="div">
              example:
              <BlockMath>{props.example}</BlockMath>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <NavigationCard
            title="Addition"
            description="Add the numbers in the top row to the numbers in the left column."
            example="1 + 1 = 2"
            href="/addition"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <NavigationCard
            title="Subtraction"
            description="Subtract the numbers in the top row from the numbers in the left column."
            example="2 - 1 = 1"
            href="/subtraction"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <NavigationCard
            title="Multiplication"
            description="Multiply the numbers in the top row by the numbers in the left column."
            example="2 \times 2 = 4"
            href="/multiplication"
          />
        </Grid>
      </Grid>
    </>
  );
}
