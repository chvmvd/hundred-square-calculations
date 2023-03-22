import { useState, useEffect, useCallback } from "react";
import HundredSquareCalculationsTable from "../components/HundredSquareCalculationsTable";
import { Paper, Stack, Typography, Button } from "@mui/material";

/**
 * component for displaying a hundred-square calculations
 * @param param0 props
 * @param param0.title title to display
 * @param param0.mathOperator math operator to display
 * @param param0.itemTeXView function to display an item
 * @param param0.calculateFunction function to calculate the answer
 * @param param0.createRandomItemFunction function to create a random item
 * @returns hundred-square calculations
 */
export default function HundredSquareCalculations<Item>({
  title,
  mathOperator,
  itemTeXView,
  calculateFunction,
  createRandomItemFunction,
}: {
  title: string;
  mathOperator: string;
  itemTeXView: (item: Item) => string;
  calculateFunction: (leftItem: Item, topItem: Item) => Item;
  createRandomItemFunction: () => Item;
}) {
  const [leftItems, setLeftItems] = useState<Item[]>([...Array(9)]);
  const [topItems, setTopItems] = useState<Item[]>([...Array(9)]);
  const [willShowAnswer, setWillShowAnswer] = useState(false);
  const updateItems = useCallback(() => {
    setLeftItems([...Array(9)].map(() => createRandomItemFunction()));
    setTopItems([...Array(9)].map(() => createRandomItemFunction()));
  }, [createRandomItemFunction]);
  useEffect(() => {
    updateItems();
  }, [updateItems]);
  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Stack direction="row" spacing={2} pl={2} mb={1}>
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
          topItems={topItems}
          itemTeXView={itemTeXView}
          calculateFunction={calculateFunction}
          willShowAnswer={willShowAnswer}
        />
      </Paper>
    </>
  );
}
