var Form = require('microscope-console').Form;
var gulp = require('gulp');

var GulpForm = Form.extend({

    initialize: function (gulpCallback) {
        this.cb = gulpCallback;

        this.model = [{
            type: 'list',
            name: 'task',
            message: 'What would you like to do ?',
            choices: [
                'serve',
                'build',
                'release',
                'test'
            ]
        }];

        this.render();
    },

    response: function (answer) {
        console.log('\n');
        gulp.start(answer.task, function () {
            this.cb();
        });
    }
});

module.exports = GulpForm;