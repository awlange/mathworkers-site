importScripts("/static/js/mathworkers.min.js");
var worker = new MathWorkers.MathWorker();

worker.on("run", function() {
    var message = "Hello from MathWorker " + worker.getId();
    worker.sendDataToCoordinator(message, "done");
});