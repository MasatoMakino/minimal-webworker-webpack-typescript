const worker = new Worker( new URL("./worker.ts", import.meta.url));

worker.postMessage("hello from main thread");
worker.onmessage = (e) => {
    console.log("on message in main thread : ", e.data);
    worker.terminate();
}