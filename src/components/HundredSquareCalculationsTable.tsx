import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export default function HundredSquareCalculationsTable<Item>({
  mathOperator,
  leftItems,
  rightItems,
  calculateFunction,
  willShowAnswer = true,
}: {
  mathOperator: string;
  leftItems: Item[];
  rightItems: Item[];
  calculateFunction: (leftItem: Item, rightItem: Item) => Item;
  willShowAnswer?: boolean;
}) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow key={0}>
              <TableCell key={"0, 0"} align="center" component="th">
                <InlineMath>{mathOperator}</InlineMath>
              </TableCell>
              {leftItems.map((leftItem, i) => (
                <TableCell key={`0, ${i}`} align="center" component="th">
                  <InlineMath>{`${leftItem}`}</InlineMath>
                </TableCell>
              ))}
            </TableRow>
            {rightItems.map((rightItem, i) => (
              <TableRow key={i}>
                <TableCell key={`${i}, 0`} align="center" component="th">
                  <InlineMath>{`${rightItem}`}</InlineMath>
                </TableCell>
                {leftItems.map((leftItem, j) => (
                  <TableCell key={`${i}, ${j}`} align="center">
                    <InlineMath>{`${
                      willShowAnswer
                        ? calculateFunction(leftItem, rightItem)
                        : ""
                    }`}</InlineMath>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
