function CreateDeleteItemTable() {
	const externalContModal = document.createElement('div');
	const internalContModal = document.createElement('form');
	const btnWrapperModal = document.createElement('div');
	const btnExitForm = document.createElement('button');
	const btnDeleteForm = document.createElement('button');
	const h2 = document.createElement('h2');
	const p = document.createElement('p');

	internalContModal.method = 'POST';
	h2.innerHTML = 'Удалить клиента';
	p.innerHTML = 'Вы действительно хотите удалить данного клиента?';
	btnDeleteForm.innerHTML = 'Удалить';
	btnExitForm.innerHTML = 'Отмена';

	externalContModal.classList.add('clients__modal');
	internalContModal.classList.add('clients__modal-block', 'clients__modal-delete-block');
	h2.classList.add('clients__modal-delete-title');
	p.classList.add('clients__modal-warning-text');
	btnWrapperModal.classList.add('clients__modal-wrapper-btn');
	btnDeleteForm.classList.add('clients__modal-done-btn');
	btnExitForm.classList.add('clients__modal-delete-btn');

	btnWrapperModal.append(btnDeleteForm);
	btnWrapperModal.append(btnExitForm);
	internalContModal.append(h2);
	internalContModal.append(p);
	internalContModal.append(btnWrapperModal);
	externalContModal.append(internalContModal);

	return {
		externalContModal,
		internalContModal,
		btnDeleteForm,
		btnExitForm,
	}
}

export default CreateDeleteItemTable;
