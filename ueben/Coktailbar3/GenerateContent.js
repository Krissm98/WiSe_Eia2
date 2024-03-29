var L05_CocktailBar;
(function (L05_CocktailBar) {
    function generateContent(_data) {
        console.log(_data);
        for (let category in _data) {
            console.log(category);
            let items = _data[category];
            let group;
            switch (category) {
                case "Drink":
                    group = createSelect(items, category);
                    break;
                case "Container":
                    group = createSingle(items, category);
                    break;
                case "Extras":
                    group = createMultiple(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L05_CocktailBar.generateContent = generateContent;
    function createSelect(_items, _category) {
        console.log("ola1");
        let group = document.createElement("select");
        group.name = _category;
        for (let item of _items) {
            let option = document.createElement("option");
            option.setAttribute("price", item.price.toFixed(2));
            option.value = option.textContent = item.name;
            option.id = item.name;
            group.appendChild(option);
        }
        return group;
    }
    function createSingle(_items, _category) {
        let group = document.createElement("span");
        for (let item of _items) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(radio);
            group.appendChild(label);
        }
        return group;
    }
    function createMultiple(_items, _category) {
        let group = document.createElement("span");
        console.log("hallo");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
})(L05_CocktailBar || (L05_CocktailBar = {}));
//# sourceMappingURL=GenerateContent.js.map