//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', changeColor);
document.getElementById('reset_button').addEventListener('click', resetColors);

function changeColor() {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // Reset all grid items to transparent
    const gridItems = document.getElementsByClassName('grid-item');
    for (let item of gridItems) {
        item.style.backgroundColor = 'transparent';
    }

    // Change the color of the specific block
    const block = document.getElementById(blockId);
    if (block) {
        block.style.backgroundColor = color;
    } else {
        alert('Invalid Block ID');
    }
}

function resetColors() {
    const gridItems = document.getElementsByClassName('grid-item');
    for (let item of gridItems) {
        item.style.backgroundColor = 'transparent';
    }
}
