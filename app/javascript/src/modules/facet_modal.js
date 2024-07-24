
export default {
    init: function() {
        let facetTriggers = document.getElementsByClassName("facet-modal-override")
        console.log(facetTriggers)
        if(!facetTriggers) return
        for(let facetTrigger of facetTriggers) {
            const $elems = facetTrigger.querySelectorAll('a')
            var elems = Array.from($elems)
                elems.map(a => {
                    a.onclick = (e) => {
                        e.preventDefault()
                        fetch(a.href)
                            .then((response) => {
                                // When the page is loaded convert it to text
                                return response.text()
                            })
                            .then((html) => {
                                // more_#{@facet_field.key}_html
                                // data-blacklight-modal="container"
                                let doc = new DOMParser().parseFromString(html, "text/html")
                                let divs = doc.querySelectorAll('[data-blacklight-modal="container"]')
                                let modalDiv = facetTrigger.getElementsByClassName("facet-modal-wrapper")[0]
                                modalDiv.innerHTML = `
                                <div class="modal" tabindex="-1">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            ${divs[0].getHTML()}
                                        </div>
                                    </div>
                                </div>
                                `
                                let modalDissmissButtons = modalDiv.getElementsByTagName('button')
                                console.log("div", modalDissmissButtons[0], modalDissmissButtons[0].getHTML() )
                                modalDissmissButtons[0].onclick = (e) => {
                                    modalDiv.innerHTML = ''
                                }
                            })
                    }
                })
        }
    }
}