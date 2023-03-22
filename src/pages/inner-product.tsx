import HundredSquareCalculations from "../components/HundredSquareCalculations";

export default function InnerProduct() {
  return (
    <>
      <HundredSquareCalculations<[number, number, number], number>
        title="Inner Product"
        mathOperator="\cdot"
        calculateFunction={(leftItem, topItem) =>
          leftItem[0] * topItem[0] +
          leftItem[1] * topItem[1] +
          leftItem[2] * topItem[2]
        }
        inputItemTeXView={(item) =>
          String.raw`\begin{pmatrix} ${item[0]} \\ ${item[1]} \\ ${item[2]} \end{pmatrix}`
        }
        outputItemTeXView={(item) => `${item}`}
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
