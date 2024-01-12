class dadosHeroi{
    constructor(nome, idade, tipo, ataque){
        this.tipo = tipo
    }

    atacar(){
        switch (true) {
            case this.tipo == "mago":
                this.ataque = "magia"
                break;

            case this.tipo == "guerreiro":
                this.ataque = "espada"
                break;

            case this.tipo == "monge":
                this.ataque = "artes marciais"
                break;

            case this.tipo == "ninja":
                this.ataque = "shuriken"
                break;
        
            default:
                this.ataque = "indefinido"
                break;
        }
        
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
            
    }
}

let heroi = new dadosHeroi("seu ze", 32, "ninja")
heroi.atacar()