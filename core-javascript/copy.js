alert("Hola! estás por empezar una historia interactiva muy fantaseosa");
alert("Recuerda que las respuestas posibles están entre ** ¡mucha suerte!");
(window.prompt("Despiertas en una habitación oscura, frente a ti está Morfeo. Te ofrece dos pastillas. Cual elijes? **azul**/**roja**/**ignorar**"))
if("azul"){
    alert("Haz elegido la pastilla azul. Te despiertas en tu cama como si nada hubiera pasado. Pero algo en tu mente te dice que no era un sueño.")
    (window.prompt("Que haces ahora? **ignoro**/**googleo** a morfeo/**duermo** para encontrar a morfeo de nuevo)"))
    if("ignoro") {
        alert("Piensas que solo fue una pesadilla y que estás exagerando, tampoco fue para tanto!");
    } else if("googleo") {
        alert("Encuentras que morfeo es en realidad un estafador que se mete en la casa de la gente mientras duerme y los droga para robarse todo. De la que te has salvado!");
    } else if("duermo") {
        alert("Te duermes y esta vez sueñas con conejitos en una pradera, nada. El sueño fue cosa de una vez");
    }
} else if("roja") {
    alert("El mundo comienza a desmoronarse a tu alrededor: las paredes se derriten como código verde cayendo en cascada. Tu cuerpo se siente más ligero y empiezas a ver números en todas partes.")
    (window.prompt("Que haces ahora? **ordeno** el código/**busco** a morfeo para que me ayude/**corro** sin rumbo"));
}

