// [Parent-name] [Parent-surname] has [count] children and their names are: [name], [name].

const { log } = require('console');
const fs = require('fs/promises');
const path = require('path');

console.log(__dirname);
console.log(__filename);

(async () => {

    function parseJSONtoObject(text) {
        try{
            const obj = JSON.parse(text);
            return [false, obj];
        } catch(error) {
            return [true, {}];
        }
    }

    function childrenNames(childrenList) {

        const namesOnly = [];

        console.log(childrenList);
        for (let i = 0; i < childrenList.length; i++){
            let name = childrenList[i].name;
            namesOnly.push(name);

            
        }
        return namesOnly.join(', ');
    }





    const fullPath = path.join(__dirname, './data/country.json');
    const countryContent = await fs.readFile(fullPath, 'utf-8');
    //console.log(countryContent);


    const [personError, personObj] = parseJSONtoObject(countryContent);

    if (personError){
        console.log('parsinant faila ivyko klaida');

    } else {
        //console.log(personObj);
        console.log(`${personObj.name} ${personObj.lastname} has ${personObj.children.length} children and their names are: ${childrenNames(personObj.children)} `)
    }




// [Parent-name] [Parent-surname] has [count] children and their names are: [name], [name].







})();