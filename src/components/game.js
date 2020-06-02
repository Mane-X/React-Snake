import React from 'react';
import "./css/game.css"
import Snake from "./snake";
import SnakeFood from './food';
import swal from '@sweetalert/with-react';
import Info from './information';

const randomCoordinates = () => {
    //the snakes food will be random
    let min = 2;
    let max = 69;
    let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    return [x,y];
}

const firstState={
            speed:100,
            direction: 'RIGHT',
            food:randomCoordinates(),
            snakeDot:[
                [0,0],
                [2,0]
            ]
}

class Game extends React.Component{
    constructor(props){
        super(props)
        this.state=firstState
        this.OnArrowKeyDown=this.OnArrowKeyDown.bind(this);
        this.componentDidMount=this.componentDidMount.bind(this);


    }
    componentDidMount(){ 
        setInterval(this.snakeMovement,this.state.speed)
        document.onkeydown = this.OnArrowKeyDown;
    }
    componentDidUpdate() {
        this.checkIfOutOfBorders();
        this.snakeEatsSelf();
        this.eating();
    }
    
    OnArrowKeyDown=(e)=>{
        e = e || window.event;
        switch (e.keyCode) {
            //the movement of the snake
            case 38:
                this.setState({direction: 'UP'});
                //console.log("arrow up")
                break;
            case 40:
                this.setState({direction: 'DOWN'});
                //console.log("arrow down")
                break;
              case 37:
                this.setState({direction: 'LEFT'});
                  //console.log("arrow left")
                break;
            case 39:
                this.setState({direction: 'RIGHT'});
                //console.log("arrow right")
                break;
            default:
                //console.log("ERROR")
                    
        }
    }
    snakeMovement = () => {
        let dots = [...this.state.snakeDot];
        let head = dots[dots.length - 1];
        //to make it look like the snake is moving 
    
        switch (this.state.direction) {
          case 'RIGHT':
            head = [head[0] + 2, head[1]];
            break;
          case 'LEFT':
            head = [head[0] - 2, head[1]];
            break;
          case 'DOWN':
            head = [head[0], head[1] + 2];
            break;
          case 'UP':
            head = [head[0], head[1] - 2];
            break;
        }
        dots.push(head);
        dots.shift();
        this.setState({
          snakeDot: dots
        })
    }
    checkIfOutOfBorders() {
        let head = this.state.snakeDot[this.state.snakeDot.length - 1];
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
          this.gameOver();
        }
    }
    snakeEatsSelf(){
        //this is to check if the snake eats itself
        let snake = [...this.state.snakeDot];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach(dot => {
          if (head[0] == dot[0] && head[1] == dot[1]) {
            this.gameOver();
          }
        })
    }
    eating() {
        let head = this.state.snakeDot[this.state.snakeDot.length - 1];
        let food = this.state.food;
        if (head[0] == food[0] && head[1] == food[1]) {
          this.setState({
            food: randomCoordinates()
          })
          this.enlargeSnake();
        }
      }
    enlargeSnake() {
        let newSnake = [...this.state.snakeDot];
        newSnake.unshift([])
        this.setState({
          snakeDot: newSnake
        })
    }
    gameOver(){
      //Alert for when the player loses
          this.setState(firstState)
          this.gameAlert()
    }
    gameAlert(){
      swal({
        title: 'HAHAHAHAHAHAHHAHAH GAME OVER',
        buttons: {
          cancel: "Restart",
        },
          icon: "warning",
        })
      alert("GAME OVER")
 
        
    }
    render(){
        return(
            <div className='snakeGame'>
              <h1 className="h1">SNAKE GAME</h1>
                <div className='snakeArea'>
                    <Snake snakeDot={this.state.snakeDot} />
                    <SnakeFood dot={this.state.food}/>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>
                  <Info/>
                </div>

            </div>
        );
    }
}

export default Game;