const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const products = [
    {name:'Laptop',price:'234'},
    {name:'Tablet',price:'23445'},
    {name:'Smartphone',price:'656'}
];
//breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;





let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;


dessertItem = '';
for ( let i=0 ; i <= dessertMenu.length; i++){
    dessertItem += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

let i=0 ;
dessertItem = '';
dessertMenu.forEach( (dessert) => {
    i +=1 ;
    dessertItem += `<p>Item ${i}: ${dessert}</p>`;
});
document.getElementById('dessertMenuItems').innerHTML = dessertItem;




const valores = [10,20,30,40] ;

let acc = valores.reduce((acc, cur, idx, src) => {
    // Lógica de la función reductora
    console.log('acumulador:',acc);
    console.log('actual:',cur);
    console.log('indice:',idx);
    console.log('original:',src);
    return acc+cur;
  }, 0);

  console.log(acc);


  // encuentra y devuelve el primer valor 
  let busqueda = valores.find((val) => val === 15);
  console.log('Valor encontrado:', busqueda);


  // encuentra y devuelve todos los valores que son iguales a 20
  const resultado = valores.reduce((acc, val, idx) => {
    if (val === 20) {
        acc.push({ indice: idx, valor: val, valorModificado: val + 15 });
    }
    return acc;
}, []);

console.log('Resultado:', resultado);