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
        this.flag = false;
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
        //this.textArea.setAttribute('readonly', true);
        this.field.appendChild(this.textArea);
        this.textArea.classList.add('wrapper');
        this.textArea.style.backgroundColor = 'white';
        this.textArea.addEventListener('focus', () =>
        {
            this.flag = true;
        });
        this.textArea.addEventListener('blur', () =>
        {
            this.flag = false;
        });
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
    this.wrapper.addEventListener('mousedown', (e) =>
    {let textArea = this.textArea;
        if (e.target.parentNode.classList.contains('row1') ||
         e.target.parentNode.classList.contains('row2') ||
         e.target.parentNode.classList.contains('row3') ||
         e.target.parentNode.classList.contains('row4') ||
         e.target.parentNode.classList.contains('row5'))
         {
            e.target.classList.add('active-key');
            e.target.innerHTML.length == 1
            ? 
            textArea.value += e.target.innerHTML : 1;

            if (e.target.innerHTML == 'Space')
            {
                textArea.value += ' ';
            }
            if (e.target.innerHTML == 'Tab')
            {
                textArea.value += '   ';
            }
            if (e.target.innerHTML == 'Backspace')
            {
                textArea.value = textArea.value.substring(0, textArea.value.length-1)
            }
            
            
            if (e.target.innerHTML == 'CapsLock')
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
                    localStorage.setItem('lang', this.checkLang());
            }

            if (e.target.innerHTML == 'Shift')
            {
                    console.log(1);
                    if (this.checkLang() == 'eng')
                        this.fillKeysEngCaps();
                        else if (this.checkLang() == 'eng!')
                        this.fillKeysEng();
                        else if (this.checkLang() == 'rus')
                        this.fillKeysRusCaps();
                        else if (this.checkLang() == 'rus!')
                        this.fillKeysRus();
        }
        }
    });

    this.wrapper.addEventListener('mouseup', (e)=> 
    {
        if (e.target.innerHTML == 'Shift')
        {
            if (this.checkLang() == 'eng')
                        this.fillKeysEngCaps();
                        else if (this.checkLang() == 'eng!')
                        this.fillKeysEng();
                        else if (this.checkLang() == 'rus')
                        this.fillKeysRusCaps();
                        else if (this.checkLang() == 'rus!')
                        this.fillKeysRus();
        }
        e.target.classList.remove('active-key');
    });
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
            localStorage.setItem('lang', this.checkLang());

    }
  
    });
   }

   addShiftEvent()
   {
    let shiftFlag = true;
       window.addEventListener('keydown', (e) => {
        if (e.which == 16)
        {
            if (shiftFlag == true)
            {
            if (this.checkLang() == 'eng')
            this.fillKeysEngCaps();
            else if (this.checkLang() == 'eng!')
            this.fillKeysEng();
            else if (this.checkLang() == 'rus')
            this.fillKeysRusCaps();
            else if (this.checkLang() == 'rus!')
            this.fillKeysRus();
            }
            shiftFlag = false;
        }
       });
       window.addEventListener('keyup', (e) => {
        if (e.which == 16)
        {
            if (this.checkLang() == 'eng')
            this.fillKeysEngCaps();
            else if (this.checkLang() == 'eng!')
            this.fillKeysEng();
            else if (this.checkLang() == 'rus')
            this.fillKeysRusCaps();
            else if (this.checkLang() == 'rus!')
            this.fillKeysRus();
            shiftFlag = true;
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

                localStorage.setItem('lang', this.checkLang());

            }
            pressed.clear();
            
        });
   }

   addKeyEvent()
   {
        window.addEventListener('keydown', (e) =>
        {
                        // e.key.length == 1 ? this.textArea.value += e.key : 0;
            e.key == 'Backspace' ? this.textArea.value = this.textArea.value.substring(0, this.textArea.value.length-1) : 0;
          
            if (e.which == 32)
            {
                this.textArea.value += ' ';
            }
            if (e.which == 37 || e.which == 38 || e.which == 39 || e.which == 40)
            {
                switch (e.which)
                {
                    case 37:
                        this.textArea.value += '←';
                        break;
                    case 38:
                        this.textArea.value += '↑';
                        break;
                    case 39:
                        this.textArea.value += '→';
                        break;
                    case 40:
                        this.textArea.value += '↓';
                        break;
                }
            }
            for (let i = 0; i < KEYS.KEY_W.length; i++)
            {
                if (e.which == KEYS.KEY_W[i] && e.key.length == 1 && this.checkLang() == 'eng' && e.which != 32)
                {
                    this.textArea.value += KEYS.ENG[i];
                    this.key = KEYS.ENG[i];
                }
                else if (e.which == KEYS.KEY_W[i] && e.key.length == 1 && this.checkLang() == 'eng!' && e.which != 32)
                {
                    this.textArea.value += KEYS.ENG_CAPS[i];
                    this.key = KEYS.ENG_CAPS[i];
                }
                else if (e.which == KEYS.KEY_W[i] && e.key.length == 1 && this.checkLang() == 'rus' && e.which != 32)
                {
                    this.textArea.value += KEYS.RUS[i];
                    this.key = KEYS.RUS[i];
                }
                else if (e.which == KEYS.KEY_W[i] && e.key.length == 1 && this.checkLang() == 'rus!' && e.which != 32)
                {
                    this.textArea.value += KEYS.RUS_CAPS[i];
                    this.key = KEYS.RUS_CAPS[i];
                }
            }

            if (e.key.length == 1 && e.key != '←' && e.key != '↑' && e.key != '→' && e.key != '↓' && this.flag == true)
            {
            this.textArea.value = this.textArea.value = this.textArea.value.substring(0, this.textArea.value.length-1);
            }

            if (e.which == 9)
            {
                e.preventDefault();
                this.textArea.value += '   ';
            }
            if (e.which == 18)
            {
                e.preventDefault();
            }
        });
   }

   addStyleOnKeyDown()
   {
        window.addEventListener('keydown', (e) => {
                    for (let i = 0; i < this.wrapper.children.length; i++)
                    {
                        for (let j = 0; j < this.wrapper.children[i].children.length; j++)
                        {

                            if (this.key == this.wrapper.children[i].children[j].innerHTML ||
                                 e.key == this.wrapper.children[i].children[j].innerHTML ||
                                 (e.key == 'Control' && this.wrapper.children[i].children[j].innerHTML == 'Ctrl') ||
                                 (e.which == 32 && this.wrapper.children[i].children[j].innerHTML == 'Space'))
                            {
                                this.wrapper.children[i].children[j].classList.add('active-key');
                                window.addEventListener('keyup', () => {
                                this.wrapper.children[i].children[j].classList.remove('active-key')
                                })
                               
                            }
                        }
                     }
        });
   }

   onTextArea()
   {
       window.addEventListener('change', () => this.textArea.focus());
       window.addEventListener('click', () => this.textArea.focus());
       window.addEventListener('blur', () => this.textArea.focus());
   }
   
   
}

let rule = document.createElement('div');
rule.innerHTML = 'switch language = ctrl + shift';
document.querySelector('body').appendChild(rule);

let keyboard = new Keyboard('body');
keyboard.createTextArea();
keyboard.createWrapper();
keyboard.createRows();
keyboard.createKeys();

let lang = localStorage.getItem('lang');
console.log(lang);

if (lang == undefined || lang == 'eng' || lang == 'eng!')
{
    keyboard.fillKeysEng();
}
else if (lang == 'rus' || lang == 'rus!')
{
    keyboard.fillKeysRus();
}



keyboard.addClickEvent();
keyboard.addKeyEvent();
keyboard.switchLang();
keyboard.addCapsEvent();
keyboard.addStyleOnKeyDown();
keyboard.addShiftEvent();
// keyboard.onTextArea();




