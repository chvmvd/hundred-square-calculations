import { useState } from "react";
import HundredSquareCalculationsTable from "../components/HundredSquareCalculationsTable";
import { Paper, Stack, Typography, Button } from "@mui/material";

/**
 * component for displaying a hundred-square calculations
 * @param param0 props
 * @param param0.title title to display
 * @param param0.updateItems function to update the items
 * @param param0.mathOperator math operator to display
 * @param param0.leftItems left items to display
 * @param param0.rightItems right items to display
 * @param param0.calculateFunction function to calculate the answer
 * @param param0.willShowAnswer whether to show the answer
 * @returns hundred-square calculations
 */
export default function HundredSquareCalculations<Item>({
  title,
  updateItems,
  mathOperator,
  leftItems,
  rightItems,
  calculateFunction,
}: {
  title: string;
  updateItems: () => void;
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
          <Button variant="outlined" onClick={updateItems}>
            Reset
          </Button>
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