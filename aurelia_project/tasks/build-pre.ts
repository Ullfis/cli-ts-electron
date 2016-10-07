import * as gulp from 'gulp';

import prepareOutput from './prepare-output';
import prepareMaterialize from './prepare-materialize';
import prepareScripts from './prepare-scripts';

export default gulp.series(
  prepareOutput,
  prepareMaterialize,
  prepareScripts
);
