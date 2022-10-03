function CloseModal(modal: any, btn: any) {
	let y: any = []
	document.addEventListener('mouseup', (e: any) => {
		const clickForm = e.composedPath().includes(modal.internalContModal);
		const clickBtn = e.composedPath().includes(btn);
		if(!clickForm && !clickBtn) {
			let scrollPosition = window.pageYOffset;
			modal.externalContModal.remove();
			let html = document.documentElement;
			html?.classList.remove('is');
			y.push(scrollPosition);
			html.style.top = -y[0] + "px";
			window.scrollTo(0, y[0]);
			html.style.marginRight = "";
			html.style.top = "";
			y.length = 0;
		} else {
			let html = document.documentElement;
			let marginSize = window.innerWidth - html.clientWidth;
			if (marginSize) {
				html.style.marginRight = marginSize + "px";
			}
			let scrollPosition = window.pageYOffset;
			y.push(scrollPosition);
			// console.log(y)
			html.style.top = -y[0] + "px";
			window.scrollTo(0, y[0]);
			html?.classList.add('is');
		};
	});
	return y
};

export default CloseModal;
