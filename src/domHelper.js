


export function createElement(element, parent = undefined, cls = undefined, txt = "") {
    const ret = document.createElement(element);
    if (Array.isArray(cls)) {
        console.log(typeof(cls));
        console.log(cls);
        cls.forEach(element => {
            ret.classList.add(element);
        });
    }
    ret.textContent = txt;
    if (typeof(parent) == "object" && parent != undefined)
        parent.appendChild(ret);
    return ret;
};