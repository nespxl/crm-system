import TrackClick from "../componentUI/TrackClick.js";
function BlockClick(modal) {
    const trackClick = TrackClick(modal);
    document.addEventListener('click', (e) => {
        const clickForm = e.composedPath().includes(modal);
        if (clickForm) {
            const html = document.documentElement;
            let scrollPosition = trackClick[trackClick.length - 1];
            html.style.top = -scrollPosition + "px";
            let marginSize = window.innerWidth - html.clientWidth;
            if (marginSize) {
                html.style.marginRight = marginSize + "px";
            }
            html === null || html === void 0 ? void 0 : html.classList.add('is');
        }
        ;
    });
}
;
export default BlockClick;
