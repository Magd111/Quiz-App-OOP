export class Quiz{
    constructor(category,difficulty,amount){
     this.category = category
     this.difficulty=difficulty
     this.amount=amount
     this.score =0
    }
    async getQuizQuestions(){
        let response = await fetch(`https://opentdb.com/api.php?amount=${this.amount}&category=${this.category}&difficulty=${this.difficulty}`)
        let data = await response.json()
        console.log(data)
        return data.results
    }
}