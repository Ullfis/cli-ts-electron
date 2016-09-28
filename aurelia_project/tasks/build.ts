import * as gulp from 'gulp';
import transpile from './transpile';
import processMarkup from './process-markup';
import processCSS from './process-css';
import {build} from 'aurelia-cli';
import * as project from '../aurelia.json';
import prepareMaterialize from './prepare-materialize';
import copyScripts from './copy-scripts';

export default gulp.series(
  readProjectConfiguration,
  copyScripts,
  gulp.parallel(
    transpile,
    processMarkup,
    processCSS,
    prepareMaterialize
  ),
  writeBundles
);

function readProjectConfiguration() {
  return build.src(project);
}

function writeBundles() {
  return build.dest();
}
