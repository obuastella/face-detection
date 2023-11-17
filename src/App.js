// Instal dependecies - done
// Import dependecies - done
// Setup webcam and canvas - done
// Define references to those - done
// Load face mesh -done
// Detect function
// Drawing utilities
// Load triangulation
// Setup triangle path
// Setup point drawing
// Add drawMesh to detect function

import "./App.css";
import { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
function App() {
  // set up references
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Load Facemesh
  const runFaceMesh = async () => {
    const net = facemesh.load({
      inputResolution: { width: 640, height: 480, scale: 0.8 },
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            osition: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default App;
