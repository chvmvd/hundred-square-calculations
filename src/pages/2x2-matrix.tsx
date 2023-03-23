import HundredSquareCalculations from "../components/HundredSquareCalculations";

export default function Matrix2x2() {
  return (
    <>
      <HundredSquareCalculations<
        [[number, number], [number, number]],
        [[number, number], [number, number]]
      >
        title="2x2 Matrix"
        mathOperator=""
        calculateFunction={(leftItem, topItem) => [
          [
            leftItem[0][0] * topItem[0][0] + leftItem[0][1] * topItem[1][0],
            leftItem[0][0] * topItem[0][1] + leftItem[0][1] * topItem[1][1],
          ],
          [
            leftItem[1][0] * topItem[0][0] + leftItem[1][1] * topItem[1][0],
            leftItem[1][0] * topItem[0][1] + leftItem[1][1] * topItem[1][1],
          ],
        ]}
        inputItemTeXView={(item) =>
          String.raw`\begin{pmatrix} ${item[0][0]} & ${item[0][1]} \\ ${item[1][0]} & ${item[1][1]} \end{pmatrix}`
        }
        outputItemTeXView={(item) =>
          String.raw`\begin{pmatrix} ${item[0][0]} & ${item[0][1]} \\ ${item[1][0]} & ${item[1][1]} \end{pmatrix}`
        }
        createRandomItemFunction={() =>
          [...Array(2)].map(() =>
            [...Array(2)].map(() => Math.ceil(Math.random() * 9))
          ) as [[number, number], [number, number]]
        }
      />
    </>
  );
}
