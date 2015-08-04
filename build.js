'use strict';

var metalsmith   = require('metalsmith'),
    nunjucks     = require('nunjucks'),
    browserSync  = require('metalsmith-browser-sync'),
    markDown     = require('metalsmith-markdown'),
    sass         = require('metalsmith-ruby-sass'),
    templates    = require('metalsmith-layouts'),
    msIf         = require('metalsmith-if'),
    opts         = [],


    browserSyncTask = browserSync({
			server : "build",
			files  : ["src/contents/**/*.md", "src/templates/**/*"]
		}),

    markDownTask = markDown(),

    sassTask = sass({
			outputDir: 'css/',
			outputStyle: 'compressed'
		}),

		templatesTask = templates({
			engine: 'nunjucks',
			directory: 'src/templates'
		});

opts.watch = process.argv[2]=='watch' ? true: false;

nunjucks.configure('src/templates', {watch: opts.watch})

var metalsmith = metalsmith(__dirname)
    .source('src/contents')
    .clean(true)
    .use(templatesTask)
    .use(markDownTask)
    .use(msIf(
      opts.watch,
      browserSyncTask
    ))
    .build(function(err) {
    	if (err) throw err;
    });