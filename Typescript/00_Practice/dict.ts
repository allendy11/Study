type Words = {
  [key: string]: string;
};
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  update(term: string, def: string) {
    this.words[term] = def;
  }
  remove(term: string) {
    delete this.words[term];
  }
}
class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

const dict = new Dict();
const cap = new Word("cap", "모자");
const money = new Word("money", "돈");

dict.add(cap);
dict.add(money);

dict.update("money", "악");
dict.remove("cap");
console.log(dict.def("money"));
console.log(dict.def("cap"));
