function* createIdGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerator(startingFontSize) {
  let fontSize = startingFontSize;
  while (true) {
    const direction = yield fontSize;
    if (direction === "up") {
      fontSize += 2;
    } else if (direction === "down") {
      fontSize -= 2;
    }
      
    document.getElementById("text").style.fontSize = fontSize + "px";

  }
}

const fontGenerator = newFontGenerator(14);

console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);
