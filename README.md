# MoveableBoxAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

# Problem Statement

An App to generate new boxes in your app. And move those boxes using your keyboard keys.

# Outcome and Steps involved

- User gets to see a button to add a new box in the window.On clicking the button, a box is created with a unique number Id.Boxes are of fixed width and height.
  -Higher Id boxes will have higher z-index, so they will created top of one another like stack, to view boxes, click on them and move.
  -Users can add multiple boxes.
  -To Select a box,click on it. Highlighting the selected box.
- Use W-A-S-D or arrow keys on the keyboard to move the selected box.
- Use the delete key on the keyboard to remove the selected box.

### Requirements

- Fork this repo.
- Clone this repo.

## How to run

- To run the project go to your ubuntu terminal or VS Code editor
  - open the ubuntu or cmd terminal or inside the vs code editor
  - run the command following command
  - `ng serve --open or ng serve -o`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
