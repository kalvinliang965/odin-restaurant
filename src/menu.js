import {createElement} from "./domHelper.js";
import { writeHeader } from "./domHelper.js";


function writeSubTitle(parent, content) {
    const container = createElement("div", parent, ["content-item", "dishes-title"], "");
    createElement("h1", container, "", content);
}

function writeDish(parent, content, title, price) {
    const container = createElement("div", parent, ["content-item"], "");

    createElement("div", container, ["subheader"], title);
    createElement("div", container, ["dish"], content);

    const price_img = createElement("div", container, ["price-img"], "");
    createElement("div", price_img, undefined, "$" + price);
    createElement("div", price_img, ["pic"], "");
}


export default function(container) {

    writeHeader(container, "Menu");

    // writing beverages
    writeSubTitle(container, "Beverages");
    // writing green tea
    const greenTea = `
        A refreshing and soothing beverge, our 
        green tea is crafted from the fniest 
        hand-pick tea leaves. Enjoy it hot, or iced, 
        with a hint of honey or a splash lemon to 
        enhance its natural goodness
    `;
    writeDish(container, greenTea, "Green Tea", 2);

    // writing black tea
    const blackTea =   `
        Rich and robust, our black tea is made 
        from fully oxidized leaves, giving it a deep, 
        full-bodied flavors with hints of malt and a slightly 
        sweet finish. Perfect for starting you day 
        or enjoying in the afternoon!
    `;
    writeDish(container, blackTea, "Black Tea", 2);

    // writing Sides
    writeSubTitle(container, "Sides")
    // writing braised shiitake mushroom
    const braised_shiitake_mushroom =  `
        Savor the rich and earthy flavors of our braised 
        shiitake mushrooms, a delicacy that combines the 
        natural umami of shiitake mushrooms with a savory
        braising sauce. Slow-cooked to perfection, these 
        mushrooms are tender and juicy, infused with a 
        harmonious blend of soy sauce, garlic, giner, and 
        a touch of seame oil.
    `;
    writeDish(container, braised_shiitake_mushroom, "Braised Shittake Mushrooms", 7);

    //writing Soup
    const soup =  `
        Feature distinct, soothing flavors that 
        can warm up a chilly night and fill a hungry 
        belly.
    `;
    writeDish(container, soup, "Soup", "5");

    //writing Main dishes
    writeSubTitle(container, "Main dishes");

    // writing kung pao chicken
    const kp_chicken = `
        A spicy, stir-fried chinese dish made 
        with cubes of chicken, peanuts, vegetables 
        and chill peppers and sichuan peppercorns.
    `;
    writeDish(container, kp_chicken, "Kung Pao Chicken", 10);

    const mp_tofu = `
        Mapo tofu is a popular chinese dish 
        from sichuan province. It consists of tofu 
        set in a spicy sauce, typically a thin, oily 
        and bright red suspension, based on douban, 
        and douchi, along with minced meat, traidtionally 
        beef.
    `;

    writeDish(container, mp_tofu, "Mapo Tofu", 11);
};