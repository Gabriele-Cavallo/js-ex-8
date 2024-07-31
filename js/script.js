class Deck {
    constructor() {
        this.cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,'fante', 'donna', 're'];
        console.log('genero nuovo mazzo' , this.cards);
    }
    
    mischia(){
        this.cards.sort((a, b) => {
            return 0.5 - Math.random();
        })
        console.log('mazzo mischiato' , this.cards);
    }

    pesca(){
        const card = this.cards.pop();
        console.log('carta pescata' , card);
    }

    mettiSotto(card) {
        this.cards.unshift(card);
        console.log('carta sotto' , card);
        console.log('mazzo' , this.cards);
    }
}

const deck = new Deck();
deck.mischia();
deck.pesca();
deck.mettiSotto('jolly');