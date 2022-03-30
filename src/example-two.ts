function addVAT(price: number, vat: number = 0.2) {
  return price * (1 + vat);
}
const vatPrice = addVAT(30, 0.2);

const deliveryAddresses: any[] = [];

function selectDeliveryAddress(addressOrIndex: unknown): string {
  if (
    typeof addressOrIndex === "number" &&
    addressOrIndex < deliveryAddresses.length
  ) {
    // here ts knows addressOrIndex is a number
    return deliveryAddresses[addressOrIndex];
  }
  return "";
}

// TYPE COMPOSITES

// structural contract

const movie1 = {
  title: "Radagast the Brown",
  id: 111,
};

type Movie = {
  title: string;
};

const movie2: Movie = movie1; // ts doesn't complain that movie1 has prop id

const movie3: Movie = {
  title: "Oz returns",
  // id: 123, // but this is bad
};

const movie4 = {
  id: 444,
};

// const movie5: Movie = movie4; // too few properties won't work either

// we can leverage this for function arguments:
function createArticleElement(article: {
  title: string;
  price: number;
  vat: number;
}): string {
  const title = article.title;
  const price = addVAT(article.price, article.vat);
  return `<h2>Buy ${title} for ${price}</h2>`;
}

type Article = {
  title: string;
  price: number;
  vat: number;
  stock: number;
  description: string;
};

const movie: Article = {
  title: "Helvetica",
  price: 6.66,
  vat: 0.19,
  stock: 1000,
  description: "90 minutes of gushing about Helvetica",
};
createArticleElement(movie); // movie has more properties than the argument, but that's ok

createArticleElement({
  title: "Design Systems by Alla Kholmatova",
  price: 20,
  vat: 0.19,
  // rating: 5, // this still breaks though
});

// typeof objects
const defaultOrder = {
  title: "order-1234",
  id: 1234,
  vat: 0.19,
};
type Order = typeof defaultOrder;
// defaultOrder.rating = 6; // this is not possible though since defaultOrder becomes of type Order
const order1: Order = {
  title: "order-333",
  id: 333,
  vat: 0.2,
};

// CLASSES
class Discount {
  isPercentage: boolean;
  amount: number;
  constructor(isPercentage: boolean, amount: number) {
    this.isPercentage = isPercentage;
    this.amount = amount;
  }
  apply(article: Article) {
    if (this.isPercentage) {
      article.price = article.price - article.price * this.amount;
    } else {
      article.price = article.price - this.amount;
    }
  }
}
// creating a class makes it available in the type space
let discount: Discount = new Discount(true, 0.2);
// the class above has
// 1. Constructor
// 2. Prototype: fields isPercentage and amount, and method apply. Defines type
// the following is valid:
let allProductsTwentyBucks: Discount = {
  isPercentage: false,
  amount: 20,
  apply(article) {
    article.price = 20;
  },
};
