function Stopwatch() {

    let startTime = 0;
    let endTime = 0;
    let duration = 0;
    let isRunning = false;

    this.start = function () {
        if (isRunning === true) {
            throw new Error("Stopwatch is already running!");
        } else {
            isRunning = true;
            startTime = new Date();
        };
        return "Stopwatch started";
    };

    this.stop = function () {
        if (isRunning === false) {
            throw new Error("Stopwatch isn't running yet!")
        } else {
            endTime = new Date();
            isRunning = false;
            let secs = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += secs;
        };
        return "Stopwatch stopped";
    };

    this.showTime = function () {
        return duration;
    };

    this.reset = function () {
        duration = 0;
        startTime = null;
        endTime = null;
        isRunning = false;
        return "Stopwatch has reset";
    };

}