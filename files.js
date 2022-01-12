console.clear();


//kad skaityti failus naudojama papildoma biblioteka:
const fs = require('fs/promises');

(async () => {

    

    const content = await fs.readFile('./data/drinks.txt', 'utf-8');
    console.log(content);

    for (const letter of content) {
        console.log(letter);
    }


})();


