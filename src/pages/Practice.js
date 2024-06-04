import { useState, useEffect, useRef } from "react";
// import styles from "../style.module.css";
import '../assets/style.scss';
// import ReactDOM from "react-dom/client";
// import Todos from "./Todos";

// const Practice = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState(["todo 1", "todo 2"]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   return (
//     <>
//       <Todos todos={todos} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// const Practice = () => {
// const styleHeader = {
//   color: "red",
//   fontSize: 20
// };


// return (
//   <>
//     <h1 className={styles.h1}>Practice</h1>
//     <p style={{color:"blue", backgroundColor:"gray"}}>Hello React</p>
//   </>

// );

//     const [car, setCar] = useState({
//       brand: "Ford",
//       model: "Mustang",
//       year: "1964",
//       color: "red"
//     });

//     const UpdateColor = () => {
//       setCar(previousState => {
//         return { ...previousState, color: "blue",brand: "Toyota", model: "Corolla", year: "2021"}
//       });
//     }

//     return(
//       <>
//         <h1>My {car.brand}</h1>
//         <p>
//           It is a {car.color} {car.model} from {car.year}.
//         </p>
//         <button type="button" onClick={UpdateColor}>Change</button>
//       </>
//     )
// }

// const Practice = () => {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2)
//   }, [count]);

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount((c) => c + 1)}>Click Me!</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   )
// }


// const Practice = () => {
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setSeconds((prevSeconds) => {
//         if (prevSeconds === 59) {
//           setMinutes((prevMinutes) => prevMinutes + 1);
//           return 0;
//         } else {
//           return prevSeconds + 1;
//         }
//       });
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [seconds]);

//   return (
//     <div>
//       <h1>{minutes}p {seconds}s</h1>
//     </div>
//   );
// };

// const Practice = () => {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current += 1;
//     console.log(typeof inputValue);
//   });

//   return (
//     <>
//       <input type="text" value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Enter some text here"
//       />
//       <p>I have renders <b>{count.current}</b> times</p>
//       <p>My length: <b>{inputValue.length}</b></p>
//     </>
//   )
// };

// const Practice = () => {
//   const [count, setCount] = useState(0);

//   const incrementValue = () => {
//     setCount((c)=> c + 1);
//     console.log(count);
//   };

//   const decrementValue = () => {
//     setCount((c) => c - 1);
//     console.log(count);
//   };

//   console.log(count);

//   return (
//     <>
//       <div className="d-flex justify-content-center align-items-center container mt-5 border p-5">
//         <button className="btn btn-secondary" onClick={decrementValue}>Decrement</button>
//         <span className="p-2">{count}</span>
//         <button className="btn btn-primary" onClick={incrementValue}>Increment</button>

//       </div>
//     </>
//   );
// }

const Practice = () => {
  const createData = () => {
    let data = ["Sang", "CR7", "NTS", "Messi"];
    return data;
  }

  const [students, setStudents] = useState(createData());

  const addStudent = (event) => {
    // event.preventDefault();
    setStudents([...students, event.target.value]);
    console.log(event.target.value);
  }

  const removeStudent = (event) => {
    setStudents(students.filter((student) => student === event.target.value ? false : true));
  }


  return (
    <>
      <div className="container mt-5 text-dark">
        <h1>Students</h1>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary m-2" onClick={addStudent} value="Yae Miko">Yae Miko</button>
          <button className="btn btn-secondary m-2" onClick={addStudent} value="Kitagawa">Kitagawa</button>
          <button className="btn btn-success m-2" onClick={addStudent} value="Marin">Marin</button>
          <button className="btn btn-danger m-2" onClick={addStudent} value="Alpha">Alpha</button>
        </div>

        {students.map(function (value) {
          return (
            <div className="d-flex justify-content-between align-items-center border" key={value}>
              <p>Name: {value}</p>
              <button className="btn btn-danger" onClick={removeStudent} value={value}>x</button>
            </div>
          );
        })}
      </div>
    </>
  )

}


export default Practice;
