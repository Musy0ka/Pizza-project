let d = document;
console.log("Yum");


function PizzaOrder(size, crust, toppings, totalPrice){
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaToppings = toppings;
    this.totalPrice = totalPrice; 
}



PizzaOrder.prototype.customerOrder = function(){
    return this.pizzaSize + this.pizzaCrust + this.pizzaToppings + this.Prices;
}




$(document).ready(function(){
$('#btn').click(function(){
    $('.order-table').show()
});
});


d.querySelector('#btn').addEventListener('click',pizzaPrices)



    function pizzaPrices (p){ 
        p.preventDefault();

        let Size = {
            'Small': 550,
            'Medium': 750,
            'Large': 1350,
        }
        let Crust = {
            'Crispy': 350,
            'Stuffed': 400,
            'Gluten-Free': 350
        }
        let Toppings = {
            'Cheese': 150,
            'Pineapple': 100,
            'Meaty': 200,
        }
        

        let choosenPizzaSize = d.querySelector('#size').value;
        let choosenPizzaCrust = d.querySelector('#crust').value;
        let choosenPizzaToppings = d.querySelector('#toppings').value;

        

        let sizePrice=Size[choosenPizzaSize]
        let crustPrice=Crust[choosenPizzaCrust] || 0 
        let toppingsPrice=Toppings[choosenPizzaToppings]|| 0 

        
        let totalPrice = sizePrice + crustPrice + toppingsPrice;
        console.log(totalPrice);

        
        let sz = document.querySelector('#sz'); 
        sz.append(choosenPizzaSize);

        let cr = document.querySelector('#cr'); 
        cr.append(choosenPizzaCrust)

        let tps = document.querySelector('#tps');
        tps.append(choosenPizzaToppings);

        let op = document.querySelector('#total'); 
        op.append(totalPrice);

         
    $(document).ready(function(){
        
            $('#btnn').show();
            $('#delivery').show();
            $('#btnn').click(function(){        
      
        });
    });

    d.querySelector('#btnn').addEventListener('click', deliveryCost)

    function deliveryCost(){ 
        let lctn = d.querySelector('#location').value;
        let qty = d.querySelector('#qtty').value;
        let qNumber = parseInt(qty);

        if (lctn !== '' && qty !== ''){
            let cost = (sizePrice * qNumber) + crustPrice + toppingsPrice + 200;

            let lct = d.querySelector('#lct');
            lct.append(lctn);

            let ortc = d.querySelector('#order-total');
            ortc.append(cost);

            console.log(cost);

            return cost;
        } else if (lctn == ''){
            return totalPrice;
        }

        
        

    }

} 
