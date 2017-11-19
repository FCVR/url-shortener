var gulp = require('gulp');
var path = require('path');
var child_process = require('child_process');

function getNodemonBinary() {
    var pkgPath = require.resolve('nodemon');
    console.log(pkgPath);
    var nodemonDir = path.resolve(path.join(path.dirname(pkgPath), '..', 'bin'));
    return path.join(nodemonDir, '/nodemon.js');
}

gulp.task('prod', function (callback) {
    child_process.spawn('node', ['index.js'], {
        stdio: 'inherit'
    }).once('close', function (code) {
        console.log('Started prod server..' + code);
        callback();
    });
});

gulp.task('dev', function (callback) {
    child_process.spawn('node', [getNodemonBinary(), 'index.js'], {
        stdio: 'inherit'
    }).once('close', function (code) {
        console.log('Started prod server..' + code);
        callback();
    });
});
