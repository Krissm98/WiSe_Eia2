class PoemGenerator {
    constructor() {
        this.subjects = ["Snape", "Harry", "Hermione", "Dumbledore"];
        this.predicates = ["braut", "jagt", "liebt", "hasst"];
        this.objects = ["Zaubertränke", "Drachen", "Hagrid", "Schreckliche Schlange"];
    }
    generatePoem() {
        let poem = "";
        let usedWords = new Set();
        for (let i = 0; i < 5; i++) {
            let subject, predicate, object;
            do {
                subject = this.subjects[Math.floor(Math.random() * this.subjects.length)];
                predicate = this.predicates[Math.floor(Math.random() * this.predicates.length)];
                object = this.objects[Math.floor(Math.random() * this.objects.length)];
            } while (usedWords.has(subject) || usedWords.has(predicate) || usedWords.has(object));
            usedWords.add(subject);
            usedWords.add(predicate);
            usedWords.add(object);
            poem += `${subject} ${predicate} ${object}\n`;
        }
        console.log(poem);
    }
}
let poemGenerators = new PoemGenerator();
poemGenerators.generatePoem();
//# sourceMappingURL=test.js.map