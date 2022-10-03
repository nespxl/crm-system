var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import CreateDeleteItemTable from "./CreateDeleteItemTable.js";
import TrackClick from "../componentUI/TrackClick.js";
function CreateChangeModalWindow(title = 'Изменить данные', lastButton = 'Удалить клиента') {
    const externalContModal = document.createElement('div');
    const internalContModal = document.createElement('form');
    const contWrapperInput = document.createElement('div');
    const h2 = document.createElement('h2');
    const btnWrapperModal = document.createElement('div');
    const btnDoneForm = document.createElement('input');
    const btnDeleteForm = document.createElement('button');
    const labelSurname = document.createElement('label');
    const inputSurname = document.createElement('input');
    const labelName = document.createElement('label');
    const inputName = document.createElement('input');
    const labelMiddlename = document.createElement('label');
    const inputMiddlename = document.createElement('input');
    const addNewContact = document.createElement('button');
    const newContactBlock = document.createElement('div');
    const closeIcon = document.createElement('button');
    const containerMain = document.getElementById('main');
    const deleteItemTable = CreateDeleteItemTable();
    const contactBlockPosition = document.createElement('div');
    const titleWrap = document.createElement('div');
    const id = document.createElement('span');
    const idTest = document.createElement('span');
    const trackClick = TrackClick(externalContModal);
    externalContModal.tabIndex = 0;
    internalContModal.method = 'POST';
    h2.innerHTML = title;
    btnDoneForm.value = 'Сохранить';
    btnDoneForm.type = 'submit';
    btnDeleteForm.innerHTML = lastButton;
    labelSurname.innerHTML = 'Фамилия*';
    labelName.innerHTML = 'Имя*';
    labelMiddlename.innerHTML = 'Отчество';
    addNewContact.innerHTML = `<svg class='clients__new-contact-icon' width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<path d="M7.00001 3.66659C6.63334 3.66659 6.33334 3.96659 6.33334 4.33325V6.33325H4.33334C3.96668 6.33325 3.66668 6.63325 3.66668 6.99992C3.66668 7.36659 3.96668 7.66659 4.33334 7.66659H6.33334V9.66659C6.33334 10.0333 6.63334 10.3333 7.00001 10.3333C7.36668 10.3333 7.66668 10.0333 7.66668 9.66659V7.66659H9.66668C10.0333 7.66659 10.3333 7.36659 10.3333 6.99992C10.3333 6.63325 10.0333 6.33325 9.66668 6.33325H7.66668V4.33325C7.66668 3.96659 7.36668 3.66659 7.00001 3.66659ZM7.00001 0.333252C3.32001 0.333252 0.333344 3.31992 0.333344 6.99992C0.333344 10.6799 3.32001 13.6666 7.00001 13.6666C10.68 13.6666 13.6667 10.6799 13.6667 6.99992C13.6667 3.31992 10.68 0.333252 7.00001 0.333252ZM7.00001 12.3333C4.06001 12.3333 1.66668 9.93992 1.66668 6.99992C1.66668 4.05992 4.06001 1.66659 7.00001 1.66659C9.94001 1.66659 12.3333 4.05992 12.3333 6.99992C12.3333 9.93992 9.94001 12.3333 7.00001 12.3333Z" fill="#9873FF"/>` + `</svg>` + 'Добавить контакт';
    titleWrap.classList.add('clients__modal-wrap-title');
    h2.classList.add('clients__modal-title');
    id.classList.add('clients__modal-id');
    contWrapperInput.classList.add('clients__wrapper-input');
    externalContModal.classList.add('clients__modal');
    internalContModal.classList.add('clients__modal-block');
    labelSurname.classList.add('clients__label');
    labelName.classList.add('clients__label');
    labelMiddlename.classList.add('clients__label');
    inputSurname.classList.add('clients__change-input');
    inputName.classList.add('clients__change-input');
    inputMiddlename.classList.add('clients__change-input');
    addNewContact.classList.add('clients__new-contact-btn');
    newContactBlock.classList.add('clients__new-contact-block');
    btnWrapperModal.classList.add('clients__modal-wrapper-btn');
    btnDoneForm.classList.add('clients__modal-done-btn');
    btnDeleteForm.classList.add('clients__modal-delete-btn');
    closeIcon.classList.add('clients__close');
    btnDeleteForm.addEventListener('click', (e) => {
        e.preventDefault();
        containerMain === null || containerMain === void 0 ? void 0 : containerMain.append(deleteItemTable.externalContModal);
    });
    internalContModal.addEventListener('click', (e) => {
        let html = document.documentElement;
        let scrollPosition = trackClick[trackClick.length - 1];
        html.style.top = -scrollPosition + "px";
        window.scrollTo(0, scrollPosition);
        const btn = e.composedPath().includes(closeIcon);
        if (btn) {
            html === null || html === void 0 ? void 0 : html.classList.remove('is');
        }
        else {
            html === null || html === void 0 ? void 0 : html.classList.add('is');
        }
    });
    closeIcon.addEventListener('click', () => {
        let html = document.documentElement;
        let scrollPosition = trackClick[trackClick.length - 1];
        html.style.top = -scrollPosition + "px";
        window.scrollTo(0, scrollPosition);
        html === null || html === void 0 ? void 0 : html.classList.remove('is');
        containerMain === null || containerMain === void 0 ? void 0 : containerMain.removeChild(externalContModal);
    });
    function createSelect(type = '', value = '') {
        const containerContacts = document.createElement('div');
        const inputContacts = document.createElement('input');
        const eraseInput = document.createElement('button');
        const select = document.createElement('select');
        const optionTel = document.createElement('option');
        const optionAddTel = document.createElement('option');
        const optionVk = document.createElement('option');
        const optionFb = document.createElement('option');
        const optionEmail = document.createElement('option');
        containerContacts.classList.add('clients__container-contacts');
        inputContacts.classList.add('clients__input-contacts');
        optionTel.classList.add('clients__option');
        optionAddTel.classList.add('clients__option');
        optionVk.classList.add('clients__option');
        optionFb.classList.add('clients__option');
        optionEmail.classList.add('clients__option');
        eraseInput.classList.add('clients__modal-erase-input');
        inputContacts.placeholder = 'Введите данные контакта';
        optionTel.innerHTML = 'Телефон';
        optionAddTel.innerHTML = 'Доп. телефон';
        optionVk.innerHTML = 'Vk';
        optionFb.innerHTML = 'Facebook';
        optionEmail.innerHTML = 'Email';
        eraseInput.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#B0B0B0"/>` + `</svg>`;
        optionTel.value = 'Телефон';
        optionAddTel.value = 'Доп. телефон';
        optionVk.value = 'Vk';
        optionFb.value = 'Facebook';
        optionEmail.value = 'Email';
        document.addEventListener('click', (e) => {
            const clickForm = e.composedPath().includes(externalContModal);
            if (!clickForm) {
                containerContacts.remove();
            }
            ;
        });
        select.append(optionTel);
        select.append(optionAddTel);
        select.append(optionVk);
        select.append(optionFb);
        select.append(optionEmail);
        containerContacts.append(select);
        containerContacts.append(inputContacts);
        containerContacts.append(eraseInput);
        contactBlockPosition.append(containerContacts);
        newContactBlock.append(contactBlockPosition);
        containerContacts.children[0].children[0].innerHTML = type;
        inputContacts.value = value;
        const choices1 = new Choices(select, {
            searchEnabled: false,
            placeholder: false,
            searchChoices: false,
            position: 'bottom',
            shouldSort: false,
        });
        if (contactBlockPosition.children.length > 9) {
            newContactBlock.removeChild(addNewContact);
        }
        eraseInput.addEventListener('click', () => {
            containerContacts.remove();
            newContactBlock.prepend(addNewContact);
        });
        if (inputContacts.value !== '') {
            eraseInput.classList.add('clients__modal-erase-input-true');
        }
        else
            eraseInput.classList.remove('clients__modal-erase-input-true');
        return {
            inputContacts,
            eraseInput,
            containerContacts,
            select,
            optionTel,
            optionAddTel,
            optionVk,
            optionFb,
            optionEmail,
        };
    }
    ;
    addNewContact.addEventListener('click', (e) => {
        e.preventDefault();
        const select = createSelect();
        select.eraseInput.classList.add('clients__modal-erase-input-true');
    });
    deleteItemTable.btnExitForm.addEventListener('click', (e) => {
        e.preventDefault();
        containerMain === null || containerMain === void 0 ? void 0 : containerMain.removeChild(deleteItemTable.externalContModal);
    });
    deleteItemTable.btnDeleteForm.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const dd = id.innerHTML.substr(3).trim();
        const response = yield fetch(`http://localhost:3000/api/clients/${dd}`, {
            method: 'DELETE',
        });
        const result = response.json();
        externalContModal.remove();
        deleteItemTable.externalContModal.remove();
    }));
    titleWrap.append(h2);
    titleWrap.append(id);
    contWrapperInput.append(titleWrap);
    contWrapperInput.append(labelSurname);
    contWrapperInput.append(labelName);
    contWrapperInput.append(labelMiddlename);
    newContactBlock.append(addNewContact);
    btnWrapperModal.append(btnDoneForm);
    btnWrapperModal.append(btnDeleteForm);
    labelSurname.append(inputSurname);
    labelName.append(inputName);
    internalContModal.append(closeIcon);
    labelMiddlename.append(inputMiddlename);
    internalContModal.append(contWrapperInput);
    internalContModal.append(newContactBlock);
    internalContModal.append(btnWrapperModal);
    externalContModal.append(internalContModal);
    return {
        externalContModal,
        btnDoneForm,
        btnDeleteForm,
        inputSurname,
        inputName,
        inputMiddlename,
        closeIcon,
        id,
        idTest,
        newContactBlock,
        internalContModal,
        createSelect,
    };
}
export default CreateChangeModalWindow;
