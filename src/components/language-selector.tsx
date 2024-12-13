interface IPropsLanguageSelector {
    language: string;
    setLanguage: (language: string) => void;
}

export const LanguageSelector = ({ language, setLanguage }: IPropsLanguageSelector) => {
    return (
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
        </select>
    );
}
