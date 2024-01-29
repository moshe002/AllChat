
type ChosenLanguageProps = {
    setChosenLanguage: React.Dispatch<React.SetStateAction<string>>;
}

function ChatOptions({ setChosenLanguage }: ChosenLanguageProps) {
  return (
    <div className="text-sm">
        <label htmlFor="languages">Translation:</label>
            <select onChange={e => setChosenLanguage(e.target.value)} className="outline-none" name="languages" id="languages">
                <option value="en">English</option>
                <option value="ja">Japanese</option>
                <option value="ko">Korean</option>
                <option value="de">German</option>
                <option value="fr">French</option>
            </select>
    </div>
  )
}

export default ChatOptions