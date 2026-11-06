import React, { Component } from 'react';

// Define an interface for the component props — Counter takes none, kept explicit
// rather than omitted, to match the convention used for typed components in this checkpoint.
interface CounterProps {}

interface CounterState {
  count: number; // The count in state must be a number
}

// Convert the class component to TypeScript
class Counter extends Component<CounterProps, CounterState> {
  // Initialize state with proper typing
  state: CounterState = {
    count: 0
  };

  // Type the class method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
