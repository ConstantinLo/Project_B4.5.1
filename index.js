console.log('Выборка из массива');

var orders = [{
    "name" : "Туалетная бумага", 
    "description" : "Большая упаковка качественной туалетной бумаги", 
    "status": "shipped"
}, 
{
    "name": "Полотенце", 
    "description" : "Белое мягкое полотенце", 
    "status": "shipped"
}, 
{
    "name": "Бумажные салфетки", 
    "description" : "Рулон мягких салфеток", 
    "status": "delivered"
},
{
    "name": "Верёвка", 
    "description" : "Качественная верёвка в ассортименте", 
    "status": "delivered"
}];
 
var orderInfo = orders.map( function(order) {
 if( order.status === "delivered"){
     var info = { 
         "orderName": order.name,
         "orderDescription": order.description
        }
     return info;
    }
});

console.log(orderInfo);
