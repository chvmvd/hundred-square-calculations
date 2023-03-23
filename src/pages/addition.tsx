import HundredSquareCalculations from "../components/HundredSquareCalculations";

export default function Addition() {
  return (
    <>
      <HundredSquareCalculations<number, number>
        title="Addition"
        mathOperator="+"
        inputItemTeXView={(item) => `${item}`}
        outputItemTeXView={(item) => `${item}`}
        howToCalculate={(leftItem, topItem) =>
          `${leftItem} + ${topItem} = ${leftItem + topItem}`
        }
        calculateFunction={(leftItem, topItem) => leftItem + topItem}
        createRandomItemFunction={() => Math.ceil(Math.random() * 9)}
      />
    </>
  );
}
