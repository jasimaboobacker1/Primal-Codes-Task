document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.querySelector('.lower-circle1');
    const container = document.querySelector('.second-sectionn');

    function createRow() {
        const newRow = document.createElement('div');
        newRow.className = 'row1';

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

        newRow.appendChild(courseInput);
        newRow.appendChild(uniInput);
        newRow.appendChild(yearInput);
        newRow.appendChild(removeButton);

        container.insertBefore(newRow, addButton);
    }

    // Add row
    addButton.addEventListener('click', function () {
        createRow();
    });

    // deleting row 
    container.addEventListener('click', function (event) {
        if (event.target.classList.contains('circle1')) {
            const rowToRemove = event.target.parentElement;
            container.removeChild(rowToRemove);
        }
    });


    document.querySelector('.save-button').addEventListener('click', function() {
        Swal.fire({
            title: 'Registered successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    });
});


