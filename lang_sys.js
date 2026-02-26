class Task {
    constructor(question, solution) {
        this.question = question;
        this.solution = solution;
    }
}

class Letter {
    constructor(romaji, char) {
        this.romaji = romaji;
        this.char = char;
    }

    generate() {
        return new Task(this.romaji, this.char);
    }
}

class Word {

    constructor(english, romaji, hiragana) {
        this.english = english;
        this.romaji = romaji;
        this.hiragana = hiragana;
    }

    generate() {
        return new Task(this.english, [this.romaji, this.hiragana]);
    }
}

// class Expression {
//     constructor
// }

class Vocab {
    constructor(name, lists) {
        this.name = name;
        this.lists = lists;
        this.link = name;

        for (const v of this.lists) {
            if(v instanceof Vocab) {
                v.link = this.link + "_" + v.link;
            }
        }
    }

    display() {
        console.log("asd");
        let sub = "";
        for (const v of this.lists) {
            if(v instanceof Vocab) {
                sub += v.display();
            }
        }
        
        return `<div class="lang-box">
        <div class="lang-button" onClick=startVocab("${this.link}") id="${this.link}">
        ${this.name}
        </div>
        ${sub}
        </div>`
    }

    getVocabs() {
        let t = [];
        t.push(this);
        for (const v of this.lists) {
            if(v instanceof Vocab) {
                t = t.concat(v.getVocabs());
            }
        }
        return t;
    }

    find(vocabLink) {

        console.log(vocabLink);

        if(!vocabLink.startsWith(this.link)) {
            return false;
        }

        if(vocabLink == this.link) {
            console.log("All below: " + this.name);
            return this.getVocabs();
        } 

        for (const v of this.lists) {
            if(v instanceof Vocab) {
                let ret = v.find(vocabLink)
                if(ret !== false) {
                    return ret;
                }
            }
        }
    }
}