import { useState, useEffect } from "react";
import HundredSquareCalculationsTable from "../components/HundredSquareCalculationsTable";
import { Stack, Typography, Button } from "@mui/material";

function calculateRandomNumbers() {
  return [...Array(9)].map((_) => Math.ceil(Math.random() * 9));
}

export default function Home() {
  const [leftNumbers, setLeftNumbers] = useState([...Array(9)].map(() => 1));
  const [rightNumbers, setRightNumbers] = useState([...Array(9)].map(() => 1));
  useEffect(() => {
    setLeftNumbers(calculateRandomNumbers());
    setRightNumbers(calculateRandomNumbers());
  }, []);
  return (
    <>
      <main>
        <Stack direction="row" spacing={2} pl={3} pr={5} mt={1} mb={1}>
          <Typography variant="h5" component="h2" flexGrow={1}>
            Addition
          </Typography>
          <Button variant="outlined">解答を表示</Button>
        </Stack>
        <HundredSquareCalculationsTable<number>
          mathOperator="+"
          leftItems={leftNumbers}
          rightItems={rightNumbers}
          calculateFunction={(leftItem, rightItem) => leftItem + rightItem}
        />
      </main>
    </>
  );
}
