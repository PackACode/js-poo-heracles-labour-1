/* Fighter class definition */

const MAX_LIFE = 100;

module.exports = class Figther {

    constructor (name,strength,dexterity) {

        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    
    };
    
    // Fight
    // Attack the target selected

    Fight (Target) {

        const Attack = Math.floor((Math.random() * this.strength) + 1);

        if (Attack > Target.dexterity) {

            const Damage = Attack - Target.dexterity;

            if (Damage >= Target.life) {

                return Target.life = 0;

            } else {

                return Target.life -= Damage;

            };

        } else {

            return Target.life;

        };

    };

    // IsAlive
    // return true if alive or false if dead

    IsAlive () {

        return this.life > 0;

    };

};