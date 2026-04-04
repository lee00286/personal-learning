import React from 'react';
import dynamic from 'next/dynamic';
// import ChildClient from './ChildClient';
import ChildServer from './ChildServer';
import GrandChild from './GrandChild';

function Parent() {

  return (
    <div>
      <h1>Parent</h1>

      {/* Test Client Component */}
      {/* <ChildClient>
        <GrandChild />
      </ChildClient> */}

      {/* Test RSC */}
      <ChildServer>
        <GrandChild />
      </ChildServer>
    </div>
  );
}

export default Parent;
