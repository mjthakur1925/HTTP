const express = require('express');

// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const app = express();
const port = 3000;

// GET endpoint to return prime numbers until the specified number
app.get('/primes/:number', (req, res) => {
  const number = parseInt(req.params.number);

  if (isNaN(number)) {
    return res.status(400).send('Invalid number specified.');
  }

  const primes = [];
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  res.json(primes);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});