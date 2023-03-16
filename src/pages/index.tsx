import { useState, useEffect } from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

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
        <table>
          <tbody>
            <tr>
              <td>
                <InlineMath>+</InlineMath>
              </td>
              {leftNumbers.map((leftNumber, i) => (
                <td key={i}>
                  <InlineMath>{`${leftNumber}`}</InlineMath>
                </td>
              ))}
            </tr>
            {rightNumbers.map((rightNumber, i) => (
              <tr key={i}>
                <td>
                  <InlineMath>{`${rightNumber}`}</InlineMath>
                </td>
                {leftNumbers.map((leftNumber, j) => (
                  <td key={`${i},${j}`}>
                    <InlineMath>{`${leftNumber + rightNumber}`}</InlineMath>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
