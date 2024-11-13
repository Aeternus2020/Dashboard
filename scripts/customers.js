// Main function to manage the customer list
async function customers() {

    // Find the main page and exit if not found
    const customersPage = document.querySelector('.customers')
    if (!customersPage) {
        console.log("Customers page not found. Exiting...")
        return
    }

    // Find the container for customer cards, the search input, and create the loading element
    const cardsContainer = customersPage.querySelector('.customers__cards')
    const searchInput = customersPage.querySelector('.customers__title-search-input')
    const loadingElement = createLoadingElement(cardsContainer)

    // Load the customer data asynchronously
    const customersData = await loadCustomers()
    let currentCustomersPage = 0 // Start at the first page
    const pageSize = 8 // Number of customers per page
    let showActiveOnly = false // Filter for active customers only
    let searchQuery = '' // Search query to filter customers

    // Function to create and return a loading element
    function createLoadingElement(container) {
        const loading = document.createElement('div')
        loading.classList.add('loading')
        loading.textContent = " "
        container.appendChild(loading)
        return loading
    }

    // Filter customers based on the status (active/inactive) and search query
    function filterCustomers() {
        return customersData.filter(c =>
            (!showActiveOnly || c.status === "Active") &&  // Filter by active status
            (c.name.toLowerCase().includes(searchQuery) ||  // Search in name, company, phone, email, country, status
                c.company.toLowerCase().includes(searchQuery) ||
                c.phone.toLowerCase().includes(searchQuery) ||
                c.email.toLowerCase().includes(searchQuery) ||
                c.country.toLowerCase().includes(searchQuery) ||
                c.status.toLowerCase().includes(searchQuery))
        )
    }

    // Left and right arrows for pagination
    const leftArrow = '<svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.936 6.392L0.176 3.668L2.936 0.944H4.664L1.892 3.668L4.664 6.392H2.936Z" fill="#404B52"/></svg>'
    const rightArrow = '<svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.344 0.944H2.072L4.832 3.668L2.072 6.392H0.344L3.116 3.668L0.344 0.944Z" fill="#404B52"/></svg>'

    // Render the pagination buttons
    function renderPagination(filteredCustomers) {
        const paginationButtonsContainer = customersPage.querySelector('.customers__pagination-buttons')
        const totalPages = Math.ceil(filteredCustomers.length / pageSize) // Calculate the total number of pages
        const start = currentCustomersPage * pageSize
        const end = Math.min(start + pageSize, filteredCustomers.length)

        paginationButtonsContainer.innerHTML = '' // Clear previous pagination buttons

        // Add the left arrow button
        paginationButtonsContainer.appendChild(createPageButton(leftArrow, currentCustomersPage > 0, () => changePage(currentCustomersPage - 1)))

        // Determine the range of visible page buttons
        const maxVisibleButtons = 4
        let startPage = Math.max(0, currentCustomersPage - 1)
        let endPage = Math.min(totalPages, currentCustomersPage + 2)

        if (currentCustomersPage < 2) {
            endPage = Math.min(maxVisibleButtons, totalPages)
        } else if (currentCustomersPage > totalPages - 3) {
            startPage = Math.max(totalPages - maxVisibleButtons, 0)
        }

        // Show first page button and ellipsis if necessary
        if (startPage > 0) {
            paginationButtonsContainer.appendChild(createPageButton(1, true, () => changePage(0)))
            if (startPage > 1) {
                paginationButtonsContainer.appendChild(createEllipsis())
            }
        }

        // Add page buttons for the visible range
        for (let i = startPage; i < endPage; i++) {
            paginationButtonsContainer.appendChild(createPageButton(i + 1, true, () => changePage(i)))
        }

        // Show ellipsis and last page button if necessary
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                paginationButtonsContainer.appendChild(createEllipsis())
            }
            paginationButtonsContainer.appendChild(createPageButton(totalPages, true, () => changePage(totalPages - 1)))
        }

        // Add the right arrow button
        paginationButtonsContainer.appendChild(createPageButton(rightArrow, currentCustomersPage < totalPages - 1, () => changePage(currentCustomersPage + 1)))

        // Update the pagination text with the current range and total entries
        const paginationText = customersPage.querySelector('.customers__pagination-text')
        paginationText.textContent = `Showing data ${start + 1} to ${end} of ${filteredCustomers.length} entries`
    }

    // Function to create a page button
    function createPageButton(content, isEnabled = true, onClick) {
        const button = document.createElement('button')
        button.classList.add('customers__pagination-button')
        button.disabled = !isEnabled

        // If content is an SVG (arrow), set innerHTML, else set text
        if (typeof content === 'string' && content.includes('<svg')) {
            button.innerHTML = content
        } else {
            button.textContent = content
        }

        // Mark the active page button
        if (content === currentCustomersPage + 1) {
            button.classList.add('active')
        }

        // Attach the click event handler
        button.addEventListener('click', onClick)
        return button
    }

    // Function to create ellipsis button for pagination
    function createEllipsis() {
        const ellipsis = document.createElement('span')
        ellipsis.classList.add('pagination__ellipsis')
        ellipsis.textContent = '...'
        return ellipsis
    }

    // Function to render customer cards
    function renderCustomers() {
        if (!cardsContainer) return

        const filteredCustomers = filterCustomers()
        cardsContainer.innerHTML = '' // Clear the current customer cards
        const start = currentCustomersPage * pageSize
        const end = Math.min(start + pageSize, filteredCustomers.length)

        // Add the filtered customers to the container
        filteredCustomers.slice(start, end).forEach(customer => {
            const card = createCustomerCard(customer)
            cardsContainer.appendChild(card)
        })

        // Render pagination and hide loading element
        renderPagination(filteredCustomers)
        loadingElement.style.display = 'none'
    }

    // Function to create a customer card with details
    function createCustomerCard(customer) {
        const card = document.createElement('div')
        card.classList.add('customers__card')
        card.innerHTML = `
            <div class="customers__card-body">
                <p class="customers__card name">${customer.name}</p>
                <p class="customers__card company">${customer.company}</p>
                <p class="customers__card phone">${customer.phone}</p>
                <p class="customers__card email">${customer.email}</p>
                <p class="customers__card country">${customer.country}</p>
                <div class='customers__card status'>
                    <div class='${customer.status}'>${customer.status}</div>
                </div>
            </div>
        `
        return card
    }

    // Function to change the current page when clicking a pagination button
    function changePage(page) {
        const filteredCustomers = filterCustomers()
        const totalPages = Math.ceil(filteredCustomers.length / pageSize)
        if (page >= 0 && page < totalPages) {
            currentCustomersPage = page
            renderCustomers()
        }
    }

    // Toggle buttons for "All" and "Active" customers
    const allButton = customersPage.querySelector('.customers__title-buttons-all')
    const activeButton = customersPage.querySelector('.customers__title-buttons-active')

    allButton.addEventListener('click', () => {
        showActiveOnly = false
        currentCustomersPage = 0
        activeButton.style.display = 'inline-block'
        renderCustomers()
    })

    activeButton.addEventListener('click', () => {
        showActiveOnly = true
        currentCustomersPage = 0
        activeButton.style.display = 'none'
        allButton.style.display = 'inline-block'
        renderCustomers()
    })

    // Event listener for the search input field
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase() // Update search query
        currentCustomersPage = 0 // Reset to the first page
        renderCustomers()
    })

    // Initial rendering of customers
    renderCustomers()
}

// Simulating asynchronous data loading
function loadCustomers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
                { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
                { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
                { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
                { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
                { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
                { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
                { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" },
                { name: "Steve Smith Steve Smith Steve Smith", company: "Amazon Amazon Amazon", phone: "(800) 555-01555556-6666-66665-547", email: "stevestevestevstevese@amazon.com", country: "USA USA USA USA USA", status: "Active" },
                { name: "Robert Brown", company: "Netflix", phone: "(800) 555-0200", email: "robert@netflix.com", country: "Canada", status: "Inactive" },
                { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
                { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
                { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
                { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
                { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
                { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
                { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
                { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
                { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
                { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" },
                { name: "Steve Smith", company: "Amazon", phone: "(800) 555-0147", email: "steve@amazon.com", country: "USA", status: "Active" },
                { name: "Robert Brown", company: "Netflix", phone: "(800) 555-0200", email: "robert@netflix.com", country: "Canada", status: "Inactive" },
                { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
                { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
                { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
                { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
                { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
                { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
                { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
                { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
                { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" },
                { name: "Steve Smith", company: "Amazon", phone: "(800) 555-0147", email: "steve@amazon.com", country: "USA", status: "Active" },
                { name: "Robert Brown", company: "Netflix", phone: "(800) 555-0200", email: "robert@netflix.com", country: "Canada", status: "Inactive" },
                { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
                { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
                { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
                { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
                { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
                { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
                { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" },
                { name: "Steve Smith", company: "Amazon", phone: "(800) 555-0147", email: "steve@amazon.com", country: "USA", status: "Active" },
                { name: "Robert Brown", company: "Netflix", phone: "(800) 555-0200", email: "robert@netflix.com", country: "Canada", status: "Inactive" },
                { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
                { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
                { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
                { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
                { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
                { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
                { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
                { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" },
                { name: "Steve Smith", company: "Amazon", phone: "(800) 555-0147", email: "steve@amazon.com", country: "USA", status: "Active" },
                { name: "Robert Brown", company: "Netflix", phone: "(800) 555-0200", email: "robert@netflix.com", country: "Canada", status: "Inactive" },
                { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
                { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
                { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
                { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
                { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
                { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
                { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
                { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" },
                { name: "Steve Smith", company: "Amazon", phone: "(800) 555-0147", email: "steve@amazon.com", country: "USA", status: "Active" },
                { name: "Robert Brown", company: "Netflix", phone: "(800) 555-0200", email: "robert@netflix.com", country: "Canada", status: "Inactive" },
                { name: "Robert Brown", company: "Netflix", phone: "(800) 555-0200", email: "robert@netflix.com", country: "Canada", status: "Inactive" },
                { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
                { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
                { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
                { name: "Robert Brown", company: "Netflix", phone: "(800) 555-0200", email: "robert@netflix.com", country: "Canada", status: "Inactive" },
                { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
                { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
                { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
                { name: "Robert Brown", company: "Netflix", phone: "(800) 555-0200", email: "robert@netflix.com", country: "Canada", status: "Inactive" },
                { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
                { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
                { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
                { name: "Robert Brown", company: "Netflix", phone: "(800) 555-0200", email: "robert@netflix.com", country: "Canada", status: "Inactive" },
                { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
                { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
                { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
            ])
        }, 1000)// Delay to simulate loading
    })
}

customers()
