alert("Hola, bienvenid@ a mi historia interactiva")

let opcionesPrimeraPregunta = window.prompt("Vas caminando por la calle y un gato te dice 'hola', ¿qué haces?\nignorar\nresponder\ncorrer");
if ("ignorar") {
    alert("Piensas que estás loco y lo ignoras, pero el gato comienza a seguirte y te insiste.");

    let opciones_ignorar = window.prompt("qué haces?\npatear\nescuchar\ncorrer");

    if (opciones_ignorar == "patear") {
        alert("Pateas el gato y lo mandas lejos, sigues con tu dia como si nada; muy mal, pateador de gatitos!")
    } else if(opciones_ignorar == "correr") {
        alert("Corres con toda tus fuerzas pero te detiene la policía porque le parece sospechoso que vayas tan rápido como escapando de algo, cuando le dices qué sucede, no te creen y te encierran en el calabozo.")
    } else if(opciones_ignorar == "escuchar") {
        alert("El gato te pide ayuda porque tiene una astilla en su patita, lo ayudas y sigue su camino")
    }
        
} else if("responder") {
    alert("Lo miras un poco incrédulo pero le respondes. Te dice que necesita ayuda porque un amigo suyo quedó atrapado en un árbol y no puede bajar o si puedes llamar a alguien para que le ayude");

    let opciones_responder = window.prompt("qué haces?\nayuda\nllamada\n")
} else if("correr") {
    alert("Sales corriendo a toda velocidad y empiezan a aparecer gatos parlanchines de todos lados. No tienes escapatoria.")
}
