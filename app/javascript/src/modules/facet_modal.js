export default {
    init: function() {
        let facetTriggers = document.getElementsByClassName("facet-modal-override")
        if(!facetTriggers) return
        console.log(facetTriggers)
        for(let facetTrigger of facetTriggers) {
            let modalDiv = facetTrigger.getElementsByClassName("facet-modal-wrapper")[0]
            const $elems = facetTrigger.querySelectorAll('a')
            var elems = Array.from($elems)
                elems.map(a => {
                    a.onclick = (e) => {
                        e.preventDefault()
                        setModalContent(a.href, modalDiv)
                    }
                })
        }
    }
}