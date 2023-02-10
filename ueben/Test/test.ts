class PoemGenerator {
    subjects: string [] = ["Snape", "Harry", "Hermione", "Dumbledore"];
    predicates: string[] = ["braut", "jagt", "liebt", "hasst"];
    objects: string[] = ["Zaubertränke", "Drachen", "Hagrid", "Schreckliche Schlange"];

    generatePoem(): void {
        let poem: string = "";
        let usedWords: Set<unknown> = new Set();
        for (let i = 0; i < 5; i++) {
            let subject: any, predicate: any, object: any;
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

let poemGenerators: PoemGenerator = new PoemGenerator();
poemGenerators.generatePoem();