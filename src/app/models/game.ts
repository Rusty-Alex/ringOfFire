export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public currentCard: string = '';
    public pickedCard = false;

    constructor() {
        for (let i = 0; i < 13; i++) {
            this.stack.push(`spade_${i + 1}`);
            this.stack.push(`hearts_${i + 1}`);
            this.stack.push(`clubs_${i + 1}`);
            this.stack.push(`diamonds_${i + 1}`);
        }
        shuffle(this.stack);
    }

    public toJSon() {    
        return {
            players: this.players,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            pickedCard: this.pickedCard,
            currentCard: this.currentCard
        };
    }

}
function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
};
