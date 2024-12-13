interface IPropsRunButton {
    onRun: () => void;
}

export const RunButton = ({ onRun }: IPropsRunButton) => {
  return <button onClick={onRun}>Run</button>;
};