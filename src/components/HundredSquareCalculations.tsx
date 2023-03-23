import { useState, useEffect, useCallback } from "react";
import HundredSquareCalculationsTable from "../components/HundredSquareCalculationsTable";
import Answer from "../components/Answer";
import { Paper, Stack, Typography, Button, Box } from "@mui/material";

/**
 * component for displaying a hundred-square calculations
 * @param param0 props
 * @param param0.title title to display
 * @param param0.mathOperator math operator to display
 * @param param0.inputItemTeXView function to display an input item
 * @param param0.outputItemTeXView function to display an output item
 * @param param0.howToCalculate function to display how to calculate the answer
 * @param param0.calculateFunction function to calculate the answer
 * @param param0.createRandomItemFunction function to create a random item
 * @returns hundred-square calculations
 */
export default function HundredSquareCalculations<InputItem, OutputItem>({
  title,
  mathOperator,
  inputItemTeXView,
  outputItemTeXView,
  howToCalculate,
  calculateFunction,
  createRandomItemFunction,
}: {
  title: string;
  mathOperator: string;
  inputItemTeXView: (item: InputItem) => string;
  outputItemTeXView: (item: OutputItem) => string;
  howToCalculate: (leftItem: InputItem, topItem: InputItem) => string;
  calculateFunction: (leftItem: InputItem, topItem: InputItem) => OutputItem;
  createRandomItemFunction: () => InputItem;
}) {
  const [leftItems, setLeftItems] = useState<InputItem[]>(
    [...Array(9)].map(() => createRandomItemFunction())
  );
  const [topItems, setTopItems] = useState<InputItem[]>(
    [...Array(9)].map(() => createRandomItemFunction())
  );
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
        <HundredSquareCalculationsTable<InputItem, OutputItem>
          mathOperator={mathOperator}
          leftItems={leftItems}
          topItems={topItems}
          inputItemTeXView={inputItemTeXView}
          outputItemTeXView={outputItemTeXView}
          calculateFunction={calculateFunction}
          willShowAnswer={willShowAnswer}
        />
        {willShowAnswer && (
          <Box p={2}>
            <Typography variant="h6" component="h3" pt={1} pb={1}>
              Answer
            </Typography>
            <Answer<InputItem>
              leftItems={leftItems}
              topItems={topItems}
              howToCalculate={howToCalculate}
            />
          </Box>
        )}
      </Paper>
    </>
  );
}
