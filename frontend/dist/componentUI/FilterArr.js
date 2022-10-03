function FilterArr(value, table) {
    let phrase = value.trim();
    let regPhrase = new RegExp(phrase, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[1].innerHTML);
            if (flag)
                break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        }
        else {
            table.rows[i].style.display = "none";
        }
    }
}
export default FilterArr;
