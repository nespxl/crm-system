import CreateBodyTable from "../component/CreateBodyTable.js";
function ClickSort(table, headerTable, itemTableList) {
    let flagName = true;
    const arrSort = [];
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
            console.log(index, arrSort[i].trim(), arr2[index]);
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
            console.log(index, arrSort[i].trim(), arr2[index]);
            table.append(arr2[index]);
            arr1[index] = ' ';
        }
        flagName = true;
    }
}
export default ClickSort;
