import HundredSquareCalculations from "../components/HundredSquareCalculations";

export default function InnerProduct() {
  return (
    <>
      <HundredSquareCalculations<[number, number, number], number>
        title="Inner Product"
        mathOperator="\cdot"
        inputItemTeXView={(item) =>
          String.raw`\begin{pmatrix} ${item[0]} \\ ${item[1]} \\ ${item[2]} \end{pmatrix}`
        }
        outputItemTeXView={(item) => `${item}`}
        howToCalculate={(leftItem, topItem) =>
          String.raw`\begin{pmatrix} ${leftItem[0]} \\ ${leftItem[1]} \\ ${
            leftItem[2]
          } \end{pmatrix} \cdot \begin{pmatrix} ${topItem[0]} \\ ${
            topItem[1]
          } \\ ${topItem[2]} \end{pmatrix} = ${leftItem[0]}\times ${
            topItem[0]
          } + ${leftItem[1]}\times ${topItem[1]} + ${leftItem[2]}\times ${
            topItem[2]
          } = ${
            leftItem[0] * topItem[0] +
            leftItem[1] * topItem[1] +
            leftItem[2] * topItem[2]
          }`
        }
        calculateFunction={(leftItem, topItem) =>
          leftItem[0] * topItem[0] +
          leftItem[1] * topItem[1] +
          leftItem[2] * topItem[2]
        }
        createRandomItemFunction={() =>
          [...Array(3)].map(() => Math.ceil(Math.random() * 9)) as [
            number,
            number,
            number
          ]
        }
      />
    </>
  );
}
