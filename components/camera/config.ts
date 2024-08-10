export const arCameraOptions = {
  width: "100%",
  height: "100%",
  fontFamily: "inherit",
  cameraPresets: {
    aspectRatio: 1.777777777777778,
    preferredResolution: 720,
  },
  mask: {
    type: "face",
    enabled: true,
    backgroundColor: "#000000",
    backgroundOpacity: 0.7,
    frameColor: "#FFFFFF",
    frameThickness: 3,
  },
  faceDetection: {
    enabled: true,
    autoCapture: true,
    timeToCapture: 6000,
    multipleFacesEnabled: false,
    scoreThreshold: 0.7,
    timeToCaptureFeedbackColor: "#00FF00",
  },
  backButton: {
    enabled: true,
    size: "50px",
    backgroundColor: "#FFFFFF",
    padding: "0",
    label: {
      enabled: false,
      content: "",
      fontSize: "16px",
      fontWeight: "400",
      color: "#000000",
    },
    icon: {
      enabled: true,
      source: "",
      color: "#000000",
      size: "30px",
    },
  },
  switchButton: {
    enabled: true,
    size: "50px",
    backgroundColor: "#FFFFFF",
    padding: "0",
    label: {
      enabled: false,
      content: "",
      fontSize: "16px",
      fontWeight: "400",
      color: "#000000",
    },
    icon: {
      enabled: true,
      source: "",
      color: "#000000",
      size: "30px",
    },
  },
  captureButton: {
    enabled: true,
    size: "50px",
    backgroundColor: "#FFFFFF",
    padding: "0",
    label: {
      enabled: false,
      content: "",
      fontSize: "16px",
      fontWeight: "400",
      color: "#000000",
    },
    icon: {
      enabled: true,
      source: "",
      color: "#000000",
      size: "30px",
    },
  },
  cancelButton: {
    enabled: true,
    size: "50px",
    backgroundColor: "#FF0000",
    padding: "0",
    label: {
      enabled: false,
      content: "",
      fontSize: "16px",
      fontWeight: "400",
      color: "#FFFFFF",
    },
    icon: {
      enabled: true,
      source: "",
      color: "#FFFFFF",
      size: "30px",
    },
  },
  confirmButton: {
    enabled: true,
    size: "50px",
    backgroundColor: "#FFFFFF",
    padding: "0",
    label: {
      enabled: false,
      content: "",
      fontSize: "16px",
      fontWeight: "400",
      color: "#000000",
    },
    icon: {
      enabled: true,
      source: "",
      color: "#000000",
      size: "30px",
    },
  },
  legend: {
    title: {
      enabled: true,
      content: "Selfie Capture",
      fontSize: "22px",
      fontWeight: "700",
      color: "#FFFFFF",
    },
    subtitle: {
      enabled: true,
      content: "Fit your face on the space above",
      fontSize: "16px",
      fontWeight: "400",
      color: "#FFFFFF",
    },
  },
  loading: {
    dotsSize: "6px",
    dotsSpacing: "2px",
    dotsColor: "black",
    backgroundColor: "#FFFFFF",
    size: "50px",
    enabled: false,
  },
};