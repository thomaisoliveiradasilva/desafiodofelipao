class Heroi {
    construtor(nome, idade,tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque = "";
        
        switch (this.tipo) {
            case 'Mago':
                ataque = 'Usou magia';
                break;
            case 'Guerreiro':
                ataque = 'Usou arma branca'
                break;
            case 'Monge':
                ataque = 'Usou artes marciais'
                break;
            case 'Ninja':
                ataque = 'Usou shuriken';
                break;
            default:
                ataque = 'Usou um ataque indefinido';
        }
        console.log(`o ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
    
}
const heroi1 = new Heroi();

heroi1.atacar();