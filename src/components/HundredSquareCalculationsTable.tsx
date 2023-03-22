import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { Table, TableBody, TableRow, TableCell, Box } from "@mui/material";

/**
 * component for displaying a table of hundred-square calculations
 * @param param0 props
 * @param param0.mathOperator math operator to display
 * @param param0.leftItems left items to display
 * @param param0.topItems top items to display
 * @param param0.inputItemTeXView function to display an input item
 * @param param0.outputItemTeXView function to display an output item
 * @param param0.calculateFunction function to calculate the answer
 * @param param0.willShowAnswer whether to show the answer
 * @returns table of hundred-square calculations
 */
export default function HundredSquareCalculationsTable<InputItem, OutputItem>({
  mathOperator,
  leftItems,
  topItems,
  inputItemTeXView,
  outputItemTeXView,
  calculateFunction,
  willShowAnswer = true,
}: {
  mathOperator: string;
  leftItems: InputItem[];
  topItems: InputItem[];
  inputItemTeXView: (item: InputItem) => string;
  outputItemTeXView: (item: OutputItem) => string;
  calculateFunction: (leftItem: InputItem, topItem: InputItem) => OutputItem;
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
                <InlineMath>{inputItemTeXView(topItem)}</InlineMath>
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
                <InlineMath>{inputItemTeXView(leftItem)}</InlineMath>
              </TableCell>
              {topItems.map((topItem, j) => (
                <TableCell key={`${i}, ${j}`} align="center" sx={{ border: 1 }}>
                  <Box sx={{ color: "red" }}>
                    <InlineMath>{`${
                      willShowAnswer
                        ? outputItemTeXView(
                            calculateFunction(leftItem, topItem)
                          )
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
