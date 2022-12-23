class Card {
    constructor(id, attack, defense, energy, hp) {
        this.id = id;
        this.attack = attack;
        this.defense = defense;
        this.energy = energy;
        this.hp=hp;
    }

    getId(){
        return this.id;
    }
    getAttack(){
        return this.attack;
    }
    getDefense(){
        return this.defense;
    }
    getEnergy(){
        return this.energy;
    }
    getHp(){
        return this.hp;
    }

    setHp(hp){
        this.hp = hp;
    }

}

export default Card;