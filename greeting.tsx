import React from 'react';

// Define an interface for the component props
interface GreetingProps {
  name: string; // The name prop must be a string
}

// Convert the component to TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => { 
  // 4. The return type is inferred as JSX.Element
  return <div>Hello, {name}!</div>;
};

export default Greeting;
