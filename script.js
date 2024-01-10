document.addEventListener('DOMContentLoaded', function () {
    // Dynamically add menu items
    const menu = document.getElementById('menu');

    const dishes = [
        { image: 'dish1.jpg', name: 'Signature Dish 1', description: 'Delicious description of the dish goes here.' },
        { image: 'dish2.jpg', name: 'Signature Dish 2', description: 'Delicious description of the dish goes here.' },
        { image: 'dish3.jpg', name: 'Signature Dish 3', description: 'Delicious description of the dish goes here.' },
    ];

    dishes.forEach(dish => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');

        menuItem.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <h3>${dish.name}</h3>
            <p>${dish.description}</p>
            <button>Order Now</button>
        `;

        menu.appendChild(menuItem);
    });
});
