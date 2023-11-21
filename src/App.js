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
import { useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
// import { drawMesh } from "./utilities";
import "@mediapipe/face_detection";
import "@tensorflow/tfjs-core";
// Register WebGL backend.
import "@tensorflow/tfjs-backend-webgl";
import * as faceDetection from "@tensorflow-models/face-detection";
function App() {
  // set up references
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Load Face mesh
  const runFaceMesh = async () => {
    // something here
    const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
    const detectorConfig = {
      runtime: "tfjs",
    };
    const detector = await facemesh.createDetector(model, detectorConfig);

    // Detect function
    const detect = async () => {
      if (
        typeof webcamRef.current !== undefined &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState !== 4
      ) {
        // Get video Properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;
        // set the video width
        // added
        webcamRef.current.video.videoWidth = videoWidthk;
        webcamRef.current.video.videoHeight = videoHeight;
        // set canvas properties
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
      }
      // make the detections
      const face = await detector.estimateFaces(tf.image);
      console.log(face);
    };
  };
  useEffect(() => {
    runFaceMesh();
  }, []);
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
