$(function(){
 
     let vm = new Vue({
        racing: false,
        winner: null,
        racer1: 0,
        racer2: 0,
        intervall: null,

        method: {
            letsRace(){
               intervall = Math.random()
            },

           
        },

        computed: {

        }



     })
  

})