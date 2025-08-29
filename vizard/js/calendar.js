
document.addEventListener('DOMContentLoaded', function () {
    const monthElement = document.getElementById('month-name');
    const prevButton = document.getElementById('prev-month');
    const nextButton = document.getElementById('next-month');
    const datesGrid = document.getElementById('dates-grid');

    let currentDate = new Date();

    function renderCalendar() {
        datesGrid.innerHTML = '';
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        monthElement.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyCell = document.createElement('div');
            datesGrid.appendChild(emptyCell);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dateButton = document.createElement('button');
            dateButton.className = 'h-12 w-full text-[#181112] text-sm font-medium leading-normal';
            const dateDiv = document.createElement('div');
            dateDiv.className = 'flex size-full items-center justify-center rounded-full';
            dateDiv.textContent = i;
            dateButton.appendChild(dateDiv);

            dateButton.addEventListener('click', () => {
                                const selected = datesGrid.querySelector('.bg-purple-500');
                if (selected) {
                    selected.classList.remove('bg-purple-500');
                    selected.classList.remove('text-white');
                }
                                dateDiv.classList.add('bg-purple-500');
                dateDiv.classList.add('text-white');
            });

            datesGrid.appendChild(dateButton);
        }
    }

    prevButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
