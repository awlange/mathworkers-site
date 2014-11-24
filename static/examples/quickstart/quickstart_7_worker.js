importScripts("/static/js/mathworkers.min.js");
var worker = new MathWorkers.MathWorker();

worker.on("run", function() {
    var v = MathWorkers.Vector.randomVector(2000);
    var A = MathWorkers.Matrix.randomMatrix(2000, 2000);
    A.workerDotVector(v, "done");
});