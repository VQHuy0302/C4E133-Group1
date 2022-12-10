function myFunction() {
    document.getElementById("form").submit();
}
let drinks = [
    {
        id: 1,
        name: 'Cafe pha máy',
    },
    {
        id: 2,
        name: 'Nước ép',
    },
    {
        id: 3,
        name: 'Trà',
    },
    {
        id: 4,
        name: 'Soda',
    },
    {
        id: 5,
        name: 'Sữa chua',
    }
];
function renderMenu(drinks) {
    const olElement1 = document.getElementsByClassName('menuClass');
    let content = '';

    for (let item of drinks) {
        content += `
          <li>
              ${item.name}
              <button onclick="removeDrink(${item.id})";" >delete</button>
          </li>
      `;
    }

    olElement1[0].innerHTML = content;
};
//   chỗ này gọi tên là nó sổ ra screen
renderMenu(drinks);

//remove
function removeDrink(id) {
    drinks.splice(id - 1, 1);
    renderMenu(drinks);
}


//   form
function getInputFromUser() {
    const input = document.getElementsByTagName('drinkName');
    const newDrink = {
      id: drinks.length,
      name: input,
    };
    drinks.push(newDrink);
    renderMenu(drinks);
  };
