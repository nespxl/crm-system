import CreateSearchHeader from './component/CreateSearchHeader.js';
import CreateTitleBlockTable from './component/CreateTitleBlockTable.js';
import CreateHeaderTable from './component/CreateHeaderTable.js';
import CreateChangeModalWindow from './component/CreateChangeModalWindow.js';
import CreateModalWindow from './component/CreateModalWindow.js';
import CreateBodyTable from './component/CreateBodyTable.js';
import CreatePushBtn from './component/CreatePushBtn.js';
import { ObjectItem, IValidateItem } from 'component/Interface.js';
import FilterArr from './componentUI/FilterArr.js';
import CloseModal from './componentUI/CloseModal.js';

(() => {

	document.addEventListener('DOMContentLoaded', async () => {
		const body = document.querySelector('.rr');
		const containerHeader = document.getElementById('header');
		const containerMain = document.getElementById('main');
		const searchHeader = CreateSearchHeader();
		const titleBlockTable = CreateTitleBlockTable();
		const table = document.createElement('table');
		const headerTable = CreateHeaderTable();
		const pushBtn = CreatePushBtn();
		const modalWindow = CreateModalWindow();
		const changeModalWindow = CreateChangeModalWindow();
		const dataItemType: string[] = [];
		const dataItemValue: string[] = [];
		let typeArr: any;
		let valueArr: any;
		let interval: any;
		let obj: ObjectItem;

		table.classList.add('clients__table')
		table.append(headerTable.titleRow);

		pushBtn.btn.addEventListener('click', () => {
			let html = document.documentElement;
			html?.classList.add('is');
			containerMain?.append(modalWindow.externalContModal);
		});
		modalWindow.closeIcon.addEventListener('click', () => {
			let html = document.documentElement;
			html?.classList.remove('is');
			containerMain?.removeChild(modalWindow.externalContModal);
		});
		changeModalWindow.closeIcon.addEventListener('click', () => {
			let html = document.documentElement;
			html?.classList.remove('is');
			containerMain?.removeChild(changeModalWindow.externalContModal);
		});
		modalWindow.btnDeleteForm.addEventListener('click', (e: any) => {
			e.preventDefault();
			let html = document.documentElement;
			html.tabIndex = -1;
			let marginSize = window.innerWidth - html.clientWidth;
			if (marginSize) {
				html.style.marginRight = marginSize + "px";
			}
			containerMain?.removeChild(modalWindow.externalContModal);
		});

		const pushItem = await fetch('http://localhost:3000/api/clients');
		const itemTableList = await pushItem.json();

		let ras: any = [];

		itemTableList.forEach((itemTable: any) => {
			const itemTableElement = CreateBodyTable(itemTable);
			ras.push(itemTableElement.titleRow);
			table.append(itemTableElement.titleRow);
		});

		let flagId = true;
		let flagName = true;
		let flagCreateDate = true;
		let flagUpdate = true;

		// * Сортировка по клику id

		headerTable.id.addEventListener('click', () => {
			const arrSort: any = [];
			flagName = false;
			flagCreateDate = false;
			flagUpdate = false;
			if(flagId) {
				const idArrow = document.querySelector('.clients__config-arrow-id');
				const nameArrow = document.querySelector('.clients__config-arrow-name');
				const createArrow = document.querySelector('.clients__config-arrow-create');
				const editArrow = document.querySelector('.clients__config-arrow-edit');
				idArrow?.classList.toggle('clients__config-arrow-id-active');
				nameArrow?.classList.remove('clients__config-arrow-name-active');
				createArrow?.classList.remove('clients__config-arrow-create-active');
				editArrow?.classList.remove('clients__config-arrow-edit-active');
				table.innerHTML = '';
				table.append(headerTable.titleRow);
				const arr1: any = [];
				const arr2: any = [];
				for(let i = 0; i < itemTableList.length; i++) {
					const itemTableElement = CreateBodyTable(itemTableList[i]);
					arrSort.push(itemTableElement.id.innerHTML);
					arr1.push(itemTableElement.id.innerHTML);
					arr2.push(itemTableElement.titleRow);
				}
				arrSort.sort((a: number, b: number) => b - a);
				for(let i = 0; i < arrSort.length; i++) {
					const index = arrSort.indexOf(arr1[i]);
					table.append(arr2[index]);
				}
				flagId = false;
			} else {
				const idArrow = document.querySelector('.clients__config-arrow-id');
				const nameArrow = document.querySelector('.clients__config-arrow-name');
				const createArrow = document.querySelector('.clients__config-arrow-create');
				const editArrow = document.querySelector('.clients__config-arrow-edit');
				idArrow?.classList.toggle('clients__config-arrow-id-active');
				nameArrow?.classList.remove('clients__config-arrow-name-active');
				createArrow?.classList.remove('clients__config-arrow-create-active');
				editArrow?.classList.remove('clients__config-arrow-edit-active');
				table.innerHTML = '';
				table.append(headerTable.titleRow);
				const arr1: any = [];
				const arr2: any = [];
				for(let i = 0; i < itemTableList.length; i++) {
					const itemTableElement = CreateBodyTable(itemTableList[i]);
					arrSort.push(itemTableElement.id.innerHTML);
					arr1.push(itemTableElement.id.innerHTML);
					arr2.push(itemTableElement.titleRow);
				}
				arrSort.sort((a: number, b: number) => a - b);
				for(let i = 0; i < arrSort.length; i++) {
					const index = arrSort.indexOf(arr1[i]);
					table.append(arr2[index]);
				}
				flagId = true;
			}
		});

		// * Сортировка по клику ФИО

		headerTable.name.addEventListener('click', () => {
			const arrSort: any = [];
			flagId = false;
			flagCreateDate = false;
			flagUpdate = false;
			if(flagName) {
				const idArrow = document.querySelector('.clients__config-arrow-id');
				const nameArrow = document.querySelector('.clients__config-arrow-name');
				const createArrow = document.querySelector('.clients__config-arrow-create');
				const editArrow = document.querySelector('.clients__config-arrow-edit');
				idArrow?.classList.add('clients__config-arrow-id-active', 'clients__config-arrow-id');
				nameArrow?.classList.toggle('clients__config-arrow-name-active');
				createArrow?.classList.remove('clients__config-arrow-create-active');
				editArrow?.classList.remove('clients__config-arrow-edit-active');
				table.innerHTML = '';
				table.append(headerTable.titleRow);
				const arr1: any = [];
				const arr2: any = [];
				for(let i = 0; i < itemTableList.length; i++) {
					const itemTableElement = CreateBodyTable(itemTableList[i]);
					arrSort.push(itemTableElement.fullName.innerHTML);
					arr1.push(itemTableElement.fullName.innerHTML);
					arr2.push(itemTableElement.titleRow);
				}
				arrSort.sort((a: any, b: any) => b.localeCompare(a))
				for(let i = 0; i < arrSort.length; i++) {
					const index = arr1.indexOf(arrSort[i]);
					// console.log(index, arrSort[i].trim(), arr2[index])
					table.append(arr2[index]);
					arr1[index] = ' ';
				}
				flagName = false;
			} else {
				const idArrow = document.querySelector('.clients__config-arrow-id');
				const nameArrow = document.querySelector('.clients__config-arrow-name');
				const createArrow = document.querySelector('.clients__config-arrow-create');
				const editArrow = document.querySelector('.clients__config-arrow-edit');
				idArrow?.classList.add('clients__config-arrow-id-active', 'clients__config-arrow-id');
				nameArrow?.classList.toggle('clients__config-arrow-name-active');
				createArrow?.classList.remove('clients__config-arrow-create-active');
				editArrow?.classList.remove('clients__config-arrow-edit-active');
				table.innerHTML = '';
				table.append(headerTable.titleRow);
				const arr1: any = [];
				const arr2: any = [];
				for(let i = 0; i < itemTableList.length; i++) {
					const itemTableElement = CreateBodyTable(itemTableList[i]);
					arrSort.push(itemTableElement.fullName.innerHTML);
					arr1.push(itemTableElement.fullName.innerHTML);
					arr2.push(itemTableElement.titleRow);
				}
				arrSort.sort();
				for(let i = 0; i < arrSort.length; i++) {
					const index = arr1.indexOf(arrSort[i]);
					// console.log(index, arrSort[i].trim(), arr2[index])
					table.append(arr2[index]);
					arr1[index] = ' ';
				}
				flagName = true;
			}
		});

		// * Сортировка по клику Дата и время создания

		headerTable.createDate.addEventListener('click', () => {
			const arrSort: any = [];
			flagName = false;
			flagId = false;
			flagUpdate = false;
			if(flagCreateDate) {
				const idArrow = document.querySelector('.clients__config-arrow-id');
				const nameArrow = document.querySelector('.clients__config-arrow-name');
				const createArrow = document.querySelector('.clients__config-arrow-create');
				const editArrow = document.querySelector('.clients__config-arrow-edit');
				idArrow?.classList.add('clients__config-arrow-id-active', 'clients__config-arrow-id');
				createArrow?.classList.toggle('clients__config-arrow-create-active');
				nameArrow?.classList.remove('clients__config-arrow-name-active');
				editArrow?.classList.remove('clients__config-arrow-edit-active');
				table.innerHTML = '';
				table.append(headerTable.titleRow);
				const arr1: any = [];
				const arr2: any = [];
				for(let i = 0; i < itemTableList.length; i++) {
					const itemTableElement = CreateBodyTable(itemTableList[i]);
					arrSort.push(itemTableElement.createDate.innerHTML);
					arr1.push(itemTableElement.createDate.innerHTML);
					arr2.push(itemTableElement.titleRow);
				}
				arrSort.sort((a: any, b: any) => b.localeCompare(a));
				for(let i = 0; i < arrSort.length; i++) {
					const index = arr1.indexOf(arrSort[i]);
					// console.log(index, arrSort[i].trim(), arr2[index])
					table.append(arr2[index]);
					arr1[index] = ' ';
				}
				flagCreateDate = false;
			} else {
				const idArrow = document.querySelector('.clients__config-arrow-id');
				const nameArrow = document.querySelector('.clients__config-arrow-name');
				const createArrow = document.querySelector('.clients__config-arrow-create');
				const editArrow = document.querySelector('.clients__config-arrow-edit');
				idArrow?.classList.add('clients__config-arrow-id-active', 'clients__config-arrow-id');
				createArrow?.classList.toggle('clients__config-arrow-create-active');
				nameArrow?.classList.remove('clients__config-arrow-name-active');
				editArrow?.classList.remove('clients__config-arrow-edit-active');
				table.innerHTML = '';
				table.append(headerTable.titleRow);
				const arr1: any = [];
				const arr2: any = [];
				for(let i = 0; i < itemTableList.length; i++) {
					const itemTableElement = CreateBodyTable(itemTableList[i]);
					arrSort.push(itemTableElement.createDate.innerHTML);
					arr1.push(itemTableElement.createDate.innerHTML);
					arr2.push(itemTableElement.titleRow);
				}
				arrSort.sort();
				for(let i = 0; i < arrSort.length; i++) {
					const index = arr1.indexOf(arrSort[i]);
					// console.log(index, arrSort[i].trim(), arr2[index])
					table.append(arr2[index]);
					arr1[index] = ' ';
				}
				flagCreateDate = true;
			}
		});

		// * Сортировка по клику Последние изменения

		headerTable.lastEdit.addEventListener('click', () => {
			const arrSort: any = [];
			flagName = false;
			flagCreateDate = false;
			flagId = false;
			if(flagUpdate) {
				const idArrow = document.querySelector('.clients__config-arrow-id');
				const nameArrow = document.querySelector('.clients__config-arrow-name');
				const createArrow = document.querySelector('.clients__config-arrow-create');
				const editArrow = document.querySelector('.clients__config-arrow-edit');
				idArrow?.classList.add('clients__config-arrow-id-active', 'clients__config-arrow-id');
				editArrow?.classList.toggle('clients__config-arrow-edit-active');
				nameArrow?.classList.remove('clients__config-arrow-name-active');
				createArrow?.classList.remove('clients__config-arrow-create-active');
				table.innerHTML = '';
				table.append(headerTable.titleRow);
				const arr1: any = [];
				const arr2: any = [];
				for(let i = 0; i < itemTableList.length; i++) {
					const itemTableElement = CreateBodyTable(itemTableList[i]);
					arrSort.push(itemTableElement.createDate.innerHTML);
					arr1.push(itemTableElement.createDate.innerHTML);
					arr2.push(itemTableElement.titleRow);
				}
				arrSort.sort((a: any, b: any) => b.localeCompare(a));
				for(let i = 0; i < arrSort.length; i++) {
					const index = arr1.indexOf(arrSort[i]);
					table.append(arr2[index]);
					arr1[index] = ' ';
				}
				flagUpdate = false;
			} else {
				const idArrow = document.querySelector('.clients__config-arrow-id');
				const nameArrow = document.querySelector('.clients__config-arrow-name');
				const createArrow = document.querySelector('.clients__config-arrow-create');
				const editArrow = document.querySelector('.clients__config-arrow-edit');
				idArrow?.classList.add('clients__config-arrow-id-active', 'clients__config-arrow-id');
				editArrow?.classList.toggle('clients__config-arrow-edit-active');
				nameArrow?.classList.remove('clients__config-arrow-name-active');
				createArrow?.classList.remove('clients__config-arrow-create-active');
				table.innerHTML = '';
				table.append(headerTable.titleRow);
				const arr1: any = [];
				const arr2: any = [];
				for(let i = 0; i < itemTableList.length; i++) {
					const itemTableElement = CreateBodyTable(itemTableList[i]);
					arrSort.push(itemTableElement.createDate.innerHTML);
					arr1.push(itemTableElement.createDate.innerHTML);
					arr2.push(itemTableElement.titleRow);
				}
				arrSort.sort();
				for(let i = 0; i < arrSort.length; i++) {
					const index = arr1.indexOf(arrSort[i]);
					table.append(arr2[index]);
					arr1[index] = ' ';
				}
				flagUpdate = true;
			}
		});

		// ============================================================================

		searchHeader.input.addEventListener('keyup', () => {
			clearTimeout(interval)
			interval = setTimeout(() => {
				FilterArr(searchHeader.input.value, table);
			}, 300);
		});    
	
		// =======================================================================================

		// * Закрываем модальное окно по клику вне формы(и инпут)

		CloseModal(modalWindow, pushBtn.btn);
		// CloseModal(modalWindow, modalWindow.closeIcon);

		// ====================================================================================

		modalWindow.internalContModal.addEventListener('submit', async (e: any) => {
			e.preventDefault();

			typeArr = document.querySelectorAll(`.choices__item[aria-selected='true']` && '.is-highlighted');
			valueArr = document.querySelectorAll('.clients__input-contacts');

			typeArr.forEach((item: any) => {
				dataItemType.push(item.innerHTML);
			});

			valueArr.forEach((item: any) => {
				dataItemValue.push(item.value);
			});

			let arr: any = [];

			for(let i = 0; i < dataItemType.length; i++) {
				obj = {
					type: dataItemType[i],
					value: dataItemValue[i],
				};
				arr.push(obj);
			};

			const response = await fetch('http://localhost:3000/api/clients', {
				method: 'POST',
				body: JSON.stringify({
					name: modalWindow.inputName.value,
					surname: modalWindow.inputSurname.value,
					lastName: modalWindow.inputMiddlename.value,
					contacts: arr,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const tableItem = await response.json();

			changeModalWindow.idTest.innerHTML = tableItem.id;

			const validateTrue: IValidateItem = {
				id: tableItem.id,
				name: tableItem.name,
				surname: tableItem.surname,
				lastName: tableItem.lastName,
				createdAt: tableItem.createdAt,
				updatedAt: tableItem.updatedAt,
				contacts: tableItem.contacts[0].type
			};

			const bodyTable = CreateBodyTable(validateTrue);

			// console.log(bodyTable.titleRow);

			table.append(bodyTable.titleRow);

		});

		containerHeader?.append(searchHeader.wrapperCont);
		containerHeader?.append(searchHeader.autocomplete());
		containerMain?.append(titleBlockTable);
		containerMain?.append(table);
		containerMain?.append(pushBtn.btnWrapper);

	});

})()
