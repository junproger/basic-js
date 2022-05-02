const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
	makeChain: [],
	getLength() {
		return this.makeChain.length;
	},
	addLink(value) {
		this.makeChain.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (typeof (position) != "number" || position < 1 || position > this.getLength()) {
		this.makeChain = [];
		throw new Error("You can't remove incorrect link!");
		};
		this.makeChain.splice(position - 1, 1);
		return this;
	},
	reverseChain() {
		this.makeChain.reverse();
		return this;
	},
	finishChain() {
		let readyChain = this.makeChain.join("~~");
		this.makeChain = [];
		return readyChain;
	}
};

module.exports = {
  chainMaker
};
