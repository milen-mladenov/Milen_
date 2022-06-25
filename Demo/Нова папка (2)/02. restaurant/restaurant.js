class Restaurant {
    constructor(budgetMoney, menu, stockProducts, history) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(productsArr) {


        while (productsArr.length > 0) {

            let product = productsArr.shift().split(" ")
            let totalProductPrice = Number(product[1]) * Number(product[2]);
            if (totalProductPrice <= Number(this.budgetMoney)) {
                if (this.stockProducts.hasOwnProperty(product[0])) {
                    this.stockProducts[product[0]] += Number(product[1]);

                } else {
                    this.stockProducts[product[0]] = Number(product[1]);
                }

                this.budgetMoney -= totalProductPrice;
                this.history.push(`Successfully loaded ${product[1]} ${product[0]}`);

            } else {
                this.history.push(`There was not enough money to load ${product[1]} ${product[0]}`);
            }

        }
        return this.history.join('\n');
    }

    addToMenu(meal, products, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                products,
                price
            }
            const count = Object.keys(this.menu).length;
            if (count === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${count} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        const count = Object.keys(this.menu).length;
        let report = "";
        if (count > 0) {
            for (const [key, value] of Object.entries(this.menu)) {
                report += `${key} - $ ${value.price}\n`
            }
        } else {
            report += `Our menu is not ready yet, please come later...`;
        }
        return report.trim();
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let notEnough = false;
        if (Object.entries(this.stockProducts).length === 0) {
            notEnough = true;
        } else {
            const products = this.menu[meal].products;
            for (let el of products) {
                let [name, quant] = el.split(" ");
                quant = Number(quant);
                for (let [n, q] of Object.entries(this.stockProducts)) {
                    if (n === name) {
                        if (q >= quant) {
                            this.stockProducts[n] -= quant;
                        } else {
                            notEnough = true;
                            break;
                        }
                    }
                }
            }
        }

        if (notEnough) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        const price = this.menu[meal].price;
        this.budgetMoney += price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`;
    }
}





// class Restaurant {
//     constructor(budgetMoneyMoney, menu, stockProducts, history) {
//         this.budgetMoneyMoney = budgetMoneyMoney;
//         this.menu = {};
//         this.stockProducts = {};
//         this.history = [];
//     }

//     loadProducts(products) {
//         //"{productName} {productQuantity} {productTotalPrice}"
//         for (const el of products) {
//             let [productName, productQuantity, productTotalPrice] = el.split(' ');
//             productQuantity = Number(productQuantity);
//             productTotalPrice = Number(productTotalPrice);

//             if (productTotalPrice <= this.budgetMoneyMoney) {
//                 if (this.stockProducts.hasOwnProperty(productName)) {
//                     this.stockProducts[productName] += productQuantity;
//                 } else {
//                     this.stockProducts[productName] = productQuantity;
//                 }

//                 this.budgetMoneyMoney -= productTotalPrice;
//                 this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
//             } else {
//                 this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
//             }
//         }
//         return this.history.join('\n');
//     }

//     addToMenu(meal, products, price) {
//         if (!this.menu.hasOwnProperty(meal)) {
//             this.menu[meal] = {
//                 products,
//                 price
//             };

//             const count = Object.keys(this.menu).length;
//             if (count === 1) {
//                 return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
//             } else {
//                 return `Great idea! Now with the ${meal} we have ${count} meals in the menu, other ideas?`;
//             }
//         } else {
//             return `The ${meal} is already in the our menu, try something different.`;
//         }
//     }

//     showTheMenu() {
//         const count = Object.keys(this.menu).length;
//         let report = '';
//         if (count > 0) {
//             for (const [key, value] of Object.entries(this.menu)) {
//                 report += `${key} - $ ${value.price}\n`;
//             }
//         } else report += `Our menu is not ready yet, please come later...`;

//         return report.trim();
//     }

//     makeTheOrder(meal) {
//         if (!this.menu.hasOwnProperty(meal)) {
//             return `There is not ${meal} yet in our menu, do you want to order something else?`;
//         }

//         let notEnough = false;
//         if (Object.entries(this.stockProducts).length === 0) {
//             notEnough = true;
//         }
//         else {
//             const products = this.menu[meal].products;
//             for (const el of products) {
//                 let [name, quantity] = el.split(' ');
//                 quantity = Number(quantity);
//                 for (let [n, q] of Object.entries(this.stockProducts)) {
//                     if (n === name) {
//                         if (q >= quantity) {
//                             this.stockProducts[n] -= quantity;
//                         } else {
//                             notEnough = true;
//                             break;
//                         }
//                     }
//                 }
//             }
//         }

//         if (notEnough) {
//             return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
//         }
//         const price = this.menu[meal].price;
//         this.budgetMoneyMoney += price;
//         return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`;
//     }
// }


let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
