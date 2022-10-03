function TrackClick(modal: any) {
    let clickPuf: any = [];
    document.addEventListener('mouseup', (e: any) => {
        e.preventDefault();
        const form = e.composedPath().includes(modal)
        if(!form) {
            let scrollPosition = window.pageYOffset;
            clickPuf.push(scrollPosition);
        } else {
			let html = document.documentElement;
			html?.classList.add('is');
        }
	});
    return clickPuf;
};

export default TrackClick;
