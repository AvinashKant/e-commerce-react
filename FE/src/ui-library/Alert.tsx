import React from 'react';

interface AlertProps {
  message: string;
  type?: 'info' | 'error';
}

const Alert: React.FC<AlertProps> = ({ message, type = 'info' }) => {
  const background = type === 'error' ? '#f8d7da' : '#d1ecf1';
  const color = type === 'error' ? '#721c24' : '#0c5460';

  return (
    <div
      style={{
        padding: '10px 20px',
        backgroundColor: background,
        color: color,
        borderRadius: '4px',
        margin: '10px 0',
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
