import * as gulp from 'gulp';
import * as browserSync from 'browser-sync';
import * as historyApiFallback from 'connect-history-api-fallback/lib';
import * as project from '../aurelia.json';
import build from './build';
import buildCompile from './build-compile';
import {CLIOptions} from 'aurelia-cli';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

import * as childProcess from 'child_process';
import * as electron from 'electron';

let reloadFile = path.join(__dirname, '..', '..', 'tools', 'reload.electron');

function onChange(path) {
  console.log(`File Changed: ${path}`);
}

function reload(done) {
  browserSync.reload();
  done();
}

function reloadElectron(done) {
  fs.appendFile(reloadFile, (new Date()).toString() + os.EOL, 'utf-8', done);
}

let serve = gulp.series(
  build,
  done => {
    browserSync({
      online: false,
      open: false,
      port: 9000,
      logLevel: 'silent',
      server: {
        baseDir: ['.'],
        middleware: [historyApiFallback(), function(req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          next();
        }]
      }
    }, function (err, bs) {
      let urls = bs.options.get('urls').toJS();
      console.log(`Application Available At: ${urls.local}`);
      console.log(`BrowserSync Available At: ${urls.ui}`);
      done();
    });
  }
);

let serveElectron = gulp.series(
  build,
  done => {
    childProcess
      .spawn(electron, ["."], {
        stdio: 'inherit'
      })
      .on("close", () => {
        // User closed the app. Kill the host process.
        process.exit();
      })

    done();
  }
);

let refresh = gulp.series(
  buildCompile,
  reload
);

let refreshElectron = gulp.series(
  buildCompile,
  reloadElectron
);

let watch = function() {
  gulp.watch(project.transpiler.source, refresh).on('change', onChange);
  gulp.watch(project.markupProcessor.source, refresh).on('change', onChange);
  gulp.watch(project.cssProcessor.source, refresh).on('change', onChange);
}

let watchElectron = function() {
  gulp.watch(project.transpiler.source, refreshElectron).on('change', onChange);
  gulp.watch(project.markupProcessor.source, refreshElectron).on('change', onChange);
  gulp.watch(project.cssProcessor.source, refreshElectron).on('change', onChange);
}

let run;

if (CLIOptions.hasFlag('browser')) {
  if (CLIOptions.hasFlag('watch')) {
    run = gulp.series(
      serve,
      watch
    );
  } else {
    run = serve;
  }
} else {  
  if (CLIOptions.hasFlag('watch')) {
    run = gulp.series(
      serveElectron,
      watchElectron
    );
  } else {
    run = serveElectron;
  }
}

export default run;
