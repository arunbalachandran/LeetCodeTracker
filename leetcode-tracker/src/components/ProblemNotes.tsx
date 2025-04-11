import { CodeSnippet } from './CodeSnippet';
import { codeSnippets } from '../codeSnippets';

export const ProblemNotes = ({complexity, notes, link, linkTitle}: {complexity:string, notes: string, link: string, linkTitle: string}) => {
    const snippets = codeSnippets[linkTitle];
    
    return (
        <>
            <p>Complexity: {complexity}</p>
            <p>Link: <a href={link}>{linkTitle}</a></p>
            <p>Notes: {notes}</p>
            {snippets && (
                <CodeSnippet 
                    javaCode={snippets.java}
                    pythonCode={snippets.python}
                />
            )}
        </>
    )
}