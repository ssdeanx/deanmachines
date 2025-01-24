import React from 'react';
import Typography from '@mui/material/Typography';

interface CodeProps {
    children: React.ReactNode;
}

const Code: React.FC<CodeProps> = ({ children }) => {
    return (
        <Typography component="code" sx={{ backgroundColor: 'hsl(var(--gray-100))', color: 'hsl(var(--foreground))', padding: '0.2rem 0.4rem', borderRadius: '0.2rem', fontFamily: 'monospace',  overflowX: 'auto', display: 'inline-block', dark: { backgroundColor: 'hsl(var(--default))', color: 'hsl(var(--muted-foreground))' } }} >{children}</Typography>
    );
};

export default Code;
