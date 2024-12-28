```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here. The function is called multiple times causing issues
    console.log('Count updated:', count);
    // Perform some side effect
    someExternalFunction(count);
  }, [count]); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```