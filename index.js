const dropdowns = document.querySelectorAll('.options');

dropdowns.forEach(dropdown => dropdown.addEventListener('click', () => {
    const menuId = dropdown.childNodes[1].id;
    console.log(menuId);
    const itemsAnimation = document.querySelectorAll(`#${menuId} > li`)
    console.log(itemsAnimation);
    itemsAnimation.forEach(item => item.classList.toggle('hover'))
}))