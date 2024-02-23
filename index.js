export const initializeDropdowns = () => {
    const dropdowns = document.querySelectorAll('.options');

    dropdowns.forEach(dropdown => dropdown.addEventListener('click', () => {
        const menuId = dropdown.childNodes[1].id;
        const itemsAnimation = document.querySelectorAll(`#${menuId} > li`)
        itemsAnimation.forEach(item => item.classList.toggle('hover'))
    }))
}