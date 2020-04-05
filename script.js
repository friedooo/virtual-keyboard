import KEYS from './src/keys.js';

console.log(KEYS.ENG);
class Keyboard
{
    constructor(selector)
    {
        this.field = document.querySelector(selector);
        this.arrRow = [];
        this.arrKey = [];
        this.arrClasses = [['row1',14], ['row2',15], ['row3',13], ['row4',13], ['row5',9]]; 
    }

    createWrapper()
    {
        this.wrapper= document.createElement('div');
        this.field.appendChild(this.wrapper);
        this.wrapper.classList.add('wrapper');
    }
    
    createTextArea()
    {
        this.textArea = document.createElement('textarea');
        this.field.appendChild(this.textArea);
        this.textArea.classList.add('wrapper');
        this.textArea.style.backgroundColor = 'white';
    }

    createRows()
    {   
        for (let i = 0; i < 5; i++)
        {
            let row = document.createElement('div')
            this.wrapper.appendChild(row);
            row.classList.add(this.arrClasses[i][0]);
            this.arrRow.push(row);
        }
    }

    _randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
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

   fillKeysEng()
   {
       let counter = 0;
    for (let i = 0; i < this.wrapper.children.length; i++)
    {
        for (let j = 0; j < this.wrapper.children[i].children.length; j++)
        {
            this.wrapper.children[i].children[j].innerHTML = KEYS.ENG[counter];
            counter++;
        }
    }
   }

   fillKeysRus()
   {
       let counter = 0;
    for (let i = 0; i < this.wrapper.children.length; i++)
    {
        for (let j = 0; j < this.wrapper.children[i].children.length; j++)
        {
            this.wrapper.children[i].children[j].innerHTML = KEYS.RUS[counter];
            counter++;
        }
    }
   }

   fillKeysEngCaps()
   {
       let counter = 0;
    for (let i = 0; i < this.wrapper.children.length; i++)
    {
        for (let j = 0; j < this.wrapper.children[i].children.length; j++)
        {
            this.wrapper.children[i].children[j].innerHTML = KEYS.ENG_CAPS[counter];
            counter++;
        }
    }
   }

   fillKeysRusCaps()
   {
       let counter = 0;
    for (let i = 0; i < this.wrapper.children.length; i++)
    {
        for (let j = 0; j < this.wrapper.children[i].children.length; j++)
        {
            this.wrapper.children[i].children[j].innerHTML = KEYS.RUS_CAPS[counter];
            counter++;
        }
    }
   }

   addClickEvent() 
   {
    this.wrapper.addEventListener('click', click);
    let textArea = this.textArea;
    function click(e)
    {
        if (e.target.parentNode.classList.contains('row1') ||
         e.target.parentNode.classList.contains('row2') ||
         e.target.parentNode.classList.contains('row3') ||
         e.target.parentNode.classList.contains('row4') ||
         e.target.parentNode.classList.contains('row5'))
         {
            e.target.classList.add('active-key');
            e.target.innerHTML.length == 1 && e.target.innerHTML != '↑' &&
            e.target.innerHTML != '↓' &&
            e.target.innerHTML != '←' &&
            e.target.innerHTML != '→'
            ? 
            textArea.value += e.target.innerHTML : 1;

            if (e.target.innerHTML == 'Space')
            {
                textArea.value += ' ';
            }

            setTimeout(() => e.target.classList.remove('active-key'), 200);
         }
    }
   }

   checkLang()
   {
       let answer = '';
        if (this.wrapper.children[0].children[0].innerHTML == 'ё' ||
        this.wrapper.children[0].children[0].innerHTML == 'Ё')
        answer += 'rus';
        else
        answer += 'eng';

        if (this.wrapper.children[1].children[1].innerHTML == 'Q' ||
        this.wrapper.children[1].children[1].innerHTML == 'Й')
        {
            answer += '!'
        }
        return answer;
   }

   addCapsEvent()
   {
       window.addEventListener('keyup', (e) => {
    if (e.which == 20)
    {
        if (/!/.test(this.checkLang()))
        {
            if (this.checkLang() == 'eng!')
            this.fillKeysEng();
            else
            this.fillKeysRus();
        }
        else
            {
            if (this.checkLang() == 'eng')
            this.fillKeysEngCaps();
            else
            this.fillKeysRusCaps();
            }
    }
    });
   }
   

   switchLang()
   {
       let pressed = new Set();
        window.addEventListener('keydown', (e) => {
            pressed.add(e.key);
        });
        window.addEventListener('keyup', () => {
            if (pressed.has('Control') && pressed.has('Shift'))
            {
                if (this.checkLang() == 'eng!')
                this.fillKeysRusCaps();
                else if (this.checkLang() == 'eng')
                this.fillKeysRus();
                else if (this.checkLang() == 'rus!')
                this.fillKeysEngCaps();
                else
                this.fillKeysEng();
            }
            pressed.clear();
        });
   }

   addKeyEvent()
   {
        window.addEventListener('keyup', (e) =>
        {
            e.key.length == 1 ? this.textArea.value += e.key : 0;
            e.key == 'Backspace' ? this.textArea.value = this.textArea.value.substring(0, this.textArea.value.length-1) : 0;
        });
   }
   
   
}

let keyboard = new Keyboard('body');
keyboard.createTextArea();
keyboard.createWrapper();
keyboard.createRows();
keyboard.createKeys();
keyboard.fillKeysEng();
keyboard.addClickEvent();
keyboard.addKeyEvent();
keyboard.switchLang();
keyboard.addCapsEvent();




