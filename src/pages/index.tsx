import { useState, useEffect } from "react";
import HundredSquareCalculationsTable from "../components/HundredSquareCalculationsTable";

function calculateRandomNumbers() {
  return [...Array(9)].map((_) => Math.ceil(Math.random() * 9));
}

export default function Home() {
  const [leftNumbers, setLeftNumbers] = useState([...Array(9)].map(() => 1));
  const [rightNumbers, setRightNumbers] = useState([...Array(9)].map(() => 1));
  useEffect(() => {
    setLeftNumbers(calculateRandomNumbers());
    setRightNumbers(calculateRandomNumbers());
  }, []);
  return (
    <>
      <main>
        <HundredSquareCalculationsTable<number>
          mathOperator="+"
          leftItems={leftNumbers}
          rightItems={rightNumbers}
          calculateFunction={(leftItem, rightItem) => leftItem + rightItem}
        />
      </main>
    </>
  );
}