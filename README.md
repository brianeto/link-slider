# link-slider project guideline

## Description

Simple slider that runs up to 3 sliders, this is a work in progress, for more information check [TODO'S](#todos)


## How to Run

1. Go to the folder and make sure you have gulp client install with `gulp -v` or `gulp --version`, if not `run npm install gulp-cli -g`, if gulp is already installed go to the next step.
2. Go to `src/` then install gulp with `npm install gulp`.
3. Finally run the project with `gulp`.


## Project Workflow

All the development files are located in `src/` folder, please do not modify  any *css* or *js* from the root folders, it will be overwritten.

> When committing, a wild pre-commit will spawn and will check all your *js*, *sass* code quality, so you may need to install *jshint* client `npm install -g jshint`.

<p id="todos"></p>
## TODO'S

* Add custom variables to work with more than 3 sliders
* Add navigation dots
* Fix animation bug
