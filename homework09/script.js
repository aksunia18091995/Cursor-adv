function generateBlock() {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '250px';
    container.style.height = '250px';
    document.body.appendChild(container);

    for (let i = 0; i < 25; i++){
        const square = document.createElement('div');
        square.style.width = '50px';
        square.style.height = '50px';
        square.style.backgroundColor = getRandomColor();
        container.appendChild(square);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateBlocksInterval() {
    setInterval(() => {
        const squares = document.querySelectorAll('div');
        squares.forEach((square) => {
        square.style.backgroundColor = getRandomColor();
        });
    }, 1000);
}

generateBlock();
generateBlocksInterval();