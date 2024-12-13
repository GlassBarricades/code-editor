import { useState } from 'react';
import './App.css'
import { CodeEditor, LanguageSelector, ResultPrint, RunButton } from './components'

function App() {
  const [language, setLanguage] = useState<string>('javascript')
  const [value, setValue] = useState<string>('')
  const [result, setResult] = useState('');

  const handleSetValue = (newValue?: string) => {
    if (newValue !== undefined) {
      setValue(newValue);
    }
  };

  const runCode = async () => {
    const response = await fetch('/api/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language, value }),
    });
    const data = await response.json();
    setResult(data.status === 'success' ? data.output : data.error);
  };

  return (
    <>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <CodeEditor language={language} value={value} setValue={handleSetValue} />
      <RunButton onRun={runCode} />
      <ResultPrint result={result} />
    </>
  )
}
export default App