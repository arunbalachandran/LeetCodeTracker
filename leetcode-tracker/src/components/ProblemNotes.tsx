import { CodeSnippet } from './CodeSnippet';
import { codeSnippets } from '../codeSnippets';

export const ProblemNotes = ({timeComplexity, spaceComplexity, notes, link, linkTitle}: {timeComplexity:string, spaceComplexity:string, notes: string, link: string, linkTitle: string}) => {
    const snippets = codeSnippets[linkTitle];
    
    return (
        <>
            <p>Time Complexity: {timeComplexity}</p>
            <p>Space Complexity: {spaceComplexity}</p>
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