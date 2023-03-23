import HundredSquareCalculations from "../components/HundredSquareCalculations";

export default function Matrix3x3() {
  return (
    <>
      <HundredSquareCalculations<
        [
          [number, number, number],
          [number, number, number],
          [number, number, number]
        ],
        [
          [number, number, number],
          [number, number, number],
          [number, number, number]
        ]
      >
        title="3x3 Matrix"
        mathOperator=""
        inputItemTeXView={(item) =>
          String.raw`\begin{pmatrix} ${item[0][0]} & ${item[0][1]} & ${item[0][2]} \\ ${item[1][0]} & ${item[1][1]} & ${item[1][2]} \\ ${item[2][0]} & ${item[2][1]} & ${item[2][2]} \end{pmatrix}`
        }
        outputItemTeXView={(item) =>
          String.raw`\begin{pmatrix} ${item[0][0]} & ${item[0][1]} & ${item[0][2]} \\ ${item[1][0]} & ${item[1][1]} & ${item[1][2]} \\ ${item[2][0]} & ${item[2][1]} & ${item[2][2]} \end{pmatrix}`
        }
        howToCalculate={(leftItem, topItem) =>
          String.raw`\begin{pmatrix} ${leftItem[0][0]} & ${leftItem[0][1]} & ${
            leftItem[0][2]
          } \\ ${leftItem[1][0]} & ${leftItem[1][1]} & ${leftItem[1][2]} \\ ${
            leftItem[2][0]
          } & ${leftItem[2][1]} & ${
            leftItem[2][2]
          } \end{pmatrix} \times \begin{pmatrix} ${topItem[0][0]} & ${
            topItem[0][1]
          } & ${topItem[0][2]} \\ ${topItem[1][0]} & ${topItem[1][1]} & ${
            topItem[1][2]
          } \\ ${topItem[2][0]} & ${topItem[2][1]} & ${
            topItem[2][2]
          } \end{pmatrix} = \begin{pmatrix}
          ${leftItem[0][0]}\times ${topItem[0][0]} + ${leftItem[0][1]}\times ${
            topItem[1][0]
          } + ${leftItem[0][2]}\times ${topItem[2][0]} & ${
            leftItem[0][0]
          }\times ${topItem[0][1]} + ${leftItem[0][1]}\times ${
            topItem[1][1]
          } + ${leftItem[0][2]}\times ${topItem[2][1]} & ${
            leftItem[0][0]
          }\times ${topItem[0][2]} + ${leftItem[0][1]}\times ${
            topItem[1][2]
          } + ${leftItem[0][2]}\times ${topItem[2][2]} \\ ${
            leftItem[1][0]
          }\times ${topItem[0][0]} + ${leftItem[1][1]}\times ${
            topItem[1][0]
          } + ${leftItem[1][2]}\times ${topItem[2][0]} & ${
            leftItem[1][0]
          }\times ${topItem[0][1]} + ${leftItem[1][1]}\times ${
            topItem[1][1]
          } + ${leftItem[1][2]}\times ${topItem[2][1]} & ${
            leftItem[1][0]
          }\times ${topItem[0][2]} + ${leftItem[1][1]}\times ${
            topItem[1][2]
          } + ${leftItem[1][2]}\times ${topItem[2][2]} \\ ${
            leftItem[2][0]
          }\times ${topItem[0][0]} + ${leftItem[2][1]}\times ${
            topItem[1][0]
          } + ${leftItem[2][2]}\times ${topItem[2][0]} & ${
            leftItem[2][0]
          }\times ${topItem[0][1]} + ${leftItem[2][1]}\times ${
            topItem[1][1]
          } + ${leftItem[2][2]}\times ${topItem[2][1]} & ${
            leftItem[2][0]
          }\times ${topItem[0][2]} + ${leftItem[2][1]}\times ${
            topItem[1][2]
          } + ${leftItem[2][2]}\times ${
            topItem[2][2]
          } \end{pmatrix} = \begin{pmatrix}
          ${
            leftItem[0][0] * topItem[0][0] +
            leftItem[0][1] * topItem[1][0] +
            leftItem[0][2] * topItem[2][0]
          } & ${
            leftItem[0][0] * topItem[0][1] +
            leftItem[0][1] * topItem[1][1] +
            leftItem[0][2] * topItem[2][1]
          } & ${
            leftItem[0][0] * topItem[0][2] +
            leftItem[0][1] * topItem[1][2] +
            leftItem[0][2] * topItem[2][2]
          } \\ ${
            leftItem[1][0] * topItem[0][0] +
            leftItem[1][1] * topItem[1][0] +
            leftItem[1][2] * topItem[2][0]
          } & ${
            leftItem[1][0] * topItem[0][1] +
            leftItem[1][1] * topItem[1][1] +
            leftItem[1][2] * topItem[2][1]
          } & ${
            leftItem[1][0] * topItem[0][2] +
            leftItem[1][1] * topItem[1][2] +
            leftItem[1][2] * topItem[2][2]
          } \\ ${
            leftItem[2][0] * topItem[0][0] +
            leftItem[2][1] * topItem[1][0] +
            leftItem[2][2] * topItem[2][0]
          } & ${
            leftItem[2][0] * topItem[0][1] +
            leftItem[2][1] * topItem[1][1] +
            leftItem[2][2] * topItem[2][1]
          } & ${
            leftItem[2][0] * topItem[0][2] +
            leftItem[2][1] * topItem[1][2] +
            leftItem[2][2] * topItem[2][2]
          } \end{pmatrix}`
        }
        calculateFunction={(leftItem, topItem) => [
          [
            leftItem[0][0] * topItem[0][0] +
              leftItem[0][1] * topItem[1][0] +
              leftItem[0][2] * topItem[2][0],
            leftItem[0][0] * topItem[0][1] +
              leftItem[0][1] * topItem[1][1] +
              leftItem[0][2] * topItem[2][1],
            leftItem[0][0] * topItem[0][2] +
              leftItem[0][1] * topItem[1][2] +
              leftItem[0][2] * topItem[2][2],
          ],
          [
            leftItem[1][0] * topItem[0][0] +
              leftItem[1][1] * topItem[1][0] +
              leftItem[1][2] * topItem[2][0],
            leftItem[1][0] * topItem[0][1] +
              leftItem[1][1] * topItem[1][1] +
              leftItem[1][2] * topItem[2][1],
            leftItem[1][0] * topItem[0][2] +
              leftItem[1][1] * topItem[1][2] +
              leftItem[1][2] * topItem[2][2],
          ],
          [
            leftItem[2][0] * topItem[0][0] +
              leftItem[2][1] * topItem[1][0] +
              leftItem[2][2] * topItem[2][0],
            leftItem[2][0] * topItem[0][1] +
              leftItem[2][1] * topItem[1][1] +
              leftItem[2][2] * topItem[2][1],
            leftItem[2][0] * topItem[0][2] +
              leftItem[2][1] * topItem[1][2] +
              leftItem[2][2] * topItem[2][2],
          ],
        ]}
        createRandomItemFunction={() =>
          [...Array(3)].map(() =>
            [...Array(3)].map(() => Math.ceil(Math.random() * 9))
          ) as [
            [number, number, number],
            [number, number, number],
            [number, number, number]
          ]
        }
      />
    </>
  );
}
