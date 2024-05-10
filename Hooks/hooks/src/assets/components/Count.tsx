import React, { ChangeEvent, ChangeEventHandler, useEffect, useRef, useState } from "react";

function Count() {
  let counter = useRef(0);
  const inputElement=useRef<HTMLInputElement>(null);
  const [data, setData] = useState("");
  useEffect(()=>{
    counter.current=counter.current+1;
  })
  const changeHandler = (e:ChangeEvent) => {
    let target = e.target as HTMLInputElement;
    setData(target.value);
  };
  return (
    <div>
      {counter.current}
      <input type="text" value={data} onChange={changeHandler}/>
      <button onClick={() => alert(inputElement.current?.value)}>Print</button>
      <input type="text" ref={inputElement}/>
    </div>
  );
}

export default Count;
