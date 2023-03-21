import HundredSquareCalculations from "../components/HundredSquareCalculations";

export default function Addition() {
  return (
    <>
      <HundredSquareCalculations<number>
        title="Addition"
        mathOperator="+"
        calculateFunction={(leftItem, topItem) => leftItem + topItem}
        createRandomItemFunction={() => Math.ceil(Math.random() * 9)}
      />
    </>
  );
}
