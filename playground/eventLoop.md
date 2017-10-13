# Event Loop visualized

Callstack -> Node Apis -> callback queue

```js
console.log('start app...');

setTimeout(() => {
  console.log('inside callback');
}, 1000)

setTimeout(() => {
  console.log('second set timeout')
}, 0)

console.log('finishing');
```

## Callstack after initialization
- console.log <- runs then remove
- main() // runs program

## Callstack first timeout
- setTimeout(2 sec) // registered, node api and when we call it we register call back.
- main()

### Node api register setTimeout
- setTimeout(2 sec) is waiting 2 secs to return

## Callstack second timeout
- setTimeout(0)
- main()

### Node Api register second set timeout
- setTimeout(2)
- setTimeout(0)

## Callback Queue
- setTimeout finishes after 0 seconds
- it is sent back to event loop when it finishes
- when callstack is empty, then get to run from callback queue
- but callstack is not empty (main() is still running, so it has to wait)

## Call Stack run console log
- finishing up is run and main() ends
- callback() from setTimeout is injected from callback queue because call stack is now empty

### Node apis still running
- settimeout finishes in 2 seconds, sends it to callback queue when done
- callback is then injected into call stack when program finishes

## What is a callback?
a function that runs after an event happens
