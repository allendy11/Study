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
}
class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

const dict = new Dict();
const cap = new Word("cap", "모자");
const money = new Word("money", "돈");

dict.add(cap);
dict.add(money);

console.log(dict.def("money"));
