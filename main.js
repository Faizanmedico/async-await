function del(milliseconds, count) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(count);
        }, milliseconds);
    });
}
async function wel() {
    console.log("Start");
    for (let i = 0; i < 5; i++) {
        const count = await del(900, i);
        console.log(count);
    }
    console.log("Finish");
}
wel();
export {};
