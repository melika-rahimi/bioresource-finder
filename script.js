// =====================================
// DATA: Biological Resources
// =====================================
// The app stays fully static. All searchable resource data lives in this
// local array, so GitHub Pages does not need an API or a server.

const resources = [

    {
        name: "NCBI Nucleotide",
        type: "Database",
        category: "Sequence & Alignment",
        keywords: ["DNA", "RNA", "nucleotide", "sequence", "FASTA", "GenBank"],
        tasks: ["find nucleotide sequences", "retrieve DNA or RNA records"],
        description: "Search nucleotide sequence records from several NCBI sequence collections.",
        url: "https://www.ncbi.nlm.nih.gov/nucleotide/",
        learnUrl: "https://www.ncbi.nlm.nih.gov/genbank/fastaformat",
        learnTitle: "Learn about FASTA sequence format"
    },
    {
        name: "GenBank",
        type: "Database",
        category: "Sequence & Alignment",
        keywords: ["DNA", "RNA", "nucleotide", "sequence", "GenBank", "submitted sequence"],
        tasks: ["find submitted nucleotide sequences", "explore public sequence records"],
        description: "NCBI's public archive of annotated DNA sequence records and related information.",
        url: "https://www.ncbi.nlm.nih.gov/genbank/"
    },
    {
        name: "NCBI RefSeq",
        type: "Database",
        category: "Sequence & Alignment",
        keywords: ["reference sequence", "RefSeq", "DNA", "RNA", "protein", "genome"],
        tasks: ["find reference sequences", "use curated or computationally generated reference records"],
        description: "A reference sequence collection for genomes, transcripts, and proteins.",
        url: "https://www.ncbi.nlm.nih.gov/refseq/"
    },
    {
        name: "NCBI BLAST",
        type: "Analysis Tool",
        category: "Sequence & Alignment",
        keywords: ["BLAST", "alignment", "similarity", "sequence", "DNA", "protein"],
        tasks: ["compare a sequence with database sequences", "find regions of sequence similarity"],
        description: "Compare nucleotide or protein sequences and identify regions of similarity.",
        url: "https://blast.ncbi.nlm.nih.gov/Blast.cgi",
        learnUrl: "https://blast.ncbi.nlm.nih.gov/doc/blast-topics/",
        learnTitle: "Learn how BLAST works"
    },
    {
        name: "EMBL-EBI Job Dispatcher",
        type: "Analysis Tool",
        category: "Sequence & Alignment",
        keywords: ["sequence analysis", "alignment", "similarity", "EMBL-EBI", "bioinformatics tools"],
        tasks: ["run sequence analysis tools", "access alignment and similarity-search services"],
        description: "A collection of EMBL-EBI sequence-analysis services available from one interface.",
        url: "https://www.ebi.ac.uk/jdispatcher/"
    },
    {
        name: "European Nucleotide Archive",
        type: "Database",
        category: "Sequence & Alignment",
        keywords: ["ENA", "nucleotide", "sequence", "raw reads", "assembly", "sequencing data"],
        tasks: ["find nucleotide sequence data", "browse raw reads and assemblies"],
        description: "EMBL-EBI's archive for nucleotide sequence data, including reads and assemblies.",
        url: "https://www.ebi.ac.uk/ena/browser/home"
    },
    {
        name: "Clustal Omega",
        type: "Analysis Tool",
        category: "Sequence & Alignment",
        keywords: ["multiple sequence alignment", "alignment", "Clustal", "protein", "DNA"],
        tasks: ["align multiple sequences", "compare related DNA or protein sequences"],
        description: "An EMBL-EBI tool for multiple sequence alignment.",
        url: "https://www.ebi.ac.uk/jdispatcher/msa/clustalo"
    },
    {
        name: "EMBOSS Needle",
        type: "Analysis Tool",
        category: "Sequence & Alignment",
        keywords: ["pairwise alignment", "global alignment", "Needleman Wunsch", "sequence comparison"],
        tasks: ["globally align two sequences", "compare two full-length sequences"],
        description: "An EMBL-EBI service for global pairwise sequence alignment.",
        url: "https://www.ebi.ac.uk/jdispatcher/psa/emboss_needle"
    },

    {
        name: "NCBI Gene",
        type: "Database",
        category: "Genes & Genomes",
        keywords: ["gene", "gene information", "gene record", "genomic location", "transcript"],
        tasks: ["find gene-specific information", "explore gene records and links"],
        description: "NCBI records that bring together gene-specific information and related resources.",
        url: "https://www.ncbi.nlm.nih.gov/gene/"
    },
    {
        name: "NCBI Genome Resources",
        type: "Database",
        category: "Genes & Genomes",
        keywords: ["genome", "assembly", "annotation", "chromosome", "genomic data"],
        tasks: ["find genome assemblies", "explore genome sequence and annotation resources"],
        description: "NCBI entry points for genome assemblies, annotations, and related genomic resources.",
        url: "https://www.ncbi.nlm.nih.gov/home/genomes/"
    },
    {
        name: "NCBI Genome Data Viewer",
        type: "Genome Browser",
        category: "Genes & Genomes",
        keywords: ["genome browser", "genomic region", "annotation", "chromosome", "gene"],
        tasks: ["browse an annotated genome", "inspect genes and features in a genomic region"],
        description: "NCBI's browser for viewing genome assemblies, annotations, and genomic features.",
        url: "https://www.ncbi.nlm.nih.gov/gdv/"
    },
    {
        name: "Ensembl",
        type: "Genome Browser",
        category: "Genes & Genomes",
        keywords: ["genome", "gene", "transcript", "variant", "annotation", "genome browser"],
        tasks: ["explore genes and transcripts", "browse genome annotations and variants"],
        description: "A genome browser and annotation resource for many vertebrate and other species.",
        url: "https://www.ensembl.org/",
        learnUrl: "https://www.ensembl.org/info/website/tutorials/index.html",
        learnTitle: "Open Ensembl tutorials"
    },
    {
        name: "UCSC Genome Browser",
        type: "Genome Browser",
        category: "Genes & Genomes",
        keywords: ["genome browser", "genome", "tracks", "gene", "chromosome", "annotation"],
        tasks: ["visualize genomic data", "compare annotation tracks across a genomic region"],
        description: "An interactive genome browser for viewing genomic regions and many annotation tracks.",
        url: "https://genome.ucsc.edu/"
    },

    {
        name: "NCBI Protein",
        type: "Database",
        category: "Protein Information",
        keywords: ["protein", "protein sequence", "amino acid", "protein record"],
        tasks: ["find protein sequence records", "retrieve amino-acid sequences"],
        description: "NCBI protein sequence records from multiple sequence sources.",
        url: "https://www.ncbi.nlm.nih.gov/protein/"
    },
    {
        name: "UniProt",
        type: "Database",
        category: "Protein Information",
        keywords: ["protein", "protein function", "sequence", "annotation", "UniProtKB"],
        tasks: ["find protein sequences", "explore protein function and annotation"],
        description: "A major resource for protein sequence and functional information.",
        url: "https://www.uniprot.org/",
        learnUrl: "https://www.uniprot.org/help/tutorials",
        learnTitle: "Learn how to use UniProt"
    },
    {
        name: "InterPro",
        type: "Database",
        category: "Protein Information",
        keywords: ["protein", "domain", "family", "functional site", "annotation", "InterPro"],
        tasks: ["identify protein families and domains", "explore functional sites"],
        description: "Classifies proteins into families and predicts domains and important sites.",
        url: "https://www.ebi.ac.uk/interpro/"
    },
    {
        name: "PANTHER",
        type: "Analysis Tool",
        category: "Protein Information",
        keywords: ["protein family", "classification", "function", "gene list", "enrichment"],
        tasks: ["classify proteins", "perform functional classification and enrichment"],
        description: "A protein classification system with tools for functional analysis of genes and proteins.",
        url: "https://www.pantherdb.org/"
    },
    {
        name: "PROSITE",
        type: "Database",
        category: "Protein Information",
        keywords: ["protein", "domain", "family", "pattern", "motif", "functional site"],
        tasks: ["look up protein domains and families", "search protein patterns and profiles"],
        description: "A curated protein-domain, family, and functional-site resource from ExPASy.",
        url: "https://prosite.expasy.org/"
    },

    {
        name: "RCSB Protein Data Bank",
        type: "Structure",
        category: "Protein Structure",
        keywords: ["PDB", "protein structure", "3D structure", "macromolecule", "structural biology"],
        tasks: ["find experimentally determined macromolecular structures", "inspect 3D protein structures"],
        description: "Access experimentally determined three-dimensional structures in the Protein Data Bank.",
        url: "https://www.rcsb.org/",
        learnUrl: "https://pdb101.rcsb.org/",
        learnTitle: "Learn structural biology with PDB-101"
    },
    {
        name: "PDBe",
        type: "Structure",
        category: "Protein Structure",
        keywords: ["PDB", "protein structure", "3D", "structure", "PDBe"],
        tasks: ["explore PDB structures", "review structural annotations and visualization"],
        description: "EMBL-EBI's Protein Data Bank in Europe service for macromolecular structure data.",
        url: "https://www.ebi.ac.uk/pdbe/",
        learnUrl: "https://www.ebi.ac.uk/pdbe/online-tutorials",
        learnTitle: "Open PDBe tutorials"
    },
    {
        name: "AlphaFold Protein Structure Database",
        type: "Structure",
        category: "Protein Structure",
        keywords: ["AlphaFold", "predicted structure", "protein folding", "protein structure", "3D"],
        tasks: ["find predicted protein structures", "explore AlphaFold structural predictions"],
        description: "A database of predicted protein structures generated with AlphaFold models.",
        url: "https://alphafold.ebi.ac.uk/"
    },
    {
        name: "SWISS-MODEL",
        type: "Structure",
        category: "Protein Structure",
        keywords: ["homology modeling", "protein structure", "3D model", "SWISS MODEL"],
        tasks: ["build comparative protein structure models", "explore homology modeling"],
        description: "A web resource for automated comparative protein structure modeling.",
        url: "https://swissmodel.expasy.org/"
    },

    {
        name: "PubMed",
        type: "Literature",
        category: "Scientific Literature",
        keywords: ["literature", "paper", "article", "publication", "review", "biomedical"],
        tasks: ["search biomedical literature", "find citations and abstracts"],
        description: "Search citations and abstracts from biomedical and life-sciences literature.",
        url: "https://pubmed.ncbi.nlm.nih.gov/"
    },
    {
        name: "Europe PMC",
        type: "Literature",
        category: "Scientific Literature",
        keywords: ["literature", "article", "paper", "full text", "biomedical", "Europe PMC"],
        tasks: ["search life-science literature", "find articles and related research outputs"],
        description: "A literature resource for life-science publications, abstracts, and linked research content.",
        url: "https://europepmc.org/"
    },
    {
        name: "bioRxiv",
        type: "Literature",
        category: "Scientific Literature",
        keywords: ["preprint", "paper", "biology", "research paper", "bioRxiv"],
        tasks: ["find biology preprints", "follow recent unpublished research manuscripts"],
        description: "A preprint server for manuscripts in the biological sciences.",
        url: "https://www.biorxiv.org/"
    },
    {
        name: "PubMed Central",
        type: "Literature",
        category: "Scientific Literature",
        keywords: ["PMC", "full text", "article", "literature", "biomedical"],
        tasks: ["find full-text biomedical articles", "read open-access archive content"],
        description: "A free full-text archive of biomedical and life-sciences journal literature.",
        url: "https://pmc.ncbi.nlm.nih.gov/"
    },

    {
        name: "NCBI GEO",
        type: "Database",
        category: "Gene Expression & Sequencing Data",
        keywords: ["GEO", "gene expression", "microarray", "RNA-seq", "functional genomics"],
        tasks: ["find gene-expression studies", "explore functional genomics datasets"],
        description: "A public repository for high-throughput gene-expression and functional-genomics data.",
        url: "https://www.ncbi.nlm.nih.gov/geo/"
    },
    {
        name: "NCBI Sequence Read Archive",
        type: "Database",
        category: "Gene Expression & Sequencing Data",
        keywords: ["SRA", "sequencing data", "raw reads", "NGS", "RNA-seq", "high throughput"],
        tasks: ["find raw sequencing reads", "locate high-throughput sequencing datasets"],
        description: "NCBI's archive for high-throughput sequencing data and raw sequence reads.",
        url: "https://www.ncbi.nlm.nih.gov/sra"
    },
    {
        name: "EMBL-EBI Expression Atlas",
        type: "Database",
        category: "Gene Expression & Sequencing Data",
        keywords: ["expression", "gene expression", "RNA-seq", "transcriptomics", "Expression Atlas"],
        tasks: ["explore gene-expression patterns", "compare expression across conditions"],
        description: "Explore curated gene-expression data across organisms, tissues, and experimental conditions.",
        url: "https://www.ebi.ac.uk/gxa/home",
        learnUrl: "https://www.ebi.ac.uk/gxa/help/index.html",
        learnTitle: "Open Expression Atlas help"
    },
    {
        name: "Single Cell Expression Atlas",
        type: "Database",
        category: "Gene Expression & Sequencing Data",
        keywords: ["single cell", "scRNA-seq", "expression", "transcriptomics", "cell type"],
        tasks: ["explore single-cell expression datasets", "inspect expression across cell types"],
        description: "EMBL-EBI resource for exploring single-cell gene-expression datasets.",
        url: "https://www.ebi.ac.uk/gxa/sc/home"
    },
    {
        name: "BioStudies",
        type: "Database",
        category: "Gene Expression & Sequencing Data",
        keywords: ["study data", "dataset", "supplementary data", "biological study", "BioStudies"],
        tasks: ["find biological study data", "access datasets and supplementary research files"],
        description: "An EMBL-EBI database for data associated with biological studies.",
        url: "https://www.ebi.ac.uk/biostudies/"
    },

    {
        name: "Reactome",
        type: "Analysis Tool",
        category: "Pathways & Functional Analysis",
        keywords: ["pathway", "biological process", "functional analysis", "enrichment", "Reactome"],
        tasks: ["explore curated biological pathways", "analyze genes against pathway knowledge"],
        description: "A curated pathway database with tools for pathway exploration and analysis.",
        url: "https://reactome.org/",
        learnUrl: "https://reactome.org/userguide/pathway-browser",
        learnTitle: "Open the Reactome Pathway Browser guide"
    },
    {
        name: "KEGG",
        type: "Database",
        category: "Pathways & Functional Analysis",
        keywords: ["pathway", "metabolism", "network", "gene", "KEGG", "biological system"],
        tasks: ["explore pathways and metabolic networks", "connect genes with biological systems"],
        description: "A collection of databases connecting genes, molecules, pathways, and biological systems.",
        url: "https://www.kegg.jp/"
    },
    {
        name: "Gene Ontology Resource",
        type: "Database",
        category: "Pathways & Functional Analysis",
        keywords: ["Gene Ontology", "GO", "biological process", "molecular function", "cellular component"],
        tasks: ["understand standardized gene-function terms", "explore ontology annotations"],
        description: "A structured vocabulary and annotation resource for gene-product functions and biological processes.",
        url: "https://geneontology.org/",
        learnUrl: "https://geneontology.org/docs/introduction-to-go/",
        learnTitle: "Read the introduction to Gene Ontology"
    },
    {
        name: "g:Profiler",
        type: "Analysis Tool",
        category: "Pathways & Functional Analysis",
        keywords: ["enrichment", "functional analysis", "gene list", "ontology", "pathway", "gProfiler"],
        tasks: ["run functional enrichment", "interpret gene lists using biological annotations"],
        description: "A web tool for functional enrichment analysis and conversion of gene identifiers.",
        url: "https://biit.cs.ut.ee/gprofiler/gost"
    },

    {
        name: "ClinVar",
        type: "Database",
        category: "Genetic Variation",
        keywords: ["variant", "mutation", "pathogenic", "clinical significance", "ClinVar"],
        tasks: ["look up clinical variant interpretations", "explore submitted variant-disease relationships"],
        description: "NCBI archive of submitted interpretations of variants and their relationships to health.",
        url: "https://www.ncbi.nlm.nih.gov/clinvar/"
    },
    {
        name: "dbSNP",
        type: "Database",
        category: "Genetic Variation",
        keywords: ["SNP", "variant", "mutation", "variation", "rsID", "dbSNP"],
        tasks: ["look up short genetic variants", "find reference SNP identifiers"],
        description: "NCBI database for short genetic variation records, including SNP identifiers.",
        url: "https://www.ncbi.nlm.nih.gov/snp/"
    },
    {
        name: "gnomAD",
        type: "Database",
        category: "Genetic Variation",
        keywords: ["variant", "population frequency", "allele frequency", "genetic variation", "gnomAD"],
        tasks: ["inspect population variant frequencies", "explore human genetic variation"],
        description: "A resource for exploring human genetic variation and population allele frequencies.",
        url: "https://gnomad.broadinstitute.org/"
    },
    {
        name: "GWAS Catalog",
        type: "Database",
        category: "Genetic Variation",
        keywords: ["GWAS", "variant", "SNP", "trait", "association", "genetic variation"],
        tasks: ["find published genome-wide associations", "explore variants associated with traits"],
        description: "EMBL-EBI catalog of published genome-wide association study results.",
        url: "https://www.ebi.ac.uk/gwas/"
    },

    {
        name: "NCBI Primer-BLAST",
        type: "Primer/PCR",
        category: "PCR & Primer Design",
        keywords: ["primer", "PCR", "primer design", "specificity", "Primer-BLAST"],
        tasks: ["design PCR primers", "check primer specificity against sequence databases"],
        description: "NCBI primer-design tool that combines primer generation with BLAST-based specificity checking.",
        url: "https://www.ncbi.nlm.nih.gov/tools/primer-blast/",
        learnUrl: "https://www.ncbi.nlm.nih.gov/guide/howto/design-pcr-primers",
        learnTitle: "Read NCBI's primer-design guide"
    },
    {
        name: "Primer3",
        type: "Primer/PCR",
        category: "PCR & Primer Design",
        keywords: ["primer", "PCR", "primer design", "oligo", "Primer3"],
        tasks: ["design PCR primers", "set primer-design parameters"],
        description: "A widely used primer-design program with a public web interface.",
        url: "https://primer3.ut.ee/"
    },
    {
        name: "IDT OligoAnalyzer",
        type: "Primer/PCR",
        category: "PCR & Primer Design",
        keywords: ["primer", "oligo", "Tm", "hairpin", "dimer", "GC content"],
        tasks: ["analyze oligonucleotide properties", "inspect hairpins and primer-dimer potential"],
        description: "IDT tool for examining oligonucleotide properties and predicted secondary structures.",
        url: "https://www.idtdna.com/pages/tools/oligoanalyzer",
        learnUrl: "https://www.idtdna.com/pages/support/faqs/how-do-i-use-the-oligoanalyzer-tool-to-analyze-possible-hairpins-and-dimers-formed-by-my-oligo",
        learnTitle: "Learn how to inspect hairpins and dimers"
    },
    {
        name: "IDT PrimerQuest",
        type: "Primer/PCR",
        category: "PCR & Primer Design",
        keywords: ["primer", "PCR", "qPCR", "primer design", "probe"],
        tasks: ["design PCR or qPCR assays", "generate primer and probe candidates"],
        description: "IDT web tool for designing primers and probes for PCR-related applications.",
        url: "https://www.idtdna.com/pages/tools/primerquest"
    },

    {
        name: "Addgene",
        type: "Database",
        category: "Molecular Biology & Cloning",
        keywords: ["plasmid", "vector", "cloning", "Addgene", "molecular biology"],
        tasks: ["find plasmids and vectors", "access cloning protocols and educational material"],
        description: "A nonprofit plasmid repository with molecular-biology protocols and educational resources.",
        url: "https://www.addgene.org/",
        learnUrl: "https://www.addgene.org/protocols/",
        learnTitle: "Browse Addgene protocols"
    },
    {
        name: "NEB Enzyme Finder",
        type: "Analysis Tool",
        category: "Molecular Biology & Cloning",
        keywords: ["restriction enzyme", "recognition sequence", "enzyme", "cloning", "restriction site"],
        tasks: ["find restriction enzymes", "search enzymes by recognition sequence or properties"],
        description: "New England Biolabs tool for locating restriction enzymes by name, sequence, or category.",
        url: "https://enzymefinder.neb.com/"
    },
    {
        name: "NEB Molecular Biology Research Tools",
        type: "Analysis Tool",
        category: "Molecular Biology & Cloning",
        keywords: ["cloning", "restriction", "DNA assembly", "molecular biology", "NEB tools"],
        tasks: ["access cloning and restriction tools", "plan common molecular-biology workflows"],
        description: "Official NEB collection of interactive molecular-biology and cloning tools.",
        url: "https://www.neb.com/en-gb/tools-and-resources/interactive-tools"
    },
    {
        name: "NEBcloner",
        type: "Analysis Tool",
        category: "Molecular Biology & Cloning",
        keywords: ["cloning", "DNA assembly", "restriction", "vector", "NEBcloner"],
        tasks: ["plan cloning workflows", "explore DNA assembly and restriction-based cloning options"],
        description: "An official NEB web tool for planning cloning and DNA assembly workflows.",
        url: "https://nebcloner.neb.com/"
    }
    ,
    {
        name: "FlyBase",
        type: "Database",
        category: "Model Organisms",
        keywords: ["Drosophila", "fruit fly", "gene", "genome", "model organism"],
        tasks: ["find Drosophila gene information", "explore fruit-fly genetics and genomics"],
        description: "A curated genetics and genomics resource for Drosophila research.",
        url: "https://flybase.org/"
    },
    {
        name: "Mouse Genome Informatics",
        type: "Database",
        category: "Model Organisms",
        keywords: ["mouse", "Mus musculus", "gene", "phenotype", "model organism"],
        tasks: ["find mouse gene information", "explore mouse genetics, phenotypes, and disease models"],
        description: "A curated resource for mouse genetics, genomics, phenotypes, and biological knowledge.",
        url: "https://www.informatics.jax.org/"
    },
    {
        name: "ZFIN",
        type: "Database",
        category: "Model Organisms",
        keywords: ["zebrafish", "Danio rerio", "gene", "phenotype", "model organism"],
        tasks: ["find zebrafish gene information", "explore zebrafish genetics and phenotypes"],
        description: "The Zebrafish Information Network for curated zebrafish genetics and genomics data.",
        url: "https://zfin.org/"
    },
    {
        name: "WormBase",
        type: "Database",
        category: "Model Organisms",
        keywords: ["C. elegans", "Caenorhabditis elegans", "worm", "gene", "model organism"],
        tasks: ["find C. elegans gene information", "explore nematode genetics and genomics"],
        description: "A biological information resource for C. elegans and related nematodes.",
        url: "https://wormbase.org/"
    }

];

// Add two metadata fields used by the improved search.
// Keeping this in one beginner-friendly function avoids repeating the
// same organization name inside dozens of resource objects.
function getOrganizationForResource(resourceName) {
    if (resourceName.includes("NCBI") || resourceName === "GenBank" || resourceName === "PubMed" || resourceName === "PubMed Central") return "NCBI / NIH";
    if (resourceName.includes("EMBL-EBI") || resourceName === "European Nucleotide Archive" || resourceName === "PDBe" || resourceName === "InterPro" || resourceName === "Expression Atlas" || resourceName === "Single Cell Expression Atlas" || resourceName === "BioStudies" || resourceName === "GWAS Catalog") return "EMBL-EBI";
    if (resourceName === "UniProt") return "UniProt Consortium";
    if (resourceName === "RCSB Protein Data Bank") return "RCSB PDB";
    if (resourceName === "AlphaFold Protein Structure Database") return "Google DeepMind / EMBL-EBI";
    if (resourceName === "SWISS-MODEL" || resourceName === "PROSITE") return "SIB Swiss Institute of Bioinformatics";
    if (resourceName === "PANTHER") return "PANTHER Classification System";
    if (resourceName === "Reactome") return "Reactome";
    if (resourceName === "KEGG") return "Kanehisa Laboratories";
    if (resourceName === "Gene Ontology Resource") return "Gene Ontology Consortium";
    if (resourceName === "g:Profiler") return "University of Tartu";
    if (resourceName === "gnomAD") return "Broad Institute";
    if (resourceName.includes("IDT")) return "Integrated DNA Technologies";
    if (resourceName === "Primer3") return "Primer3 Project";
    if (resourceName === "Addgene") return "Addgene";
    if (resourceName.includes("NEB")) return "New England Biolabs";
    if (resourceName === "Europe PMC") return "Europe PMC";
    if (resourceName === "bioRxiv") return "Cold Spring Harbor Laboratory";
    if (resourceName === "Ensembl") return "EMBL-EBI";
    if (resourceName === "UCSC Genome Browser") return "UCSC";
    if (resourceName === "FlyBase") return "FlyBase Consortium";
    if (resourceName === "Mouse Genome Informatics") return "The Jackson Laboratory";
    if (resourceName === "ZFIN") return "ZFIN";
    if (resourceName === "WormBase") return "WormBase Consortium";
    return "Official scientific resource";
}

function getSynonymsForResource(resource) {
    const synonyms = [];

    resource.keywords.forEach(function (keyword) {
        const normalizedKeyword = String(keyword).toLowerCase();
        if (!synonyms.includes(normalizedKeyword)) {
            synonyms.push(normalizedKeyword);
        }
    });

    if (resource.name === "RCSB Protein Data Bank" || resource.name === "PDBe") {
        synonyms.push("pdb", "protein structure database", "3d structure");
    }

    if (resource.name === "NCBI Sequence Read Archive") {
        synonyms.push("sra", "raw sequencing reads", "ngs reads");
    }

    if (resource.name === "NCBI GEO") {
        synonyms.push("geo", "expression data", "transcriptomics");
    }

    if (resource.name === "NCBI Primer-BLAST") {
        synonyms.push("primer blast", "primer specificity", "design primers");
    }

    return synonyms;
}

resources.forEach(function (resource) {
    resource.organization = getOrganizationForResource(resource.name);
    resource.synonyms = getSynonymsForResource(resource);
});


// =====================================
// DATA: Workflow Definitions
// =====================================

const workflows = {
    analyzeDna: {
        title: "I have a DNA sequence",
        description: "Start with a quick local sequence check, then choose what you want to learn about the sequence.",
        steps: [
            "Paste raw DNA, multiline DNA, or one FASTA record.",
            "Clean whitespace and normalize lowercase bases.",
            "Check A, T, G, C and optional N symbols.",
            "Review length, composition, GC/AT percentages, cleaned sequence, and reverse complement.",
            "Choose a biologically appropriate next step instead of assuming what the sequence represents."
        ],
        actions: [
            { label: "Open DNA Analyzer", kind: "scroll", target: "dna-tool" },
            { label: "Identify or compare sequence", kind: "search", query: "sequence similarity BLAST" },
            { label: "Find restriction sites", kind: "scroll", target: "restriction-tool" }
        ]
    },
    identifySequence: {
        title: "I have a sequence and I don't know what it is",
        description: "First decide what kind of sequence you may have. Similarity searches can suggest related sequences, but similarity alone does not prove identical biological function.",
        sequenceChooser: true,
        steps: [
            "Check whether the input appears to be nucleotide, protein, or still unknown.",
            "Clean the sequence before using a professional similarity-search tool.",
            "Use a database suited to the sequence type.",
            "Interpret similarity together with annotation, organism, coverage, identity, and biological context."
        ]
    },
    primers: {
        title: "Primer Design & Quick Check",
        description: "Use the built-in check for simple composition and approximate Tm, then continue to specificity and secondary-structure analysis.",
        steps: [
            "Enter a forward primer and optionally a reverse primer.",
            "Review length, base counts, GC content, and approximate Tm.",
            "If two primers are supplied, compare their approximate Tm values.",
            "Check specificity with Primer-BLAST.",
            "Check hairpins and dimers with an oligonucleotide analysis tool."
        ],
        actions: [
            { label: "Open Primer Quick Check", kind: "scroll", target: "primer-tool" },
            { label: "Find professional primer tools", kind: "search", query: "primer design specificity" }
        ]
    },
    planPcr: {
        title: "Plan a PCR",
        description: "Scale a reaction from your own protocol and decide which components belong in a pooled master mix.",
        steps: [
            "Enter the number of reactions and your extra allowance.",
            "Enter the final reaction volume from your protocol.",
            "Enter each reagent volume per reaction.",
            "Mark whether each component belongs in the pooled master mix.",
            "Review scaled totals and compare them with the protocol before laboratory use."
        ],
        actions: [
            { label: "Open PCR Calculator", kind: "scroll", target: "pcr-tool" },
            { label: "Open PCR troubleshooting", kind: "scroll", target: "pcr-troubleshooting-tool" }
        ]
    },
    troubleshootPcr: {
        title: "My PCR did not work",
        description: "Choose what you observed. The app will show areas to investigate, not claim a definitive cause.",
        steps: [
            "Describe the observed PCR outcome.",
            "Review possible categories to investigate.",
            "Check primer design and specificity where relevant.",
            "Check template, cycling, reaction chemistry, and contamination where relevant.",
            "Use an official troubleshooting guide and your reagent protocol."
        ],
        actions: [
            { label: "Open Guided PCR Troubleshooting", kind: "scroll", target: "pcr-troubleshooting-tool" }
        ]
    },
    restriction: {
        title: "Work with restriction enzymes",
        description: "Find recognition sites in DNA, then verify experimental enzyme properties with official documentation.",
        steps: [
            "Paste a DNA sequence.",
            "Choose a restriction enzyme.",
            "Find recognition-sequence start positions.",
            "Remember that a recognition-site match does not prove a digest will work.",
            "Check buffer, temperature, methylation sensitivity, star activity, heat inactivation, and expected fragments."
        ],
        actions: [
            { label: "Open Restriction Site Finder", kind: "scroll", target: "restriction-tool" },
            { label: "Browse cloning resources", kind: "search", query: "restriction enzyme cloning" }
        ]
    },
    dilution: {
        title: "Prepare a dilution",
        description: "Use C1V1 = C2V2 for a simple dilution when C1 and C2 are expressed in the same concentration unit.",
        steps: [
            "Enter stock concentration C1.",
            "Enter desired concentration C2.",
            "Enter final volume V2.",
            "Calculate V1 = (C2 × V2) / C1.",
            "Calculate diluent volume = V2 − V1."
        ],
        actions: [
            { label: "Open Dilution Calculator", kind: "scroll", target: "dilution-tool" }
        ]
    },
    geneGenome: {
        title: "Find a gene or genome",
        description: "Choose between gene records, genome browsing, and genomic context depending on what you already know.",
        steps: [
            "If you know a gene name or identifier, start with a gene record.",
            "If you need genomic context, use a genome browser.",
            "If you have a sequence rather than a gene name, identify or map the sequence first.",
            "Check organism and genome assembly before interpreting genomic coordinates."
        ],
        actions: [
            { label: "Search gene resources", kind: "search", query: "gene genomic location" },
            { label: "Search genome browsers", kind: "search", query: "genome browser" }
        ]
    },
    proteinInfo: {
        title: "Find protein information",
        description: "Use protein resources for sequence, function, domains, families, and annotations.",
        steps: [
            "Search by protein name, accession, gene, or sequence as appropriate.",
            "Use UniProt or NCBI Protein for protein records.",
            "Use InterPro/PROSITE for domains, families, and functional sites.",
            "Keep predicted annotation separate from experimentally supported evidence."
        ],
        actions: [
            { label: "Search protein resources", kind: "search", query: "protein function domains" }
        ]
    },
    proteinStructure: {
        title: "Find a protein structure",
        description: "Separate experimentally determined structures from predicted or comparative models.",
        steps: [
            "Search RCSB PDB or PDBe for experimentally determined structures.",
            "If no experimental structure is available, explore prediction/modeling resources.",
            "Check confidence and provenance before interpreting a predicted model.",
            "Do not treat a prediction as equivalent to experimental validation."
        ],
        actions: [
            { label: "Search structure resources", kind: "search", query: "protein structure" }
        ]
    },
    sequencingData: {
        title: "Find sequencing or expression data",
        description: "Choose a repository based on whether you need raw reads, processed expression data, or study-level files.",
        steps: [
            "For raw sequencing reads, search SRA or ENA.",
            "For gene-expression studies, search GEO or Expression Atlas.",
            "For single-cell expression, use a single-cell expression resource.",
            "Read study metadata before comparing datasets."
        ],
        actions: [
            { label: "Search RNA-seq resources", kind: "search", query: "raw RNA-seq reads sequencing data" }
        ]
    },
    literature: {
        title: "Search scientific literature",
        description: "Use literature databases for peer-reviewed papers, full text, or preprints depending on your goal.",
        steps: [
            "Start with a clear biological question and search terms.",
            "Use PubMed/Europe PMC for biomedical literature.",
            "Use PubMed Central when you specifically need full-text archive content.",
            "Treat preprints as manuscripts that may not yet have completed peer review."
        ],
        actions: [
            { label: "Search literature resources", kind: "search", query: "scientific literature papers" }
        ]
    },
    findDatabase: {
        title: "I don't know which database to use",
        description: "Describe the biological information or task you need. The Resource Finder ranks likely starting points.",
        steps: [
            "Describe the task rather than guessing a database name.",
            "Review the highest-ranked resources and their 'Good for' descriptions.",
            "Open the resource's own help/documentation before interpreting research results."
        ],
        actions: [
            { label: "Open Resource Finder", kind: "scroll", target: "resource-finder" }
        ]
    }
};


// =====================================
// DATA: Help Resources
// =====================================

const helpResources = {

    sequence: {
        learn: [
            {
                title: "NCBI FASTA Format",
                organization: "NCBI",
                sourceType: "Official format guide",
                description: "Explains the FASTA definition line and sequence format used by NCBI.",
                url: "https://www.ncbi.nlm.nih.gov/genbank/fastaformat"
            },
            {
                title: "BLAST Topics",
                organization: "NCBI",
                sourceType: "Official learning documentation",
                description: "Background information for sequence-similarity searching and BLAST input.",
                url: "https://blast.ncbi.nlm.nih.gov/doc/blast-topics/"
            }
        ],
        troubleshoot: [
            {
                title: "NCBI FASTA Format",
                organization: "NCBI",
                sourceType: "Sequence-format guide",
                description: "Useful when a FASTA header or sequence formatting is causing confusion.",
                url: "https://www.ncbi.nlm.nih.gov/genbank/fastaformat"
            }
        ],
        professionalTools: [
            {
                title: "NCBI BLAST",
                organization: "NCBI",
                sourceType: "Official scientific tool",
                description: "Compare a DNA or protein sequence with sequences in biological databases.",
                url: "https://blast.ncbi.nlm.nih.gov/Blast.cgi"
            },
            {
                title: "NCBI Nucleotide",
                organization: "NCBI",
                sourceType: "Official database",
                description: "Search nucleotide sequence records.",
                url: "https://www.ncbi.nlm.nih.gov/nucleotide/"
            },
            {
                title: "EMBL-EBI Job Dispatcher",
                organization: "EMBL-EBI",
                sourceType: "Official analysis tools",
                description: "Continue with sequence alignment and other sequence-analysis services.",
                url: "https://www.ebi.ac.uk/jdispatcher/"
            },
            {
                title: "European Nucleotide Archive",
                organization: "EMBL-EBI",
                sourceType: "Official sequence archive",
                description: "Explore nucleotide sequence data, reads, and assemblies.",
                url: "https://www.ebi.ac.uk/ena/browser/home"
            }
        ]
    },

    primer: {
        learn: [
            {
                title: "Design PCR Primers",
                organization: "NCBI",
                sourceType: "Official how-to guide",
                description: "Introduces primer design and NCBI Primer-BLAST.",
                url: "https://www.ncbi.nlm.nih.gov/guide/howto/design-pcr-primers"
            },
            {
                title: "How to Design Primers and Probes for PCR and qPCR",
                organization: "IDT",
                sourceType: "Educational primer-design guide",
                description: "Discusses primer length, GC content, Tm, and design considerations.",
                url: "https://www.idtdna.com/page/support-and-education/decoded-plus/how-to-design-primers-and-probes-for-pcr-and-qpcr"
            }
        ],
        troubleshoot: [
            {
                title: "Analyze Hairpins and Dimers with OligoAnalyzer",
                organization: "IDT",
                sourceType: "Official troubleshooting help",
                description: "Shows how OligoAnalyzer can be used to inspect possible hairpins and dimers.",
                url: "https://www.idtdna.com/pages/support/faqs/how-do-i-use-the-oligoanalyzer-tool-to-analyze-possible-hairpins-and-dimers-formed-by-my-oligo"
            },
            {
                title: "PCR Troubleshooting Guide",
                organization: "New England Biolabs",
                sourceType: "Troubleshooting guide",
                description: "Common PCR problem areas and factors to investigate.",
                url: "https://www.neb.com/en-gb/tools-and-resources/troubleshooting-guides/pcr-troubleshooting-guide"
            }
        ],
        professionalTools: [
            {
                title: "NCBI Primer-BLAST",
                organization: "NCBI",
                sourceType: "Official primer-design tool",
                description: "Design primers and check their specificity against sequence databases.",
                url: "https://www.ncbi.nlm.nih.gov/tools/primer-blast/"
            },
            {
                title: "IDT OligoAnalyzer",
                organization: "IDT",
                sourceType: "Professional oligonucleotide tool",
                description: "Analyze oligonucleotide properties, hairpins, and self-dimers.",
                url: "https://www.idtdna.com/pages/tools/oligoanalyzer"
            },
            {
                title: "IDT PrimerQuest",
                organization: "IDT",
                sourceType: "Primer-design tool",
                description: "Generate primer and probe candidates for PCR-related applications.",
                url: "https://www.idtdna.com/pages/tools/primerquest"
            }
        ]
    },

    pcr: {
        learn: [
            {
                title: "PCR Protocol",
                organization: "Addgene",
                sourceType: "Educational protocol",
                description: "A beginner-friendly overview of PCR setup and cycling steps.",
                url: "https://www.addgene.org/protocols/pcr/"
            },
            {
                title: "PCR Component Considerations",
                organization: "Thermo Fisher Scientific",
                sourceType: "Educational technical resource",
                description: "Explains important PCR reaction components and setup considerations.",
                url: "https://www.thermofisher.com/sa/en/home/life-science/cloning/cloning-learning-center/invitrogen-school-of-molecular-biology/pcr-education/pcr-reagents-enzymes/pcr-component-considerations.html"
            }
        ],
        troubleshoot: [
            {
                title: "PCR Troubleshooting Guide",
                organization: "New England Biolabs",
                sourceType: "Troubleshooting guide",
                description: "Investigate common PCR problems such as weak or non-specific amplification.",
                url: "https://www.neb.com/en-gb/tools-and-resources/troubleshooting-guides/pcr-troubleshooting-guide"
            },
            {
                title: "PCR Troubleshooting",
                organization: "Thermo Fisher Scientific",
                sourceType: "Troubleshooting resource",
                description: "Technical guidance for investigating PCR performance problems.",
                url: "https://www.thermofisher.com/uk/en/home/life-science/cloning/cloning-learning-center/invitrogen-school-of-molecular-biology/pcr-education/pcr-reagents-enzymes/pcr-troubleshooting.html"
            }
        ],
        professionalTools: [
            {
                title: "NCBI Primer-BLAST",
                organization: "NCBI",
                sourceType: "Official primer-design tool",
                description: "Check primer specificity when primer design is part of the PCR workflow.",
                url: "https://www.ncbi.nlm.nih.gov/tools/primer-blast/"
            },
            {
                title: "Addgene PCR Protocol",
                organization: "Addgene",
                sourceType: "Educational protocol",
                description: "Review a full PCR protocol rather than relying on the calculator's example volumes.",
                url: "https://www.addgene.org/protocols/pcr/"
            }
        ]
    },

    dilution: {
        learn: [
            {
                title: "Oligonucleotide Resuspension and Dilution",
                organization: "IDT",
                sourceType: "Educational calculation guide",
                description: "Explains concentration, resuspension, and dilution calculations in a laboratory context.",
                url: "https://www.idtdna.com/page/support-and-education/decoded-plus/easy-resuspension-and-dilution-of-oligonucleotides"
            }
        ],
        troubleshoot: [
            {
                title: "IDT Resuspension and Dilution Guide",
                organization: "IDT",
                sourceType: "Calculation guidance",
                description: "Useful when concentration or dilution setup is unclear.",
                url: "https://www.idtdna.com/page/support-and-education/decoded-plus/easy-resuspension-and-dilution-of-oligonucleotides"
            }
        ],
        professionalTools: [
            {
                title: "IDT SciTools Calculators",
                organization: "IDT",
                sourceType: "Official calculation tools",
                description: "Continue with established oligonucleotide and concentration calculation tools.",
                url: "https://www.idtdna.com/calc/"
            }
        ]
    },

    restriction: {
        learn: [
            {
                title: "Restriction Enzymes 101",
                organization: "New England Biolabs",
                sourceType: "Educational learning resource",
                description: "Introduces recognition sequences and the logic of restriction-enzyme cleavage.",
                url: "https://www.neb.com/en/podcasts/podcast-56-restriction-enzymes-101"
            },
            {
                title: "Restriction Digest Protocol",
                organization: "Addgene",
                sourceType: "Educational protocol",
                description: "Explains the purpose and basic setup of a restriction digest.",
                url: "https://www.addgene.org/protocols/restriction-digest/"
            }
        ],
        troubleshoot: [
            {
                title: "Double Digests",
                organization: "New England Biolabs",
                sourceType: "Usage guidance",
                description: "Guidance for considering buffer and enzyme compatibility in double digests.",
                url: "https://www.neb.com/en/tools-and-resources/usage-guidelines/double-digests"
            },
            {
                title: "Dam-Dcm and CpG Methylation",
                organization: "New England Biolabs",
                sourceType: "Technical reference",
                description: "Check whether methylation can affect cleavage for a restriction enzyme.",
                url: "https://www.neb.com/en/tools-and-resources/selection-charts/dam-dcm-and-cpg-methylation"
            }
        ],
        professionalTools: [
            {
                title: "NEB Enzyme Finder",
                organization: "New England Biolabs",
                sourceType: "Official enzyme-selection tool",
                description: "Find enzyme information by name, recognition sequence, or overhang.",
                url: "https://enzymefinder.neb.com/"
            },
            {
                title: "NEB Molecular Biology Research Tools",
                organization: "New England Biolabs",
                sourceType: "Official professional tools",
                description: "Access cloning, restriction, and DNA assembly planning tools.",
                url: "https://www.neb.com/en-gb/tools-and-resources/interactive-tools"
            },
            {
                title: "Addgene Diagnostic Digest Protocol",
                organization: "Addgene",
                sourceType: "Educational protocol",
                description: "Learn how restriction digestion can be used to check a plasmid construct.",
                url: "https://www.addgene.org/protocols/diagnostic-digest/"
            }
        ]
    }
};

// Add an explicit Official Documentation group to each help topic.
helpResources.sequence.officialDocumentation = [
    {
        title: "NCBI FASTA Format",
        organization: "NCBI",
        sourceType: "Official format documentation",
        description: "Verify how FASTA definition lines and sequence text are represented.",
        url: "https://www.ncbi.nlm.nih.gov/genbank/fastaformat"
    }
];

helpResources.primer.officialDocumentation = [
    {
        title: "Primer-BLAST Documentation",
        organization: "NCBI",
        sourceType: "Official scientific documentation",
        description: "Verify primer-design and specificity-checking behavior in Primer-BLAST.",
        url: "https://www.ncbi.nlm.nih.gov/tools/primer-blast/primerinfo.html"
    }
];

helpResources.pcr.officialDocumentation = [
    {
        title: "PCR Protocol",
        organization: "Addgene",
        sourceType: "Educational protocol",
        description: "Review a complete PCR protocol rather than relying on example calculator values.",
        url: "https://www.addgene.org/protocols/pcr/"
    }
];

helpResources.dilution.officialDocumentation = [
    {
        title: "IDT Resuspension and Dilution Guide",
        organization: "IDT",
        sourceType: "Official educational documentation",
        description: "Check laboratory concentration and dilution examples.",
        url: "https://www.idtdna.com/page/support-and-education/decoded-plus/easy-resuspension-and-dilution-of-oligonucleotides"
    }
];

helpResources.restriction.officialDocumentation = [
    {
        title: "NEB Enzyme Finder",
        organization: "New England Biolabs",
        sourceType: "Official enzyme documentation tool",
        description: "Verify recognition sequence and current experimental recommendations for an enzyme.",
        url: "https://enzymefinder.neb.com/"
    }
];


// =====================================
// DATA: Restriction Enzymes
// =====================================

const restrictionEnzymes = {
    EcoRI: {
        recognition: "GAATTC",
        documentation: "https://www.neb.com/en/products/r0101-ecori"
    },
    BamHI: {
        recognition: "GGATCC",
        documentation: "https://www.neb.com/en/products/r0136-bamhi"
    },
    HindIII: {
        recognition: "AAGCTT",
        documentation: "https://www.neb.com/en/products/r0104-hindiii"
    },
    PstI: {
        recognition: "CTGCAG",
        documentation: "https://www.neb.com/en/products/r0140-psti"
    },
    XhoI: {
        recognition: "CTCGAG",
        documentation: "https://www.neb.com/en/products/r0146-xhoi"
    },
    NotI: {
        recognition: "GCGGCCGC",
        documentation: "https://www.neb.com/en/products/r0189-noti"
    }
};


// =====================================
// DATA: Search Synonyms
// =====================================

const searchSynonyms = {
    "paper": ["literature", "article", "publication", "pubmed"],
    "papers": ["literature", "article", "publication", "pubmed"],
    "sequencing": ["sequence", "reads", "sra", "ena", "ngs"],
    "rna-seq": ["rna seq", "sequencing data", "gene expression", "sra", "geo"],
    "rnaseq": ["rna seq", "sequencing data", "gene expression", "sra", "geo"],
    "mutation": ["variant", "snp", "genetic variation", "clinvar"],
    "alignment": ["blast", "sequence similarity", "alignment"],
    "structure": ["pdb", "protein structure", "alphafold", "structural biology"],
    "primer": ["pcr primer", "primer design", "primer-blast", "oligo"],
    "gene": ["gene information", "genomic location", "transcript"],
    "genome": ["genome browser", "assembly", "chromosome"],
    "domain": ["protein domain", "interpro", "prosite"],
    "pathway": ["reactome", "kegg", "functional analysis", "enrichment"]
};


// =====================================
// DATA: Guided PCR Troubleshooting
// =====================================

const pcrTroubleshooting = {
    noProduct: {
        title: "No amplification",
        explanation: "No visible PCR product can have several possible causes. This app cannot determine the cause from one observation.",
        checks: ["template quality or quantity", "primer design and specificity", "annealing conditions", "polymerase and reaction setup", "cycle parameters"],
        links: [
            ["NEB PCR Troubleshooting Guide", "https://www.neb.com/en-gb/tools-and-resources/troubleshooting-guides/pcr-troubleshooting-guide"],
            ["NCBI Primer-BLAST", "https://www.ncbi.nlm.nih.gov/tools/primer-blast/"]
        ]
    },
    weak: {
        title: "Weak amplification",
        explanation: "A weak product can arise from multiple interacting factors, so investigate systematically rather than changing many conditions at once.",
        checks: ["template amount or quality", "primer-template compatibility", "annealing conditions", "reaction chemistry", "cycle number and extension conditions"],
        links: [
            ["NEB PCR Troubleshooting Guide", "https://www.neb.com/en-gb/tools-and-resources/troubleshooting-guides/pcr-troubleshooting-guide"]
        ]
    },
    multipleBands: {
        title: "Multiple bands",
        explanation: "Multiple products suggest that more than one DNA region may have been amplified or that reaction specificity needs investigation.",
        checks: ["primer specificity", "annealing conditions", "primer concentration", "template complexity", "cycle conditions"],
        links: [
            ["NCBI Primer-BLAST", "https://www.ncbi.nlm.nih.gov/tools/primer-blast/"],
            ["IDT OligoAnalyzer", "https://www.idtdna.com/pages/tools/oligoanalyzer"]
        ]
    },
    nonspecific: {
        title: "Non-specific amplification",
        explanation: "Non-specific amplification means products other than the intended target are being generated. Several design and reaction factors may contribute.",
        checks: ["primer specificity", "annealing temperature", "primer concentration", "template complexity", "reaction conditions"],
        links: [
            ["NCBI Primer-BLAST", "https://www.ncbi.nlm.nih.gov/tools/primer-blast/"],
            ["NEB PCR Troubleshooting Guide", "https://www.neb.com/en-gb/tools-and-resources/troubleshooting-guides/pcr-troubleshooting-guide"]
        ]
    },
    smear: {
        title: "Smear",
        explanation: "A smear is a pattern rather than a diagnosis. It can reflect several possible template, specificity, or reaction-condition issues.",
        checks: ["template integrity and amount", "primer specificity", "cycle conditions", "reaction chemistry", "possible contamination"],
        links: [
            ["NEB PCR Troubleshooting Guide", "https://www.neb.com/en-gb/tools-and-resources/troubleshooting-guides/pcr-troubleshooting-guide"]
        ]
    },
    unexpectedSize: {
        title: "Unexpected product size",
        explanation: "An unexpected band size should be checked against the intended amplicon, primer-binding locations, and possible alternative products.",
        checks: ["primer-binding sites", "primer specificity", "template identity", "expected amplicon coordinates", "gel interpretation"],
        links: [
            ["NCBI Primer-BLAST", "https://www.ncbi.nlm.nih.gov/tools/primer-blast/"]
        ]
    },
    unknown: {
        title: "I don't know what failed",
        explanation: "Start with a structured review of the experiment rather than assuming one cause.",
        checks: ["template", "primers", "reaction setup", "cycling program", "controls", "gel and expected product"],
        links: [
            ["NEB PCR Troubleshooting Guide", "https://www.neb.com/en-gb/tools-and-resources/troubleshooting-guides/pcr-troubleshooting-guide"],
            ["Addgene PCR Protocol", "https://www.addgene.org/protocols/pcr/"]
        ]
    }
};


// =====================================
// DATA: Problem Navigator
// =====================================

const problemGuides = {
    pcrNoProduct: {
        title: "My PCR has no product",
        text: "Use the PCR troubleshooting workflow. Possible factors to investigate include template, primers, annealing conditions, reaction chemistry, and cycle parameters.",
        internalTarget: "pcr-troubleshooting-tool",
        professionalTitle: "Open NEB PCR Troubleshooting Guide",
        professionalUrl: "https://www.neb.com/en-gb/tools-and-resources/troubleshooting-guides/pcr-troubleshooting-guide"
    },
    pcrMultiple: {
        title: "My PCR has multiple bands",
        text: "Multiple bands can have more than one cause. Review primer specificity and reaction conditions before changing the protocol.",
        internalTarget: "pcr-troubleshooting-tool",
        professionalTitle: "Check primers with Primer-BLAST",
        professionalUrl: "https://www.ncbi.nlm.nih.gov/tools/primer-blast/"
    },
    strangeSequence: {
        title: "My sequence contains strange characters",
        text: "Start with the DNA Analyzer. It accepts A, T, G, C and optional N. Other IUPAC ambiguity symbols are not interpreted by this beginner tool.",
        internalTarget: "dna-tool",
        professionalTitle: "Read NCBI FASTA format guidance",
        professionalUrl: "https://www.ncbi.nlm.nih.gov/genbank/fastaformat"
    },
    unknownSequence: {
        title: "I don't know what my sequence is",
        text: "Use the Identify a Sequence workflow. A professional similarity search can suggest related sequences, but similarity does not automatically prove identical function.",
        workflow: "identifySequence",
        professionalTitle: "Open NCBI BLAST",
        professionalUrl: "https://blast.ncbi.nlm.nih.gov/Blast.cgi"
    },
    primerGc: {
        title: "My primer has unusual GC content",
        text: "Use the Primer Quick Check for a simple composition check, then evaluate specificity and secondary structures with dedicated tools.",
        internalTarget: "primer-tool",
        professionalTitle: "Open IDT OligoAnalyzer",
        professionalUrl: "https://www.idtdna.com/pages/tools/oligoanalyzer"
    },
    database: {
        title: "I don't know which database to use",
        text: "Describe the biological task in the Resource Finder rather than guessing a database name.",
        internalTarget: "resource-finder"
    },
    gene: {
        title: "I can't find my gene",
        text: "Check organism, gene symbol/identifier, and genome context. NCBI Gene and Ensembl are useful starting points.",
        searchQuery: "gene genomic location"
    },
    structure: {
        title: "I need a protein structure",
        text: "Start with experimental structure databases such as RCSB PDB or PDBe. If none is available, consider prediction/modeling resources and inspect confidence.",
        searchQuery: "protein structure"
    },
    sequencing: {
        title: "I need sequencing data",
        text: "For raw reads, start with SRA or ENA. For expression-focused studies, GEO or Expression Atlas may be more appropriate.",
        searchQuery: "raw sequencing reads"
    },
    next: {
        title: "I don't know what to do next",
        text: "Return to the task cards and choose the biological goal closest to your real question. The app is organized around tasks rather than database names.",
        internalTarget: "tasks"
    }
};


// =====================================
// Shared DOM Elements and State
// =====================================

const workflowPanel = document.querySelector("#workflowPanel");
const taskButtons = document.querySelectorAll("[data-workflow]");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const searchSuggestions = document.querySelector("#searchSuggestions");
const searchChips = document.querySelectorAll(".search-chip");
const resourceTypeFilter = document.querySelector("#resourceTypeFilter");
const resourceCategoryFilter = document.querySelector("#resourceCategoryFilter");
const resourceFilterReset = document.querySelector("#resourceFilterReset");
const resourceResults = document.querySelector("#resourceResults");
const categoryButtons = document.querySelectorAll("[data-category]");
const toolLauncherButtons = document.querySelectorAll("[data-tool-target]");
const currentYear = document.querySelector("#currentYear");

let resourceSearchResults = resources.slice();
let currentSearchText = "";
let lastDnaAnalysis = null;


// =====================================
// UI Helpers
// =====================================

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function scrollToSection(sectionId) {
    const element = document.querySelector("#" + sectionId);

    if (!element) {
        return;
    }

    const scrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";

    function scrollNow() {
        element.scrollIntoView({
            behavior: scrollBehavior,
            block: "start"
        });
    }

    // Tool interfaces are collapsed to reduce page length.
    // When a workflow points to one, reveal it before scrolling.
    if (element.classList.contains("collapse") && !element.classList.contains("show")) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(element, {
            toggle: false
        });

        element.addEventListener(
            "shown.bs.collapse",
            function handleShown() {
                scrollNow();
            },
            { once: true }
        );

        collapse.show();
        return;
    }

    scrollNow();
}

function formatNumber(value, decimals) {
    if (!Number.isFinite(value)) {
        return "N/A";
    }

    return Number(value.toFixed(decimals)).toString();
}

function formatPercentage(value) {
    if (!Number.isFinite(value)) {
        return "N/A";
    }

    return value.toFixed(1) + "%";
}

function setEmptyResult(container, message) {
    container.className = "tool-result empty-result";
    container.innerHTML = "<p>" + escapeHTML(message) + "</p>";
}

function createExternalLink(label, url, className) {
    return '<a class="' + className + '" href="' + url + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(label) + " ↗</a>";
}


// =====================================
// Resource Search
// =====================================

function normalizeSearchText(value) {
    return String(value)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}

function normalizeSearchToken(word) {
    let token = String(word)
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "");

    // Very small singular/plural normalization for common search words.
    // This keeps "genes" close to "gene" and "proteins" close to "protein"
    // without introducing a fuzzy-search library.
    if (token.length > 4 && token.endsWith("s") && !token.endsWith("ss")) {
        token = token.slice(0, -1);
    }

    return token;
}

function getTextTokens(text) {
    return normalizeSearchText(text)
        .split(/[^a-z0-9-]+/)
        .map(normalizeSearchToken)
        .filter(function (word) {
            return word.length > 1;
        });
}

function getQueryWords(query) {
    return Array.from(new Set(getTextTokens(query)));
}

function getSynonymTerms(query) {
    const normalizedQuery = normalizeSearchText(query);
    const synonymTerms = [];

    Object.keys(searchSynonyms).forEach(function (key) {
        if (normalizedQuery.includes(key)) {
            searchSynonyms[key].forEach(function (synonym) {
                const normalizedSynonym = normalizeSearchText(synonym);

                if (!synonymTerms.includes(normalizedSynonym)) {
                    synonymTerms.push(normalizedSynonym);
                }
            });
        }
    });

    return synonymTerms;
}

function scoreResource(resource, query) {
    const normalizedQuery = normalizeSearchText(query);
    const queryWords = getQueryWords(query);
    const synonymTerms = getSynonymTerms(query);

    const name = normalizeSearchText(resource.name);
    const category = normalizeSearchText(resource.category);
    const type = normalizeSearchText(resource.type);
    const description = normalizeSearchText(resource.description);
    const tasks = resource.tasks.map(normalizeSearchText);
    const keywords = resource.keywords.map(normalizeSearchText);
    const resourceSynonyms = resource.synonyms.map(normalizeSearchText);

    let score = 0;

    // Main phrase scoring. These are the weights shown in the project notes.
    if (name === normalizedQuery) {
        score += 12;
    } else if (name.includes(normalizedQuery)) {
        score += 9;
    }

    tasks.forEach(function (task) {
        if (task === normalizedQuery) {
            score += 10;
        } else if (task.includes(normalizedQuery)) {
            score += 8;
        }
    });

    if (category === normalizedQuery || category.includes(normalizedQuery)) {
        score += 6;
    }

    keywords.forEach(function (keyword) {
        if (keyword === normalizedQuery) {
            score += 5;
        } else if (keyword.includes(normalizedQuery)) {
            score += 3;
        }
    });

    if (description.includes(normalizedQuery)) {
        score += 1;
    }

    // Multi-word support: reward coverage of individual query words.
    // Token matching prevents a search for "gene" from matching the word
    // "genetic" only because both begin with the same letters.
    const nameTokens = getTextTokens(name);
    const categoryTokens = getTextTokens(category);
    const typeTokens = getTextTokens(type);
    const descriptionTokens = getTextTokens(description);

    queryWords.forEach(function (word) {
        if (nameTokens.includes(word)) score += 2;
        if (categoryTokens.includes(word)) score += 1.5;
        if (typeTokens.includes(word)) score += 1;
        if (descriptionTokens.includes(word)) score += 0.25;

        tasks.forEach(function (task) {
            if (getTextTokens(task).includes(word)) score += 1.5;
        });

        keywords.forEach(function (keyword) {
            const keywordTokens = getTextTokens(keyword);

            if (normalizeSearchToken(keyword) === word) score += 1.5;
            else if (keywordTokens.includes(word)) score += 0.75;
        });
    });

    // Synonyms are useful for recall, but deliberately receive a lower bonus
    // than direct name/task/category matches.
    synonymTerms.forEach(function (synonym) {
        if (name.includes(synonym)) score += 1.5;
        if (category.includes(synonym)) score += 1;
        if (description.includes(synonym)) score += 0.25;

        tasks.forEach(function (task) {
            if (task.includes(synonym)) score += 1;
        });

        keywords.forEach(function (keyword) {
            if (keyword.includes(synonym)) score += 0.75;
        });

        resourceSynonyms.forEach(function (resourceSynonym) {
            if (resourceSynonym.includes(synonym)) score += 0.75;
        });
    });

    return score;
}

function rankResources(query) {
    return resources
        .map(function (resource) {
            return {
                resource: resource,
                score: scoreResource(resource, query)
            };
        })
        .filter(function (item) {
            return item.score > 0;
        })
        .sort(function (a, b) {
            if (b.score !== a.score) {
                return b.score - a.score;
            }

            return a.resource.name.localeCompare(b.resource.name);
        })
        .map(function (item) {
            return item.resource;
        });
}

function getResourceAccentClass(resource) {
    if (resource.category === "Sequence & Alignment") return "accent-sequence";
    if (resource.category === "Genes & Genomes") return "accent-genome";
    if (resource.category === "Protein Information") return "accent-protein";
    if (resource.category === "Protein Structure") return "accent-structure";
    if (resource.category === "Scientific Literature") return "accent-literature";
    if (resource.category === "Gene Expression & Sequencing Data") return "accent-data";
    if (resource.category === "Pathways & Functional Analysis") return "accent-analysis";
    if (resource.category === "Genetic Variation") return "accent-warning";
    if (resource.category === "PCR & Primer Design") return "accent-lab";
    if (resource.category === "Molecular Biology & Cloning") return "accent-sequence";
    if (resource.category === "Model Organisms") return "accent-genome";
    return "accent-neutral";
}

function getFilteredResourceResults() {
    return resourceSearchResults.filter(function (resource) {
        const typeMatches =
            resourceTypeFilter.value === "All" ||
            resource.type === resourceTypeFilter.value;

        const categoryMatches =
            resourceCategoryFilter.value === "All" ||
            resource.category === resourceCategoryFilter.value;

        return typeMatches && categoryMatches;
    });
}

function renderResourceResults() {
    const results = getFilteredResourceResults();
    resourceResults.innerHTML = "";

    if (resourceSearchResults.length === 0) {
        resourceResults.innerHTML = `
            <div class="alert alert-warning" role="alert">
                <strong>No matching resource was found.</strong>
                Try another term such as sequence, protein, gene, genome, PCR, structure, or literature.
            </div>
        `;
        return;
    }

    if (results.length === 0) {
        resourceResults.innerHTML = `
            <div class="alert alert-info" role="alert">
                <strong>Your current filters hide all results.</strong>
                Try another type/category or use <strong>Reset filters</strong>.
            </div>
        `;
        return;
    }

    const heading = document.createElement("div");
    heading.className = "results-heading";

    const title = document.createElement("h3");
    title.textContent = "Recommended resources";

    const count = document.createElement("span");
    count.className = "result-count";

    if (currentSearchText) {
        count.textContent = results.length + ' relevant resources found for "' + currentSearchText + '"';
    } else if (resourceCategoryFilter.value !== "All") {
        count.textContent = results.length + ' resources in "' + resourceCategoryFilter.value + '"';
    } else if (resourceTypeFilter.value !== "All") {
        count.textContent = results.length + ' resources of type "' + resourceTypeFilter.value + '"';
    } else {
        count.textContent = results.length + " resources";
    }

    heading.appendChild(title);
    heading.appendChild(count);

    const row = document.createElement("div");
    row.className = "row g-3";

    results.forEach(function (resource) {
        const column = document.createElement("div");
        column.className = "col-12 col-md-6 col-xl-4";

        const tags = resource.keywords
            .slice(0, 4)
            .map(function (keyword) {
                return '<span class="keyword-tag">#' + escapeHTML(keyword) + "</span>";
            })
            .join("");

        const learnLink = resource.learnUrl
            ? createExternalLink(
                resource.learnTitle || "Learn how to use this resource",
                resource.learnUrl,
                "resource-learn-link"
            )
            : "";

        column.innerHTML = `
            <article class="resource-card ${getResourceAccentClass(resource)}">
                <div class="resource-card-top">
                    <div>
                        <span class="resource-organization">${escapeHTML(resource.organization)}</span>
                        <h4>${escapeHTML(resource.name)}</h4>
                    </div>
                    <span class="resource-type-badge">${escapeHTML(resource.type)}</span>
                </div>

                <span class="resource-category">${escapeHTML(resource.category)}</span>

                <p>${escapeHTML(resource.description)}</p>

                <div class="good-for-block">
                    <strong>Good for</strong>
                    <span>${escapeHTML(resource.tasks.slice(0, 2).join(" · "))}</span>
                </div>

                <div class="resource-tags">${tags}</div>

                ${learnLink ? '<div class="resource-learning">' + learnLink + "</div>" : ""}

                <a
                    class="resource-open-link"
                    href="${resource.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Resource →
                </a>
            </article>
        `;

        row.appendChild(column);
    });

    resourceResults.appendChild(heading);
    resourceResults.appendChild(row);
}

function performResourceSearch(query) {
    const cleanQuery = String(query).trim();

    if (!cleanQuery) {
        resourceResults.innerHTML = `
            <div class="alert alert-info" role="alert">
                Describe a biological task first. For example: identify a DNA sequence, design primers, or find RNA-seq data.
            </div>
        `;
        return;
    }

    currentSearchText = cleanQuery;
    searchInput.value = cleanQuery;
    resourceSearchResults = rankResources(cleanQuery);

    // A new search starts from neutral filters.
    resourceTypeFilter.value = "All";
    resourceCategoryFilter.value = "All";

    renderResourceResults();
}

function browseResourceCategory(category) {
    currentSearchText = "";
    searchInput.value = "";
    resourceSearchResults = resources.slice();
    resourceTypeFilter.value = "All";
    resourceCategoryFilter.value = category;
    renderResourceResults();
    scrollToSection("resource-finder");
}

function resetResourceFinder() {
    currentSearchText = "";
    searchInput.value = "";
    resourceSearchResults = resources.slice();
    resourceTypeFilter.value = "All";
    resourceCategoryFilter.value = "All";
    renderResourceResults();
}

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    performResourceSearch(searchInput.value);
});

searchChips.forEach(function (button) {
    button.addEventListener("click", function () {
        performResourceSearch(button.dataset.search);
    });
});

resourceTypeFilter.addEventListener("change", function () {
    // Filters browse the full directory if there is no active text search.
    if (!currentSearchText) {
        resourceSearchResults = resources.slice();
    }
    renderResourceResults();
});

resourceCategoryFilter.addEventListener("change", function () {
    if (!currentSearchText) {
        resourceSearchResults = resources.slice();
    }
    renderResourceResults();
});

resourceFilterReset.addEventListener("click", function () {
    resourceTypeFilter.value = "All";
    resourceCategoryFilter.value = "All";
    renderResourceResults();
});

categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        browseResourceCategory(button.dataset.category);
    });
});

// Tool launcher buttons use Bootstrap Collapse for progressive disclosure.
toolLauncherButtons.forEach(function (button) {
    const targetId = button.dataset.toolTarget;
    const target = document.querySelector("#" + targetId);

    if (!target) {
        return;
    }

    target.addEventListener("shown.bs.collapse", function () {
        target.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            block: "start"
        });
    });
});


// Search suggestions remain fully local.
const commonTaskSuggestions = [
    "identify a DNA sequence",
    "design PCR primers",
    "protein structure",
    "raw RNA-seq reads",
    "gene genomic location",
    "protein domains",
    "scientific literature",
    "pathway analysis",
    "variant information",
    "genome browser"
];

function getSearchSuggestions(query) {
    const normalized = normalizeSearchText(query);

    if (normalized.length < 2) {
        return [];
    }

    const suggestions = [];

    commonTaskSuggestions.forEach(function (task) {
        if (normalizeSearchText(task).includes(normalized)) {
            suggestions.push({
                label: task,
                value: task
            });
        }
    });

    resources.forEach(function (resource) {
        if (
            normalizeSearchText(resource.name).includes(normalized) ||
            normalizeSearchText(resource.category).includes(normalized)
        ) {
            suggestions.push({
                label: resource.name + " · " + resource.category,
                value: resource.name
            });
        }
    });

    const unique = [];
    const usedValues = [];

    suggestions.forEach(function (suggestion) {
        if (!usedValues.includes(suggestion.value) && unique.length < 6) {
            usedValues.push(suggestion.value);
            unique.push(suggestion);
        }
    });

    return unique;
}

function renderSearchSuggestions() {
    const suggestions = getSearchSuggestions(searchInput.value);
    searchSuggestions.innerHTML = "";

    if (suggestions.length === 0) {
        searchSuggestions.classList.add("d-none");
        return;
    }

    suggestions.forEach(function (suggestion) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "search-suggestion";
        button.setAttribute("role", "option");
        button.textContent = suggestion.label;

        button.addEventListener("click", function () {
            searchSuggestions.classList.add("d-none");
            performResourceSearch(suggestion.value);
        });

        searchSuggestions.appendChild(button);
    });

    searchSuggestions.classList.remove("d-none");
}

searchInput.addEventListener("input", renderSearchSuggestions);
searchInput.addEventListener("focus", renderSearchSuggestions);

document.addEventListener("click", function (event) {
    if (!event.target.closest(".search-input-container")) {
        searchSuggestions.classList.add("d-none");
    }
});


// =====================================
// Workflow Navigator
// =====================================

function renderWorkflowActions(actions) {
    if (!actions || actions.length === 0) {
        return "";
    }

    return actions
        .map(function (action) {
            if (action.kind === "external") {
                return createExternalLink(action.label, action.url, "workflow-action workflow-action-external");
            }

            if (action.kind === "search") {
                return '<button class="workflow-action" type="button" data-workflow-search="' + escapeHTML(action.query) + '">' + escapeHTML(action.label) + "</button>";
            }

            return '<button class="workflow-action" type="button" data-workflow-scroll="' + escapeHTML(action.target) + '">' + escapeHTML(action.label) + "</button>";
        })
        .join("");
}

function renderSequenceTypeChooser() {
    return `
        <div class="sequence-type-chooser">
            <h4>What kind of sequence might you have?</h4>
            <div class="sequence-type-buttons">
                <button type="button" data-sequence-type="dna">DNA</button>
                <button type="button" data-sequence-type="rna">RNA</button>
                <button type="button" data-sequence-type="protein">Protein</button>
                <button type="button" data-sequence-type="unknown">Unknown</button>
            </div>
            <div id="sequenceTypeGuidance" class="sequence-type-guidance">
                Choose the closest option. If you truly do not know, select Unknown.
            </div>
        </div>
    `;
}

function renderWorkflow(workflowKey) {
    const workflow = workflows[workflowKey];

    if (!workflow) {
        return;
    }

    const steps = workflow.steps
        .map(function (step, index) {
            return `
                <li>
                    <span>${index + 1}</span>
                    <p>${escapeHTML(step)}</p>
                </li>
            `;
        })
        .join("");

    workflowPanel.innerHTML = `
        <div class="workflow-header">
            <div>
                <span class="workflow-kicker">GUIDED WORKFLOW</span>
                <h2>${escapeHTML(workflow.title)}</h2>
                <p>${escapeHTML(workflow.description)}</p>
            </div>
        </div>

        <ol class="workflow-steps">${steps}</ol>

        ${workflow.sequenceChooser ? renderSequenceTypeChooser() : ""}

        <div class="workflow-actions">
            ${renderWorkflowActions(workflow.actions)}
        </div>
    `;

    scrollToSection("workflow");
}

taskButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        renderWorkflow(button.dataset.workflow);
    });
});

workflowPanel.addEventListener("click", function (event) {
    const scrollButton = event.target.closest("[data-workflow-scroll]");
    const searchButton = event.target.closest("[data-workflow-search]");
    const sequenceTypeButton = event.target.closest("[data-sequence-type]");

    if (scrollButton) {
        scrollToSection(scrollButton.dataset.workflowScroll);
    }

    if (searchButton) {
        performResourceSearch(searchButton.dataset.workflowSearch);
        scrollToSection("resource-finder");
    }

    if (sequenceTypeButton) {
        renderSequenceTypeGuidance(sequenceTypeButton.dataset.sequenceType);
    }
});

function renderSequenceTypeGuidance(type) {
    const container = document.querySelector("#sequenceTypeGuidance");

    if (!container) {
        return;
    }

    if (type === "dna") {
        container.innerHTML = `
            <strong>DNA:</strong>
            clean and inspect it locally first, then use a nucleotide similarity search if identification is the goal.
            <div class="workflow-actions mt-3">
                <button type="button" class="workflow-action" data-workflow-scroll="dna-tool">Analyze DNA</button>
                <button type="button" class="workflow-action" data-workflow-search="DNA sequence similarity BLAST">Find DNA similarity tools</button>
            </div>
        `;
        return;
    }

    if (type === "rna") {
        container.innerHTML = `
            <strong>RNA:</strong>
            this built-in DNA analyzer does not interpret U bases. Use a nucleotide-aware professional resource and check the biological context of the RNA.
            <div class="workflow-actions mt-3">
                <button type="button" class="workflow-action" data-workflow-search="RNA nucleotide sequence BLAST">Find RNA/nucleotide resources</button>
            </div>
        `;
        return;
    }

    if (type === "protein") {
        container.innerHTML = `
            <strong>Protein:</strong>
            use a protein similarity search and protein annotation resources. A sequence match can suggest related proteins, but similarity alone does not prove identical biological function.
            <div class="workflow-actions mt-3">
                <button type="button" class="workflow-action" data-workflow-search="protein sequence similarity">Find protein resources</button>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <strong>Unknown:</strong>
        do not infer sequence type from a short string with confidence. Check the original file/experiment metadata and use a professional similarity-search workflow appropriate to the likely molecule type.
        <div class="workflow-actions mt-3">
            <button type="button" class="workflow-action" data-workflow-search="sequence similarity">Find sequence-search tools</button>
        </div>
    `;
}


// =====================================
// Contextual Help Renderer
// =====================================

function createHelpItemHTML(item) {
    return `
        <article class="help-link-card">
            <span>${escapeHTML(item.organization)}</span>
            <strong>${escapeHTML(item.title)}</strong>
            <small>${escapeHTML(item.sourceType || item.type || "Official resource")}</small>
            <p>${escapeHTML(item.description)}</p>
            <a href="${item.url}" target="_blank" rel="noopener noreferrer">Open official resource ↗</a>
        </article>
    `;
}

function createHelpGroup(title, icon, items) {
    if (!items || items.length === 0) {
        return "";
    }

    return `
        <div class="help-group">
            <h5>${icon} ${escapeHTML(title)}</h5>
            <div class="help-link-grid">
                ${items.map(createHelpItemHTML).join("")}
            </div>
        </div>
    `;
}

function renderHelpResources(topic, selector, heading) {
    const container = document.querySelector(selector);
    const data = helpResources[topic];

    if (!container || !data) {
        return;
    }

    container.innerHTML = `
        <details class="help-details">
            <summary>Need help with this step?</summary>
            <div class="help-details-body">
                <h4>${escapeHTML(heading)}</h4>
                ${createHelpGroup("Learn", "📘", data.learn)}
                ${createHelpGroup("Troubleshoot", "🛠", data.troubleshoot)}
                ${createHelpGroup("Professional Tool", "🔬", data.professionalTools)}
                ${createHelpGroup("Official Documentation", "↗", data.officialDocumentation)}
            </div>
        </details>
    `;
}


// =====================================
// DNA Sequence Analyzer
// =====================================

const dnaForm = document.querySelector("#dnaForm");
const dnaInput = document.querySelector("#dnaInput");
const dnaReset = document.querySelector("#dnaReset");
const dnaResult = document.querySelector("#dnaResult");
const sequenceNextSteps = document.querySelector("#sequenceNextSteps");

function cleanSequenceInput(rawInput, allowN) {
    const trimmedInput = String(rawInput).trim();

    if (!trimmedInput) {
        return {
            error: "Please enter a DNA sequence."
        };
    }

    const rawLines = trimmedInput.split(/\r?\n/);
    const nonEmptyLines = rawLines.filter(function (line) {
        return line.trim() !== "";
    });

    let header = "";
    let fastaDetected = false;
    let sequenceLines = nonEmptyLines.slice();

    if (sequenceLines[0] && sequenceLines[0].trim().startsWith(">")) {
        fastaDetected = true;
        header = sequenceLines[0].trim().slice(1).trim();
        sequenceLines = sequenceLines.slice(1);
    }

    const extraHeader = sequenceLines.some(function (line) {
        return line.trim().startsWith(">");
    });

    if (extraHeader) {
        return {
            error: "This beginner tool accepts one FASTA record at a time. We found more than one FASTA header."
        };
    }

    const sequence = sequenceLines
        .join("")
        .replace(/\s+/g, "")
        .toUpperCase();

    if (!sequence) {
        return {
            error: fastaDetected
                ? "A FASTA header was found, but no sequence was found below it."
                : "Please enter a DNA sequence."
        };
    }

    const allowedPattern = allowN ? /^[ATGCN]+$/ : /^[ATGC]+$/;

    if (!allowedPattern.test(sequence)) {
        const invalidCharacters = Array.from(
            new Set(
                sequence
                    .split("")
                    .filter(function (character) {
                        return allowN
                            ? !["A", "T", "G", "C", "N"].includes(character)
                            : !["A", "T", "G", "C"].includes(character);
                    })
            )
        );

        return {
            error:
                "Unsupported character(s): " +
                invalidCharacters.join(", ") +
                ". " +
                (allowN
                    ? "This tool supports A, T, G, C, and N."
                    : "This primer check supports A, T, G, and C only.")
        };
    }

    return {
        sequence: sequence,
        header: header,
        fastaDetected: fastaDetected
    };
}

function countBases(sequence) {
    const counts = {
        A: 0,
        T: 0,
        G: 0,
        C: 0,
        N: 0
    };

    sequence.split("").forEach(function (base) {
        if (Object.prototype.hasOwnProperty.call(counts, base)) {
            counts[base] += 1;
        }
    });

    return counts;
}

function calculateSequencePercentages(counts) {
    const canonicalBaseCount = counts.A + counts.T + counts.G + counts.C;

    if (canonicalBaseCount === 0) {
        return {
            gc: null,
            at: null,
            canonicalBaseCount: 0
        };
    }

    return {
        gc: ((counts.G + counts.C) / canonicalBaseCount) * 100,
        at: ((counts.A + counts.T) / canonicalBaseCount) * 100,
        canonicalBaseCount: canonicalBaseCount
    };
}

function getReverseComplement(sequence) {
    const complement = {
        A: "T",
        T: "A",
        G: "C",
        C: "G",
        N: "N"
    };

    return sequence
        .split("")
        .reverse()
        .map(function (base) {
            return complement[base];
        })
        .join("");
}

function getSequencePreview(sequence) {
    const previewLimit = 3000;

    if (sequence.length <= previewLimit) {
        return sequence;
    }

    return sequence.slice(0, 1500) + "\n… preview shortened …\n" + sequence.slice(-1500);
}

function copyTextToClipboard(text, button) {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
        button.textContent = "Copy not available";
        return;
    }

    navigator.clipboard.writeText(text)
        .then(function () {
            const originalText = button.textContent;
            button.textContent = "Copied";

            window.setTimeout(function () {
                button.textContent = originalText;
            }, 1400);
        })
        .catch(function () {
            button.textContent = "Copy failed";
        });
}

dnaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const cleaned = cleanSequenceInput(dnaInput.value, true);

    if (cleaned.error) {
        dnaResult.className = "tool-result";
        dnaResult.innerHTML = `
            <div class="warning-panel">
                <strong>Your sequence needs attention.</strong>
                <p>${escapeHTML(cleaned.error)}</p>
                <p class="mb-0">DNA sequences normally contain A, T, G and C. This beginner tool also allows N for an unspecified nucleotide.</p>
            </div>
        `;
        sequenceNextSteps.classList.add("d-none");
        return;
    }

    const counts = countBases(cleaned.sequence);
    const percentages = calculateSequencePercentages(counts);
    const reverseComplement = getReverseComplement(cleaned.sequence);

    lastDnaAnalysis = {
        cleaned: cleaned.sequence,
        reverseComplement: reverseComplement
    };

    dnaResult.className = "tool-result";
    dnaResult.innerHTML = `
        ${cleaned.fastaDetected ? `
            <div class="info-panel mb-3">
                <strong>FASTA input detected.</strong>
                The line beginning with &gt; is a description/header and is not counted as sequence.
            </div>
        ` : ""}

        <div class="metric-grid">
            <div class="metric"><span>Sequence length</span><strong>${cleaned.sequence.length} bp</strong></div>
            <div class="metric"><span>A</span><strong>${counts.A}</strong></div>
            <div class="metric"><span>T</span><strong>${counts.T}</strong></div>
            <div class="metric"><span>G</span><strong>${counts.G}</strong></div>
            <div class="metric"><span>C</span><strong>${counts.C}</strong></div>
            <div class="metric"><span>N</span><strong>${counts.N}</strong></div>
            <div class="metric"><span>GC content</span><strong>${percentages.gc === null ? "N/A" : formatPercentage(percentages.gc)}</strong></div>
            <div class="metric"><span>AT content</span><strong>${percentages.at === null ? "N/A" : formatPercentage(percentages.at)}</strong></div>
        </div>

        <p class="result-note">
            GC% and AT% use only A/T/G/C bases as the denominator; N bases are excluded from those percentages.
        </p>

        <div class="sequence-result-block">
            <div class="sequence-result-heading">
                <h4>Cleaned sequence</h4>
                <button class="copy-button" type="button" data-copy-source="cleaned">Copy cleaned sequence</button>
            </div>
            <pre>${escapeHTML(getSequencePreview(cleaned.sequence))}</pre>
        </div>

        <div class="sequence-result-block">
            <div class="sequence-result-heading">
                <h4>Reverse complement</h4>
                <button class="copy-button" type="button" data-copy-source="reverse">Copy reverse complement</button>
            </div>
            <pre>${escapeHTML(getSequencePreview(reverseComplement))}</pre>
        </div>
    `;

    sequenceNextSteps.classList.remove("d-none");
    sequenceNextSteps.innerHTML = `
        <span class="next-step-label">WHAT SHOULD I DO NEXT?</span>
        <h4>Choose what you want to learn about this sequence</h4>
        <div class="next-step-actions">
            <a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi" target="_blank" rel="noopener noreferrer">Identify / compare → NCBI BLAST ↗</a>
            <button type="button" data-next-search="gene genomic location">Find genomic context</button>
            <button type="button" data-next-scroll="primer-tool">Design/check primers</button>
            <button type="button" data-next-scroll="restriction-tool">Find restriction sites</button>
        </div>
        <p class="result-note">Do not assume every DNA sequence is protein-coding. If coding potential matters, use appropriate annotation/context resources.</p>
    `;
});

dnaResult.addEventListener("click", function (event) {
    const copyButton = event.target.closest("[data-copy-source]");

    if (!copyButton || !lastDnaAnalysis) {
        return;
    }

    const text =
        copyButton.dataset.copySource === "reverse"
            ? lastDnaAnalysis.reverseComplement
            : lastDnaAnalysis.cleaned;

    copyTextToClipboard(text, copyButton);
});

sequenceNextSteps.addEventListener("click", function (event) {
    const scrollButton = event.target.closest("[data-next-scroll]");
    const searchButton = event.target.closest("[data-next-search]");

    if (scrollButton) {
        scrollToSection(scrollButton.dataset.nextScroll);
    }

    if (searchButton) {
        performResourceSearch(searchButton.dataset.nextSearch);
        scrollToSection("resource-finder");
    }
});

dnaReset.addEventListener("click", function () {
    dnaForm.reset();
    lastDnaAnalysis = null;
    setEmptyResult(
        dnaResult,
        "Your cleaned sequence, composition, GC/AT percentages, and reverse complement will appear here."
    );
    sequenceNextSteps.classList.add("d-none");
    sequenceNextSteps.innerHTML = "";
});


// =====================================
// Primer Analyzer
// =====================================

const primerForm = document.querySelector("#primerForm");
const forwardPrimerInput = document.querySelector("#forwardPrimerInput");
const reversePrimerInput = document.querySelector("#reversePrimerInput");
const primerReset = document.querySelector("#primerReset");
const primerResult = document.querySelector("#primerResult");
const primerNextSteps = document.querySelector("#primerNextSteps");

function calculateWallaceTm(counts) {
    return 2 * (counts.A + counts.T) + 4 * (counts.G + counts.C);
}

function analyzePrimer(sequence) {
    const counts = countBases(sequence);
    const length = sequence.length;
    const gc = length > 0 ? ((counts.G + counts.C) / length) * 100 : null;
    const tm = calculateWallaceTm(counts);
    const warnings = [];

    if (length < 18) {
        warnings.push("This primer is relatively short. Short primers may require closer specificity evaluation.");
    }

    if (length > 30) {
        warnings.push("This primer is relatively long. Consider reviewing the design with a dedicated primer-design tool.");
    }

    if (gc !== null && gc < 40) {
        warnings.push("GC content is relatively low. This is not proof that the primer will fail, but it is worth closer evaluation.");
    }

    if (gc !== null && gc > 60) {
        warnings.push("GC content is relatively high. This may require closer evaluation depending on sequence and PCR conditions.");
    }

    return {
        sequence: sequence,
        counts: counts,
        length: length,
        gc: gc,
        tm: tm,
        warnings: warnings
    };
}

function renderPrimerSummary(label, analysis) {
    const warningHTML = analysis.warnings.length
        ? `
            <div class="warning-panel mt-3">
                <strong>Points to review</strong>
                <ul>${analysis.warnings.map(function (warning) {
                    return "<li>" + escapeHTML(warning) + "</li>";
                }).join("")}</ul>
            </div>
        `
        : "";

    return `
        <article class="primer-summary">
            <h4>${escapeHTML(label)}</h4>
            <div class="metric-grid">
                <div class="metric"><span>Length</span><strong>${analysis.length} nt</strong></div>
                <div class="metric"><span>GC content</span><strong>${formatPercentage(analysis.gc)}</strong></div>
                <div class="metric"><span>Approximate Tm</span><strong>${formatNumber(analysis.tm, 1)} °C</strong></div>
                <div class="metric"><span>A / T / G / C</span><strong>${analysis.counts.A} / ${analysis.counts.T} / ${analysis.counts.G} / ${analysis.counts.C}</strong></div>
            </div>
            ${warningHTML}
        </article>
    `;
}

primerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const forward = cleanSequenceInput(forwardPrimerInput.value, false);

    if (forward.error) {
        primerResult.className = "tool-result";
        primerResult.innerHTML = `
            <div class="warning-panel">
                <strong>Forward primer needs attention.</strong>
                <p class="mb-0">${escapeHTML(forward.error)}</p>
            </div>
        `;
        primerNextSteps.classList.add("d-none");
        return;
    }

    let reverse = null;

    if (reversePrimerInput.value.trim() !== "") {
        reverse = cleanSequenceInput(reversePrimerInput.value, false);

        if (reverse.error) {
            primerResult.className = "tool-result";
            primerResult.innerHTML = `
                <div class="warning-panel">
                    <strong>Reverse primer needs attention.</strong>
                    <p class="mb-0">${escapeHTML(reverse.error)}</p>
                </div>
            `;
            primerNextSteps.classList.add("d-none");
            return;
        }
    }

    const forwardAnalysis = analyzePrimer(forward.sequence);
    const reverseAnalysis = reverse ? analyzePrimer(reverse.sequence) : null;

    let pairHTML = "";

    if (reverseAnalysis) {
        const tmDifference = Math.abs(forwardAnalysis.tm - reverseAnalysis.tm);

        pairHTML = `
            <div class="pair-comparison">
                <h4>Primer-pair comparison</h4>
                <p>Approximate Tm difference: <strong>${formatNumber(tmDifference, 1)} °C</strong></p>
                <p class="mb-0">
                    ${tmDifference <= 5
                        ? "The simple Wallace estimates are fairly close, but similar approximate Tm values alone do not validate a primer pair."
                        : "The simple Wallace estimates differ by more than 5 °C. This is a reason to review the pair with a dedicated primer-design tool, not a definitive failure diagnosis."}
                </p>
            </div>
        `;
    }

    primerResult.className = "tool-result";
    primerResult.innerHTML = `
        <div class="primer-result-grid">
            ${renderPrimerSummary("Forward primer", forwardAnalysis)}
            ${reverseAnalysis ? renderPrimerSummary("Reverse primer", reverseAnalysis) : ""}
        </div>

        ${pairHTML}

        <div class="info-panel mt-3">
            <strong>Approximate Tm using a simple rule</strong>
            <p class="mb-0">
                Wallace estimate: Tm ≈ 2 × (A + T) + 4 × (G + C).
                It does not model salt, Mg²⁺, oligo concentration, mismatches, or complete thermodynamic behavior.
            </p>
        </div>
    `;

    primerNextSteps.classList.remove("d-none");
    primerNextSteps.innerHTML = `
        <span class="next-step-label">NEXT STEPS</span>
        <div class="next-step-actions">
            <a href="https://www.ncbi.nlm.nih.gov/tools/primer-blast/" target="_blank" rel="noopener noreferrer">Check specificity → Primer-BLAST ↗</a>
            <a href="https://www.idtdna.com/pages/tools/oligoanalyzer" target="_blank" rel="noopener noreferrer">Check hairpins &amp; dimers → OligoAnalyzer ↗</a>
            <button type="button" data-next-scroll="pcr-tool">Prepare reaction</button>
            <button type="button" data-next-scroll="pcr-troubleshooting-tool">Troubleshoot PCR</button>
        </div>
    `;
});

primerNextSteps.addEventListener("click", function (event) {
    const scrollButton = event.target.closest("[data-next-scroll]");

    if (scrollButton) {
        scrollToSection(scrollButton.dataset.nextScroll);
    }
});

primerReset.addEventListener("click", function () {
    primerForm.reset();
    setEmptyResult(
        primerResult,
        "Enter a forward primer, and optionally a reverse primer, to see quick composition and approximate Tm results."
    );
    primerNextSteps.classList.add("d-none");
    primerNextSteps.innerHTML = "";
});


// =====================================
// PCR Calculator
// =====================================

const pcrForm = document.querySelector("#pcrForm");
const pcrReactions = document.querySelector("#pcrReactions");
const pcrExtraPercent = document.querySelector("#pcrExtraPercent");
const pcrExtraReactions = document.querySelector("#pcrExtraReactions");
const pcrReactionVolume = document.querySelector("#pcrReactionVolume");
const pcrReagentRows = document.querySelector("#pcrReagentRows");
const pcrReset = document.querySelector("#pcrReset");
const pcrResult = document.querySelector("#pcrResult");

function readNumber(inputElement, allowZero) {
    const value = Number(inputElement.value);

    if (!Number.isFinite(value)) {
        return null;
    }

    if (allowZero ? value < 0 : value <= 0) {
        return null;
    }

    return value;
}

function getPcrReagents() {
    const rows = Array.from(pcrReagentRows.querySelectorAll("[data-reagent-row]"));
    const reagents = [];
    const errors = [];

    rows.forEach(function (row, index) {
        const nameInput = row.querySelector(".reagent-name");
        const volumeInput = row.querySelector(".reagent-volume");
        const pooledInput = row.querySelector(".reagent-pooled");

        const name = nameInput.value.trim();
        const rawVolume = volumeInput.value.trim();

        if (!name && rawVolume === "") {
            return;
        }

        if (!name) {
            errors.push("Please name reagent row " + (index + 1) + ".");
            return;
        }

        if (rawVolume === "") {
            errors.push("Please enter a per-reaction volume for " + name + ".");
            return;
        }

        const volume = Number(rawVolume);

        if (!Number.isFinite(volume) || volume < 0) {
            errors.push("Volume for " + name + " must be zero or a positive number.");
            return;
        }

        reagents.push({
            name: name,
            volume: volume,
            pooled: pooledInput.checked
        });
    });

    return {
        reagents: reagents,
        errors: errors
    };
}

pcrForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const reactions = Number(pcrReactions.value);
    const extraPercent = Number(pcrExtraPercent.value);
    const extraReactions = Number(pcrExtraReactions.value);
    const reactionVolume = Number(pcrReactionVolume.value);

    if (!Number.isInteger(reactions) || reactions <= 0) {
        pcrResult.className = "tool-result";
        pcrResult.innerHTML = `
            <div class="warning-panel">
                <strong>Number of reactions must be a positive whole number.</strong>
                <p class="mb-0">For example: 8, not 8.5.</p>
            </div>
        `;
        return;
    }

    if (!Number.isFinite(extraPercent) || extraPercent < 0) {
        pcrResult.innerHTML = '<div class="warning-panel"><strong>Extra percentage must be zero or a positive number.</strong></div>';
        return;
    }

    if (!Number.isInteger(extraReactions) || extraReactions < 0) {
        pcrResult.innerHTML = '<div class="warning-panel"><strong>Extra reactions must be a whole number of zero or more.</strong></div>';
        return;
    }

    if (!Number.isFinite(reactionVolume) || reactionVolume <= 0) {
        pcrResult.innerHTML = '<div class="warning-panel"><strong>Reaction volume must be a positive number.</strong></div>';
        return;
    }

    const reagentData = getPcrReagents();

    if (reagentData.errors.length > 0) {
        pcrResult.innerHTML = `
            <div class="warning-panel">
                <strong>Please review the reagent table.</strong>
                <ul>${reagentData.errors.map(function (message) {
                    return "<li>" + escapeHTML(message) + "</li>";
                }).join("")}</ul>
            </div>
        `;
        return;
    }

    if (reagentData.reagents.length === 0) {
        pcrResult.innerHTML = '<div class="warning-panel"><strong>Enter at least one reagent row.</strong></div>';
        return;
    }

    const perReactionTotal = reagentData.reagents.reduce(function (sum, reagent) {
        return sum + reagent.volume;
    }, 0);

    if (perReactionTotal > reactionVolume + 0.000001) {
        pcrResult.innerHTML = `
            <div class="warning-panel">
                <strong>Reagent volumes exceed the stated reaction volume.</strong>
                <p class="mb-0">
                    Entered reagent total: ${formatNumber(perReactionTotal, 3)} µL.
                    Stated reaction volume: ${formatNumber(reactionVolume, 3)} µL.
                </p>
            </div>
        `;
        return;
    }

    const adjustedReactions =
        reactions * (1 + extraPercent / 100) + extraReactions;

    const rowsHTML = reagentData.reagents
        .map(function (reagent) {
            const total = reagent.volume * adjustedReactions;
            return `
                <tr>
                    <td>${escapeHTML(reagent.name)}</td>
                    <td>${formatNumber(reagent.volume, 3)} µL</td>
                    <td>${formatNumber(adjustedReactions, 2)}</td>
                    <td>${formatNumber(total, 3)} µL</td>
                    <td>${reagent.pooled ? "Yes" : "No — add separately"}</td>
                </tr>
            `;
        })
        .join("");

    const pooledPerReaction = reagentData.reagents
        .filter(function (reagent) {
            return reagent.pooled;
        })
        .reduce(function (sum, reagent) {
            return sum + reagent.volume;
        }, 0);

    const pooledTotal = pooledPerReaction * adjustedReactions;
    const unallocated = reactionVolume - perReactionTotal;

    pcrResult.className = "tool-result";
    pcrResult.innerHTML = `
        <div class="metric-grid">
            <div class="metric"><span>Requested reactions</span><strong>${reactions}</strong></div>
            <div class="metric"><span>Adjusted reaction factor</span><strong>${formatNumber(adjustedReactions, 2)}</strong></div>
            <div class="metric"><span>Reaction volume</span><strong>${formatNumber(reactionVolume, 3)} µL</strong></div>
            <div class="metric"><span>Entered reagent total / reaction</span><strong>${formatNumber(perReactionTotal, 3)} µL</strong></div>
            <div class="metric"><span>Pooled master-mix volume / reaction</span><strong>${formatNumber(pooledPerReaction, 3)} µL</strong></div>
            <div class="metric"><span>Total pooled master mix</span><strong>${formatNumber(pooledTotal, 3)} µL</strong></div>
        </div>

        ${unallocated > 0.000001 ? `
            <div class="info-panel mt-3">
                <strong>${formatNumber(unallocated, 3)} µL per reaction is not assigned to a reagent row.</strong>
                This may be intentional, but compare the table with your protocol.
            </div>
        ` : ""}

        <div class="table-responsive mt-3">
            <table class="table result-table">
                <thead>
                    <tr>
                        <th>Reagent</th>
                        <th>Per reaction</th>
                        <th>Adjusted reactions</th>
                        <th>Total needed</th>
                        <th>In pooled master mix?</th>
                    </tr>
                </thead>
                <tbody>${rowsHTML}</tbody>
            </table>
        </div>

        <div class="info-panel mt-3">
            <strong>Important distinction</strong>
            <p class="mb-0">
                The reaction calculator scales every entered component.
                The pooled master-mix total includes only rows you marked for pooling.
                Template DNA or condition-specific reagents may need to be added separately depending on your experiment.
            </p>
        </div>
    `;
});

pcrReset.addEventListener("click", function () {
    pcrForm.reset();
    setEmptyResult(
        pcrResult,
        "Enter reaction settings and reagent volumes from your protocol to calculate scaled totals."
    );
});


// =====================================
// PCR Troubleshooting
// =====================================

const pcrTroubleshootForm = document.querySelector("#pcrTroubleshootForm");
const pcrProblemSelect = document.querySelector("#pcrProblemSelect");
const pcrTroubleshootReset = document.querySelector("#pcrTroubleshootReset");
const pcrTroubleshootResult = document.querySelector("#pcrTroubleshootResult");

pcrTroubleshootForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const guidance = pcrTroubleshooting[pcrProblemSelect.value];

    if (!guidance) {
        pcrTroubleshootResult.innerHTML = `
            <div class="warning-panel">
                <strong>Choose an observed PCR problem first.</strong>
            </div>
        `;
        return;
    }

    pcrTroubleshootResult.className = "tool-result";
    pcrTroubleshootResult.innerHTML = `
        <div class="troubleshooting-result">
            <span class="warning-label">AREAS TO INVESTIGATE</span>
            <h4>${escapeHTML(guidance.title)}</h4>
            <p>${escapeHTML(guidance.explanation)}</p>

            <ul>
                ${guidance.checks.map(function (check) {
                    return "<li>" + escapeHTML(check) + "</li>";
                }).join("")}
            </ul>

            <p><strong>Possible factors to investigate include the items above.</strong> This list is not a diagnosis.</p>

            <div class="next-step-actions">
                ${guidance.links.map(function (link) {
                    return createExternalLink(link[0], link[1], "external-action");
                }).join("")}
            </div>
        </div>
    `;
});

pcrTroubleshootReset.addEventListener("click", function () {
    pcrTroubleshootForm.reset();
    setEmptyResult(
        pcrTroubleshootResult,
        "Choose an observed problem to see cautious troubleshooting categories and official guidance."
    );
});


// =====================================
// Dilution Calculator
// =====================================

const dilutionForm = document.querySelector("#dilutionForm");
const stockConcentration = document.querySelector("#stockConcentration");
const desiredConcentration = document.querySelector("#desiredConcentration");
const finalVolume = document.querySelector("#finalVolume");
const volumeUnit = document.querySelector("#volumeUnit");
const dilutionReset = document.querySelector("#dilutionReset");
const dilutionResult = document.querySelector("#dilutionResult");

dilutionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const c1 = Number(stockConcentration.value);
    const c2 = Number(desiredConcentration.value);
    const v2 = Number(finalVolume.value);
    const unit = volumeUnit.value;

    if (
        !Number.isFinite(c1) ||
        !Number.isFinite(c2) ||
        !Number.isFinite(v2) ||
        c1 <= 0 ||
        c2 <= 0 ||
        v2 <= 0
    ) {
        dilutionResult.innerHTML = `
            <div class="warning-panel">
                <strong>Please enter positive values for C1, C2, and V2.</strong>
                <p class="mb-0">Zero, negative, missing, NaN, and infinite values are not valid for this calculation.</p>
            </div>
        `;
        return;
    }

    if (c2 > c1) {
        dilutionResult.innerHTML = `
            <div class="warning-panel">
                <strong>A simple dilution cannot increase concentration above the stock concentration.</strong>
                <p class="mb-0">
                    C2 is greater than C1. Adding diluent decreases concentration;
                    obtaining a higher concentration requires a different preparation or concentration step.
                </p>
            </div>
        `;
        return;
    }

    const v1 = (c2 * v2) / c1;
    const diluent = v2 - v1;

    dilutionResult.className = "tool-result";
    dilutionResult.innerHTML = `
        <div class="metric-grid">
            <div class="metric"><span>Stock volume needed (V1)</span><strong>${formatNumber(v1, 4)} ${unit}</strong></div>
            <div class="metric"><span>Diluent volume</span><strong>${formatNumber(diluent, 4)} ${unit}</strong></div>
            <div class="metric"><span>Final volume (V2)</span><strong>${formatNumber(v2, 4)} ${unit}</strong></div>
        </div>

        <div class="formula-panel">
            <strong>C1 × V1 = C2 × V2</strong>
            <span>V1 = (C2 × V2) / C1</span>
        </div>
    `;
});

dilutionReset.addEventListener("click", function () {
    dilutionForm.reset();
    setEmptyResult(
        dilutionResult,
        "Enter C1, C2, and V2 to calculate stock and diluent volumes."
    );
});


// =====================================
// Restriction Site Finder
// =====================================

const restrictionForm = document.querySelector("#restrictionForm");
const restrictionInput = document.querySelector("#restrictionInput");
const enzymeSelect = document.querySelector("#enzymeSelect");
const enzymeRecognition = document.querySelector("#enzymeRecognition");
const restrictionReset = document.querySelector("#restrictionReset");
const restrictionResult = document.querySelector("#restrictionResult");
const restrictionNextSteps = document.querySelector("#restrictionNextSteps");

function populateRestrictionEnzymes() {
    enzymeSelect.innerHTML = "";

    Object.keys(restrictionEnzymes).forEach(function (enzymeName) {
        const option = document.createElement("option");
        option.value = enzymeName;
        option.textContent = enzymeName;
        enzymeSelect.appendChild(option);
    });

    updateRestrictionRecognition();
}

function updateRestrictionRecognition() {
    const enzyme = restrictionEnzymes[enzymeSelect.value];
    enzymeRecognition.textContent = enzyme ? enzyme.recognition : "—";
}

function findRestrictionPositions(sequence, recognitionSequence) {
    const positions = [];
    let searchStart = 0;

    while (searchStart <= sequence.length - recognitionSequence.length) {
        const index = sequence.indexOf(recognitionSequence, searchStart);

        if (index === -1) {
            break;
        }

        // Positions are 1-based recognition-sequence starts, not cleavage sites.
        positions.push(index + 1);
        searchStart = index + 1;
    }

    return positions;
}

enzymeSelect.addEventListener("change", updateRestrictionRecognition);

restrictionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const cleaned = cleanSequenceInput(restrictionInput.value, true);

    if (cleaned.error) {
        restrictionResult.innerHTML = `
            <div class="warning-panel">
                <strong>Sequence input needs attention.</strong>
                <p class="mb-0">${escapeHTML(cleaned.error)}</p>
            </div>
        `;
        restrictionNextSteps.classList.add("d-none");
        return;
    }

    const enzymeName = enzymeSelect.value;
    const enzyme = restrictionEnzymes[enzymeName];
    const positions = findRestrictionPositions(cleaned.sequence, enzyme.recognition);

    restrictionResult.className = "tool-result";
    restrictionResult.innerHTML = `
        <div class="metric-grid">
            <div class="metric"><span>Enzyme</span><strong>${escapeHTML(enzymeName)}</strong></div>
            <div class="metric"><span>Recognition sequence</span><strong>${enzyme.recognition}</strong></div>
            <div class="metric"><span>Matches</span><strong>${positions.length}</strong></div>
            <div class="metric"><span>Sequence length</span><strong>${cleaned.sequence.length} bp</strong></div>
        </div>

        ${positions.length
            ? `
                <h4 class="h6 mt-3">Recognition-site start positions (1-based)</h4>
                <div class="sequence-output">${positions.join(", ")}</div>
            `
            : `
                <div class="info-panel mt-3">
                    No ${enzyme.recognition} recognition sequence was found.
                </div>
            `}

        <p class="result-note">
            These positions mark the start of the recognition sequence, not the enzyme's cleavage coordinate.
            A sequence match does not show whether an experimental digest will work.
        </p>
    `;

    restrictionNextSteps.classList.remove("d-none");
    restrictionNextSteps.innerHTML = `
        <span class="next-step-label">BEFORE USING THIS ENZYME EXPERIMENTALLY</span>
        <p>Check recommended reaction conditions, buffer compatibility, incubation temperature, methylation sensitivity where relevant, star activity guidance, heat inactivation information, and expected fragment sizes.</p>
        <div class="next-step-actions">
            <a href="${enzyme.documentation}" target="_blank" rel="noopener noreferrer">Open ${escapeHTML(enzymeName)} documentation ↗</a>
            <a href="https://enzymefinder.neb.com/" target="_blank" rel="noopener noreferrer">Open NEB Enzyme Finder ↗</a>
        </div>
    `;
});

restrictionReset.addEventListener("click", function () {
    restrictionForm.reset();
    updateRestrictionRecognition();
    setEmptyResult(
        restrictionResult,
        "Choose an enzyme and analyze a DNA sequence to see recognition-site start positions."
    );
    restrictionNextSteps.classList.add("d-none");
    restrictionNextSteps.innerHTML = "";
});


// =====================================
// Problem Navigator
// =====================================

const problemSelect = document.querySelector("#problemSelect");
const problemGuideButton = document.querySelector("#problemGuideButton");
const problemResult = document.querySelector("#problemResult");

problemGuideButton.addEventListener("click", function () {
    const guide = problemGuides[problemSelect.value];

    if (!guide) {
        problemResult.className = "problem-result";
        problemResult.innerHTML = `
            <div class="warning-panel">
                <strong>Choose a problem first.</strong>
                <p class="mb-0">The navigator needs an observation or goal before it can suggest a path.</p>
            </div>
        `;
        return;
    }

    let internalAction = "";

    if (guide.internalTarget) {
        internalAction = '<button type="button" class="workflow-action" data-problem-scroll="' + escapeHTML(guide.internalTarget) + '">Open relevant app section</button>';
    } else if (guide.workflow) {
        internalAction = '<button type="button" class="workflow-action" data-problem-workflow="' + escapeHTML(guide.workflow) + '">Open guided workflow</button>';
    } else if (guide.searchQuery) {
        internalAction = '<button type="button" class="workflow-action" data-problem-search="' + escapeHTML(guide.searchQuery) + '">Find relevant resources</button>';
    }

    const professionalAction = guide.professionalUrl
        ? createExternalLink(guide.professionalTitle, guide.professionalUrl, "workflow-action workflow-action-external")
        : "";

    problemResult.className = "problem-result";
    problemResult.innerHTML = `
        <span class="warning-label">GUIDED TROUBLESHOOTING</span>
        <h3>${escapeHTML(guide.title)}</h3>
        <p>${escapeHTML(guide.text)}</p>
        <div class="workflow-actions">
            ${internalAction}
            ${professionalAction}
        </div>
        <p class="result-note">This navigator organizes sensible next checks; it is not an AI diagnostic system.</p>
    `;
});

problemResult.addEventListener("click", function (event) {
    const scrollButton = event.target.closest("[data-problem-scroll]");
    const workflowButton = event.target.closest("[data-problem-workflow]");
    const searchButton = event.target.closest("[data-problem-search]");

    if (!scrollButton && !workflowButton && !searchButton) {
        return;
    }

    const modalElement = document.querySelector("#problemModal");
    const modal = bootstrap.Modal.getInstance(modalElement);

    if (modal) {
        modal.hide();
    }

    window.setTimeout(function () {
        if (scrollButton) {
            scrollToSection(scrollButton.dataset.problemScroll);
        }

        if (workflowButton) {
            renderWorkflow(workflowButton.dataset.problemWorkflow);
        }

        if (searchButton) {
            performResourceSearch(searchButton.dataset.problemSearch);
            scrollToSection("resource-finder");
        }
    }, 180);
});


// =====================================
// Initialize Contextual Help and UI
// =====================================

renderHelpResources("sequence", "#sequenceHelp", "Need help understanding sequences?");
renderHelpResources("primer", "#primerHelp", "Need help with primer design?");
renderHelpResources("pcr", "#pcrHelp", "PCR Help Center");
renderHelpResources("dilution", "#dilutionHelp", "Understanding dilutions");
renderHelpResources("restriction", "#restrictionHelp", "Need help with restriction enzymes?");

populateRestrictionEnzymes();

currentYear.textContent = new Date().getFullYear();
