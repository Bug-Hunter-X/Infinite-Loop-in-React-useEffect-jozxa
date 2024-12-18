```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly attempting to update the count in the useEffect
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```