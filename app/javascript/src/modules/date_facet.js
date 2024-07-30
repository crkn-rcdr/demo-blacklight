export default {
    init: function() {
        let rangeStart = document.getElementById("range_pub_date_si_begin")
        let rangeEnd = document.getElementById("range_pub_date_si_end")
        let textExplainer = document.querySelector("p.range.subsection.slider_js")
        if(!rangeStart || !rangeEnd || !textExplainer) return
        rangeStart.placeholder = "From year"
        rangeEnd.placeholder = "To year"
        textExplainer.innerHTML = "Or, enter a custom year range:"
    }
}