class TreeStore {
    getAll(items) {
        return items.map(item => item);

    }

    getItem(items, id) {
        return items.filter(item => item.id === id)
    }

    getChildren(items, id) {
        function parentId(id) {
            return function (item) {
                return item.parent === id
            }
        }

        return items.filter(parentId(id));
    }

    getAllChildren(items, id) {

        let res = this.getChildren(items, id);

        res.map(item => {
            items.filter(parent => {
                if (parent.parent === item.id) {
                    res.push(parent)

                }
            })
        });
        return res
    }

    getAllParents(arr1, id) {
        let temp = []
        let forFn = (arr, id) => {
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i]
                if (item.id === id) {
                    temp.push(item)
                    forFn(arr1, item.parent)
                    break
                } else {
                    if (item.children) {
                        forFn(item.children, id)
                    }
                }
            }
        }
        forFn(arr1, id)
        return temp.splice(1)
    }




}

