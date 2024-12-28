```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Improved logic - execute the side effect only when needed
    if (count % 5 === 0) {
      console.log('Count updated:', count);
      someExternalFunction(count);
    }
  }, [count]); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```