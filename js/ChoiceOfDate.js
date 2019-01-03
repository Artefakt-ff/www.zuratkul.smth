$(document).ready(function () {
    $('#choice_calendar').hide();
});

function toggleCalendar(out_el, in_el) {
    out_el.fadeOut(400);
    setTimeout(function () {
        in_el.fadeIn(400);
    }, 400)
}

function choiceOfDate() {
    let chat = $('#choice_chat'),
        calendar = $('#choice_calendar'),
        months = [],
        months_names = ['June', 'July', 'August'],
        months_days_number = [30, 31, 31],
        months_days_offset = [5, 0, 3],
        months_days_back_offset = [0, 4, 1],
        table, table_code, countDays, countWeeks;

    toggleCalendar(chat, calendar);

    for (let i = 0; i < months_names.length; i++) {
        months.push(document.getElementById(months_names[i]));
    }

    for (let i = 0; i < 3; i++) {
        table = document.createElement('table');
        table.className = 'month_table';
        table.setAttribute('cellspacing', '5');

        countDays = 7;
        countWeeks = 0;
        table_code = '';
        for (let day = 0; day < months_days_number[i] + months_days_offset[i] + months_days_back_offset[i]; day++) {
            if (countDays === 7) {
                if (!countWeeks) {
                    table_code += '</tr>';
                    table_code += '<tr class="days_of_week"><td>Пн</td><td>Вт</td><td>Ср</td><td>Чт</td><td>Пт</td><td>Сб</td><td>Вс</td></tr>'
                }
                table_code += '<tr class="week" id="' + months_names[i] + '-week-' + countWeeks + '">';
                countDays = 0;
                countWeeks += 1;
            }
            if (day < months_days_offset[i]) {
                table_code += '<td>X</td>'
            }
            else if (day > months_days_number[i] + months_days_offset[i] - 1) {
                table_code += '<td>X</td>'
            }
            else {
                table_code += '<td>' + (day - months_days_offset[i] + 1) + '</td>'
            }
            countDays += 1;
        }
        table_code += '</tr>';
        table.innerHTML = table_code;
        months[i].append(table);
    }


}