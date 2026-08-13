// ========================================
// 1. Local biological resource database
// ========================================
// The main project idea is unchanged.
// Each object stores information about one biological resource.

const resources = [
    {
        name: "NCBI",
        category: "General Biological Database",
        keywords: [
            "dna",
            "sequence",
            "sequences",
            "gene",
            "genes",
            "nucleotide",
            "genome",
            "biological database"
        ],
        description:
            "A major starting point for biological sequence, gene, genome, and biomedical information.",
        url: "https://www.ncbi.nlm.nih.gov/"
    },
    {
        name: "NCBI BLAST",
        category: "Sequence Alignment",
        keywords: [
            "alignment",
            "sequence alignment",
            "blast",
            "dna alignment",
            "protein alignment",
            "similarity",
            "sequence"
        ],
        description:
            "A tool for comparing nucleotide or protein sequences and finding regions of similarity.",
        url: "https://blast.ncbi.nlm.nih.gov/Blast.cgi"
    },
    {
        name: "PubMed",
        category: "Scientific Literature",
        keywords: [
            "literature",
            "article",
            "articles",
            "paper",
            "papers",
            "publication",
            "publications",
            "biomedical literature"
        ],
        description:
            "A resource for searching citations and abstracts from biomedical and life sciences literature.",
        url: "https://pubmed.ncbi.nlm.nih.gov/"
    },
    {
        name: "UniProt",
        category: "Protein Resource",
        keywords: [
            "protein",
            "proteins",
            "protein sequence",
            "protein function",
            "annotation",
            "amino acid"
        ],
        description:
            "A widely used resource for protein sequences and functional information.",
        url: "https://www.uniprot.org/"
    },
    {
        name: "Ensembl",
        category: "Genome Browser",
        keywords: [
            "genome",
            "genome browser",
            "gene",
            "genes",
            "annotation",
            "variant",
            "chromosome"
        ],
        description:
            "A genome resource for exploring genes, genomic regions, annotations, and related data.",
        url: "https://www.ensembl.org/"
    },
    {
        name: "RCSB Protein Data Bank",
        category: "Structural Biology",
        keywords: [
            "protein",
            "structure",
            "protein structure",
            "3d structure",
            "pdb",
            "structural biology",
            "macromolecule"
        ],
        description:
            "A resource for exploring three-dimensional structures of biological macromolecules.",
        url: "https://www.rcsb.org/"
    },
    {
        name: "European Nucleotide Archive",
        category: "Nucleotide & Sequencing Data",
        keywords: [
            "dna",
            "sequence",
            "sequences",
            "nucleotide",
            "sequencing",
            "sequencing data",
            "raw reads",
            "assembly",
            "ena"
        ],
        description:
            "An archive for nucleotide sequence data, including raw reads, assemblies, and annotations.",
        url: "https://www.ebi.ac.uk/ena/browser/"
    },
    {
        name: "UCSC Genome Browser",
        category: "Genome Browser",
        keywords: [
            "genome",
            "genome browser",
            "gene",
            "annotation",
            "tracks",
            "chromosome",
            "genomic region"
        ],
        description:
            "A browser for visualizing genomic regions together with many annotation tracks.",
        url: "https://genome.ucsc.edu/"
    },
    {
        name: "InterPro",
        category: "Protein Families & Domains",
        keywords: [
            "protein",
            "proteins",
            "domain",
            "domains",
            "protein family",
            "families",
            "function",
            "functional analysis"
        ],
        description:
            "A protein resource for exploring families, domains, and important functional sites.",
        url: "https://www.ebi.ac.uk/interpro/"
    },
    {
        name: "KEGG",
        category: "Pathways & Biological Systems",
        keywords: [
            "pathway",
            "pathways",
            "metabolism",
            "gene",
            "genes",
            "biological pathway",
            "network",
            "kegg"
        ],
        description:
            "A biological resource for exploring pathways, molecular networks, genes, and related biological systems.",
        url: "https://www.kegg.jp/"
    },
    {
        name: "NCBI Sequence Read Archive",
        category: "Sequencing Data",
        keywords: [
            "sequencing",
            "sequencing data",
            "raw reads",
            "reads",
            "sra",
            "high throughput sequencing",
            "ngs",
            "next generation sequencing"
        ],
        description:
            "An archive for high-throughput sequencing data, including raw sequencing reads.",
        url: "https://www.ncbi.nlm.nih.gov/sra"
    }
];


// ========================================
// 2. Select HTML elements
// ========================================

const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const resultsArea = document.querySelector("#resultsArea");
const quickSearchButtons = document.querySelectorAll(".quick-chip");
const exampleSearchButtons = document.querySelectorAll(".example-search");
const currentYear = document.querySelector("#currentYear");


// ========================================
// 3. Search the local resource array
// ========================================

function findMatchingResources(searchText) {
    const normalizedSearch = searchText.trim().toLowerCase();

    if (normalizedSearch === "") {
        return [];
    }

    const matchingResources = resources.filter(function (resource) {
        const searchableText = [
            resource.name,
            resource.category,
            resource.description,
            resource.keywords.join(" ")
        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(normalizedSearch);
    });

    return matchingResources;
}


// ========================================
// 4. Choose a visual category class
// ========================================
// This helper only changes the appearance of result cards.
// It does not change the search logic.

function getCategoryClass(resource) {
    const categoryText = resource.category.toLowerCase();

    if (categoryText.includes("alignment") || categoryText.includes("nucleotide")) {
        return "accent-sequence";
    }

    if (
        categoryText.includes("protein") &&
        !categoryText.includes("structural")
    ) {
        return "accent-protein";
    }

    if (categoryText.includes("genome")) {
        return "accent-genome";
    }

    if (categoryText.includes("literature")) {
        return "accent-literature";
    }

    if (categoryText.includes("structural")) {
        return "accent-structure";
    }

    if (categoryText.includes("sequencing data")) {
        return "accent-data";
    }

    if (categoryText.includes("pathway")) {
        return "accent-pathway";
    }

    return "accent-general";
}


// ========================================
// 5. Display matching resources
// ========================================

function displayResources(matchingResources, searchText) {
    resultsArea.innerHTML = "";

    if (matchingResources.length === 0) {
        resultsArea.innerHTML = `
            <div class="alert alert-warning" role="alert">
                <strong>No matching resource found.</strong>
                Try a broader term such as
                “protein”, “gene”, “sequence”, or “genome”.
            </div>
        `;
        return;
    }

    const heading = document.createElement("div");
    heading.className = "results-heading";

    heading.innerHTML = `
        <h2>Recommended resources</h2>
        <span class="result-count">
            ${matchingResources.length} resources found for “${searchText}”
        </span>
    `;

    const row = document.createElement("div");
    row.className = "row g-4";

    matchingResources.forEach(function (resource) {
        const column = document.createElement("div");
        column.className = "col-12 col-md-6 col-lg-4";

        const categoryClass = getCategoryClass(resource);

        // Show only a few keywords so the card stays clean.
        const keywordTags = resource.keywords
            .slice(0, 3)
            .map(function (keyword) {
                return `<span class="keyword-tag">#${keyword}</span>`;
            })
            .join("");

        column.innerHTML = `
            <article class="resource-record ${categoryClass}">
                <div class="resource-record-body">

                    <div class="resource-topline">
                        <h3 class="resource-name">
                            ${resource.name}
                        </h3>

                        <span class="badge-category">
                            ${resource.category}
                        </span>
                    </div>

                    <p class="resource-description">
                        ${resource.description}
                    </p>

                    <div class="resource-keywords">
                        ${keywordTags}
                    </div>

                    <a
                        class="resource-link"
                        href="${resource.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit Resource →
                    </a>

                </div>
            </article>
        `;

        row.appendChild(column);
    });

    resultsArea.appendChild(heading);
    resultsArea.appendChild(row);
}


// ========================================
// 6. Run one search
// ========================================

function runSearch(searchText) {
    const cleanSearchText = searchText.trim();

    if (cleanSearchText === "") {
        resultsArea.innerHTML = `
            <div class="alert alert-info" role="alert">
                Describe a biological task or data type first.
                For example: protein, alignment, genome, or literature.
            </div>
        `;
        return;
    }

    searchInput.value = cleanSearchText;

    const matchingResources = findMatchingResources(cleanSearchText);

    displayResources(matchingResources, cleanSearchText);
}


// ========================================
// 7. Main search form
// ========================================

searchForm.addEventListener("submit", function (event) {
    // Prevent the form from reloading the page.
    event.preventDefault();

    runSearch(searchInput.value);
});


// ========================================
// 8. Quick-search chips
// ========================================

quickSearchButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const searchText = button.dataset.search;

        quickSearchButtons.forEach(function (otherButton) {
            otherButton.classList.remove("active");
        });

        button.classList.add("active");

        runSearch(searchText);
    });
});


// ========================================
// 9. Example searches in the initial state
// ========================================

exampleSearchButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const searchText = button.dataset.search;

        runSearch(searchText);
    });
});


// ========================================
// 10. Current year in the footer
// ========================================

currentYear.textContent = new Date().getFullYear();
