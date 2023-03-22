import HundredSquareCalculations from "../components/HundredSquareCalculations";

export default function OuterProduct() {
  return (
    <>
      <HundredSquareCalculations<[number, number, number]>
        title="Outer Product"
        mathOperator="\times"
        calculateFunction={(leftItem, topItem) => [
          leftItem[0] * topItem[1] - leftItem[1] * topItem[0],
          leftItem[2] * topItem[0] - leftItem[0] * topItem[2],
          leftItem[1] * topItem[2] - leftItem[2] * topItem[1],
        ]}
        itemTeXView={(item) =>
          String.raw`\begin{pmatrix} ${item[0]} \\ ${item[1]} \\ ${item[2]} \end{pmatrix}`
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
