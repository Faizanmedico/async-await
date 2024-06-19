function del(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(count);
            }, milliseconds);
        });
}

async function wel(): Promise<void> {
    console.log("Start");

    for (let i = 0; i < 5; i++) {
        
        const count: number = await del(900, i);
        console.log(count);
    }

    console.log("Finish");
}

wel();