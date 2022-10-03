function CreateTitleBlockTable(title: string = 'Клиенты') {
	const h1 = document.createElement('h1');
	h1.classList.add('clients__title');
	h1.innerHTML = title;
	return h1;
}

export default CreateTitleBlockTable
