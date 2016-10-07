import * as gulp from 'gulp';

import preBuild from './build-pre';
import rebuild from './build-start';


export default gulp.series(
  preBuild,
  rebuild
);
