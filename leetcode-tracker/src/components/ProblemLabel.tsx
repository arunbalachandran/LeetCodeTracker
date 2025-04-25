import React from 'react';

interface ProblemLabelProps {
    label: string;
}

const getLabelColor = (label: string): { backgroundColor: string, color: string } => {
    // Define colors for different label types
    switch (label) {
        case 'Grind 75':
            return { backgroundColor: '#00af9b', color: 'white' };
        case 'Blind 75':
            return { backgroundColor: '#ff2d55', color: 'white' };
        case 'Revisit':
            return { backgroundColor: '#696969', color: 'white' };
        default:
            return { backgroundColor: '#aaaaaa', color: 'white' };
    }
}

export const ProblemLabel: React.FC<ProblemLabelProps> = ({ label }) => {
    const labelStyle = getLabelColor(label);
    
    return (
        <span 
            className="problem-label" 
            style={{
                ...labelStyle,
                display: 'inline-block',
                padding: '3px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 'bold',
                margin: '0 4px',
                whiteSpace: 'nowrap'
            }}
        >
            {label}
        </span>
    );
}; 