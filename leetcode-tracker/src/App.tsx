import { Button } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }: {children?: any, eventKey: string}) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

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
            <p>Notes: O(N) solution exists</p>
            <p>Link: <a href="https://leetcode.com/problems/valid-parentheses/">Valid Parentheses</a></p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default App
