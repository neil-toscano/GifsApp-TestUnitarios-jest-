import { useEffect, useState } from 'react';

export const Pruebas = () => {
  console.log('hola');
  const [count, setCount] = useState(0);

  setTimeout(() => {
    setCount(10);
  }, 5000);
  useEffect(() => {
    console.log(`El contador es ${count}`);
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};
