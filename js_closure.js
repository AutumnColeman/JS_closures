// Make a counter function that returns a function that returns a successive number each time it is called.

function counter() {
  var count = 0;
  function actuallyCount() {
    count++;
    return count;
  }
  return actuallyCount;
}

var count = counter();
console.log(count());
console.log(count());
console.log(count());
