import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function HundredSquareCalculationsTable<Item>({
  mathOperator,
  leftItems,
  rightItems,
  calculateFunction,
}: {
  mathOperator: string;
  leftItems: Item[];
  rightItems: Item[];
  calculateFunction: (leftItem: Item, rightItem: Item) => Item;
}) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <InlineMath>{mathOperator}</InlineMath>
            </td>
            {leftItems.map((leftItem, i) => (
              <td key={i}>
                <InlineMath>{`${leftItem}`}</InlineMath>
              </td>
            ))}
          </tr>
          {rightItems.map((rightItem, i) => (
            <tr key={i}>
              <td>
                <InlineMath>{`${rightItem}`}</InlineMath>
              </td>
              {leftItems.map((leftItem, j) => (
                <td key={`${i},${j}`}>
                  <InlineMath>{`${calculateFunction(
                    leftItem,
                    rightItem
                  )}`}</InlineMath>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
