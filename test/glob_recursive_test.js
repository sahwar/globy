"use strict";
// jshint unused: false

var assert = require("chai").assert;
var globy = require("../lib/globy.js");
var equal = assert.strictEqual;
var deepEqual = assert.deepEqual;

suite("glob:", function() {
    test("**", function() {
        deepEqual(
            globy.glob("**"),
            [
                "blocks",
                "elements",
                "tools",
            ]
        );
    });


    test("**/*", function() {
        deepEqual(
            globy.glob("**/*").sort(),
            [
                "blocks",
                "blocks/CobbleStone",
                "blocks/Dirt",
                "blocks/SandStone",
                "blocks/Snow",
                "blocks/Stone",
                "elements",
                "elements/Coal",
                "elements/Gold.ingot",
                "elements/Iron.block",
                "elements/Iron.ingot",
                "elements/RedStone",
                "elements/Stick",
                "elements/gems",
                "elements/gems/Emerald.gem",
                "tools",
                "tools/Door",
                "tools/Ladder",
            ].sort()
        );
    });


    test("**/* (dot)", function() {
        deepEqual(
            globy.glob("**/*", { dot: true }).sort(),
            [
                ".hidden_file",
                ".secret",
                ".secret/Diamond.gem",
                "blocks",
                "blocks/CobbleStone",
                "blocks/Dirt",
                "blocks/SandStone",
                "blocks/Snow",
                "blocks/Stone",
                "elements",
                "elements/Coal",
                "elements/Gold.ingot",
                "elements/Iron.block",
                "elements/Iron.ingot",
                "elements/RedStone",
                "elements/Stick",
                "elements/gems",
                "elements/gems/Emerald.gem",
                "tools",
                "tools/Door",
                "tools/Ladder",
            ].sort()
        );
    });


    test("**/blocks", function() {
        deepEqual(
            globy.glob("**/blocks"),
            [
                "blocks",
            ]
        );
    });


    test("**/nothing", function() {
        deepEqual(
            globy.glob("**/nothing"),
            []
        );
    });


    test("**/blocks/**/*", function() {
        deepEqual(
            globy.glob("**/blocks/**/*"),
            [
                "blocks/CobbleStone",
                "blocks/Dirt",
                "blocks/SandStone",
                "blocks/Snow",
                "blocks/Stone",
            ]
        );
    });
});

