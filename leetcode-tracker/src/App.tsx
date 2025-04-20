import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { ProblemNotes } from './components/ProblemNotes';
import { useEffect, useState } from 'react';
import problems from './problems'; // Import the problems array
import Checkbox from '@mui/material/Checkbox';
import { ProblemLabel } from './components/ProblemLabel';

function CustomToggle({ children, eventKey }: {children?: any, eventKey: string}) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});

  return (
    <Button onClick={decoratedOnClick} className="expand-button">
      {children}
    </Button>
  );
}

function App() {
    const [seenProblems, setSeenProblems] = useState<Map<string, boolean>>(() => {
        const storedProblems = localStorage.getItem('seenProblems');
        return storedProblems ? new Map<string, boolean>(Object.entries(JSON.parse(storedProblems))) : new Map<string, boolean>();
    });

    // Save seen state to local storage whenever it changes
    useEffect(() => {
        console.log("Called useEffect: " + JSON.stringify(seenProblems));
        localStorage.setItem('seenProblems', JSON.stringify(Object.fromEntries(seenProblems)));
    }, [seenProblems]);

    const handleCheckboxChange = (linkTitle: string) => {
        const updatedSeenProblems = new Map<string, boolean>(seenProblems);
        const currentState = !(updatedSeenProblems.get(linkTitle) || false); // Toggle the checkbox state
        updatedSeenProblems.set(linkTitle, currentState);
        setSeenProblems(updatedSeenProblems);
    };

    // Group problems by category
    const groupedProblems = problems.reduce((acc, problem) => {
        (acc[problem.category] = acc[problem.category] || []).push(problem);
        return acc;
    }, {} as Record<string, typeof problems>);

    return (
        <div>
            <header style={{ textAlign: 'center', margin: '20px 0' }}>
                <h1>LeetCode Tracker</h1>
            </header>
            <div className="table-container">
                {Object.keys(groupedProblems).map((category) => (
                    <div key={category} style={{ marginBottom: '20px', display: 'block' }}>
                        <Accordion className="table">
                        <h2 style={{ fontWeight: 'bold' }}>{category}</h2>
                            {groupedProblems[category].map((problem, index) => (
                                <Card key={index}>
                                    <Card.Header className="card-header">
                                        <Checkbox
                                            checked={seenProblems.get(problem.linkTitle) || false}
                                            onChange={() => handleCheckboxChange(problem.linkTitle)}
                                            color="primary"
                                            style={{ backgroundColor: 'transparent' }}
                                        />
                                        <label style={{ backgroundColor: 'transparent', marginRight: '10px' }} htmlFor={`checkbox-${problem.linkTitle}`}>
                                            {problem.linkTitle}
                                        </label>
                                        
                                        <div className="problem-info">
                                            {/* Problem Labels */}
                                            <div className="label-container">
                                                {problem.labels && problem.labels.map((label, labelIndex) => (
                                                    <ProblemLabel key={labelIndex} label={label} />
                                                ))}
                                            </div>
                                            
                                            {/* Difficulty Stars */}
                                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                                {Array.from({ length: 5 }, (_, starIndex) => (
                                                    <span key={starIndex} style={{ color: starIndex < problem.difficulty ? '#FFD700' : 'transparent' }}>★</span>
                                                ))}
                                            </div>
                                            
                                            <CustomToggle eventKey={index.toString()}>Expand</CustomToggle>
                                        </div>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={index.toString()}>
                                        <Card.Body>
                                            <ProblemNotes
                                                timeComplexity={problem.timeComplexity}
                                                spaceComplexity={problem.spaceComplexity}
                                                link={problem.link}
                                                linkTitle={problem.linkTitle}
                                                notes={problem.notes}
                                            />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            ))}
                        </Accordion>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App
