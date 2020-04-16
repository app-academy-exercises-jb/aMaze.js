const depthFirstGenerator = require('./generators/depth_first');
const depthFirstSolver = require('./solvers/depth_first');

const generator = algorithm => n => {
  switch (algorithm) {
    case "depth-first":
      return depthFirstGenerator(n);
    default:
      throw `${algorithm.toString()} is not a recognized generation algorithm`;
  }
};

const solver = algorithm => maze => {
  switch (algorithm) {
    case "depth-first":
      return depthFirstSolver(maze);
    default:
      throw `${algorithm.toString()} is not a recognized generation algorithm`;
  }
};

module.exports = ({
    generator,
    solver,
    n
  }) => ({
    unsolved: generator(generatorAlgorithm)(n),
    solution: solver(solverAlgorithm)(maze),
    generator: generator(generatorAlgorithm),
    solver: solver(solverAlgorithm),
});
