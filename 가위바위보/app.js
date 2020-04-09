new Vue({
    el: '#app',
    data: {
        myChoice: null,
        comChoice: null,
        count: 3,
        winner: null,
        lifeOfMe: 3,
        lifeOfCom: 3,
        isSelectable: true,
        selects: [
            {name:'가위', value: 'scissor'},
            {name:'바위', value: 'rock'},
            {name:'보', value: 'paper'}
        ],
        logs: []
    },
    computed: {
        myChoiceImg() {
            return this.myChoice !== null ? `images/${this.myChoice}.jpg` : `images/question.jpg`
        },
        comChoiceImg() {
            return this.comChoice !== null ? `images/${this.comChoice}.jpg` : `images/question.jpg`
        },
        leftLifeOfMe() {
            return 3 - this.lifeOfMe
        },
        leftLifeOfCom() {
            return 3 - this.lifeOfCom
        }
    },
    watch: {
        count(newVal) {
            if(newVal === 0) {
                // 컴퓨터가 가위바위보 선택.
                this.selectCom()

                // 가위바위보 승패 결정 $ 몫 차감
                this.whoIsWin()
                
                // 게임 리셋
                this.count = 3
                this.isSelectable = true

                // 각 판마다 가위바위보 결과 보이게함.
                this.updateLogs()




                // 컴퓨터가 가위바위보 선택.
                // let number = Math.random()
                // if(number < 0.33) {
                //     this.comChoice = 'scissor'
                // } else if(number < 0.66) {
                //     this.comChoice = 'rock'
                // } else {
                //     this.comChoice = 'paper'
                // }

                // 가위바위보 승패 결정 $ 몫 차감
                // if(this.myChoice === this.comChoice) this.winner = 'no one'
                // else if(this.myChoice === 'rock' && this.comChoice === 'scissor') this.winner = 'me'
                // else if(this.myChoice === 'scissor' && this.comChoice === 'paper') this.winner = 'me'
                // else if(this.myChoice === 'paper' && this.comChoice === 'rock') this.winner = 'me'
                // else if(this.myChoice === 'scissor' && this.comChoice === 'rock') this.winner = 'com'
                // else if(this.myChoice === 'paper' && this.comChoice === 'scissor') this.winner = 'com'
                // else if(this.myChoice === 'rock' && this.comChoice === 'paper') this.winner = 'com'
                // else this.winner = 'error'

                // if(this.winner === 'me') this.lifeOfCom--
                // if(this.winner === 'com') this.lifeOfMe--
                
                // // 게임 리셋
                // this.count = 3
                // this.isSelectable = true

                // 각 판마다 가위바위보 결과 보이게함.
                // let log = {
                //     message: `You: ${this.myChoice}, Computer: ${this.comChoice}`,
                //     winner: this.winner
                // }
                // this.logs.unshift(log)
            }
        },
        lifeOfMe(newVal) {
            if(newVal === 0) {
                this.endGame('안타깝네요. 당신이 패배하였습니다.')
            }
        },
        lifeOfCom(newVal) {
            if(newVal === 0) {
                this.endGame('축하합니다. 당신이 승리하였습니다.')
            }
        }
    },
    methods: {
        startGame() {
            console.log('button click!!!')
            this.isSelectable = false
            if(this.myChoice === null) {
                alert('가위바위보 중 하나를 선택해 주세요.')
                this.isSelectable = true
            } else {
                let countDown = setInterval(() => {
                    this.count--
                    if(this.count === 0) {
                        clearInterval(countDown)
                    }
                }, 500)
            }
            
        },
        selectCom() {
            // 컴퓨터가 가위바위보 선택.
            let number = Math.random()
            if(number < 0.33) {
                this.comChoice = 'scissor'
            } else if(number < 0.66) {
                this.comChoice = 'rock'
            } else {
                this.comChoice = 'paper'
            }
        },
        whoIsWin() {
            // 가위바위보 승패 결정 $ 몫 차감
            if(this.myChoice === this.comChoice) this.winner = 'no one'
            else if(this.myChoice === 'rock' && this.comChoice === 'scissor') this.winner = 'me'
            else if(this.myChoice === 'scissor' && this.comChoice === 'paper') this.winner = 'me'
            else if(this.myChoice === 'paper' && this.comChoice === 'rock') this.winner = 'me'
            else if(this.myChoice === 'scissor' && this.comChoice === 'rock') this.winner = 'com'
            else if(this.myChoice === 'paper' && this.comChoice === 'scissor') this.winner = 'com'
            else if(this.myChoice === 'rock' && this.comChoice === 'paper') this.winner = 'com'
            else this.winner = 'error'

            if(this.winner === 'me') this.lifeOfCom--
            if(this.winner === 'com') this.lifeOfMe--
        },
        updateLogs() {
            // 각 판마다 가위바위보 결과 보이게함.
            let log = {
                message: `You: ${this.myChoice}, Computer: ${this.comChoice}`,
                winner: this.winner
            }
            this.logs.unshift(log)
        },
        endGame(text) {
            setTimeout(() => {
                confirm(text)
                this.lifeOfMe = 3
                this.lifeOfCom = 3
                this.myChoice = null
                this.comChoice = null
                this.winner = null
                this.logs = []
            }, 500)
        }
    }
})