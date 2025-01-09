import { useState, useRef, useEffect } from 'react';
function Timer() {
  const [time, setTime] = useState(0);
  const [reset, setReset] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    console.log('useEffect');
    setTime(0);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      console.log('clearInterval');
      clearInterval(intervalRef.current);
    };
  }, [reset]);
  return (
    <div>
      <div>{time}</div>
      <button onClick={() => setReset(Math.random())}>reset</button>
    </div>
  );
}
export default Timer;