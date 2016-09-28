import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';
import * as path from 'path';

export default function copyScripts() {

  let source = 'tools';

  let taskRequire = gulp.src(path.join(source, 'require.js'))
    .pipe(changedInPlace({firstPass:true}))
    .pipe(gulp.dest(project.platform.output));

  let taskText = gulp.src(path.join(source, 'text.js'))
    .pipe(changedInPlace({firstPass:true}))
    .pipe(gulp.dest(project.platform.output));

  return merge(taskRequire, taskText);
}
