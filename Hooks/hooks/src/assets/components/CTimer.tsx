import React, { useEffect, useState } from "react";

// function CTimer() {
//   const [data, setData] = useState(false);
//   const [data1, setData1] = useState(false);
//   useEffect(() => {
//     console.log("Mounted");
//   });
//   return (
//     <div>
//       CTimer Called :{data.toString()}
//       <button onClick={() => setData(!data)}>Click</button>
//       <button onClick={() => setData1(!data1)}>Click</button>
//     </div>
//   );
// }

// export default CTimer;

const CTimer = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let id = setInterval(() => {
      setCounter(counter + 1);
      console.log(counter);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [counter]);

  return (
    <>
      <div>Counter : {counter}</div>
    </>
  );
};
export default CTimer;
