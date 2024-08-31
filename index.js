document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.lower-circle1');
    const container = document.querySelector('.second-sectionn');

    function createRow() {
        // Create a new div for the row
        const newRow = document.createElement('div');
        newRow.className = 'row1';

        // Create input elements for Course, University, and Year
        const courseInput = document.createElement('input');
        courseInput.className = 'Course-input1';
        courseInput.type = 'text';
        courseInput.placeholder = 'Course';

        const uniInput = document.createElement('input');
        uniInput.className = 'uni-input1';
        uniInput.type = 'text';
        uniInput.placeholder = 'University';

        const yearInput = document.createElement('input');
        yearInput.className = 'year-input1';
        yearInput.type = 'text';
        yearInput.placeholder = 'Year';

        const removeButton = document.createElement('button');
        removeButton.className = 'circle1';
        removeButton.textContent = '-';

        // Append inputs and button to the new row
        newRow.appendChild(courseInput);
        newRow.appendChild(uniInput);
        newRow.appendChild(yearInput);
        newRow.appendChild(removeButton);

        // Append the new row to the container (above the add button)
        container.insertBefore(newRow, addButton);
    }

    // Add event listener to the add button
    addButton.addEventListener('click', function () {
        createRow();
    });

    // Use event delegation for dynamically added remove buttons
    container.addEventListener('click', function (event) {
        if (event.target.classList.contains('circle1')) {
            const rowToRemove = event.target.parentElement;
            container.removeChild(rowToRemove);
        }
    });
});
