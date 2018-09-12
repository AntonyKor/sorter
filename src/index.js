class Sorter {
    constructor() {
        this.arr = [];
        this.compareFunction = (left, right) => left - right
    }

    add(element) {
        return this.arr[this.arr.length] = element
    }

    at(index) {
        return this.arr[index]
    }

    get length() {
        return this.arr.length
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {
        let arr = this.arr;
        let itemsOfArray = [], indexesOfArray = indices.sort((left, right) => left - right);
        indexesOfArray.forEach(function (item) {
            itemsOfArray[itemsOfArray.length] = arr[item]
        });
        itemsOfArray.sort(this.compareFunction);
        indexesOfArray.forEach(function (item,index) {
            arr[item] = itemsOfArray[index]
        });
        this.arr = arr;
    }

    setComparator(newCompareFunction) {
        this.compareFunction = newCompareFunction
    }
}

module.exports = Sorter;