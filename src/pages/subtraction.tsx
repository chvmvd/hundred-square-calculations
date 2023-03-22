import HundredSquareCalculations from "../components/HundredSquareCalculations";

export default function Subtraction() {
  return (
    <>
      <HundredSquareCalculations<number>
        title="Subtraction"
        mathOperator="-"
        itemTeXView={(item) => `${item}`}
        calculateFunction={(leftItem, topItem) => leftItem - topItem}
        createRandomItemFunction={() => Math.ceil(Math.random() * 9)}
      />
    </>
  );
}
