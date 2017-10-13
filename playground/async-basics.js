console.log('start app...');

setTimeout(() => {
  // simulate server
  console.log('inside callback');
}, 1000)

setTimeout(() => {
  // should come back before the other
  console.log('second set timeout')
}, 0)

console.log('finishing');

// v8 and node async
// call stack
// callback queue
// node apis

// CALL STACK
// functions executing and events fired
// can remove top item
// add to bottom --> enque and deque FIFO

// node runs main()
// var x = 1 <-- popped on, then remove
// var y = x + 9 <-- popped on, then remove
// console.log <-- popped on, then removed


