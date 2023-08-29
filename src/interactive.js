const menuObject = (oldName, category, spiciness, imgLink, price) => {
    let name = oldName.toUpperCase();

    return {
        name,
        category,
        spiciness,
        imgLink,
        price
    };
};

export {menuObject};