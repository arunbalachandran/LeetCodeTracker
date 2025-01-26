import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { ProblemNotes } from './components/ProblemNotes';
import React from 'react';

const problems = [
  {
    complexity: 'O(n)',
    link: 'https://leetcode.com/problems/valid-parentheses/',
    linkTitle: 'Valid Parentheses',
    notes: 'Use a stack to store the characters & store the mirror image in a Map. Peek the stack while and compare with the mirror image mapping in the map.'
  },
  {
    complexity: 'O(log(n))',
    link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array',
    linkTitle: 'Find Minimum in Rotated Sorted Array',
    notes: 'Regular binary search, moving the l & r pointers based on the minimum value found in the middle.'
  }
]

function CustomToggle({ children, eventKey }: {children?: any, eventKey: string}) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});

  return (
    <Button onClick={decoratedOnClick}>
      {children}
    </Button>
  );
}

function App() {
    return (
    <Accordion>
      <Card>
        {
          problems.map((problem, index) => {
            return (
              <React.Fragment key={index}>
                <Card.Header>
                  <p>{problem.linkTitle}<span style={{ float: "right" }}><CustomToggle eventKey={index.toString()}>Expand</CustomToggle></span></p>
                </Card.Header>
                <Accordion.Collapse eventKey={index.toString()}>
                  <Card.Body>
                        <ProblemNotes
                          complexity={problem.complexity} link={problem.link}
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
  );
}

export default App
