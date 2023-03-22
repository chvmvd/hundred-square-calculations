import HundredSquareCalculations from "../components/HundredSquareCalculations";

export default function Multiplication() {
  return (
    <>
      <HundredSquareCalculations<number>
        title="Multiplication"
        mathOperator="\times"
        itemTeXView={(item) => `${item}`}
        calculateFunction={(leftItem, topItem) => leftItem * topItem}
        createRandomItemFunction={() => Math.ceil(Math.random() * 9)}
      />
    </>
  );
}
