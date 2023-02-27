class Masina {
     constructor(marca, model, culoare, kilometraj) {
        this.marca = marca;  
        this.model = model;  
        this.culoare = culoare;  
        this.kilometraj = kilometraj;  

    }

    get proprietati () {
        return  `Masina [ marca= ${this.marca}, model = ${this.model}, culoare = ${this.culoare}, kilometraj = ${this.kilometraj}]`;
    }
  
}

 function main() {
     const volvo = new Masina("Volvo", "XC-60", "negru", 234_000);
     const mazda = new Masina("Mazda", "CX-5", "verde", 111_000);
     const dacia = new Masina("Dacia", "BIGGSTER", "albastru", 20_000)

     console.log(volvo.proprietati)
     console.log(mazda.proprietati)  
     console.log(dacia.proprietati)  
 }

 main()
class MasinaDeCurse  extends Masina {
    constructor(marca, model, culoare, kilometraj ) {
        super(marca, model, culoare, kilometraj);
      
     
    }
       
    participaLaCampionat (pozitiaInCampionat) {
            
        
            if (pozitiaInCampionat > 0) {
            return `Am castigat locul ${pozitiaInCampionat}`
        }else{
            return `Nu am castigat niciun premiu`
        };
        
    }

 display() {
     return this.proprietati 
 }
 
}

function main2() {
    const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
    console.log(m1.display())
    console.log(m1.participaLaCampionat(2));
    const m2 = new MasinaDeCurse("BMW", "X6", "Rosu", 15000);
    console.log(m2.display())
    console.log(m2.participaLaCampionat(0));

        
}
main2()

