const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
title = dom.window.document.querySelector("p").textContent
console.log(title)

window = dom.window
location = window.location
navigator = window.navigator
