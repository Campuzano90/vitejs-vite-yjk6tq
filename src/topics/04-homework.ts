/*
    ===== Código de TypeScript =====
*/
interface Address {
  calle: String;
  pais: String;
  ciudad: String;
}

interface SuperHero {
  name: String;
  age: number;
  address: Address;
}

const superHeroe: SuperHero = {
  name: 'Spiderman',
  age: 30,
  address: {
    calle: 'Main St',
    pais: 'USA',
    ciudad: 'NY',
  },
  showAddress() {
    return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
  },
};

const address = superHeroe.showAddress();
console.log(address);

export {};
