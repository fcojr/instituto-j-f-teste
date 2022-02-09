const genareteFibonacci = function (start: number, size: number): number[] {

  let n1 = 0, n2 = 1, next = 0;
  
  let numbers:number[] = []

  for (let i = 0; i < (start + size); i++) {
    next = n1 + n2;
    numbers.push(n1)
    n1 = n2;
    n2 = next;
  }

  return numbers
}

const fibonacci = function (start: number, size: number): number[] | string {
  let fibo = genareteFibonacci(start, size)

  const filtered = fibo.filter(num => {
    return num >= start 
  })

  return filtered.slice(0, size)
}

console.log(fibonacci(0, 5))

console.log(fibonacci(5, 5))

console.log(fibonacci(19, 3))