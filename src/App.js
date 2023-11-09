import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

//Game status
const [gameStart, setGameStart]=useState(false);
const [gameEnd, setGameEnd] = useState(false);
const [winGame, setWinGame]=useState(false);
const [lostGame, setLostGame] =useState(false);

//Game status windows: win, lost
const [winWindow, setWinWindow]=useState(false);
const [lostWindow, setLostWindow]=useState(false);

//Game level
const [level, setLevel] =useState(false);

//Timer
const [maxTime, setMaxTime]=useState(100);
const [timeLeft, setTimeLeft]=useState(0);

//Game set
const [cellSet, setCellSet]=useState([]);
const [gridSize, setGridSize]=useState(9)

//Cell states
const [flippedCell, setFlippedCell] = useState(false)
const [rightCellChoice, setRightCellChoice]=useState(false);
const [wrongCellChoice, setWrongCellChoice]=useState(false);


const ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const ar2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

const checkGameStart=()=>{

}

const checkGameEnd=()=>{
  
}

const checkGameWin=()=>{
  
}

const checkGameLost=()=>{
  
}

const handleLevel=()=>{
  setLevel(!level)
}

//Create cell array
const createCellSet=(gridSize)=>{
  let cells = [];
  while(cells.length < gridSize){
    console.log('add element', gridSize);
  }
}

//Change grid size depend of level (example)
function changeCellSet() {
  switch(level) {
    case false:
      setCellSet(ar1)
      setGridSize(9)
      createCellSet(gridSize)
      console.log('ar1');
      return {cellSet}
    case true:
      setCellSet(ar2)
      setGridSize(16)
      createCellSet(gridSize)
      console.log('ar2');
      return {cellSet}
    default:
      return {cellSet}
  }
}

  useEffect(()=>{
    changeCellSet()
  }, [level])

const active = true;

  return (
    <div className="App">
      <h1>Hello</h1>
      <button className='button' onClick={handleLevel}>Click to change set</button>
      <div className='game'>
        <div className={ `cell-container ${gridSize === 9 ? 'grid-size-9' : ' grid-size-12'}`}>
          {cellSet.map((cell, index)=>(
            <div className='cell' key={index}>{cell}</div>))
          }
        </div>
    </div>
    </div>

  );
}

export default App;
