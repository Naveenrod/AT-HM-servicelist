// AT-HM Service List Lookup - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const riskFilter = document.getElementById('riskFilter');
    const statusFilter = document.getElementById('statusFilter');
    const resultsContainer = document.getElementById('resultsContainer');
    const resultCount = document.getElementById('resultCount');

    // Initialize the application
    init();

    function init() {
        // Populate category filter
        populateCategoryFilter();

        // Add event listeners
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        clearSearchBtn.addEventListener('click', clearSearch);
        categoryFilter.addEventListener('change', handleSearch);
        riskFilter.addEventListener('change', handleSearch);
        statusFilter.addEventListener('change', handleSearch);

        // Initial render
        renderResults(athmData);
    }

    // Populate category dropdown from data
    function populateCategoryFilter() {
        const categories = [...new Set(athmData.map(item => item.category))].sort();

        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    // Handle search and filter
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;
        const selectedRisk = riskFilter.value;
        const selectedStatus = statusFilter.value;

        // Toggle clear button visibility
        clearSearchBtn.classList.toggle('visible', searchTerm.length > 0);

        // Filter data
        const filteredData = athmData.filter(item => {
            // Search filter
            const matchesSearch = !searchTerm ||
                item.name.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm) ||
                item.category.toLowerCase().includes(searchTerm) ||
                (item.isoCode && item.isoCode.toLowerCase().includes(searchTerm)) ||
                (item.keywords && item.keywords.some(kw => kw.toLowerCase().includes(searchTerm)));

            // Category filter
            const matchesCategory = !selectedCategory || item.category === selectedCategory;

            // Risk filter
            const matchesRisk = !selectedRisk || item.riskLevel === selectedRisk;

            // Status filter
            const matchesStatus = !selectedStatus || item.status === selectedStatus;

            return matchesSearch && matchesCategory && matchesRisk && matchesStatus;
        });

        renderResults(filteredData);
    }

    // Clear search
    function clearSearch() {
        searchInput.value = '';
        clearSearchBtn.classList.remove('visible');
        handleSearch();
        searchInput.focus();
    }

    // Render results
    function renderResults(data) {
        if (data.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <h3>No items found</h3>
                    <p>Try adjusting your search terms or filters</p>
                </div>
            `;
            resultCount.textContent = '0 items';
            return;
        }

        resultCount.textContent = `${data.length} item${data.length !== 1 ? 's' : ''}`;

        resultsContainer.innerHTML = data.map(item => createResultCard(item)).join('');
    }

    // Create a result card HTML
    function createResultCard(item) {
        const riskBadge = getRiskBadge(item.riskLevel);
        const statusBadge = getStatusBadge(item.status);
        const cardClass = item.status === 'excluded' ? 'excluded' :
                         item.status === 'conditional' ? 'conditional' : '';

        return `
            <article class="result-card ${cardClass}">
                <div class="result-card-header">
                    <h3>${escapeHtml(item.name)}</h3>
                    <div class="result-card-badges">
                        ${riskBadge}
                        ${statusBadge}
                    </div>
                </div>
                <div class="result-card-category">${escapeHtml(item.category)}</div>
                <p class="result-card-description">${escapeHtml(item.description)}</p>
                ${item.conditions || item.isoCode ? `
                    <div class="result-card-details">
                        ${item.isoCode ? `<p><strong>ISO Code:</strong> ${escapeHtml(item.isoCode)}</p>` : ''}
                        ${item.conditions ? `<p><strong>Conditions:</strong> ${escapeHtml(item.conditions)}</p>` : ''}
                    </div>
                ` : ''}
            </article>
        `;
    }

    // Get risk level badge HTML
    function getRiskBadge(riskLevel) {
        const labels = {
            'low-risk': 'Low Risk',
            'under-advice': 'Under Advice',
            'prescribed': 'Prescribed'
        };
        return `<span class="badge ${riskLevel}">${labels[riskLevel] || riskLevel}</span>`;
    }

    // Get status badge HTML
    function getStatusBadge(status) {
        const labels = {
            'included': 'Included',
            'conditional': 'Conditional',
            'excluded': 'Excluded'
        };
        return `<span class="badge ${status}">${labels[status] || status}</span>`;
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Debounce function for search
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
});
