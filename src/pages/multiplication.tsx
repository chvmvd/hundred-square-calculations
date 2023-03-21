import HundredSquareCalculations from "../components/HundredSquareCalculations";

export default function Multiplication() {
  return (
    <>
      <HundredSquareCalculations<number>
        title="Multiplication"
        mathOperator="\times"
        calculateFunction={(leftItem, topItem) => leftItem * topItem}
        createRandomItemFunction={() => Math.ceil(Math.random() * 9)}
      />
    </>
  );
}
