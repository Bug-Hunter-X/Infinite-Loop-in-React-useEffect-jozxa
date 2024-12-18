# React useEffect Infinite Loop Bug
This repository demonstrates a common React bug involving an infinite loop within the `useEffect` hook.  The incorrect update of state within the `useEffect`'s dependency array leads to a continuous re-render and state update, causing the application to crash or become unresponsive.

## Bug Description
The provided `bug.js` file contains a React component that uses the `useEffect` hook to update its state. However, the state update occurs within the `useEffect` itself, causing it to re-run indefinitely.