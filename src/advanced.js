(function () {
    // An array of Objects, similar to database records we will eventually be dealing with.
    const mockDatabase = [
        {_id: '123', name: 'Article 1', published: true},
        {_id: '583', name: 'Article 2', published: true},
        {_id: '954', name: 'Article 3', published: false},
        {_id: '384', name: 'Article 4', published: false},
        {_id: '183', name: 'Article 5', published: true},
        {_id: '007', name: 'Article 6', published: false},
        {_id: '304', name: 'Article 7', published: true},
        {_id: '729', name: 'Article 8', published: false},
        {_id: '734', name: 'Article 9', published: true},
    ];

    function renderList(results) {
        const tableBody = document.querySelector('#results-table tbody');

        // clear out inner HTML to get rid of any older results
        tableBody.innerHTML = '';
        // Map each database record to a string containing the HTML for it's row
        const tableRows = results.map((result, index) => {
            return `<tr><td>${index}</td><td>${result.name}</td><td>${result._id}</td><td>${result.published}</td></tr>`;
        });
        // Set the contents of the table body to the new set of rendered HTML rows
        tableRows.forEach((row) => {
            tableBody.innerHTML += row; // += adds to HTML instead of overwriting it entirely.
        });
    }

    renderList(mockDatabase);

    // Function to Order results list
    function orderBy(sortValue) {
        // Sort method varies based on what type of value we're sorting
        const sortedResults = (sortValue === 'name')
            ? mockDatabase.sort((a, b) => { // Strings need to be sorted in a slightly more compldex way
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                // Sorts alphabetically.  -1 puts it before. 1 puts it after
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            })
            : mockDatabase.sort((a, b) => { // Numbers a booleans are much simpler.
                // Just need postive or negative number
                // Object properties can be accessed through a string representing their name
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }
    // Change events trigger after the value of a form input changes
    document.querySelector('#orderBy').addEventListener('change', (event) => {
        // Event is the JavaScript event that transpired, in our change a CHANGE event.
        // Target is the element it was performed on, useful for when the event targets
        // multiple elements.
        // Value has the name implies is the current value of the input element, if there is one
        orderBy(event.target.value);
    });

    // Function to filter out unpublished results
    function togglePublished(showPublished) {
        // If showPublished is TRUE, only display published results
        // Filter will only inclue objects that return TRUE from it's query
        const filteredResults = mockDatabase.filter((result) => {
            // If showPublished is TRUE, always show.
            // Otherweise only show if published is TRUE
            return showPublished || result.published;
        });
        renderList(filteredResults);
    }
    // Change events trigger after the value of a form input changes
    document.querySelector('#published').addEventListener('change', (event) => {
        // in this case value is a string that we need to convert to a boolean
        const value = event.target.value === 'true';
        togglePublished(value);
    });
}()); // Wrap entire file in self executing function.
// Keeping all variables declared in this file inside a local scope.
