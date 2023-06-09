import HundredSquareCalculations from "../components/HundredSquareCalculations";

export default function Multiplication() {
  return (
    <>
      <HundredSquareCalculations<number, number>
        title="Multiplication"
        mathOperator="\times"
        inputItemTeXView={(item) => `${item}`}
        outputItemTeXView={(item) => `${item}`}
        howToCalculate={(leftItem, topItem) =>
          String.raw`${leftItem} \times ${topItem} = ${leftItem * topItem}`
        }
        calculateFunction={(leftItem, topItem) => leftItem * topItem}
        createRandomItemFunction={() => Math.ceil(Math.random() * 9)}
      />
    </>
  );
}
