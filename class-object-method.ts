// ini adlah kelas
class Book {
    // ini adalah properties / atribute
    title: string;

    // ini adalah encapsulation, hanya bisa di akses class ini saja
    private stock: number;

    // parameter dari class (yg title dll)
    constructor(title: string, stock:number) {
        this.title = title;
        this.stock = stock;
    }

    // 
    borrow(): void {
        if (this.stock === 0) {
            throw new Error("buku tidak tersedia")
        }
        this.stock--;
        console.log (
            `Buku ${this.title} berhasil dipinjam, sisa stock: ${this.stock}`
        )
    }

    return(): void {
        this.stock++;
        console.log (
            `Buku ${this.title} berhasil dikembalikan, sisa stock: ${this.stock}`
        )
    }
}
// new book adalah object
const book:Book = new Book("Laskar Pelangi",5);

book.borrow();

book.return();