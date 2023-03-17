import { useState } from "react";
import HundredSquareCalculationsTable from "../components/HundredSquareCalculationsTable";
import { Paper, Stack, Typography, Button } from "@mui/material";

export default function HundredSquareCalculations<Item>({
  title,
  mathOperator,
  leftItems,
  rightItems,
  calculateFunction,
}: {
  title: string;
  mathOperator: string;
  leftItems: Item[];
  rightItems: Item[];
  calculateFunction: (leftItem: Item, rightItem: Item) => Item;
}) {
  const [willShowAnswer, setWillShowAnswer] = useState(false);
  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Stack direction="row" spacing={2} pl={3} pr={5} mb={1}>
          <Typography variant="h5" component="h2" flexGrow={1}>
            {title}
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              setWillShowAnswer(!willShowAnswer);
            }}
          >
            {willShowAnswer ? "Hide Answer" : "Show Answer"}
          </Button>
        </Stack>
        <HundredSquareCalculationsTable<Item>
          mathOperator={mathOperator}
          leftItems={leftItems}
          rightItems={rightItems}
          calculateFunction={calculateFunction}
          willShowAnswer={willShowAnswer}
        />
      </Paper>
    </>
  );
}
