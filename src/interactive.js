const menuObject = (oldName, category, spiciness, imgLink) => {
    let name = oldName.toUpperCase(); // Private variable to store uppercase name

    return {
        name,
        category,
        spiciness,
        imgLink
    };
};

export {menuObject};