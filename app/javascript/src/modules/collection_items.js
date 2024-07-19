

export default {
    init: function() {
        let collectionWrapper = document.getElementById("collection-items-list")
        let collectionPagesWrapper = document.getElementById("collection-items-paginator")
        if(!collectionWrapper) return

        const itemsPerPage = 99
        let currentPage = 0
        const items = Array.from(collectionWrapper.children)
        let currPage = []
        let pages = []
        let count = 1

        for(let i = 0; i < items.length; i++) {
            currPage.push(items[i])
            if(count == itemsPerPage) {
                pages.push(currPage)
                currPage = []
                count = 0
            }
            count += 1
        }
        if (currPage.length) pages.push(currPage)
        
        function showPage(page) {
            /*const startIndex = page * itemsPerPage
            const endIndex = startIndex + itemsPerPage
            items.forEach((item, index) => {
              if (index < startIndex || index >= endIndex) {
                item.style.display = "none"
              } else {
                item.style.display = "block"
              }
            })*/
            collectionWrapper.innerHTML = ''
            console.log(pages[page])
            for (let node of pages[page]) collectionWrapper.appendChild( node )
            updateActiveButtonStates()
        }

        function createPageButtons() {
            const totalPages = pages.length
            for (let i = 0; i < totalPages; i++) {
                const pageButton = document.createElement('li')
                pageButton.className = "page-item"
                pageButton.innerHTML = "<span class='page-link'>" + (i + 1) + "</span>"
                pageButton.addEventListener('click', () => {
                    currentPage = i
                    showPage(currentPage)
                    updateActiveButtonStates()
                })
                collectionPagesWrapper.appendChild(pageButton)
            }
        }
          
        function updateActiveButtonStates() {
            const pageButtons = document.querySelectorAll('.pagination button')
            pageButtons.forEach((button, index) => {
              if (index === currentPage) {
                button.classList.add('active')
              } else {
                button.classList.remove('active')
              }
            })
        }
          
        createPageButtons() // Call this function to create the page buttons initially
        showPage(currentPage)
    }
}