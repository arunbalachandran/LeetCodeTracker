import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Accordion from 'react-bootstrap/Accordion';
import { Button, Tabs, Tab } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { ProblemNotes } from './components/ProblemNotes';
import { useEffect, useState } from 'react';
import problems from './problems'; // Import the problems array
import Checkbox from '@mui/material/Checkbox';
import { ProblemLabel } from './components/ProblemLabel';
import StorageManager, { RepetitionInterval } from './storage';

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
        return StorageManager.loadState().seenProblems;
    });

    const [repetitionIntervals, setRepetitionIntervals] = useState<Map<string, RepetitionInterval>>(() => {
        return StorageManager.loadState().repetitionIntervals;
    });

    // Save seen state to local storage whenever it changes
    useEffect(() => {
        console.log("Called useEffect: " + JSON.stringify(seenProblems));
        StorageManager.saveSeenProblems(seenProblems);
    }, [seenProblems]);

    // Save repetition intervals to local storage whenever they change
    useEffect(() => {
        StorageManager.saveRepetitionIntervals(repetitionIntervals);
    }, [repetitionIntervals]);

    const handleCheckboxChange = (linkTitle: string) => {
        const updatedSeenProblems = new Map<string, boolean>(seenProblems);
        const currentState = !(updatedSeenProblems.get(linkTitle) || false); // Toggle the checkbox state
        updatedSeenProblems.set(linkTitle, currentState);
        setSeenProblems(updatedSeenProblems);

        // If problem is marked as solved, initialize or update repetition interval
        if (currentState) {
            const updatedIntervals = new Map<string, RepetitionInterval>(repetitionIntervals);
            const now = Date.now();
            const currentInterval = updatedIntervals.get(linkTitle);
            
            if (!currentInterval) {
                // First time solving - set default interval of 2 days
                updatedIntervals.set(linkTitle, { interval: 2, lastSolved: now });
            } else {
                // Already solved before - advance to next power of 2
                const nextInterval = currentInterval.interval * 2;
                updatedIntervals.set(linkTitle, { interval: nextInterval, lastSolved: now });
            }
            
            setRepetitionIntervals(updatedIntervals);
        }
    };

    const handleSpacedRepetitionSubmit = (linkTitle: string) => {
        const updatedIntervals = new Map<string, RepetitionInterval>(repetitionIntervals);
        const now = Date.now();
        const currentInterval = updatedIntervals.get(linkTitle);
        
        if (currentInterval) {
            // Advance to next power of 2
            const nextInterval = currentInterval.interval * 2;
            updatedIntervals.set(linkTitle, { interval: nextInterval, lastSolved: now });
            setRepetitionIntervals(updatedIntervals);
        }
    };

    // Get problems that need to be reviewed today based on spaced repetition
    const getProblemsForToday = () => {
        const now = Date.now();
        const oneDayMs = 24 * 60 * 60 * 1000;
        
        return problems.filter(problem => {
            // Problem must be marked as solved
            if (!seenProblems.get(problem.linkTitle)) return false;
            
            // Problem must have a repetition interval
            const interval = repetitionIntervals.get(problem.linkTitle);
            if (!interval) return false;
            
            const daysSinceLastSolved = (now - interval.lastSolved) / oneDayMs;
            return daysSinceLastSolved >= interval.interval;
        });
    };

    // Group problems by category
    const groupedProblems = problems.reduce((acc, problem) => {
        (acc[problem.category] = acc[problem.category] || []).push(problem);
        return acc;
    }, {} as Record<string, typeof problems>);

    // Group spaced repetition problems by category
    const groupedSpacedProblems = getProblemsForToday().reduce((acc, problem) => {
        (acc[problem.category] = acc[problem.category] || []).push(problem);
        return acc;
    }, {} as Record<string, typeof problems>);

    const renderProblemsList = (groupedProblemsData: Record<string, typeof problems>) => (
        <div className="table-container">
            {Object.keys(groupedProblemsData).map((category) => (
                <div key={category} style={{ marginBottom: '20px', display: 'block' }}>
                    <Accordion className="table">
                    <h2 style={{ fontWeight: 'bold' }}>{category}</h2>
                        {groupedProblemsData[category].map((problem, index) => (
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
    );

    const renderSpacedRepetitionList = () => {
        const problemsForToday = getProblemsForToday();
        
        if (problemsForToday.length === 0) {
            return (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                    <h3>Great job! 🎉</h3>
                    <p>No problems need review today. Keep up the good work!</p>
                </div>
            );
        }

        return (
            <div className="table-container">
                <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                    <h4>Problems for Today's Review</h4>
                    <p>These problems are due for review based on your spaced repetition schedule.</p>
                </div>
                {Object.keys(groupedSpacedProblems).map((category) => (
                    <div key={category} style={{ marginBottom: '20px', display: 'block' }}>
                        <Accordion className="table">
                        <h2 style={{ fontWeight: 'bold' }}>{category}</h2>
                            {groupedSpacedProblems[category].map((problem, index) => {
                                const interval = repetitionIntervals.get(problem.linkTitle);
                                const daysUntilNextReview = interval ? interval.interval : 2;
                                
                                return (
                                    <Card key={index}>
                                        <Card.Header className="card-header">
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <Checkbox
                                                        checked={seenProblems.get(problem.linkTitle) || false}
                                                        onChange={() => handleCheckboxChange(problem.linkTitle)}
                                                        color="primary"
                                                        style={{ backgroundColor: 'transparent' }}
                                                    />
                                                    <label style={{ backgroundColor: 'transparent', marginRight: '10px' }} htmlFor={`checkbox-${problem.linkTitle}`}>
                                                        {problem.linkTitle}
                                                    </label>
                                                </div>
                                                
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
                                                    
                                                    {/* Spaced Repetition Info */}
                                                    <div style={{ 
                                                        display: 'inline-block', 
                                                        marginRight: '10px',
                                                        padding: '4px 8px',
                                                        backgroundColor: '#e3f2fd',
                                                        borderRadius: '4px',
                                                        fontSize: '12px'
                                                    }}>
                                                        Next review: {daysUntilNextReview} days
                                                    </div>
                                                    
                                                    <Button
                                                        size="sm"
                                                        variant="success"
                                                        onClick={() => handleSpacedRepetitionSubmit(problem.linkTitle)}
                                                        style={{ marginRight: '10px' }}
                                                    >
                                                        Mark as Reviewed
                                                    </Button>
                                                    
                                                    <CustomToggle eventKey={`spaced-${index}`}>Expand</CustomToggle>
                                                </div>
                                            </div>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={`spaced-${index}`}>
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
                                );
                            })}
                        </Accordion>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <header style={{ textAlign: 'center', margin: '20px 0' }}>
                <h1>LeetCode Tracker</h1>
            </header>
            
            <Tabs
                defaultActiveKey="all-problems"
                id="leetcode-tabs"
                className="mb-3"
                style={{ margin: '0 20px' }}
            >
                <Tab eventKey="all-problems" title="All Problems">
                    {renderProblemsList(groupedProblems)}
                </Tab>
                <Tab eventKey="spaced-repetition" title="Spaced Repetition">
                    {renderSpacedRepetitionList()}
                </Tab>
            </Tabs>
        </div>
    );
}

export default App
