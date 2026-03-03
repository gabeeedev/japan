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

        let genDict = {};

        for (const k in this.vocabDict) {
            let tVocab = this.vocabDict[k];
            if(tVocab instanceof Vocab) {
                genDict[k] = tVocab.words[rand(0,tVocab.words.length)].generate();
            } else {
                genDict[k] = tVocab.generate(); //single
            }
        }

        console.log(genDict);

        // this.exprEng.matchAll(/\{([^}]+)\}/g).toArray().forEach(x => repl.push(x));

        let question = this.exprEng;
        let solution = [];
        for (const k in genDict) {
            console.log(k)
            console.log(genDict);
            console.log(genDict[k]);
            question = question.replace("{" + k + "}", genDict[k].question);
        }
        let solutionLen = 0;
        for (const k in genDict) {
            solutionLen = Math.max(genDict[k].solution.length,solutionLen);
        }

        for (let i = 0; i < solutionLen; i++) {
            solution[i] = this.exprJap;
            for (const k in genDict) {
                solution[i] = solution[i].replace("{" + k + "}", genDict[k].solution[Math.min(i,genDict[k].solution.length)]);
            }       
        }
        return new Task(question, solution);
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
        if(this.activeWord !== undefined) {
            let last = this.wordList[this.activeWord];
            this.wordList.splice(this.activeWord,1);
            console.log(last);
            this.wordList.push(last);
            console.log(this.wordList);
        }
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