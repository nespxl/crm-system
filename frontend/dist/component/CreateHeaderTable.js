function CreateHeaderTable() {
    const titleRow = document.createElement('tr');
    const id = document.createElement('th');
    const name = document.createElement('th');
    const spanFilterAlp = document.createElement('span');
    const createDate = document.createElement('th');
    const lastEdit = document.createElement('th');
    const contact = document.createElement('th');
    const move = document.createElement('th');
    const buttonId = document.createElement('button');
    const buttonName = document.createElement('button');
    const buttonCreateDate = document.createElement('button');
    const buttonLastEdit = document.createElement('button');
    const idArrowHeader = document.createElement('span');
    const nameArrowHeader = document.createElement('span');
    const createDateArrowHeader = document.createElement('span');
    const lastEditArrowHeader = document.createElement('span');
    idArrowHeader.innerHTML = `<svg class="clients__config-arrow-id clients__config-arrow-size" width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<path d="M3.49691e-07 4L0.705 4.705L3.5 1.915L3.5 8L4.5 8L4.5 1.915L7.29 4.71L8 4L4 -3.49691e-07L3.49691e-07 4Z" fill="#9873FF"/>` + `</svg>`;
    nameArrowHeader.innerHTML = `<svg class="clients__config-arrow-name clients__config-arrow-size" width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<path d="M8 4L7.295 3.295L4.5 6.085L4.5 0L3.5 0L3.5 6.085L0.71 3.29L0 4L4 8L8 4Z" fill="#9873FF"/>` + `</svg>`;
    createDateArrowHeader.innerHTML = `<svg class="clients__config-arrow-create clients__config-arrow-size" width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<path d="M8 4L7.295 3.295L4.5 6.085L4.5 0L3.5 0L3.5 6.085L0.71 3.29L0 4L4 8L8 4Z" fill="#9873FF"/>` + `</svg>`;
    lastEditArrowHeader.innerHTML = `<svg class="clients__config-arrow-edit clients__config-arrow-size" width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<path d="M8 4L7.295 3.295L4.5 6.085L4.5 0L3.5 0L3.5 6.085L0.71 3.29L0 4L4 8L8 4Z" fill="#9873FF"/>` + `</svg>`;
    buttonId.innerHTML = 'id' + idArrowHeader.innerHTML;
    buttonName.innerHTML = 'Имя Фамилия Отчество' + nameArrowHeader.innerHTML;
    buttonCreateDate.innerHTML = 'Дата и время создания' + createDateArrowHeader.innerHTML;
    buttonLastEdit.innerHTML = 'Последнее изменение' + lastEditArrowHeader.innerHTML;
    contact.innerHTML = 'Контакты';
    move.innerHTML = 'Действия';
    spanFilterAlp.innerHTML = 'А-Я';
    titleRow.classList.add('clients__title-row');
    id.classList.add('clients__config-id', 'clients__config-position');
    name.classList.add('clients__config-position');
    createDate.classList.add('clients__config-position');
    lastEdit.classList.add('clients__config-position');
    contact.classList.add('clients__config-position', 'clients__config');
    move.classList.add('clients__config');
    spanFilterAlp.classList.add('clients__more-info');
    buttonId.classList.add('clients__config', 'clients__config-btn');
    buttonName.classList.add('clients__config', 'clients__config-btn');
    buttonCreateDate.classList.add('clients__config', 'clients__config-btn');
    buttonLastEdit.classList.add('clients__config', 'clients__config-btn');
    idArrowHeader.classList.add('clients__config-arrow-id', 'clients__config-btn');
    nameArrowHeader.classList.add('clients__config-arrow-name', 'clients__config-btn');
    createDateArrowHeader.classList.add('clients__config-arrow-create', 'clients__config-btn');
    lastEditArrowHeader.classList.add('clients__config-arrow-edit', 'clients__config-btn');
    id.append(buttonId);
    name.append(buttonName);
    createDate.append(buttonCreateDate);
    lastEdit.append(buttonLastEdit);
    name.append(spanFilterAlp);
    titleRow.append(id);
    titleRow.append(name);
    titleRow.append(createDate);
    titleRow.append(lastEdit);
    titleRow.append(contact);
    titleRow.append(move);
    return {
        titleRow,
        id,
        name,
        createDate,
        lastEdit,
        idArrowHeader,
        move
    };
}
export default CreateHeaderTable;
