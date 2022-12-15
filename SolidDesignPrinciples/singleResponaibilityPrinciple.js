// Add class Journal, which has some entries as it's properties
// addEnntry should result entries in {1: 'text1', 2: 'text2', 3: 'text3'} format
// removeEntry should be removed with particular key("index")
// toString method should return a string of mapped entries(values of the object)
class Journal {
  constructor() {
    this.entries = {};
    this.count = 0;
  }
  addEntryText = (text = "Alaluya") => {
    let updatedCount = ++this.count;
    const entry = { [updatedCount]: text };
    this.entries = { ...this.entries, ...entry };
    return updatedCount;
  };
}

const item1 = new Journal();
item1.addEntryText("Hi how are you?");
item1.addEntryText("Have a nice day");
item1.addEntryText();
console.log(item1);
