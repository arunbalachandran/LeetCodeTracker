import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { ProblemNotes } from './components/ProblemNotes';
import React, { useEffect, useState } from 'react';
import problems from './problems'; // Import the problems array

function CustomToggle({ children, eventKey }: {children?: any, eventKey: string}) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});

  return (
    <Button onClick={decoratedOnClick}>
      {children}
    </Button>
  );
}

function App() {
    const [seenProblems, setSeenProblems] = useState<boolean[]>(() => {
        const storedSeenProblems = localStorage.getItem('seenProblems');
        return storedSeenProblems ? JSON.parse(storedSeenProblems) : new Array(problems.length).fill(false);
    });

    // Save seen state to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('seenProblems', JSON.stringify(seenProblems));
    }, [seenProblems]);

    const handleCheckboxChange = (index: number) => {
        const updatedSeenProblems = [...seenProblems];
        updatedSeenProblems[index] = !updatedSeenProblems[index]; // Toggle the checkbox state
        setSeenProblems(updatedSeenProblems);
    };

    return (
        <div>
            <header style={{ textAlign: 'center', margin: '20px 0' }}>
                <h1>LeetCode Tracker</h1>
            </header>
            <div className="table-container">
                <Accordion className="table">
                    <Card>
                        {
                            problems.map((problem, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Card.Header>
                                            <p style={{backgroundColor: 'transparent'}}>
                                                <input
                                                    type="checkbox"
                                                    checked={seenProblems[index] || false}
                                                    onChange={() => handleCheckboxChange(index)}
                                                />
                                                {problem.linkTitle}
                                                <span style={{ float: "right" }}>
                                                    <CustomToggle eventKey={index.toString()}>Expand</CustomToggle>
                                                </span>
                                            </p>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={index.toString()}>
                                            <Card.Body>
                                                <ProblemNotes
                                                    complexity={problem.complexity}
                                                    link={problem.link}
                                                    linkTitle={problem.linkTitle}
                                                    notes={problem.notes}
                                                />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </React.Fragment>
                                )
                            })
                        }
                    </Card>
                </Accordion>
            </div>
        </div>
    );
}

export default App
