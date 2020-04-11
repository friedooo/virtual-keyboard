const CODE = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5',
'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO',
'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA',
'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon',
'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN',
'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft',
'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const ENG = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift',
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl',
];
const ENG_CAPS = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete',
'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift',
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl',
];
const RUS = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift',
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl',
];
const RUS_CAPS = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Delete',
'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&uarr;', 'Shift',
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl',
];
const KEY_W = [192, 49, 50, 51, 52, 53, 54, 55, 56,
57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89,
85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83,
68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16,
90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38,
16, 17, 91, 18, 32, 18, 37, 40, 39, 17];


const KEYS = {
CODE,
ENG,
ENG_CAPS,
RUS,
RUS_CAPS,
KEY_W,
};

console.log(KEYS.ENG);
class Keyboard
{
    constructor(selector)
    {
        this.field = document.querySelector(selector);
        // Please use more descriptive and explicit names for fields and variables
        this.arrRow = [];
        this.arrKey = [];
        // This field reflects not only classes but also length of rows
        // You could split it for two separate arrays
        /*
          this.rowsClasses = ['row1', ...];
          this.rowsLength = [14, ...];
        */
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
        // Don't leave commented code
        //this.textArea.setAttribute('readonly', true);
        this.field.appendChild(this.textArea);
        // You could append textarea and add class for it in that way:
        /*
          this.field.innerHTML = `
            <textarea class="wrapper"></textarea>
          `;
         */

        this.textArea.classList.add('wrapper');
        // You should override styles in css not in js files.
        // You could apply same styles for different element and then override some for only one element
        /*
          .wrapper, .textarea {
            ...someCommonStyles
          }

          .textarea {
            ...somUniqueStyles
          }
        */
        this.textArea.style.backgroundColor = 'white';
        this.textArea.addEventListener('focus', () =>
        {
          // What is this flag responsible for? Please use more descriptive names for variables.
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

    // This function is not used anywhere
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

   // Logic for fillKeysRusCaps and as for three functions above is pretty the same.
   // It could be written as one parameterized function.
   /*
    fillKeysWith(LANG) {
      ...
      ...children[j].innerHTML = LANG[counter];
      ...
    }
    */
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
    {
        // This is not better way to define that some key was clicked.
        // You could add common class to each key as example .key
        // and check that target element has this class.
        /*
          if (e.target.classList.contains('key')) {
            ...
          }
         */
        if (e.target.parentNode.classList.contains('row1') ||
         e.target.parentNode.classList.contains('row2') ||
         e.target.parentNode.classList.contains('row3') ||
         e.target.parentNode.classList.contains('row4') ||
         e.target.parentNode.classList.contains('row5'))
         {
            e.target.classList.add('active-key');
            // In negative case it returns just 1 but it is not assigned anywhere.
            // Please use ternary operator where is really needed, In this case it is meaningless.
            e.target.innerHTML.length == 1
            ?
            this.textArea.value += e.target.innerHTML : 1;

            // Avoid using of double equal (==) operator and use triple equal (===). It considered as bad practice.
            // It will allows you to avoid bugs with comparison of values of different types.
            if (e.target.innerHTML == 'Space')
            {
                this.textArea.value += ' ';
            }
            if (e.target.innerHTML == 'Tab')
            {
                this.textArea.value += '   ';
            }
            if (e.target.innerHTML == 'Backspace')
            {
                this.textArea.value = this.textArea.value.substring(0, this.textArea.value.length-1)
            }

            // this.addClickEvent() function is too big, you could shorten it by moving some code into separate function.
            // For example code inside this `if` could be a function this.handleCapsLock()
            if (e.target.innerHTML == 'CapsLock')
            {
                // It is not obvious what does this check do.
                // You could add a function which checks that current lang is capitalized
                /*
                  if (this.isLanguageCapitalized()) {...}
                 */
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
                    // You should not leave console.log statements in your code
                    // if it does not have any semantic load.
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

        // You remove symbol from position where caret is but write new symbols at the end of the textarea.
        // You should apply this logic also for writing of new symbols.
        if (e.target.innerHTML == 'Delete')
        {
            let textAreaArr = this.textArea.value.split('');
            textAreaArr.splice(this.caretPosition,1);
            this.textArea.value = textAreaArr.join('');
        }
    });

    this.wrapper.addEventListener('mouseup', (e) =>
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
        // You should store a value of language as field in instance of keyboard.
        /*
          constructor() {
            ...
            this.language = 'eng';
            ...
          }
         */
        // Such solution is too complicated and looks like overkill.
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
         // Event.which property is deprecated, you should use event.keyCode property.
    if (e.which == 20)
    {
        // This code is duplicated and should be moved in separate function.
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
                    break;
                }
                else if (e.which == KEYS.KEY_W[i] && e.key.length == 1 && this.checkLang() == 'eng!' && e.which != 32)
                {
                    this.textArea.value += KEYS.ENG_CAPS[i];
                    this.key = KEYS.ENG_CAPS[i];
                    break;
                }
                else if (e.which == KEYS.KEY_W[i] && e.key.length == 1 && this.checkLang() == 'rus' && e.which != 32)
                {
                    this.textArea.value += KEYS.RUS[i];
                    this.key = KEYS.RUS[i];
                    break;
                }
                else if (e.which == KEYS.KEY_W[i] && e.key.length == 1 && this.checkLang() == 'rus!' && e.which != 32)
                {
                    this.textArea.value += KEYS.RUS_CAPS[i];
                    this.key = KEYS.RUS_CAPS[i];
                    break;
                }
            }

            if (e.key.length != 1 || e.which == 32)
            {
                this.key = undefined;
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
                            if (e.code == 'ShiftLeft')
                            {
                                this.wrapper.children[3].children[0].classList.add('active-key');
                                window.addEventListener('keyup', () => {
                                this.wrapper.children[3].children[0].classList.remove('active-key')
                                })
                                return;
                            }
                            if (e.code == 'ShiftRight')
                            {
                                this.wrapper.children[3].children[12].classList.add('active-key');
                                window.addEventListener('keyup', () => {
                                this.wrapper.children[3].children[12].classList.remove('active-key')
                                })
                                return;
                            }
                            if (e.code == 'ControlLeft')
                            {
                                this.wrapper.children[4].children[0].classList.add('active-key');
                                setTimeout(() => this.wrapper.children[4].children[0].classList.remove('active-key'), 200);
                                return;
                            }
                            if (e.code == 'ControlRight')
                            {
                                this.wrapper.children[4].children[8].classList.add('active-key');
                                setTimeout(() => this.wrapper.children[4].children[8].classList.remove('active-key'), 200);
                                return;
                            }
                            if (e.code == 'AltLeft')
                            {
                                this.wrapper.children[4].children[2].classList.add('active-key');
                                setTimeout(() => this.wrapper.children[4].children[2].classList.remove('active-key'), 200);
                                return;
                            }
                            if (e.key == 'AltGraph')
                            {
                                this.wrapper.children[4].children[4].classList.add('active-key');
                                this.wrapper.children[4].children[0].classList.remove('active-key')
                                setTimeout(() => this.wrapper.children[4].children[4].classList.remove('active-key'), 200);
                                return;
                            }

                            if ((this.key == this.wrapper.children[i].children[j].innerHTML && e.key.length == 1) ||
                                 e.key == this.wrapper.children[i].children[j].innerHTML ||
                                 (e.which == 32 && this.wrapper.children[i].children[j].innerHTML == 'Space'))
                            {
                                this.wrapper.children[i].children[j].classList.add('active-key');
                                // window.addEventListener('keyup', () => {
                                // this.wrapper.children[i].children[j].classList.remove('active-key')
                                // })
                                setTimeout(() => this.wrapper.children[i].children[j].classList.remove('active-key'), 200);
                                return;
                            }
                            if ((e.which == 37 && this.wrapper.children[i].children[j].innerHTML == '←') ||
                            (e.which == 38 && this.wrapper.children[i].children[j].innerHTML == '↑') ||
                            (e.which == 39 && this.wrapper.children[i].children[j].innerHTML == '→') ||
                            (e.which == 40 && this.wrapper.children[i].children[j].innerHTML == '↓'))
                            {
                                this.wrapper.children[i].children[j].classList.add('active-key');
                                // window.addEventListener('keyup', () => {
                                // this.wrapper.children[i].children[j].classList.remove('active-key')
                                // })
                                setTimeout(() => this.wrapper.children[i].children[j].classList.remove('active-key'), 200);
                                return;
                            }
                        }
                     }
        });
   }

   onTextArea()
   {
       this.textArea.addEventListener('click', () =>
       {
        this.caretPosition = this.textArea.selectionStart;
       });
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

// It is good practice to use some prefix for your localStorage ids, it allows you protect your data from overriding
// and in this case it is easy to identify your data among other.
/*
  localStorage.getItem('VIRTUAL_KEYBOARD.lang')
  localStorage.setItem('VIRTUAL_KEYBOARD.lang', lang)
 */
let lang = localStorage.getItem('lang');
console.log(lang);

// You should use constants for values which do not change
/*
  const LANGUAGES = {
    ENG: {
      CAPITALIZED: 'eng',
      NORMAL: 'eng!',
    },
    RUS: {
      CAPITALIZED: 'rus',
      NORMAL: 'rus!',
    }
  }
  ...
  if (lang === LANGUAGES.ENG.CAPITALIZED) ...
*/
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
keyboard.onTextArea();
/* eslint-disable linebreak-style */

// Your code is quite messy, have duplicated chunks and does not have clear structure.
// Handlers of keyboard and mouse actions are located in different functions and places,
// so it hard to track all logic related to it.

// I expected to see using of delegation of events.
// It approach allows you to have only one handler for event but listen for all events of keyboard or mouse.
// So you could add listener to window then define with which key actions was performed and then apply corresponded function.
/*
  window.addEventListener('mousedown', (event) => {
    if (e.target.innerHTML === 'Shift') {
      this.clickShift();
    }
    if (e.target.innerHTML === 'Caps Lock') {
      this.clickCapsLock();
    }
  });
 */

 // Also your code does not have a strict code style, so it is really hard to read.
 // Please begin your next task from a setup of eslint.
