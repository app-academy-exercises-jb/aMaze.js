## Intro

This is a maze JavaScript library. It features a number of generators and solvers and is meant to be utilized by visualization tools.

When used as specified below, maze objects are returned with both the puzzle and the solution, as well as the functions which were used to generate either.

In general, generator functions will take one argument `n` which is the size of the square maze. Solver functions will take one argument which is the output of any generation function.

Generator functions will return mazes represented as graphs, the vertices of which will have anywhere from 1-4 edges. A utility parser function is included in order to render such a graph as an array of an array of asterisks and spaces, as below:
```javascript
[
  ['*', '*', ' '],
  [' ', ' ', ' '],
  [' ', '*', '*']
]
```

## Usage

```javascript
const mazeGen = require('./aMaze.js');
const maze = mazeGen({
  generator: 'depth-first',
  solver: 'depth-first',
  n: 10,
});

// => {unsolved, solution, generator, solver}
```

### Options

#### Generators
 - `depth-first`

#### Solvers
 - `depth-first`