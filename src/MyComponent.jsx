import { useState, useEffect, useRef } from 'react';
function MyComponent() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    console.log('timeout');
    setTimeout(() => setShow(false), 5000);
  });
  return show ? <Child /> : <div />;
}
export default MyComponent;

function Child() {
  const intervalRef = useRef(null);
  const [time, setTime] = useState(0);
  useEffect(() => {
    console.log('Mount');
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      console.log('Unmount');
      clearInterval(intervalRef.current);
    };
  }, []);
  return <div>{time}</div>;
}