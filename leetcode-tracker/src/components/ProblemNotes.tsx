

export const ProblemNotes = ({complexity, notes, link, linkTitle}: {complexity:string, notes: string, link: string, linkTitle: string}) => {
    return (
        <>
            <p>Complexity:{complexity}</p>
            <p>Link: <a href={link}>{linkTitle}</a></p>
            <p>Notes: {notes}</p>
        </>
    )
}