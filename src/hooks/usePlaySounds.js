import { goodAnswer, wrongAnswer } from "../utils/sounds";

export function usePlaySounds(audio) {
  const playSound = (audio) => {
    let snd = new Audio(audio);
    snd.play();
  };

  return [playSound];
}

export function useResponseAudio() {
  const [playSound] = usePlaySounds();
  const playResponseAudio = (type) => {
    const audio = type
      ? goodAnswer[Math.floor(Math.random() * wrongAnswer.length)]
      : wrongAnswer[Math.floor(Math.random() * wrongAnswer.length)];
    playSound(audio);
  };
  return [playResponseAudio];
}
