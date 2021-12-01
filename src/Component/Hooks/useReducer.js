import React, {useReducer} from "react";
import "./style.css";


//defined reducer fxn
const reducer = (state, action) => {
  if(action.type === "INCR"){
    state = state + 1;
  }
  if(state > 0 && action.type === 'DECR'){
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
//   const initialData = 15;
// const [myNum, setMyNum] = useState(0);
//   console.log(myNum);
    // console.log(setMyNum);

// const initialData = 10;    
const [currState, dispatch] = useReducer(reducer, 0);
// console.log(currState);

  return (
    <>
      <div className="center_div">
        <p>{currState}</p>
        <div class="button2" onClick={ () => dispatch({type:"INCR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() => dispatch({type:"DECR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseReducer;