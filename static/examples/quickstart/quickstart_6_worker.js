importScripts("/static/js/mathworkers.min.js");
var worker = new MathWorkers.MathWorker();

worker.on("run", function() {
    var v = MathWorkers.Vector.fromArray([1, 2, 3, 4]);
    var A = MathWorkers.Matrix.fromArray([
        [11, 12, 13, 14],
        [21, 22, 23, 24],
        [31, 32, 33, 34],
        [41, 42, 43, 44]
    ]);
    A.workerDotVector(v, "done");
});