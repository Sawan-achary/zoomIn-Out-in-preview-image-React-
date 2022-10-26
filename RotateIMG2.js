import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import 'bootstrap/dist/css/bootstrap.min.css'




import "./App.css";

// class RotateIMG extends React.Component{
//     constructor(props){
//       super(props);
//       this.state = {
//         rotation: 0
//       }

//       this.rotate = this.rotate.bind(this);
//       this.rotateleft = this.rotateleft.bind(this);
//     }

//     rotateright(){
//       let newRotation = this.state.rotation + 90;
//       if(newRotation >= 360){
//         newRotation =- 360;
//       }
//       this.setState({
//         rotation: newRotation,
//       })
//     }

//     rotateleft(){
//       let newRotation = this.state.rotation - 90;
//       if(newRotation >= 360){
//         newRotation =- 360;
//       }
//       this.setState({
//         rotation: newRotation,
//       })
//     }

//     render(){
//       const { rotation } =  this.state;
//       return <div><input onClick={this.rotateleft} type="button" value="left" />
//         <img style={{transform: `rotate(${rotation}deg)`}} src={this.props.src} width="400" />
//         <input onClick={this.rotateright} type="button" value="right" />

//       </div>
//     }
//   };
const RotateIMG2 = (props) => {
  const [state, setState] = useState({
    rotation: "",
  });
  // const [zoom, setZoom] = useState({

  // });
  const rotateleft = (e) => {
    let newRotation = state.rotation - 90;
    if (newRotation >= 360) {
      newRotation = -360;
    }
    setState({
      rotation: newRotation,
    });
  };
  const rotateright = (e) => {
    let newRotation = state.rotation + 90;
    if (newRotation >= 360) {
      newRotation = -360;
    }
    setState({
      rotation: newRotation,
    });
  };
//   const zoomIn = (e) => {
//     console.log("zoom in")
//     console.log(props.src)
//   }
//   const zoomOut = (e) => {
//     console.log("zoom out")
//     console.log(props.src)
//     // console.log(state.rotation)
//     // console.log(state)

//   }

  return (
    <>
        <TransformWrapper
        initialScale={0.5}
        minScale={0.5}
        maxScale={5}
        initialPositionX={88}
        initialPositionY={88}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
      <div>
      
      
     
          
      
      <TransformComponent>
      <div style={style.image}>
          <img style={{ transform: `rotate(${state.rotation}deg)` }} src={props.src} width="400" />
          </div>
        </TransformComponent>
        <input onClick={rotateleft} type="button" value="left" />
          <input onClick={rotateright} type="button" value="right" />
      
      </div>
      <div className="tools">
            <button
          className="btn btn-outline-primary mr-2"
          onClick={() =>zoomIn()}>
           Zoom In
        </button>
        <button
          className="btn btn-outline-primary mr-2"
          onClick={() =>zoomOut()}>
           Zoom Out
        </button>
        <button
          className="btn btn-outline-primary mr-2"
          onClick={() =>resetTransform()}>
           Reset
        </button>
            </div>
      </React.Fragment>
      )}
      </TransformWrapper>

    </>


  );
};
export default RotateIMG2;
const style = {
  button: {
    marginTop: '2rem',
  },
  minus: {
    marginLeft: '2rem'
  },
  image:{
    marginLeft:'30rem',
    marginTop:'10px'
}
}
