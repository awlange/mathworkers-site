importScripts("/static/js/mathworkers.min.js");
var worker = new MathWorkers.MathWorker();

var n = 2000;
var v = MathWorkers.Vector.randomVector(n);
var A = MathWorkers.Matrix.randomMatrix(n, n);

worker.on("run", function() {
    A.workerDotVector(v, "done");
});