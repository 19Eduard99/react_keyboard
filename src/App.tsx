import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [message, setMessage] = useState('Nothing was pressed yet');

  useEffect(() => {
    const handleClick = (e: KeyboardEvent) => {
      setMessage(`The last pressed key is [${e.key}]`);
    };

    document.addEventListener('keyup', handleClick);

    return () => {
      document.removeEventListener('keyup', handleClick);
    };
  }, [message]);

  return (
    <div className="App">
      <p className="App__message">{message}</p>
    </div>
  );
};
