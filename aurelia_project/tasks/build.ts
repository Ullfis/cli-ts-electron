import * as gulp from 'gulp';

import buildCompile from './build-compile';
import prepareOutput from './prepare-output';
import prepareScripts from './prepare-scripts';

export default gulp.series(
  prepareOutput,
  prepareScripts,
  buildCompile
);
