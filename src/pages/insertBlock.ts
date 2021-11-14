export default function(html: string, blockId: string) {
    const resultElem = document.getElementById(blockId);
    if(resultElem) {
        resultElem.innerHTML = html;
    }
}
