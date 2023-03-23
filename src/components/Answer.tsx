import { Fragment } from "react";
import { BlockMath } from "react-katex";
import { Typography } from "@mui/material";

/**
 * show how to calculate the answer
 * @param param0 props
 * @param param0.leftItems left items
 * @param param0.topItems top items
 * @param param0.howToCalculate function to show how to calculate the answer
 * @returns how to calculate the answer
 */
export default function Answer<InputItem>({
  leftItems,
  topItems,
  howToCalculate,
}: {
  leftItems: InputItem[];
  topItems: InputItem[];
  howToCalculate: (leftItem: InputItem, topItem: InputItem) => string;
}) {
  return (
    <>
      {leftItems.map((leftItem, i) =>
        topItems.map((topItem, j) => (
          <Fragment key={`${i},${j}`}>
            <Typography variant="body1" component="div">
              {`row${i + 1}, column${j + 1}`}
              <BlockMath>{howToCalculate(leftItem, topItem)}</BlockMath>
            </Typography>
          </Fragment>
        ))
      )}
    </>
  );
}
