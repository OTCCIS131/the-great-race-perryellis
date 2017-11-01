$(function(){
   
     let vm = new Vue({
        el: '#begin',
         data: {
        racing: false,
        winner: null,
        bo: 0,
        otherbo: 0,
        tick: 0,
        intervall: null,
         },
        methods: {

            letsRace() {
                if (this.winner) {
                    this.dueOver()
                    return
                }
                this.racing = true
                this.interval = setInterval(() => {
                    this.moveRacer()

                }, 90)
            },

            moveRacer() {
                this.tick++
                this.bo += (Math.random() >= Math.random()) ? 1 : 0
                this.otherbo += (Math.random() >= Math.random()) ? 1 : 0
                this.whoWon()
            },

            whoWon() {
                if (this.bo == this.otherbo) return
                if (this.bo >= 85) {
                    this.Winning('bo')
                }
                if (this.otherbo >= 85) {
                    this.Winning('otherbo')
                }
            },

            Winning(player) {
                clearInterval(this.interval)
                this.interval = null
                this.racing = false
                this.winner = player
            },

            dueOver() {
                this.racing = false
                this.winner = null
                this.bo = 0
                this.otherbo = 0
                this.tick = 0
            }
        },

        computed: {

            boStyles() {
                return {
                    left: `${this.bo}vw`
                }
            },

            boClass() {
                if (!this.winner) return
                return this.winner == 'bo'
            },

            otherboStyles() {
                return {
                    left: `${this.otherbo}vw`
                }
            },

            otherBoClass() {
                if (!this.winner) return
                return this.winner == 'otherbo'
            },

            winner() {
                if (this.bo == this.otherbo) return null
                    return this.bo > this.otherbo ? 'bo' : 'otherbo'
            }
        },



     })
  

})