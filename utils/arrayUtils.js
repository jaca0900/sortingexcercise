export default class ArrayUtils {
    static pullSort(dataSet = []) {
        let worker = [...dataSet];
        let spliced = false;
        let i = 0;

        while ((i + 1) < worker.length) {
            const item = worker[i];
            const next = worker[i + 1];

            if (item < next) {
                i++;
                continue;
            }

            worker.splice(i, 1);
            spliced = true;
        }

        if (spliced) {
            worker = ArrayUtils.pullSort(worker);
        }

        return worker;
    }
}