'use client';

import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

function ChildClient({ children }) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(
      format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    );
  }, []);

  return (
    <div>
      <h2>Child Client</h2>
      <p>Current date: {formattedDate}</p>
      {children}
    </div>
  );
}

export default ChildClient;
