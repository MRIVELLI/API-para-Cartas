
        var iddeck
        var player1 = " ", player2 = " ", player3 = " ", player4 = " "
        var contador = 0

        async function criadeck(event) {
            //const url = "https://deckofcardsapi.com/api/deck/new/"
            const resp = await fetch("https://deckofcardsapi.com/api/deck/new/")
            const json = await resp.json()
            iddeck = json.deck_id
            var a = document.getElementById('draw')
            a.disabled = false
            var em = document.getElementById("em")
            em.disabled = false

            var mcartas = document.getElementById('marcos')
            mcartas.innerHTML = "Marcos:"

            var lcartas = document.getElementById('lucas')
            lcartas.innerHTML = "Lucas:"

            var xcartas = document.getElementById('max')
            xcartas.innerHTML = "Max:"

            var vcartas = document.getElementById('vini')
            vcartas.innerHTML = "Vini"

            var b = document.getElementById("drawdeck")
            b.value = "Resetar cartas e novo deck"
            mimagem1.src = " "
            mimagem2.src = " "
            mimagem3.src = " "
            mimagem4.src = " "
            limagem1.src = " "
            limagem2.src = " "
            limagem3.src = " "
            limagem4.src = " "
            ximagem1.src = " "
            ximagem2.src = " "
            ximagem3.src = " "
            ximagem4.src = " "
            vimagem1.src = " "
            vimagem2.src = " "
            vimagem3.src = " "
            vimagem4.src = " "
        }


        async function buscaCarta(e) {
            const url = "https://deckofcardsapi.com/api/deck/" + iddeck + "/draw/?count=4"
            const resp = await fetch(url)
            const json = await resp.json()
            player1 = player1 + json.cards[0].value + " " + json.cards[0].suit + "/"
            var mcartas = document.getElementById('marcos')
            mcartas.innerHTML = "Marcos: " + player1
            var mimagem1 = document.getElementById('mimagem1')
            var mimagem2 = document.getElementById('mimagem2')
            var mimagem3 = document.getElementById('mimagem3')
            var mimagem4 = document.getElementById('mimagem4')
            switch (contador) {
                case 0:
                    mimagem1.src = json.cards[0].image
                    break;
                case 1:
                    mimagem2.src = json.cards[0].image
                    break;
                case 2:
                    mimagem3.src = json.cards[0].image
                    break;
                case 3:
                    mimagem4.src = json.cards[0].image
                    break;

                default:

            }



            player2 = player2 + json.cards[1].value + " " + json.cards[1].suit + "/"
            console.log(player2)
            var lcartas = document.getElementById('lucas')
            lcartas.innerHTML = "Lucas: " + player2
            var limagem1 = document.getElementById('limagem1')
            var limagem2 = document.getElementById('limagem2')
            var limagem3 = document.getElementById('limagem3')
            var limagem4 = document.getElementById('limagem4')
            switch (contador) {
                case 0:
                    limagem1.src = json.cards[1].image
                    break;
                case 1:
                    limagem2.src = json.cards[1].image
                    break;
                case 2:
                    limagem3.src = json.cards[1].image
                    break;
                case 3:
                    limagem4.src = json.cards[1].image
                    break;

                default:

            }



            player3 = player3 + json.cards[2].value + " " + json.cards[2].suit + "/"
            console.log(player3)
            var xcartas = document.getElementById('max')
            xcartas.innerHTML = "Max: " + player3
            var ximagem1 = document.getElementById('ximagem1')
            var ximagem2 = document.getElementById('ximagem2')
            var ximagem3 = document.getElementById('ximagem3')
            var ximagem4 = document.getElementById('ximagem4')
            switch (contador) {
                case 0:
                    ximagem1.src = json.cards[2].image
                    break;
                case 1:
                    ximagem2.src = json.cards[2].image
                    break;
                case 2:
                    ximagem3.src = json.cards[2].image
                    break;
                case 3:
                    ximagem4.src = json.cards[2].image
                    break;

                default:

            }


            player4 = player4 + json.cards[3].value + " " + json.cards[3].suit + "/"
            console.log(player4)
            var vcartas = document.getElementById('vini')
            vcartas.innerHTML = "Vini: " + player4
            var vimagem1 = document.getElementById('vimagem1')
            var vimagem2 = document.getElementById('vimagem2')
            var vimagem3 = document.getElementById('vimagem3')
            var vimagem4 = document.getElementById('vimagem4')
            switch (contador) {
                case 0:
                    vimagem1.src = json.cards[3].image
                    break;
                case 1:
                    vimagem2.src = json.cards[3].image
                    break;
                case 2:
                    vimagem3.src = json.cards[3].image
                    break;
                case 3:
                    vimagem4.src = json.cards[3].image
                    break;

                default:

            }

            contador++

            if (contador == 4) {
                var a = document.getElementById('draw')
                a.disabled = true
                player1 = ""
                player2 = ""
                player3 = ""
                player4 = ""

                contador = 0
            }
        }
        async function embaralhar() {
            const url = "https://deckofcardsapi.com/api/deck/"+iddeck+"/shuffle/?remaining=true"
            const resp = await fetch(url)
            const json = await resp.json()
        }       
   