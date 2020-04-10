import KEYS from './src/keys.js';

class Keyboard {
  constructor(selector) {
    this.field = document.querySelector(selector);
    this.arrRow = [];
    this.arrKey = [];
    this.arrClasses = [['row1', 14], ['row2', 15], ['row3', 13], ['row4', 13], ['row5', 9]];
    this.flag = false;
  }

  createWrapper() {
    this.wrapper = document.createElement('div');
    this.field.appendChild(this.wrapper);
    this.wrapper.classList.add('wrapper');
  }

  createTextArea() {
    this.textArea = document.createElement('textarea');
    this.field.appendChild(this.textArea);
    this.textArea.classList.add('wrapper');
    this.textArea.style.backgroundColor = 'white';
    this.textArea.addEventListener('focus', () => {
      this.flag = true;
    });
    this.textArea.addEventListener('blur', () => {
      this.flag = false;
    });
  }

  createRows() {
    for (let i = 0; i < 5; i += 1) {
      const row = document.createElement('div');
      this.wrapper.appendChild(row);
      row.classList.add(this.arrClasses[i][0]);
      this.arrRow.push(row);
    }
  }

  createKeys() {
    for (let k = 0; k < this.arrClasses.length; k += 1) {
      for (let i = 0; i < this.arrClasses[k][1]; i += 1) {
        const key = document.createElement('div');
        this.arrRow[k].appendChild(key);
        this.arrKey.push(key);
      }
    }
  }

  fillKeysEng() {
    let counter = 0;
    for (let i = 0; i < this.wrapper.children.length; i += 1) {
      for (let j = 0; j < this.wrapper.children[i].children.length; j += 1) {
        this.wrapper.children[i].children[j].innerHTML = KEYS.ENG[counter];
        counter += 1;
      }
    }
  }

  fillKeysRus() {
    let counter = 0;
    for (let i = 0; i < this.wrapper.children.length; i += 1) {
      for (let j = 0; j < this.wrapper.children[i].children.length; j += 1) {
        this.wrapper.children[i].children[j].innerHTML = KEYS.RUS[counter];
        counter += 1;
      }
    }
  }

  fillKeysEngCaps() {
    let counter = 0;
    for (let i = 0; i < this.wrapper.children.length; i += 1) {
      for (let j = 0; j < this.wrapper.children[i].children.length; j += 1) {
        this.wrapper.children[i].children[j].innerHTML = KEYS.ENG_CAPS[counter];
        counter += 1;
      }
    }
  }

  fillKeysRusCaps() {
    let counter = 0;
    for (let i = 0; i < this.wrapper.children.length; i += 1) {
      for (let j = 0; j < this.wrapper.children[i].children.length; j += 1) {
        this.wrapper.children[i].children[j].innerHTML = KEYS.RUS_CAPS[counter];
        counter += 1;
      }
    }
  }

  addClickEvent() {
    this.wrapper.addEventListener('mousedown', (e) => {
      if (e.target.parentNode.classList.contains('row1')
         || e.target.parentNode.classList.contains('row2')
         || e.target.parentNode.classList.contains('row3')
         || e.target.parentNode.classList.contains('row4')
         || e.target.parentNode.classList.contains('row5')) {
        e.target.classList.add('active-key');

        if (e.target.innerHTML.length === 1) {
          this.textArea.value += e.target.innerHTML;
        }

        if (e.target.innerHTML === 'Space') {
          this.textArea.value += ' ';
        }
<<<<<<< HEAD
        if (e.target.innerHTML === 'Tab') {
          this.textArea.value += '   ';
=======
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
>>>>>>> parent of b7ba00f... feat: add click on del button event
        }
        if (e.target.innerHTML === 'Backspace') {
          this.textArea.value = this.textArea.value.substring(0, this.textArea.value.length - 1);
        }
<<<<<<< HEAD


        if (e.target.innerHTML === 'CapsLock') {
          if (/!/.test(this.checkLang())) {
            if (this.checkLang() === 'eng!') { this.fillKeysEng(); } else { this.fillKeysRus(); }
          } else
          if (this.checkLang() === 'eng') { this.fillKeysEngCaps(); } else { this.fillKeysRusCaps(); }
          localStorage.setItem('lang', this.checkLang());
        }
=======
    });
>>>>>>> parent of b7ba00f... feat: add click on del button event

        if (e.target.innerHTML === 'Shift') {
          if (this.checkLang() === 'eng') { this.fillKeysEngCaps(); } else if (this.checkLang() === 'eng!') { this.fillKeysEng(); } else if (this.checkLang() === 'rus') { this.fillKeysRusCaps(); } else if (this.checkLang() === 'rus!') { this.fillKeysRus(); }
        }
      }

      if (e.target.innerHTML === 'Delete') {
        const textAreaArr = this.textArea.value.split('');
        textAreaArr.splice(this.caretPosition, 1);
        this.textArea.value = textAreaArr.join('');
      }
    });

    this.wrapper.addEventListener('mouseup', (e) => {
      if (e.target.innerHTML === 'Shift') {
        if (this.checkLang() === 'eng') { this.fillKeysEngCaps(); } else if (this.checkLang() === 'eng!') { this.fillKeysEng(); } else if (this.checkLang() === 'rus') { this.fillKeysRusCaps(); } else if (this.checkLang() === 'rus!') { this.fillKeysRus(); }
      }
      e.target.classList.remove('active-key');
    });
  }

  checkLang() {
    let answer = '';
    if (this.wrapper.children[0].children[0].innerHTML === 'ё'
        || this.wrapper.children[0].children[0].innerHTML === 'Ё') { answer += 'rus'; } else { answer += 'eng'; }

    if (this.wrapper.children[1].children[1].innerHTML === 'Q'
        || this.wrapper.children[1].children[1].innerHTML === 'Й') {
      answer += '!';
    }
    return answer;
  }

  addCapsEvent() {
    window.addEventListener('keyup', (e) => {
      if (e.which === 20) {
        if (/!/.test(this.checkLang())) {
          if (this.checkLang() === 'eng!') { this.fillKeysEng(); } else { this.fillKeysRus(); }
        } else
        if (this.checkLang() === 'eng') { this.fillKeysEngCaps(); } else { this.fillKeysRusCaps(); }
        localStorage.setItem('lang', this.checkLang());
      }
    });
  }

  addShiftEvent() {
    let shiftFlag = true;
    window.addEventListener('keydown', (e) => {
      if (e.which === 16) {
        if (shiftFlag === true) {
          if (this.checkLang() === 'eng') { this.fillKeysEngCaps(); } else if (this.checkLang() === 'eng!') { this.fillKeysEng(); } else if (this.checkLang() === 'rus') { this.fillKeysRusCaps(); } else if (this.checkLang() === 'rus!') { this.fillKeysRus(); }
        }
        shiftFlag = false;
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.which === 16) {
        if (this.checkLang() === 'eng') { this.fillKeysEngCaps(); } else if (this.checkLang() === 'eng!') { this.fillKeysEng(); } else if (this.checkLang() === 'rus') { this.fillKeysRusCaps(); } else if (this.checkLang() === 'rus!') { this.fillKeysRus(); }
        shiftFlag = true;
      }
    });
  }


  switchLang() {
    const pressed = new Set();
    window.addEventListener('keydown', (e) => {
      pressed.add(e.key);
    });
    window.addEventListener('keyup', () => {
      if (pressed.has('Control') && pressed.has('Shift')) {
        if (this.checkLang() === 'eng!') { this.fillKeysRusCaps(); } else if (this.checkLang() === 'eng') { this.fillKeysRus(); } else if (this.checkLang() === 'rus!') { this.fillKeysEngCaps(); } else { this.fillKeysEng(); }

        localStorage.setItem('lang', this.checkLang());
      }
      pressed.clear();
    });
  }

  addKeyEvent() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        this.textArea.value = this.textArea.value.substring(0, this.textArea.value.length - 1);
      }

      if (e.which === 32) {
        this.textArea.value += ' ';
      }
      if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40) {
        switch (e.which) {
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
          default:
        }
      }
      for (let i = 0; i < KEYS.KEY_W.length; i += 1) {
        if (e.which === KEYS.KEY_W[i] && e.key.length === 1 && this.checkLang() === 'eng' && e.which !== 32) {
          this.textArea.value += KEYS.ENG[i];
          this.key = KEYS.ENG[i];
          break;
        } else if (e.which === KEYS.KEY_W[i] && e.key.length === 1 && this.checkLang() === 'eng!' && e.which !== 32) {
          this.textArea.value += KEYS.ENG_CAPS[i];
          this.key = KEYS.ENG_CAPS[i];
          break;
        } else if (e.which === KEYS.KEY_W[i] && e.key.length === 1 && this.checkLang() === 'rus' && e.which !== 32) {
          this.textArea.value += KEYS.RUS[i];
          this.key = KEYS.RUS[i];
          break;
        } else if (e.which === KEYS.KEY_W[i] && e.key.length === 1 && this.checkLang() === 'rus!' && e.which !== 32) {
          this.textArea.value += KEYS.RUS_CAPS[i];
          this.key = KEYS.RUS_CAPS[i];
          break;
        }
<<<<<<< HEAD
      }

      if (e.key.length !== 1 || e.which === 32) {
        this.key = undefined;
      }

      if (e.key.length === 1 && e.key !== '←' && e.key !== '↑' && e.key !== '→' && e.key !== '↓' && this.flag === true) {
        this.textArea.value = this.textArea.value.substring(0, this.textArea.value.length - 1);
      }

      if (e.which === 9) {
        e.preventDefault();
        this.textArea.value += '   ';
      }
      if (e.which === 18) {
        e.preventDefault();
      }
    });
  }

  addStyleOnKeyDown() {
    window.addEventListener('keydown', (e) => {
      for (let i = 0; i < this.wrapper.children.length; i += 1) {
        for (let j = 0; j < this.wrapper.children[i].children.length; j += 1) {
          if (e.code === 'ShiftLeft') {
            this.wrapper.children[3].children[0].classList.add('active-key');
            window.addEventListener('keyup', () => {
              this.wrapper.children[3].children[0].classList.remove('active-key');
            });
            return;
          }
          if (e.code === 'ShiftRight') {
            this.wrapper.children[3].children[12].classList.add('active-key');
            window.addEventListener('keyup', () => {
              this.wrapper.children[3].children[12].classList.remove('active-key');
            });
            return;
          }
          if (e.code === 'ControlLeft') {
            this.wrapper.children[4].children[0].classList.add('active-key');
            setTimeout(() => this.wrapper.children[4].children[0].classList.remove('active-key'), 200);
            return;
          }
          if (e.code === 'ControlRight') {
            this.wrapper.children[4].children[8].classList.add('active-key');
            setTimeout(() => this.wrapper.children[4].children[8].classList.remove('active-key'), 200);
            return;
          }
          if (e.code === 'AltLeft') {
            this.wrapper.children[4].children[2].classList.add('active-key');
            setTimeout(() => this.wrapper.children[4].children[2].classList.remove('active-key'), 200);
            return;
          }
          if (e.key === 'AltGraph') {
            this.wrapper.children[4].children[4].classList.add('active-key');
            this.wrapper.children[4].children[0].classList.remove('active-key');
            setTimeout(() => this.wrapper.children[4].children[4].classList.remove('active-key'), 200);
            return;
          }

          if ((this.key === this.wrapper.children[i].children[j].innerHTML && e.key.length === 1)
                                 || e.key === this.wrapper.children[i].children[j].innerHTML
                                 || (e.which === 32 && this.wrapper.children[i].children[j].innerHTML === 'Space')) {
            this.wrapper.children[i].children[j].classList.add('active-key');
            // window.addEventListener('keyup', () => {
            // this.wrapper.children[i].children[j].classList.remove('active-key')
            // })
            setTimeout(() => this.wrapper.children[i].children[j].classList.remove('active-key'), 200);
            return;
          }
          if ((e.which === 37 && this.wrapper.children[i].children[j].innerHTML === '←')
                            || (e.which === 38 && this.wrapper.children[i].children[j].innerHTML === '↑')
                            || (e.which === 39 && this.wrapper.children[i].children[j].innerHTML === '→')
                            || (e.which === 40 && this.wrapper.children[i].children[j].innerHTML === '↓')) {
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

  onTextArea() {
    this.textArea.addEventListener('click', () => {
      this.caretPosition = this.textArea.selectionStart;
    });
  }
=======
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
       window.addEventListener('change', () => this.textArea.focus());
       window.addEventListener('click', () => this.textArea.focus());
       window.addEventListener('blur', () => this.textArea.focus());
   }
   
>>>>>>> parent of b7ba00f... feat: add click on del button event
}

const rule = document.createElement('div');
rule.innerHTML = 'switch language = ctrl + shift';
document.querySelector('body').appendChild(rule);

const keyboard = new Keyboard('body');
keyboard.createTextArea();
keyboard.createWrapper();
keyboard.createRows();
keyboard.createKeys();

const lang = localStorage.getItem('lang');

if (lang === undefined || lang === 'eng' || lang === 'eng!') {
  keyboard.fillKeysEng();
} else if (lang === 'rus' || lang === 'rus!') {
  keyboard.fillKeysRus();
}


keyboard.addClickEvent();
keyboard.addKeyEvent();
keyboard.switchLang();
keyboard.addCapsEvent();
keyboard.addStyleOnKeyDown();
keyboard.addShiftEvent();
<<<<<<< HEAD
keyboard.onTextArea();
=======
// keyboard.onTextArea();




>>>>>>> parent of b7ba00f... feat: add click on del button event
