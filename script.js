const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
const searchBox = document.querySelector('#search');

searchBox.addEventListener('keyup', (e) => {
    let searchText = e.target.value.toLowerCase().trim(); 

    boxes.forEach((box) => {
        const data = box.dataset.item.toLowerCase(); 
        if (data.includes(searchText)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });

    buttons.forEach((button) => {
        button.classList.remove('btn-clicked');
    });
    buttons[0].classList.add('btn-clicked');
});

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveBtn(e);
        const filter = e.target.dataset.filter; 

        boxes.forEach((box) => { 
            if (filter == 'all') {
                box.style.display = 'block';
            } else {
                if (box.dataset.item.toLowerCase().includes(filter.toLowerCase())) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            }
        });
    });
});

function setActiveBtn(e) {
    buttons.forEach((button) => {
        button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');
}
