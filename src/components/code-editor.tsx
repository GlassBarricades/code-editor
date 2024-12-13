import { Editor } from "@monaco-editor/react"

interface IProps {
    language: string
    value: string
    setValue: (value?: string) => void
}

export const CodeEditor = ({ language, value, setValue }: IProps) => {
    return (
        <>
            <Editor
                height="400px"
                width="500px"
                language={language}
                value={value}
                onChange={(value) => setValue(value)}
                theme="vs-dark"
            />
        </>
    )
}