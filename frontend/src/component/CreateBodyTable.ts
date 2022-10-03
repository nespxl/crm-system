import { IValidateItem, ObjectItem } from "./Interface";
import CreateDeleteItemTable from "./CreateDeleteItemTable.js";
import CreateChangeModalWindow from "./CreateChangeModalWindow.js";
import CloseModal from "../componentUI/CloseModal.js";
import TrackClick from "../componentUI/TrackClick.js";

function CreateBodyTable(validateItem: IValidateItem) {
  const titleRow = document.createElement('tr');
	const id = document.createElement('td');
	const fullName = document.createElement('td');
	const createDate = document.createElement('td');
	const lastEdit = document.createElement('td');
	const spanDate = document.createElement('span');
	const spanEdit = document.createElement('span');
	const spanTimeEdit = document.createElement('span');
	const spanTimeNow = document.createElement('span');
	const spanPenIcon = document.createElement('span');
	const spanDeleteIcon = document.createElement('span');
	const contact = document.createElement('td');
	const move = document.createElement('td');
	const moveChange = document.createElement('button');
	const moveDelete = document.createElement('button');
	const deleteItemTable = CreateDeleteItemTable();
	const changeModalWindow = CreateChangeModalWindow();
	const trackClick = TrackClick(changeModalWindow.externalContModal);
	const containerMain = document.getElementById('main');
	const containerIcon = document.createElement('div');
	let contactObject: any;

	titleRow.classList.add('clients__row');
	id.classList.add('clients__id');
	fullName.classList.add('clients__name');
	spanDate.classList.add('clients__new-date');
	spanEdit.classList.add('clients__now-date');
	spanTimeNow.classList.add('clients__new-time');
	spanTimeEdit.classList.add('clients__now-time');
	moveChange.classList.add('clients__change-btn');
	moveDelete.classList.add('clients__delete-btn');
	spanPenIcon.classList.add('clients__icon');
	spanDeleteIcon.classList.add('clients__icon');
	containerIcon.classList.add('clients__cont-icon');

	let arrTel = [];
	let arrAddTel = [];
	let arrVk = [];
	let arrEmail = [];
	let arrFb = [];

	let typeTel = [];
	let typeAddTel = [];
	let typeVk = [];
	let typeEmail = [];
	let typeFb = [];

  for(let i = 0; i < validateItem.contacts.length; i++) {
		contactObject = validateItem.contacts[i].type;
		switch (contactObject) {
			case 'Телефон':
				typeTel.push(contactObject);
				arrTel.push(validateItem.contacts[i].value)
				break;
			case 'Vk':
				typeVk.push(contactObject);
				arrVk.push(validateItem.contacts[i].value)
				break;
			case 'Email':
				typeEmail.push(contactObject);
				arrEmail.push(validateItem.contacts[i].value)
				break;
			case 'Доп. телефон':
				typeAddTel.push(contactObject);
				arrAddTel.push(validateItem.contacts[i].value)
				break;
			case 'Facebook':
				typeFb.push(contactObject);
				arrFb.push(validateItem.contacts[i].value)
				break;
		}
  }

	const telIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<g opacity="0.7">` + `<circle cx="8" cy="8" r="8" fill="#9873FF"/>` + `<path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>` + `</g>` + `</svg>`;
	const addTelIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<g opacity="0.7">` + `<circle cx="8" cy="8" r="8" fill="#9873FF"/>` + `<path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>` + `</g>` + `</svg>`;
	const emailIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>` + `</svg>`
	const fbIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/>` + `</svg>`
	const vkIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>` + `</svg>`

	function PopupLink(type: string, value: string, icon: string) {
		const iconItem = document.createElement('span');
		const popup = document.createElement('span');
		const link = document.createElement('a');
		switch (type) {
			case 'Телефон':
				link.href = `tel:${value}`;
				break;
			case 'Доп. телефон':
				link.href = `tel:${value}`;
				break;
			case 'Vk':
				link.href = `${value}`;
				break;
			case 'Facebook':
				link.href = `${value}`;
				break;
			case 'Email':
				link.href = `mailto::${value}`;
				break;
		}
		link.classList.add('clients__link-contact')
		popup.classList.add('clients__popup');
		iconItem.classList.add('clients__icon-contacts', 'clients__marker');

		iconItem.innerHTML = icon;

		link.tabIndex = 1;
		iconItem.tabIndex = 0;

		link.append(value);
		popup.append(`${type}: `, link);
		iconItem.append(popup);
		containerIcon.append(iconItem);
		contact.append(containerIcon);
		return link
	}

	for(let i = 0; i < arrTel.length; i++) {
		PopupLink(typeTel[i], arrTel[i], telIcon);
	}
	for(let i = 0; i < arrAddTel.length; i++) {
		PopupLink(typeAddTel[i], arrAddTel[i], addTelIcon);
	}
	for(let i = 0; i < arrVk.length; i++) {
		PopupLink(typeVk[i], arrVk[i], vkIcon);
	}
	for(let i = 0; i < arrEmail.length; i++) {
		PopupLink(typeEmail[i], arrEmail[i], emailIcon);
	}
	for(let i = 0; i < arrFb.length; i++) {
		PopupLink(typeFb[i], arrFb[i], fbIcon);
	}

	// ==============================================================

	let createGetYear = '';
	let createGetMonth = '';
	let createGetDay = '';
	let updateGetYear = '';
	let updateGetMonth = '';
	let updateGetDay = '';
	let createTime = '';
	let createEditTime = '';

	createGetYear = validateItem.createdAt.substr(0, 4);
	createGetMonth = validateItem.createdAt.substr(5, 2);
	createGetDay = validateItem.createdAt.substr(8, 2);
	updateGetYear = validateItem.updatedAt.substr(0, 4);
	updateGetMonth = validateItem.updatedAt.substr(5, 2);
	updateGetDay = validateItem.updatedAt.substr(8, 2);
	createTime = validateItem.createdAt.substr(11, 5);
	createEditTime = validateItem.updatedAt.substr(11, 5);

	id.innerHTML = validateItem.id;
	fullName.innerHTML = validateItem.name.trim() + ' ' + validateItem.surname.trim() + ' ' + validateItem.lastName.trim();
	spanDate.innerHTML = createGetDay + '.' + createGetMonth + '.' + createGetYear;
	spanEdit.innerHTML = updateGetDay + '.' + updateGetMonth + '.' + updateGetYear;
	spanTimeEdit.innerHTML = createTime;
	spanTimeNow.innerHTML = createEditTime;
	spanPenIcon.innerHTML = `<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<path d="M0 10.5V13H2.5L9.87333 5.62662L7.37333 3.12662L0 10.5ZM11.8067 3.69329C12.0667 3.43329 12.0667 3.01329 11.8067 2.75329L10.2467 1.19329C9.98667 0.933291 9.56667 0.933291 9.30667 1.19329L8.08667 2.41329L10.5867 4.91329L11.8067 3.69329Z" fill="#9873FF"/>` + `</svg>`
	spanDeleteIcon.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">` + `<path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#F06A4D"/>` + `</svg>`
	moveChange.innerHTML = 'Изменить';
	moveDelete.innerHTML = 'Удалить';

  // * Форма удаления клиента

	moveDelete.addEventListener('click', (e: any) => {
		e.preventDefault();
		let html = document.documentElement;
		let scrollPosition = trackClick[trackClick.length - 1];
		html.style.top = -scrollPosition + "px";
		window.scrollTo(0, scrollPosition);
		let marginSize = window.innerWidth - html.clientWidth;
		if (marginSize) {
			html.style.marginRight = marginSize + "px";
		}
		html?.classList.add('is'); 
		containerMain?.append(deleteItemTable.externalContModal);
	});

	moveChange.addEventListener('click', (e: any) => {
		e.preventDefault();
		let html = document.documentElement;
		let scrollPosition = trackClick[trackClick.length - 1];
		html.style.top = -scrollPosition + "px";
		window.scrollTo(0, scrollPosition);
		let marginSize = window.innerWidth - html.clientWidth;
		if (marginSize) {
			html.style.marginRight = marginSize + "px";
		}
		html?.classList.add('is');
	});

	// * Форма(кнопка) изменения клиента

	moveChange.addEventListener('click', async (e: any) => {

		// * Передаем параметры в окно для изменений

		const response = await fetch(`http://localhost:3000/api/clients/${id.innerHTML}`);
		const result = await response.json();

		// * Передаем аргументы в форму для автоматического заполнения в Изменить данные

		changeModalWindow.id.innerHTML = 'ID: ' + result.id;
		changeModalWindow.inputSurname.value = result.surname;
		changeModalWindow.inputName.value = result.name;
		changeModalWindow.inputMiddlename.value = result.lastName;

		for(let i = 0; i < result.contacts.length; i++) {
			changeModalWindow.createSelect(result.contacts[i].type, result.contacts[i].value).containerContacts;
		}

		// ====================================================

		containerMain?.append(changeModalWindow.externalContModal);
	});

	CloseModal(changeModalWindow, moveChange);
	CloseModal(deleteItemTable, moveDelete);

	// * Кнопка удаления в форме удаления клиента

	deleteItemTable.btnDeleteForm.addEventListener('click', async (e: any) => {
		e.preventDefault();

		const response = await fetch(`http://localhost:3000/api/clients/${id.innerHTML}`, {
			method: 'DELETE'
		});
		await response.json();

		titleRow.remove();
		deleteItemTable.externalContModal.remove();
	});

	// * Добавляем доп подтверждение на кнопку 'Удалить клиента' в форме изменить данные

	changeModalWindow.btnDeleteForm.addEventListener('click', (e: any) => {
		e.preventDefault();
		containerMain?.append(deleteItemTable.externalContModal);
	});

	// * Кнопка отмена в форме удаления клиента

	deleteItemTable.btnExitForm.addEventListener('click', (e: any) => {
		e.preventDefault();
		containerMain?.removeChild(deleteItemTable.externalContModal);
	});

	// * Кнопка сохранения изменений в модальном окне "Изменить"

	changeModalWindow.btnDoneForm.addEventListener('click', async (e: any) => {
		e.preventDefault();

		const dataItemType: string[] = [];
		const dataItemValue: string[] = [];
		let typeArr: any;
		let valueArr: any;
		let obj: ObjectItem;

		typeArr = document.querySelectorAll(`.choices__item[aria-selected='true']` && '.is-highlighted');
		valueArr = document.querySelectorAll('.clients__input-contacts');

		typeArr.forEach((item: any) => {
			dataItemType.push(item.innerHTML);
		});

		valueArr.forEach((item: any) => {
			dataItemValue.push(item.value);
		});

		let arr: object[] = [];

		for(let i = 0; i < dataItemType.length; i++) {
			obj = {
				type: dataItemType[i],
				value: dataItemValue[i],
			}
			arr.push(obj);
		}

		const response = await fetch(`http://localhost:3000/api/clients/${id.innerHTML}`, {
			method: 'PATCH',
			body: JSON.stringify({
				name: changeModalWindow.inputName.value,
				surname: changeModalWindow.inputSurname.value,
				lastName: changeModalWindow.inputMiddlename.value,
				contacts: arr
			})
		});
		const result = await response.json();
	})

	// ==================================================================

	moveChange.append(spanPenIcon);
	move.append(moveChange);
	moveDelete.append(spanDeleteIcon);
	move.append(moveDelete);
	createDate.append(spanDate);
	lastEdit.append(spanEdit);
	createDate.append(spanTimeEdit);
	lastEdit.append(spanTimeNow);
	titleRow.append(id);
	titleRow.append(fullName);
	titleRow.append(createDate);
	titleRow.append(lastEdit);
	titleRow.append(contact);
	titleRow.append(move);

	return {
		titleRow,
		id,
		fullName,
		createDate,
		moveChange,
		moveDelete
	}

}

export default CreateBodyTable;
