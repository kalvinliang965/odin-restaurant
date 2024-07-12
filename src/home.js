
import {createElement} from "./domHelper.js";
import { writeHeader } from "./domHelper.js";


function writeDescription(parent) {
    const description = `
    Ginger has the best Chinese cuisine! The atmosphere and customer service
    make you feel like you are sitting in the middle of ancient china. The
    dishes are bursting with authentic flavors, and the attention to detail in every
    aspect of the restaurant is truly remarkable. Highly recommend for anyone looking for an
    unforgettable dining experience.
    `
    const container = createElement("div", parent, 
                ["content-item", "short-description"], "");

    // writing the description
    createElement("div", container, undefined, description);
    // writing the author
    const name = "Evan Wang";
    createElement("p", container, undefined, name);
}

function writeSchedule(parent) {
    const container = createElement("div", parent, 
                ["content-item"], "");

    // create Header
    createElement("div", container, ["subheader"], "Hours");

    // writing the date
    const ul = createElement("ul", container, undefined, "");
    createElement("li", ul, undefined, "Sunday: 8am - 8pm");
    createElement("li", ul, undefined, "Monday: 6am - 6pm");
    createElement("li", ul, undefined, "Tuesday: 6am - 6pm");
    createElement("li", ul, undefined, "Wednesday: 6am - 6pm");
    createElement("li", ul, undefined, "Thursday: 6am - 10pm");
    createElement("li", ul, undefined, "Friday: 6am - 10pm");
    createElement("li", ul, undefined, "Saturday: 8am - 10pm");
}

function writeLocation(parent) {
    const container = createElement("div", parent, 
                ["content-item"], "");
    
    // create Header
    createElement("div", container, ["subheader"], "Location");
    createElement("div", container, undefined, "Stony Brook, NY 11794-1901");
}

export default function(container) {
    writeHeader(container, "Ginger and union cusine");
    writeDescription(container);
    writeSchedule(container);
    writeLocation(container);
}