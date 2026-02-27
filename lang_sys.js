function rand(min, max) {
    return min + Math.floor(Math.random() * (max-min));
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

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
        return new Task(this.romaji, [this.char]);
    }

    class() {
        return "letter"
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

    class() {
        return "word"
    }
}

class Expression {
    constructor(exprEng, exprJap, vocabDict) {
        this.exprEng = exprEng;
        this.exprJap = exprJap;
        this.vocabDict = vocabDict;
    }

    generate() {
        repl = [];
        this.expr.matchAll(/\{([^}]+)\}/g).toArray().forEach(x => repl.push(x));

        gen = this.expr;
        for (const v of repl) {
            gen = gen.replace("{" + v + "}", this.vocabDict)
        }
    }

    class() {
        return "word";
    }
}

class Vocab {
    constructor(name, words = [], subs = []) {
        this.name = name;
        this.words = words;
        this.subs = subs;
        this.link = name.replaceAll(" ", "-");

        
    }

    chainLink(link) {
        this.link = link + "_" + this.link;
        for (const v of this.subs) {
            v.chainLink(this.link);
        }
    }

    display() {
        let sub = "";
        for (const v of this.subs) {
            sub += v.display();
        }

        return `
        <div class="lang-button" onClick=startVocab("${this.link}") id="${this.link}">
        ${this.name}
        </div>
        <div class="lang-box">
        ${sub}
        </div>`
    }

    getVocabs() {
        let t = [];
        t.push(this);
        for (const v of this.subs) {
            t = t.concat(v.getVocabs());
        }
        return t;
    }

    find(vocabLink) {

        console.log(vocabLink);

        if (!vocabLink.startsWith(this.link)) {
            return false;
        }

        if (vocabLink == this.link) {
            console.log("All below: " + this.name);
            return this.getVocabs();
        }

        for (const v of this.subs) {
            let ret = v.find(vocabLink)
            if (ret !== false) {
                return ret;
            }
        }
    }
}

class Practice {
    start(vocabList) {
        this.wordList = [];
        for (const vocab of vocabList) {
            for (const word of vocab.words) {
                this.wordList.push(word);
            }
        }
        shuffleArray(this.wordList);
        console.log(this.wordList);
        this.nextWord();
    }

    nextWord() {
        let last = this.wordList.shift();
        console.log(last);
        this.wordList.push(last);
        const rlen = rand(0,this.wordList.length);
        console.log(this.wordList.length);
        this.activeWord = rand(0,rlen);
        this.state = "question";
        console.log(this.activeWord);
        this.task = this.wordList[this.activeWord].generate();
    }

    get() {
        return this.state == "question" ? this.task.question : this.task.solution;
    }

    getWord() {
        return this.wordList[this.activeWord];
    }

    step() {
        if(this.state == "question") {
            this.state = "solution";
            return false;
        } else {
            this.nextWord();
            return true;
        }
    }    
}