import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-python';
import { Tabs, Tab } from 'react-bootstrap';

interface CodeSnippetProps {
    javaCode: string;
    pythonCode: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ javaCode, pythonCode }) => {
    const [activeTab, setActiveTab] = useState<string>('java');

    useEffect(() => {
        Prism.highlightAll();
    }, [activeTab]);

    return (
        <div className="code-snippet-container" style={{ marginTop: '20px' }}>
            <Tabs
                activeKey={activeTab}
                onSelect={(k) => k && setActiveTab(k)}
                className="mb-3"
            >
                <Tab eventKey="java" title="Java">
                    <pre>
                        <code className="language-java">
                            {javaCode}
                        </code>
                    </pre>
                </Tab>
                <Tab eventKey="python" title="Python">
                    <pre>
                        <code className="language-python">
                            {pythonCode}
                        </code>
                    </pre>
                </Tab>
            </Tabs>
        </div>
    );
}; 