class BiscuitBananeKiRecipe {
//   name: string;
//   weight: string;

  constructor(public name: string, public weight: string) {
    this.name = name;
    this.weight = weight;
  }
  eat() {
    console.log(`jis me dam hai kam khae ${this.name} biscuit jisme hai dam ${this.weight} jitna. `);
  }

}

const p1 = new BiscuitBananeKiRecipe("Tiger", "23gram");
const p2 = new BiscuitBananeKiRecipe("Super", "23gram");
const p3 = new BiscuitBananeKiRecipe("Super", "23gram");
p1.eat();
p2.eat();
p3.eat();