import { useState, useEffect } from "react";
import HundredSquareCalculations from "../components/HundredSquareCalculations";

function calculateRandomNumbers() {
  return [...Array(9)].map((_) => Math.ceil(Math.random() * 9));
}

export default function Addition() {
  const [leftNumbers, setLeftNumbers] = useState([...Array(9)].map(() => 1));
  const [topNumbers, setTopNumbers] = useState([...Array(9)].map(() => 1));
  useEffect(() => {
    setLeftNumbers(calculateRandomNumbers());
    setTopNumbers(calculateRandomNumbers());
  }, []);
  return (
    <>
      <HundredSquareCalculations<number>
        title="Addition"
        updateItems={() => {
          setLeftNumbers(calculateRandomNumbers());
          setTopNumbers(calculateRandomNumbers());
        }}
        mathOperator="+"
        leftItems={leftNumbers}
        topItems={topNumbers}
        calculateFunction={(leftItem, topItem) => leftItem + topItem}
      />
    </>
  );
}
