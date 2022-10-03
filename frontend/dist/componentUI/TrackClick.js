function TrackClick(modal) {
    let clickPuf = [];
    document.addEventListener('mouseup', (e) => {
        e.preventDefault();
        const form = e.composedPath().includes(modal);
        if (!form) {
            let scrollPosition = window.pageYOffset;
            clickPuf.push(scrollPosition);
        }
        else {
            let html = document.documentElement;
            html === null || html === void 0 ? void 0 : html.classList.add('is');
        }
    });
    return clickPuf;
}
;
export default TrackClick;
