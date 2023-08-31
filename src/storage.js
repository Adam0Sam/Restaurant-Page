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
        const savedOrderItemList = JSON.parse(sessionStorage.getItem('orderItemList'));
        let orderItemList = savedOrderItemList ? savedOrderItemList : [];

        const log = () => {
            console.log('starting log..');
            if(orderItemList.length>0){

                orderItemList.forEach((listItem) => {
                    const id = listItem.match(/data-menu-item="([^"]+)"/);
                    console.log(id[1]);
                });
            }
            else console.log('empty');
        }
        const addOrderItem = (item) => {
            if (storageAvailable("sessionStorage")) {
                orderItemList.push(item.outerHTML);
                updateOrderItemList(orderItemList);
            }
        };

        const removeOrderItem = (targetId) => {
            if (storageAvailable('sessionStorage')) {
                const newOrderedItemList = orderItemList.filter(item => {
                    const itemId = item.match(/data-menu-item="([^"]+)"/)[1];
                    if(targetId!=itemId) return item;
                });
                updateOrderItemList(newOrderedItemList);
            }
        };

        const removeAllOrderItems = () => {
            orderItemList = [];
            updateOrderItemList();
        };

        const updateOrderItemList = (list) => {
            if(list && list.length>0){
                sessionStorage.setItem('orderItemList', 
                JSON.stringify(list));
            }
            else{
                sessionStorage.setItem('orderItemList', 
                JSON.stringify([]));
            }

        };

        const loadOrderItemList = () => {
            if (storageAvailable('sessionStorage')) {
                // const itemList = JSON.parse(sessionStorage.getItem('orderItemList'));
                if(orderItemList != null && orderItemList != []){
                        for (let item of orderItemList) {
                            const foodCardContainer = document.createElement('div');
                            foodCardContainer.innerHTML = item;
                            UI.orderAside.loadOrder(foodCardContainer.firstChild, true);
                        }
                }
            }
        };

        return { addOrderItem, removeOrderItem, removeAllOrderItems, loadOrderItemList };
    })();
    return { session };
})();
export default storage;