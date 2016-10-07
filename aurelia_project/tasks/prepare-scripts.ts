import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import * as path from 'path';

export default function prepareScripts() {

  let source = 'tools';

  let taskFiles = gulp.src([
      path.join(source, 'require.js'),
      path.join(source, 'text.js')
    ])
    .pipe(gulp.dest(project.platform.output));

  return taskFiles;
}
