function CreateModalWindow(title: string = 'Новый клиент', lastButton: string = 'Отмена') {
	const externalContModal = document.createElement('div');
	const internalContModal = document.createElement('form');
	const contWrapperInput = document.createElement('div');
	const h2 = document.createElement('h2');
	const btnWrapperModal = document.createElement('div');
	const btnDoneForm = document.createElement('input');
	const btnDeleteForm = document.createElement('button');
	const idItem = document.createElement('span');
	const inputSurname = document.createElement('input');
	const inputName = document.createElement('input');
	const inputMiddlename = document.createElement('input');
	const newContactBlock = document.createElement('div');
	const btnBlockPosition = document.createElement('div');
	const contactBlockPosition = document.createElement('div');
	const addNewContact = document.createElement('button');
	const closeIcon = document.createElement('button');

	internalContModal.method = 'POST';
	h2.innerHTML = title;
	inputSurname.placeholder = 'Фамилия*';
	inputName.placeholder = 'Имя*';
	inputMiddlename.placeholder = 'Отчество';
	btnDoneForm.value = 'Сохранить';
	btnDoneForm.type = 'submit';
	btnDeleteForm.innerHTML = lastButton;
	addNewContact.innerHTML = `<svg class='clients__new-contact-icon' width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<path d="M7.00001 3.66659C6.63334 3.66659 6.33334 3.96659 6.33334 4.33325V6.33325H4.33334C3.96668 6.33325 3.66668 6.63325 3.66668 6.99992C3.66668 7.36659 3.96668 7.66659 4.33334 7.66659H6.33334V9.66659C6.33334 10.0333 6.63334 10.3333 7.00001 10.3333C7.36668 10.3333 7.66668 10.0333 7.66668 9.66659V7.66659H9.66668C10.0333 7.66659 10.3333 7.36659 10.3333 6.99992C10.3333 6.63325 10.0333 6.33325 9.66668 6.33325H7.66668V4.33325C7.66668 3.96659 7.36668 3.66659 7.00001 3.66659ZM7.00001 0.333252C3.32001 0.333252 0.333344 3.31992 0.333344 6.99992C0.333344 10.6799 3.32001 13.6666 7.00001 13.6666C10.68 13.6666 13.6667 10.6799 13.6667 6.99992C13.6667 3.31992 10.68 0.333252 7.00001 0.333252ZM7.00001 12.3333C4.06001 12.3333 1.66668 9.93992 1.66668 6.99992C1.66668 4.05992 4.06001 1.66659 7.00001 1.66659C9.94001 1.66659 12.3333 4.05992 12.3333 6.99992C12.3333 9.93992 9.94001 12.3333 7.00001 12.3333Z" fill="#9873FF"/>` + `</svg>` + 'Добавить контакт';

	function createSelect(): { inputContacts: HTMLInputElement; eraseInput: HTMLButtonElement; containerContacts: HTMLDivElement; } {
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
	eraseInput.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#B0B0B0"/>` + `</svg>`

	optionTel.value = 'Телефон';
	optionAddTel.value = 'Доп. телефон';
	optionVk.value = 'Vk';
	optionFb.value = 'Facebook';
	optionEmail.value = 'Email';

	select.append(optionTel);
	select.append(optionAddTel);
	select.append(optionVk);
	select.append(optionFb);
	select.append(optionEmail);
	containerContacts.append(select);
	containerContacts.append(inputContacts);
	containerContacts.append(eraseInput);
	contactBlockPosition.append(containerContacts)
	newContactBlock.append(contactBlockPosition);

	const choices1 = new Choices(select, {
		searchEnabled: false,
		placeholder: false,
		searchChoices : false,
		position: 'bottom',
		shouldSort: false,
	})

	eraseInput.addEventListener('click', () => {
		containerContacts.remove();
	})

		return {
			inputContacts,
			eraseInput,
			containerContacts,
		}
	}

  addNewContact.addEventListener('click', (e: any) => {
	e.preventDefault();
	const select = createSelect();
	select.eraseInput.classList.add('clients__modal-erase-input-true');
  });

	contWrapperInput.classList.add('clients__wrapper-input');
	h2.classList.add('clients__modal-title');
	externalContModal.classList.add('clients__modal');
	internalContModal.classList.add('clients__modal-block');
	inputSurname.classList.add('clients__input');
	inputName.classList.add('clients__input');
	btnWrapperModal.classList.add('clients__modal-wrapper-btn');
	inputMiddlename.classList.add('clients__input');
	btnDoneForm.classList.add('clients__modal-done-btn');
	btnDeleteForm.classList.add('clients__modal-delete-btn');
	newContactBlock.classList.add('clients__new-contact-block');
	addNewContact.classList.add('clients__new-contact-btn');
	closeIcon.classList.add('clients__close');

	contWrapperInput.append(h2);
	contWrapperInput.append(inputSurname);
	contWrapperInput.append(inputName);
	contWrapperInput.append(inputMiddlename);
	internalContModal.append(closeIcon);
	externalContModal.append(internalContModal);
	btnBlockPosition.append(addNewContact);
	newContactBlock.append(btnBlockPosition);
	internalContModal.append(contWrapperInput);
	internalContModal.append(newContactBlock);
	internalContModal.append(btnWrapperModal);
	btnWrapperModal.append(btnDoneForm);
	btnWrapperModal.append(btnDeleteForm);

	return {
		externalContModal,
		internalContModal,
		closeIcon,
		addNewContact,
		idItem,
		btnDoneForm,
		btnDeleteForm,
		inputName,
		inputSurname,
		inputMiddlename,
  }
}

export default CreateModalWindow;
