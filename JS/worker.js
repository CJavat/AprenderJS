addEventListener("message", e => {
    if(e.data.length > 4) {
        postMessage("holicrayoli");
    }
});