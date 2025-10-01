
alert("Hola! estás por empezar una historia interactiva muy fantaseosa");
alert("Recuerda que las respuestas posibles están entre ** ¡mucha suerte!");

let opciones= window.prompt("Despiertas en una habitación oscura, frente a ti está Morfeo. Te ofrece dos pastillas. Cual elijes?\n*azul*\n*roja*\n*ignorar*");

if(opciones === "azul") {
    alert("Haz elegido la pastilla azul. Te despiertas en tu cama como si nada hubiera pasado. Pero algo en tu mente te dice que no era un sueño.");
    
    let opcionesAzul = window.prompt("Que haces ahora?\n*ignoro* el sentimiento y sigo mi vida\n*googleo* a morfeo\n*duermo* para encontrar a morfeo de nuevo");
    
    if(opcionesAzul === "ignoro") {
        alert("Piensas que solo fue una pesadilla y que estás exagerando, tampoco fue para tanto!");
    } else if(opcionesAzul === "googleo") {
        alert("Encuentras que morfeo es en realidad un estafador que se mete en la casa de la gente mientras duerme y las pastillas que ofrece son inductores del sueño, que usa para drogar a la gente y robarse todo lo que vea. De la que te has salvado!");
    } else if(opcionesAzul === "duermo") {
        alert("Te duermes y esta vez sueñas con conejitos en una pradera, nada. El sueño fue cosa de una vez");
    }
    
} else if(opciones === "roja") {
    alert("El mundo comienza a desmoronarse a tu alrededor: las paredes se derriten como código verde cayendo en cascada. Empiezas a ver números en todas partes. Te estas volviendo loco");
    
    let opcionesRoja = window.prompt("Que haces ahora?\n*ordeno* el código\n*busco* a morfeo para que me ayude\n*corro* sin rumbo");
    
    if(opcionesRoja === "ordeno") {
        alert("Logras ordenar el código y descubres que puedes controlar la realidad... Podrías usarlo para el bien... o tal vez para vengarte del chico que te sirvió el café hirviendo esta mañana.");
    } else if(opcionesRoja === "busco") {
        alert("Encuentras a Morfeo, quien te explica los secretos de Matrix. Ahora tendrás que protegerlo a él y ser su sucesor si algo le pasa.");
    } else if(opcionesRoja === "corro") {
        alert("Corres sin rumbo y te pierdes en un laberinto de código infinito... Tu cerebro no puede más con tanta información y explota.");
    }
    
} else if(opciones === "ignorar") {
    alert("Decides ignorar a Morfeo. Le dices que se vaya o llamarás a la policía. Él sonríe misteriosamente y desaparece. Te quedas solo en la habitación oscura, preguntándote qué habría pasado si hubieras elegido otra opción");
} else {
    window.prompt("Esa no era una opción válida, Morfeo se da la vuelta y se va")
}