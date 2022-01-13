console.clear();

//kad skaityti failus naudojama papildoma biblioteka:
const fs = require('fs/promises');

(async () => {

    const content = await fs.readFile('./data/drinks.txt', 'utf-8');
    // \r\n zymi tarpa
    const drinksList = content.split('\r\n');

    let i = 0;
    for (const drink of drinksList) {
        const drinkDetails = drink.split(' ');
        // const name = drinkDetails[0];
        // const price = drinkDetails[1];
        const [name, price, count] = drinkDetails;
        const moneyGet = parseFloat(price) * parseFloat(count);
        // parseInt ==> kai string verciam i sveika skaiciu;
        //parseFloat ==> kai i desimtaini.  
        //arba toks variantas kai norim gauti tiesiog skaiciu: 
        //                   const moneyGet = +price * +count;
        //arba: b = Math.round(moneyGet * 100)/100   <---- matematinis apvalinimas
        console.log(`Pasirinkimas ${++i}: ${name}, kaina: ${price} EUR, parduota ${count} vienetu, apyvarta ${moneyGet.toFixed(2)} EUR`);
    }
})();