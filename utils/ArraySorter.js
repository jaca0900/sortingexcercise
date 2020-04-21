export default class ArraySorter {
    constructor() { }

    pullSort(dataSet = []) {
        let worker = dataSet.filter((elem, index, list) =>
            elem < list[index + 1] || !list[index + 1])

        if (worker.length !== dataSet.length) {
            worker = this.pullSort(worker);
        }

        return worker;
    }

    getItemWithIndex(element, dataset) {
        const index = dataset.findIndex((val) => element === val);

        if (index >= 0) {

            return {
                value: dataset[index],
                index,
            };
        }
    }

    findNextBigger(elem, array, from) {
        const index = array.findIndex((val, pos) =>  elem <= val && pos > from);

        if (index >= 0) {
            return {
                value: array[index],
                index,
            };
        }
    }

    getCandidates(element, dataSet, from = 0) {
        const arrayBigger = [];

        while (1) {
            const bigger = this.findNextBigger(element, dataSet, from);

            if (!bigger) {
                break;
            }

            from++;
            arrayBigger.push(bigger);
        }

        return arrayBigger;
    }

    findRangeChange(dataSet) {
        for (let i = 1; i < dataSet.length; i++) {
            if (dataSet[i - 1].length != dataSet[i].length) {
                return i;
            }
        }
    }

    createSortedSubtables(results, dataSet) {
        let newCandidates = 0;

        results = results.map(resultCandidate => {
            const last = resultCandidate[resultCandidate.length - 1];

            const candidates = this.getCandidates(last.value || last, dataSet, last.index);
            newCandidates += candidates.length;

            return candidates.length ? [...candidates.map(candidate => [...resultCandidate, candidate])] : [resultCandidate]
        }).flat();

        results = results.sort((a, b) => {
            return b.length - a.length
        });

        const rangeIndex = this.findRangeChange(results);

        if (rangeIndex) {
            results = results.slice(0, rangeIndex)
        }

        if (newCandidates) {

            results = this.createSortedSubtables(results, dataSet);
        }

        return results;
    }

    longestPullSort(dataSet = []) {
        const toSort = [...dataSet]
        const results = this
            .createSortedSubtables(dataSet.map(res => [this.getItemWithIndex(res, toSort)]), toSort)[0];

        for (let i = 1; i < results.length; i++) {
            toSort.splice(
                (toSort.findIndex((el) => el === results[i - 1].value) + 1),
                results[i].index - results[i - 1].index - 1);
        }

        return toSort
    }
}