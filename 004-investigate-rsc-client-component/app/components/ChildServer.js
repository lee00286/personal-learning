import React from 'react';
import { format } from 'date-fns';

function ChildServer({ children }) {
  const rawDate = new Date();
  const formattedDate = format(rawDate, 'yyyy-MM-dd HH:mm:ss');

  return (
    <div>
      <h2>Child Server</h2>
      <p>Current date: {formattedDate}</p>
      {children}
    </div>
  );
}

export default ChildServer;
