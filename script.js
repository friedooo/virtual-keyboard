import KEYS from './src/keys.js';

class Keyboard
{
    constructor(selector)
    {
        this.element = document.querySelector(selector);
        this.arrRow = [];
        this.arrKey = [];
        this.arrClasses = [['row1',14], ['row2',15], ['row3',13], ['row4',13], ['row5',9]];
        
    }

    createWrapper()
    {
        let div = document.createElement('div');
        this.div = div;
        this.element.appendChild(this.div);
        this.div.classList.add('wrapper');
    }

    createRows()
    {
        
        for (let i = 0; i < 5; i++)
        {
            let row = document.createElement('div')
            this.div.appendChild(row);
            row.classList.add(this.arrClasses[i][0]);
            this.arrRow.push(row);
        }
    }

    createKeys()
    {

        for (let k = 0; k < this.arrClasses.length; k++)
        {
        for (let i = 0; i < this.arrClasses[k][1]; i++)
        {
            let key = document.createElement('div');
            this.arrRow[k].appendChild(key);
            this.arrKey.push(key);
        }
        }
   }
}

let keyboard = new Keyboard('body');
keyboard.createWrapper();
keyboard.createRows();
keyboard.createKeys();


