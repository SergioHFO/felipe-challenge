class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        

    }


    atacar(tipo) {
        let ataque;
        switch(this.tipo) {
            case "Guerreiro":
                ataque = "Espada"
                break;
            case "Mago":
                ataque = "Cajado"
                break;
            case "Ninja":
                ataque = "Shuriken"
                break;
            case  "Monge":
                ataque = "Artes Marciais"
                break;
            default:
                ataque = "Classe desconhecido"
                break;
        }
    
        console.log((`O ${this.tipo} atacou usando ${ataque}`))
    }

}

const heroi = new Heroi("Kurt" , 22, "Ninja");
heroi.atacar()