var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import CreateSearchHeader from './component/CreateSearchHeader.js';
import CreateTitleBlockTable from './component/CreateTitleBlockTable.js';
import CreateHeaderTable from './component/CreateHeaderTable.js';
import CreateChangeModalWindow from './component/CreateChangeModalWindow.js';
import CreateModalWindow from './component/CreateModalWindow.js';
import CreateBodyTable from './component/CreateBodyTable.js';
import CreatePushBtn from './component/CreatePushBtn.js';
import FilterArr from './componentUI/FilterArr.js';
import CloseModal from './componentUI/CloseModal.js';
(() => {
    document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
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
        const dataItemType = [];
        const dataItemValue = [];
        let typeArr;
        let valueArr;
        let interval;
        let obj;
        table.classList.add('clients__table');
        table.append(headerTable.titleRow);
        pushBtn.btn.addEventListener('click', () => {
            let html = document.documentElement;
            html === null || html === void 0 ? void 0 : html.classList.add('is');
            containerMain === null || containerMain === void 0 ? void 0 : containerMain.append(modalWindow.externalContModal);
        });
        modalWindow.closeIcon.addEventListener('click', () => {
            let html = document.documentElement;
            html === null || html === void 0 ? void 0 : html.classList.remove('is');
            containerMain === null || containerMain === void 0 ? void 0 : containerMain.removeChild(modalWindow.externalContModal);
        });
        changeModalWindow.closeIcon.addEventListener('click', () => {
            let html = document.documentElement;
            html === null || html === void 0 ? void 0 : html.classList.remove('is');
            containerMain === null || containerMain === void 0 ? void 0 : containerMain.removeChild(changeModalWindow.externalContModal);
        });
        modalWindow.btnDeleteForm.addEventListener('click', (e) => {
            e.preventDefault();
            let html = document.documentElement;
            html.tabIndex = -1;
            let marginSize = window.innerWidth - html.clientWidth;
            if (marginSize) {
                html.style.marginRight = marginSize + "px";
            }
            containerMain === null || containerMain === void 0 ? void 0 : containerMain.removeChild(modalWindow.externalContModal);
        });
        const pushItem = yield fetch('http://localhost:3000/api/clients');
        const itemTableList = yield pushItem.json();
        let ras = [];
        itemTableList.forEach((itemTable) => {
            const itemTableElement = CreateBodyTable(itemTable);
            ras.push(itemTableElement.titleRow);
            table.append(itemTableElement.titleRow);
        });
        let flagId = true;
        let flagName = true;
        let flagCreateDate = true;
        let flagUpdate = true;
        headerTable.id.addEventListener('click', () => {
            const arrSort = [];
            flagName = false;
            flagCreateDate = false;
            flagUpdate = false;
            if (flagId) {
                const idArrow = document.querySelector('.clients__config-arrow-id');
                const nameArrow = document.querySelector('.clients__config-arrow-name');
                const createArrow = document.querySelector('.clients__config-arrow-create');
                const editArrow = document.querySelector('.clients__config-arrow-edit');
                idArrow === null || idArrow === void 0 ? void 0 : idArrow.classList.toggle('clients__config-arrow-id-active');
                nameArrow === null || nameArrow === void 0 ? void 0 : nameArrow.classList.remove('clients__config-arrow-name-active');
                createArrow === null || createArrow === void 0 ? void 0 : createArrow.classList.remove('clients__config-arrow-create-active');
                editArrow === null || editArrow === void 0 ? void 0 : editArrow.classList.remove('clients__config-arrow-edit-active');
                table.innerHTML = '';
                table.append(headerTable.titleRow);
                const arr1 = [];
                const arr2 = [];
                for (let i = 0; i < itemTableList.length; i++) {
                    const itemTableElement = CreateBodyTable(itemTableList[i]);
                    arrSort.push(itemTableElement.id.innerHTML);
                    arr1.push(itemTableElement.id.innerHTML);
                    arr2.push(itemTableElement.titleRow);
                }
                arrSort.sort((a, b) => b - a);
                for (let i = 0; i < arrSort.length; i++) {
                    const index = arrSort.indexOf(arr1[i]);
                    table.append(arr2[index]);
                }
                flagId = false;
            }
            else {
                const idArrow = document.querySelector('.clients__config-arrow-id');
                const nameArrow = document.querySelector('.clients__config-arrow-name');
                const createArrow = document.querySelector('.clients__config-arrow-create');
                const editArrow = document.querySelector('.clients__config-arrow-edit');
                idArrow === null || idArrow === void 0 ? void 0 : idArrow.classList.toggle('clients__config-arrow-id-active');
                nameArrow === null || nameArrow === void 0 ? void 0 : nameArrow.classList.remove('clients__config-arrow-name-active');
                createArrow === null || createArrow === void 0 ? void 0 : createArrow.classList.remove('clients__config-arrow-create-active');
                editArrow === null || editArrow === void 0 ? void 0 : editArrow.classList.remove('clients__config-arrow-edit-active');
                table.innerHTML = '';
                table.append(headerTable.titleRow);
                const arr1 = [];
                const arr2 = [];
                for (let i = 0; i < itemTableList.length; i++) {
                    const itemTableElement = CreateBodyTable(itemTableList[i]);
                    arrSort.push(itemTableElement.id.innerHTML);
                    arr1.push(itemTableElement.id.innerHTML);
                    arr2.push(itemTableElement.titleRow);
                }
                arrSort.sort((a, b) => a - b);
                for (let i = 0; i < arrSort.length; i++) {
                    const index = arrSort.indexOf(arr1[i]);
                    table.append(arr2[index]);
                }
                flagId = true;
            }
        });
        headerTable.name.addEventListener('click', () => {
            const arrSort = [];
            flagId = false;
            flagCreateDate = false;
            flagUpdate = false;
            if (flagName) {
                const idArrow = document.querySelector('.clients__config-arrow-id');
                const nameArrow = document.querySelector('.clients__config-arrow-name');
                const createArrow = document.querySelector('.clients__config-arrow-create');
                const editArrow = document.querySelector('.clients__config-arrow-edit');
                idArrow === null || idArrow === void 0 ? void 0 : idArrow.classList.add('clients__config-arrow-id-active', 'clients__config-arrow-id');
                nameArrow === null || nameArrow === void 0 ? void 0 : nameArrow.classList.toggle('clients__config-arrow-name-active');
                createArrow === null || createArrow === void 0 ? void 0 : createArrow.classList.remove('clients__config-arrow-create-active');
                editArrow === null || editArrow === void 0 ? void 0 : editArrow.classList.remove('clients__config-arrow-edit-active');
                table.innerHTML = '';
                table.append(headerTable.titleRow);
                const arr1 = [];
                const arr2 = [];
                for (let i = 0; i < itemTableList.length; i++) {
                    const itemTableElement = CreateBodyTable(itemTableList[i]);
                    arrSort.push(itemTableElement.fullName.innerHTML);
                    arr1.push(itemTableElement.fullName.innerHTML);
                    arr2.push(itemTableElement.titleRow);
                }
                arrSort.sort((a, b) => b.localeCompare(a));
                for (let i = 0; i < arrSort.length; i++) {
                    const index = arr1.indexOf(arrSort[i]);
                    table.append(arr2[index]);
                    arr1[index] = ' ';
                }
                flagName = false;
            }
            else {
                const idArrow = document.querySelector('.clients__config-arrow-id');
                const nameArrow = document.querySelector('.clients__config-arrow-name');
                const createArrow = document.querySelector('.clients__config-arrow-create');
                const editArrow = document.querySelector('.clients__config-arrow-edit');
                idArrow === null || idArrow === void 0 ? void 0 : idArrow.classList.add('clients__config-arrow-id-active', 'clients__config-arrow-id');
                nameArrow === null || nameArrow === void 0 ? void 0 : nameArrow.classList.toggle('clients__config-arrow-name-active');
                createArrow === null || createArrow === void 0 ? void 0 : createArrow.classList.remove('clients__config-arrow-create-active');
                editArrow === null || editArrow === void 0 ? void 0 : editArrow.classList.remove('clients__config-arrow-edit-active');
                table.innerHTML = '';
                table.append(headerTable.titleRow);
                const arr1 = [];
                const arr2 = [];
                for (let i = 0; i < itemTableList.length; i++) {
                    const itemTableElement = CreateBodyTable(itemTableList[i]);
                    arrSort.push(itemTableElement.fullName.innerHTML);
                    arr1.push(itemTableElement.fullName.innerHTML);
                    arr2.push(itemTableElement.titleRow);
                }
                arrSort.sort();
                for (let i = 0; i < arrSort.length; i++) {
                    const index = arr1.indexOf(arrSort[i]);
                    table.append(arr2[index]);
                    arr1[index] = ' ';
                }
                flagName = true;
            }
        });
        headerTable.createDate.addEventListener('click', () => {
            const arrSort = [];
            flagName = false;
            flagId = false;
            flagUpdate = false;
            if (flagCreateDate) {
                const idArrow = document.querySelector('.clients__config-arrow-id');
                const nameArrow = document.querySelector('.clients__config-arrow-name');
                const createArrow = document.querySelector('.clients__config-arrow-create');
                const editArrow = document.querySelector('.clients__config-arrow-edit');
                idArrow === null || idArrow === void 0 ? void 0 : idArrow.classList.add('clients__config-arrow-id-active', 'clients__config-arrow-id');
                createArrow === null || createArrow === void 0 ? void 0 : createArrow.classList.toggle('clients__config-arrow-create-active');
                nameArrow === null || nameArrow === void 0 ? void 0 : nameArrow.classList.remove('clients__config-arrow-name-active');
                editArrow === null || editArrow === void 0 ? void 0 : editArrow.classList.remove('clients__config-arrow-edit-active');
                table.innerHTML = '';
                table.append(headerTable.titleRow);
                const arr1 = [];
                const arr2 = [];
                for (let i = 0; i < itemTableList.length; i++) {
                    const itemTableElement = CreateBodyTable(itemTableList[i]);
                    arrSort.push(itemTableElement.createDate.innerHTML);
                    arr1.push(itemTableElement.createDate.innerHTML);
                    arr2.push(itemTableElement.titleRow);
                }
                arrSort.sort((a, b) => b.localeCompare(a));
                for (let i = 0; i < arrSort.length; i++) {
                    const index = arr1.indexOf(arrSort[i]);
                    table.append(arr2[index]);
                    arr1[index] = ' ';
                }
                flagCreateDate = false;
            }
            else {
                const idArrow = document.querySelector('.clients__config-arrow-id');
                const nameArrow = document.querySelector('.clients__config-arrow-name');
                const createArrow = document.querySelector('.clients__config-arrow-create');
                const editArrow = document.querySelector('.clients__config-arrow-edit');
                idArrow === null || idArrow === void 0 ? void 0 : idArrow.classList.add('clients__config-arrow-id-active', 'clients__config-arrow-id');
                createArrow === null || createArrow === void 0 ? void 0 : createArrow.classList.toggle('clients__config-arrow-create-active');
                nameArrow === null || nameArrow === void 0 ? void 0 : nameArrow.classList.remove('clients__config-arrow-name-active');
                editArrow === null || editArrow === void 0 ? void 0 : editArrow.classList.remove('clients__config-arrow-edit-active');
                table.innerHTML = '';
                table.append(headerTable.titleRow);
                const arr1 = [];
                const arr2 = [];
                for (let i = 0; i < itemTableList.length; i++) {
                    const itemTableElement = CreateBodyTable(itemTableList[i]);
                    arrSort.push(itemTableElement.createDate.innerHTML);
                    arr1.push(itemTableElement.createDate.innerHTML);
                    arr2.push(itemTableElement.titleRow);
                }
                arrSort.sort();
                for (let i = 0; i < arrSort.length; i++) {
                    const index = arr1.indexOf(arrSort[i]);
                    table.append(arr2[index]);
                    arr1[index] = ' ';
                }
                flagCreateDate = true;
            }
        });
        headerTable.lastEdit.addEventListener('click', () => {
            const arrSort = [];
            flagName = false;
            flagCreateDate = false;
            flagId = false;
            if (flagUpdate) {
                const idArrow = document.querySelector('.clients__config-arrow-id');
                const nameArrow = document.querySelector('.clients__config-arrow-name');
                const createArrow = document.querySelector('.clients__config-arrow-create');
                const editArrow = document.querySelector('.clients__config-arrow-edit');
                idArrow === null || idArrow === void 0 ? void 0 : idArrow.classList.add('clients__config-arrow-id-active', 'clients__config-arrow-id');
                editArrow === null || editArrow === void 0 ? void 0 : editArrow.classList.toggle('clients__config-arrow-edit-active');
                nameArrow === null || nameArrow === void 0 ? void 0 : nameArrow.classList.remove('clients__config-arrow-name-active');
                createArrow === null || createArrow === void 0 ? void 0 : createArrow.classList.remove('clients__config-arrow-create-active');
                table.innerHTML = '';
                table.append(headerTable.titleRow);
                const arr1 = [];
                const arr2 = [];
                for (let i = 0; i < itemTableList.length; i++) {
                    const itemTableElement = CreateBodyTable(itemTableList[i]);
                    arrSort.push(itemTableElement.createDate.innerHTML);
                    arr1.push(itemTableElement.createDate.innerHTML);
                    arr2.push(itemTableElement.titleRow);
                }
                arrSort.sort((a, b) => b.localeCompare(a));
                for (let i = 0; i < arrSort.length; i++) {
                    const index = arr1.indexOf(arrSort[i]);
                    table.append(arr2[index]);
                    arr1[index] = ' ';
                }
                flagUpdate = false;
            }
            else {
                const idArrow = document.querySelector('.clients__config-arrow-id');
                const nameArrow = document.querySelector('.clients__config-arrow-name');
                const createArrow = document.querySelector('.clients__config-arrow-create');
                const editArrow = document.querySelector('.clients__config-arrow-edit');
                idArrow === null || idArrow === void 0 ? void 0 : idArrow.classList.add('clients__config-arrow-id-active', 'clients__config-arrow-id');
                editArrow === null || editArrow === void 0 ? void 0 : editArrow.classList.toggle('clients__config-arrow-edit-active');
                nameArrow === null || nameArrow === void 0 ? void 0 : nameArrow.classList.remove('clients__config-arrow-name-active');
                createArrow === null || createArrow === void 0 ? void 0 : createArrow.classList.remove('clients__config-arrow-create-active');
                table.innerHTML = '';
                table.append(headerTable.titleRow);
                const arr1 = [];
                const arr2 = [];
                for (let i = 0; i < itemTableList.length; i++) {
                    const itemTableElement = CreateBodyTable(itemTableList[i]);
                    arrSort.push(itemTableElement.createDate.innerHTML);
                    arr1.push(itemTableElement.createDate.innerHTML);
                    arr2.push(itemTableElement.titleRow);
                }
                arrSort.sort();
                for (let i = 0; i < arrSort.length; i++) {
                    const index = arr1.indexOf(arrSort[i]);
                    table.append(arr2[index]);
                    arr1[index] = ' ';
                }
                flagUpdate = true;
            }
        });
        searchHeader.input.addEventListener('keyup', () => {
            clearTimeout(interval);
            interval = setTimeout(() => {
                FilterArr(searchHeader.input.value, table);
            }, 300);
        });
        CloseModal(modalWindow, pushBtn.btn);
        modalWindow.internalContModal.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
            e.preventDefault();
            typeArr = document.querySelectorAll(`.choices__item[aria-selected='true']` && '.is-highlighted');
            valueArr = document.querySelectorAll('.clients__input-contacts');
            typeArr.forEach((item) => {
                dataItemType.push(item.innerHTML);
            });
            valueArr.forEach((item) => {
                dataItemValue.push(item.value);
            });
            let arr = [];
            for (let i = 0; i < dataItemType.length; i++) {
                obj = {
                    type: dataItemType[i],
                    value: dataItemValue[i],
                };
                arr.push(obj);
            }
            ;
            const response = yield fetch('http://localhost:3000/api/clients', {
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
            const tableItem = yield response.json();
            changeModalWindow.idTest.innerHTML = tableItem.id;
            const validateTrue = {
                id: tableItem.id,
                name: tableItem.name,
                surname: tableItem.surname,
                lastName: tableItem.lastName,
                createdAt: tableItem.createdAt,
                updatedAt: tableItem.updatedAt,
                contacts: tableItem.contacts[0].type
            };
            const bodyTable = CreateBodyTable(validateTrue);
            table.append(bodyTable.titleRow);
        }));
        containerHeader === null || containerHeader === void 0 ? void 0 : containerHeader.append(searchHeader.wrapperCont);
        containerHeader === null || containerHeader === void 0 ? void 0 : containerHeader.append(searchHeader.autocomplete());
        containerMain === null || containerMain === void 0 ? void 0 : containerMain.append(titleBlockTable);
        containerMain === null || containerMain === void 0 ? void 0 : containerMain.append(table);
        containerMain === null || containerMain === void 0 ? void 0 : containerMain.append(pushBtn.btnWrapper);
    }));
})();
