# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @danielYuan/lotide`

**Require it:**

`const _ = require('@danielyuan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- head: gets the first valuse of an array
- tail: puts all values of an array execept the first into an new array.
- middle: get the middle 2 elements of an array. or 1 if there is an odd number of elements
- assertArrayEqual: tests of 2 arrays are equal
- assertEqual: gives responses based on the return value. weather its true or false
- eqArrays: checks if 2 arrays are equal
