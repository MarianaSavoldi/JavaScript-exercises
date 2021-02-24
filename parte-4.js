let candidato = "aprovada";

switch (candidato) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    
    case "não aprovada":
        console.log("Você não foi aprovada(o)");
        break;
    
    default:
        console.log("não se aplica");
}