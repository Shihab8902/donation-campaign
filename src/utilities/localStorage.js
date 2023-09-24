const getDataFromLS = () => {
    const storedData = localStorage.getItem("donation");
    if (storedData) {
        return JSON.parse(storedData);
    } else {
        return [];
    }
}



const setDataToLS = data => {
    const storedData = getDataFromLS();
    storedData.push(data);
    localStorage.setItem("donation", JSON.stringify(storedData));
}


export { getDataFromLS, setDataToLS }