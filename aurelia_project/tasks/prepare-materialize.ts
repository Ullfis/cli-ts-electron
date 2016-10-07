import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';
import * as path from 'path';

export default function prepareMaterialize() {

  let source = 'node_modules/materialize-css';

  let taskCss = gulp.src(path.join(source, 'dist/css/materialize.min.css'))
    .pipe(changedInPlace({firstPass:true}))
    .pipe(gulp.dest(path.join(project.platform.output, '../', 'styles')));

  let taskFonts = gulp.src(path.join(source, 'dist/fonts/roboto/*'))
    .pipe(changedInPlace({firstPass:true}))
    .pipe(gulp.dest(path.join(project.platform.output, '../', 'fonts/roboto')));

  return merge(taskCss, taskFonts);
}
