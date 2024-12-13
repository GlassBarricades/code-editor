interface IPropsResultDisplay {
    result: string
}
export const ResultPrint = ({ result }: IPropsResultDisplay) => {
  return (
    <div>
      <h3>Result:</h3>
      <pre>{result}</pre>
    </div>
  );
};