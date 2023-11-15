#!/usr/bin/node
module.exports = class Rectangle {
  constructor (p, j) {
    if (p > 0 && j > 0) { [this.width, this.height] = [p, j]; }
  }

  print () {
    for (let i = 0; i < this.height; i++) console.log('X'.repeat(this.width));
  }

  rotate () {
    [this.width, this.height] = [this.height, this.width];
  }

  double () {
    [this.width, this.height] = [this.width * 2, this.height * 2];
  }
};
