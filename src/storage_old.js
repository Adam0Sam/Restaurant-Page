import UI from "./UI";
const storage = (() => {
    //provided by mdn docs
    function storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                // everything except Firefox
                (e.code === 22 ||
                    // Firefox
                    e.code === 1014 ||
                    // test name field too, because code might not be present
                    // everything except Firefox
                    e.name === "QuotaExceededError" ||
                    // Firefox
                    e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    };

    const session = (() => {

        let orderItemList = [];

        const log = () => {
            for (const item of JSON.parse(sessionStorage.getItem('orderItemList'))) {
                console.log(item);
            }
        }

        const addOrderItem = (item) => {
            console.log(item);
            if (storageAvailable("sessionStorage")) {
                orderItemList.push(item.outerHTML);
                updateOrderItemList();
            }
        };

        const removeOrderItem = (item) => {
            if (storageAvailable('sessionStorage')) {
                console.log('REMOVEORDER');
                orderItemList.forEach(listItem => {console.log(`list item: ${listItem}, main item: ${item.outerHTML}`);})
                    // .filter(listItem => listItem !== item.outerHTML);
                
                updateOrderItemList();
            }
        };

        const removeAllOrderItems = () => {
            orderItemList = [];
            updateOrderItemList();
        };

        const updateOrderItemList = () => {
            sessionStorage.setItem('orderItemList', 
            JSON.stringify(orderItemList));
            console.log('updateOrderItemList');
            log();
        };

        const loadOrderItemList = () => {
            if (storageAvailable('sessionStorage')) {
                console.log(sessionStorage.getItem('orderItemList'));
                const itemList = JSON.parse(sessionStorage.getItem('orderItemList'));
                if (itemList.length > 0) {
                    for (let item of itemList) {
                        const foodCard = document.createElement('div');
                        foodCard.innerHTML = item;
                        UI.orderAside.loadOrder(foodCard.firstChild)
                        console.log(foodCard.firstChild);
                    }
                }
                console.log('loadOrderItemList');
                log()
            }
            // log()
        };
        // updateOrderItemList();

        return { addOrderItem, removeOrderItem, removeAllOrderItems, loadOrderItemList }
    })();

    return { session };
})();

export default storage;