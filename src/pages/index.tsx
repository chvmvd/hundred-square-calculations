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
            description="Add the number in the top row to the number in the left column."
            example="1 + 1 = 2"
            href="/addition"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <NavigationCard
            title="Multiplication"
            description="Multiply the number in the top row by the number in the left column."
            example="2 \times 2 = 4"
            href="/multiplication"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <NavigationCard
            title="Outer Product"
            description="Calculate the outer product of the number in the left column and the number in the top row."
            example={String.raw`\begin{pmatrix} 2 \\ 5 \\ 9 \end{pmatrix}\times \begin{pmatrix} 1 \\ 4 \\ 9 \end{pmatrix} = \begin{pmatrix} 3 \\ -9 \\ 9 \end{pmatrix}`}
            href="/outer-product"
          />
        </Grid>
      </Grid>
    </>
  );
}
