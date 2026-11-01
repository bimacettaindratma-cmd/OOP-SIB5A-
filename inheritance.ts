class LibraryItem {
    constructor(
        public title: string,
        protected loanDays: number
    ) {}   // protected: bisa diakses turunan

    getInfo(): string { 
        return `${this.title}, dipinjam ${this.loanDays} hari`;
     }
}

// child class
class Books extends LibraryItem {
    constructor(
        title: string,
        public author: string
    ) {  
    super(title, 7);   
  }

}

// Magazine juga turunan LibraryItem

class Magazine extends LibraryItem {
    constructor(title: string) 
    { super(title, 3); }   // lama pinjam 3 hari
}

const books = new Books ("Laskar Pelangi","jj")