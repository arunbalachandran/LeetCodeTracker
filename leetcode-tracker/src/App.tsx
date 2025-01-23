import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { ProblemNotes } from './components/ProblemNotes';

const problems = [
  {
    complexity: 'O(n)',
    link: 'https://leetcode.com/problems/valid-parentheses/',
    linkTitle: 'Valid Parentheses',
    notes: 'Use a stack to store the characters & store the mirror image in a Map. Peek the stack while and compare with the mirror image mapping in the map.'
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
        <Card.Header>
          <p>Valid Parentheses<span style={{ float: "right" }}><CustomToggle eventKey="0">Expand</CustomToggle></span></p>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {
              problems.map((problem) => {
              return (
                <ProblemNotes
                  complexity={problem.complexity} link={problem.link}
                  linkTitle={problem.linkTitle}
                  notes={problem.notes}
                  />
                )
              })
            }
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default App
