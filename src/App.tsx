import { useState } from 'react';
import './App.css'
import { CodeEditor } from './components'

function App() {
  const [language, setLanguage] = useState<string>('javascript')
  const [value, setValue] = useState<string>('')

  const handleSetValue = (newValue?: string) => {
    if (newValue !== undefined) {
      setValue(newValue);
    }
  };

  return (
    <>
      <CodeEditor language={language} value={value} setValue={handleSetValue} />
    </>
  )
}
export default App