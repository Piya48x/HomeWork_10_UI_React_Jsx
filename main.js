// CSS
const globalStyles = {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  };
  
  const bodyStyles = {
    minHeight: '50vh',
    paddingTop: '50px',
    display: 'flex',
    flexFlow: 'column',
    gap: '1rem',
    alignItems: 'center',
  };
  
  const counterStyles = {
    width: '400px',
    height: '50px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'baseline',
    background: 'skyblue',
    marginTop: '10px',
  };
  
  const counterItemStyles = {
    height: '100%',
    flex: 1,
    fontSize: '32px',
  };
  
  // React components
  function Counter() {
    return (
      <div style={counterStyles}>
        <button style={counterItemStyles}>+</button>
        <h2 style={counterItemStyles}>{0}</h2>
        <button style={counterItemStyles}>-</button>
        <button style={counterItemStyles}>0</button>
        <button style={counterItemStyles}>C</button>
      </div>
    );
  }
  
  function App() {
    return (
      <div style={bodyStyles}>
        <h1>Today: {new Date().toDateString()}</h1>
        <Counter />
      </div>
    );
  }
  
  // Rendering the React component
  const root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(<App />);
  