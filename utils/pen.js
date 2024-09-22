// utils/pen.js
export function _tgl(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
        console.log(`Toggling class on element with ID: ${elementId}`);
        element.classList.toggle(className);
        console.log(`Current classes on element: ${element.className}`);
    } else {
        console.log(`Element with ID ${elementId} not found.`);
    }
}

export function Toggle_Menu() {
    _tgl('Button_Nav', 'btnoutcontainer');
}
