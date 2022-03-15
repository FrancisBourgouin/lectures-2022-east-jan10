import { useState } from "react";

import "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";

export default function useVoiceToEmoji() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const createModel = async () => {
    const URL = "http://localhost:3000/model/";
    const checkpointURL = URL + "model.json"; // model topology
    const metadataURL = URL + "metadata.json"; // model metadata

    const recognizer = speechCommands.create(
      "BROWSER_FFT", // fourier transform type, not useful to change
      undefined, // speech commands vocabulary feature, not useful for your models
      checkpointURL,
      metadataURL
    );

    // check that model and metadata are loaded via HTTPS requests.
    await recognizer.ensureModelLoaded();

    return recognizer;
  };
  const recognizerOptions = {
    includeSpectrogram: true, // in case listen should return result.spectrogram
    probabilityThreshold: 0.75,
    invokeCallbackOnNoiseAndUnknown: false,
    overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
  };
  const init = async () => {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); // get class labels

    recognizer.listen((result) => {
      const scores = result.scores;
      // const parsedScores = Array.from(scores);
      // console.log(classLabels, scores);

      const labels = [
        "Background Noise",
        "Coffee",
        "Happy",
        "Potato",
        "Robot",
        "Sound",
        "Toaster",
      ];

      const biggestNumber = Math.max(...scores);
      const biggestNumberIndex = scores.indexOf(biggestNumber);
      biggestNumberIndex && setCurrentIndex(biggestNumberIndex);
      console.log(labels[biggestNumberIndex]);
    }, recognizerOptions);
  };

  return [currentIndex, init];
}
