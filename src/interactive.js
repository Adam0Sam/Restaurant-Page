const menuObject = (oldName, category, spiciness, imgLink) => {
    let name = oldName.toUpperCase();

    return {
        name,
        category,
        spiciness,
        imgLink
    };
};

export {menuObject};