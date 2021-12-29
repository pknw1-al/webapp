import React from 'react';

function App() {
  const value = 'World';
  return (
        <input type="text" value={this.state.value} name="test" />
  );
}

export default App;



/*function App() {
  const value = 'World';
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
|*/