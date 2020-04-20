export default class ArrayUtils {
    static pullSort(dataSet = []) {
        let worker = dataSet.filter((elem, index, list) =>
            elem < list[index + 1] || !list[index + 1])

        if (worker.length !== dataSet.length) {
            worker = ArrayUtils.pullSort(worker);
        }

        return worker;
    }
}