import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

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
      <table>
        <tbody>
          <tr key={0}>
            <td key={"0, 0"}>
              <InlineMath>{mathOperator}</InlineMath>
            </td>
            {leftItems.map((leftItem, i) => (
              <td key={`0, ${i}`}>
                <InlineMath>{`${leftItem}`}</InlineMath>
              </td>
            ))}
          </tr>
          {rightItems.map((rightItem, i) => (
            <tr key={i}>
              <td key={`${i}, 0`}>
                <InlineMath>{`${rightItem}`}</InlineMath>
              </td>
              {leftItems.map((leftItem, j) => (
                <td key={`${i}, ${j}`}>
                  <InlineMath>{`${
                    willShowAnswer ? calculateFunction(leftItem, rightItem) : ""
                  }`}</InlineMath>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
