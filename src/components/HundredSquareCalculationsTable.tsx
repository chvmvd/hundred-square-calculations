import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { Table, TableBody, TableRow, TableCell, Box } from "@mui/material";

/**
 * component for displaying a table of hundred-square calculations
 * @param param0 props
 * @param param0.mathOperator math operator to display
 * @param param0.leftItems left items to display
 * @param param0.topItems top items to display
 * @param param0.itemTeXView function to display an item
 * @param param0.calculateFunction function to calculate the answer
 * @param param0.willShowAnswer whether to show the answer
 * @returns table of hundred-square calculations
 */
export default function HundredSquareCalculationsTable<Item>({
  mathOperator,
  leftItems,
  topItems,
  itemTeXView,
  calculateFunction,
  willShowAnswer = true,
}: {
  mathOperator: string;
  leftItems: Item[];
  topItems: Item[];
  itemTeXView: (item: Item) => string;
  calculateFunction: (leftItem: Item, topItem: Item) => Item;
  willShowAnswer?: boolean;
}) {
  return (
    <>
      <Table>
        <TableBody>
          <TableRow key={0}>
            <TableCell
              key={"0, 0"}
              align="center"
              component="th"
              sx={{ border: 1 }}
            >
              <InlineMath>{mathOperator}</InlineMath>
            </TableCell>
            {topItems.map((topItem, i) => (
              <TableCell
                key={`0, ${i}`}
                align="center"
                component="th"
                sx={{ border: 1 }}
              >
                <InlineMath>{itemTeXView(topItem)}</InlineMath>
              </TableCell>
            ))}
          </TableRow>
          {leftItems.map((leftItem, i) => (
            <TableRow key={i}>
              <TableCell
                key={`${i}, 0`}
                align="center"
                component="th"
                sx={{ border: 1 }}
              >
                <InlineMath>{itemTeXView(leftItem)}</InlineMath>
              </TableCell>
              {topItems.map((topItem, j) => (
                <TableCell key={`${i}, ${j}`} align="center" sx={{ border: 1 }}>
                  <Box sx={{ color: "red" }}>
                    <InlineMath>{`${
                      willShowAnswer
                        ? itemTeXView(calculateFunction(leftItem, topItem))
                        : ""
                    }`}</InlineMath>
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
