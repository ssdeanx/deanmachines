import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

interface CardProps {
  children: React.ReactNode;
}

const MyCard: React.FC<CardProps> = ({ children }) => {
  return (
    <Card>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default MyCard;