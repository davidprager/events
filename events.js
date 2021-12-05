/* This file contains a series of functions to examine events in the graphics window */
"use strict"

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 300;
const DOT_SIZE = 6;
const DELAY = 1000;
const SQUARE_SIZE = 50;
const N_STEPS = 100;
const TIME_STEP = 20;
const NUMBER_CHANGES = 10;

/* This function lets you add dots to the graphics window */
/*function drawIt() {

    let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);

}*/

/* This function lets you create a line in the graphics window */
/*function drawIt() {
    let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);

}
*/

/* This function lets the user drag objects around the graphics window.*/
/*function drawIt() {
    let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
    let rect = GRect(150, 50, 200, 100);
    rect.setColor("Blue");
    rect.setFilled(true);
    gw.add(rect);
    let oval = GOval(150, 50, 200, 100);
    oval.setFilled(true);
    oval.setColor("Red");
    gw.add(oval);
}*/

/* This function lets the user drag objects around the graphics window.
*  It also lets you change the color of an object and moves it to the front
* */
/*function drawIt() {

}*/

/* Change the color of a square one time  */
/*function drawIt() {
    let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
    let x0 = (gw.getWidth() - SQUARE_SIZE) / 2;
    let y0 = (gw.getHeight() - SQUARE_SIZE) / 2;
    let square = GRect(x0, y0, SQUARE_SIZE, SQUARE_SIZE);
    square.setFilled(true);
    gw.add(square);

}*/


/* Change the color of a square many times */
/*function drawIt() {
    let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
    let x0 = (gw.getWidth() - SQUARE_SIZE) / 2;
    let y0 = (gw.getHeight() - SQUARE_SIZE) / 2;
    let square = GRect(x0, y0, SQUARE_SIZE, SQUARE_SIZE);
    square.setFilled(true);
    gw.add(square);

}*/


/* Animate a square */
/*function drawIt() {
    let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
    let square = GRect(0, 0, SQUARE_SIZE, SQUARE_SIZE);
    square.setFilled(true);
    gw.add(square);

}*/



