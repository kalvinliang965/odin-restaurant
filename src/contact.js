import { createElement } from "./domHelper";
import { writeHeader } from "./domHelper";
export default function(container) {
    writeHeader(container, "Conact Us!");
    writeContact(container, "Yan Long Xia", "Chief", "555-555-5555", "Yanlongxia@notFake.com");

    writeContact(container, "Feng Ying Xia", "Manager", "666-666-6666", "Fengyinxia@notFake.com");

    writeContact(container, "Hei Xi Xia", "Waiter", "143-322-3333", "Heixixia@notFake.com");


}

function writeContact(parent, name, position, number, email){
    const container = createElement("div", parent, ["content-item"], "");
    createElement("div", container, ["subheader"], name);
    const info = createElement("ul", container, ["contact-info"], "");
    createElement("li", info, "", position);
    createElement("li", info, "", number);
    createElement("li", info, "", email);
}