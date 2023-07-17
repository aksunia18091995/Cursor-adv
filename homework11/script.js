function getRandomChinese(length) {
    return new Promise(async (resolve) => {
        let result = '';
        let count = 0;

        while (count < length) {
            const sign = String.fromCharCode(Date.now() % 65536);
            result += sign;
            count++;

            await new Promise((resolve) => setTimeout(resolve, 50));
        }
        
        resolve(result);
    });
}

getRandomChinese(4).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});