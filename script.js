// ============================================================
// Biological Resource Database
// ============================================================
// The directory is stored locally so the website remains static and
// GitHub Pages compatible. Each object describes one trusted resource.

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
];


// ============================================================
// Learn & Troubleshoot Resource Database
// ============================================================
// Educational links are stored here instead of being scattered through
// the HTML. Each tool gets learning, troubleshooting, and professional links.

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

const helpIntroductions = {
    sequence: "Understand sequence format, orientation, reverse complement, and where to continue after this simple local analysis.",
    primer: "This quick check only calculates simple properties. Primer specificity, secondary structure, and experimental performance require dedicated tools and appropriate settings.",
    pcr: "The calculator only scales volumes. PCR chemistry, cycling conditions, primer quality, template quality, and reagent specifications must come from an appropriate protocol.",
    dilution: "A simple dilution uses C1 × V1 = C2 × V2. C1 and C2 must use the same concentration unit, and dilution can only reduce concentration.",
    restriction: "This tool only searches recognition-site text. Real restriction digests also depend on enzyme conditions, buffers, temperature, methylation sensitivity, and the experimental DNA sample."
};


// ============================================================
// Restriction Enzyme Data
// ============================================================
// Recognition sequences are stored without cleavage marks because this tool
// only searches the DNA text for matching recognition sites.

const restrictionEnzymes = {
    EcoRI: "GAATTC",
    BamHI: "GGATCC",
    HindIII: "AAGCTT",
    NotI: "GCGGCCGC",
    XhoI: "CTCGAG",
    PstI: "CTGCAG"
};


// ============================================================
// Shared DOM Elements
// ============================================================

const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const resultsArea = document.querySelector("#resultsArea");
const quickSearchButtons = document.querySelectorAll(".quick-chip");
const exampleSearchButtons = document.querySelectorAll(".example-search");
const typeFilterButtons = document.querySelectorAll(".filter-button");
const categoryFilter = document.querySelector("#categoryFilter");
const clearFilters = document.querySelector("#clearFilters");
const currentYear = document.querySelector("#currentYear");

let lastSearchResults = [];
let lastSearchText = "";
let activeTypeFilter = "All";
let activeCategoryFilter = "All";
let hasSearched = false;
let lastReverseComplement = "";


// ============================================================
// Resource Finder
// ============================================================

const searchSynonyms = {
    sequencing: ["sequence", "reads", "SRA", "ENA", "NGS"],
    paper: ["literature", "article", "publication", "PubMed"],
    papers: ["literature", "article", "publication", "PubMed"],
    mutation: ["variant", "SNP", "genetic variation", "ClinVar"],
    alignment: ["BLAST", "sequence similarity", "pairwise alignment", "multiple sequence alignment"],
    structure: ["PDB", "protein structure", "AlphaFold", "structural biology"],
    primer: ["PCR", "primer design", "Primer-BLAST", "oligo"],
    expression: ["RNA-seq", "transcriptomics", "gene expression", "GEO"],
    pathway: ["functional analysis", "enrichment", "Gene Ontology", "Reactome"]
};

function getSearchTerms(searchText) {
    const normalizedSearch = searchText.trim().toLowerCase();
    const searchTerms = [normalizedSearch];

    normalizedSearch.split(/\s+/).forEach(function (word) {
        if (word.length > 2 && !searchTerms.includes(word)) {
            searchTerms.push(word);
        }
    });

    Object.keys(searchSynonyms).forEach(function (synonymKey) {
        if (normalizedSearch.includes(synonymKey)) {
            searchSynonyms[synonymKey].forEach(function (synonym) {
                searchTerms.push(synonym.toLowerCase());
            });
        }
    });

    return searchTerms;
}

function findMatchingResources(searchText) {
    const searchTerms = getSearchTerms(searchText);

    return resources.filter(function (resource) {
        const searchableText = [
            resource.name,
            resource.type,
            resource.category,
            resource.description,
            resource.keywords.join(" "),
            resource.tasks.join(" ")
        ]
            .join(" ")
            .toLowerCase();

        return searchTerms.some(function (term) {
            return searchableText.includes(term);
        });
    });
}

function getCategoryClass(resource) {
    const category = resource.category;

    if (category === "Sequence & Alignment") return "accent-sequence";
    if (category === "Genes & Genomes") return "accent-genome";
    if (category === "Protein Information") return "accent-protein";
    if (category === "Protein Structure") return "accent-structure";
    if (category === "Scientific Literature") return "accent-literature";
    if (category === "Gene Expression & Sequencing Data") return "accent-data";
    if (category === "Pathways & Functional Analysis") return "accent-pathway";
    if (category === "Genetic Variation") return "accent-variant";
    if (category === "PCR & Primer Design") return "accent-primer";
    if (category === "Molecular Biology & Cloning") return "accent-cloning";

    return "accent-general";
}

// Filters are used as a simple directory browser.
// Starting browse mode clears an old text search so a previous query
// cannot silently hide an otherwise valid category or resource type.
function startBrowseMode() {
    hasSearched = false;
    lastSearchText = "";
    lastSearchResults = resources;
    searchInput.value = "";

    quickSearchButtons.forEach(function (button) {
        button.classList.remove("active");
    });
}

function getFilteredResults() {
    return lastSearchResults.filter(function (resource) {
        const matchesType = activeTypeFilter === "All" || resource.type === activeTypeFilter;
        const matchesCategory = activeCategoryFilter === "All" || resource.category === activeCategoryFilter;
        return matchesType && matchesCategory;
    });
}

function displayResources() {
    const matchingResources = getFilteredResults();
    resultsArea.innerHTML = "";

    if (lastSearchResults.length === 0) {
        resultsArea.innerHTML = `
            <div class="alert alert-warning" role="alert">
                <strong>No matching resource was found.</strong>
                Try another term such as sequence, protein, gene, genome, PCR, structure, or literature.
            </div>
        `;
        return;
    }

    if (matchingResources.length === 0) {
        resultsArea.innerHTML = `
            <div class="alert alert-info" role="alert">
                <strong>No resources match this browse filter.</strong>
                Reset the browse filters or choose another resource type or biological category.
            </div>
        `;
        return;
    }

    const heading = document.createElement("div");
    heading.className = "results-heading";

    const title = document.createElement("h2");
    title.textContent = "Recommended resources";

    const count = document.createElement("span");
    count.className = "result-count";

    if (hasSearched) {
        count.textContent = `${matchingResources.length} resources found for “${lastSearchText}”`;
    } else if (activeCategoryFilter !== "All") {
        count.textContent = `${matchingResources.length} resources in “${activeCategoryFilter}”`;
    } else if (activeTypeFilter !== "All") {
        count.textContent = `${matchingResources.length} resources with type “${activeTypeFilter}”`;
    } else {
        count.textContent = `${matchingResources.length} resources`;
    }

    heading.appendChild(title);
    heading.appendChild(count);

    const row = document.createElement("div");
    row.className = "row g-4";

    matchingResources.forEach(function (resource) {
        const column = document.createElement("div");
        column.className = "col-12 col-md-6 col-xl-4";

        const categoryClass = getCategoryClass(resource);
        const keywordTags = resource.keywords
            .slice(0, 4)
            .map(function (keyword) {
                return `<span class="keyword-tag">#${keyword}</span>`;
            })
            .join("");

        const learnLink = resource.learnUrl
            ? `<a class="learn-link-small" href="${resource.learnUrl}" target="_blank" rel="noopener noreferrer">📘 ${resource.learnTitle} ↗</a>`
            : "";

        const goodFor = resource.tasks.slice(0, 2).join("; ");

        column.innerHTML = `
            <article class="resource-record ${categoryClass}">
                <div class="resource-record-body">
                    <div class="resource-topline">
                        <h3 class="resource-name">${resource.name}</h3>
                        <div class="badge-stack">
                            <span class="badge-category">${resource.category}</span>
                            <span class="badge-type">${resource.type}</span>
                        </div>
                    </div>

                    <p class="resource-description">${resource.description}</p>
                    <p class="resource-good-for"><strong>Good for:</strong> ${goodFor}.</p>

                    <div class="resource-keywords">${keywordTags}</div>

                    <details class="resource-help">
                        <summary>How do I use this resource?</summary>
                        <p>Start with the task above, then check the resource's own help or documentation before interpreting research results.</p>
                        ${learnLink}
                    </details>

                    <div class="resource-card-actions">
                        <a class="resource-link" href="${resource.url}" target="_blank" rel="noopener noreferrer">Visit Resource →</a>
                    </div>
                </div>
            </article>
        `;

        row.appendChild(column);
    });

    resultsArea.appendChild(heading);
    resultsArea.appendChild(row);
}

function runSearch(searchText) {
    const cleanSearchText = searchText.trim();

    if (cleanSearchText === "") {
        resultsArea.innerHTML = `
            <div class="alert alert-info" role="alert">
                Describe a biological task or data type first. For example: protein, alignment, genome, PCR, or literature.
            </div>
        `;
        return;
    }

    searchInput.value = cleanSearchText;
    lastSearchText = cleanSearchText;
    lastSearchResults = findMatchingResources(cleanSearchText);
    hasSearched = true;
    activeTypeFilter = "All";
    activeCategoryFilter = "All";
    categoryFilter.value = "All";

    typeFilterButtons.forEach(function (button) {
        button.classList.toggle("active", button.dataset.type === "All");
    });

    displayResources();
}

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    runSearch(searchInput.value);
});

quickSearchButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        quickSearchButtons.forEach(function (otherButton) {
            otherButton.classList.remove("active");
        });
        button.classList.add("active");
        runSearch(button.dataset.search);
    });
});

exampleSearchButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        runSearch(button.dataset.search);
    });
});

typeFilterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        startBrowseMode();

        // A type filter works independently from the category filter.
        activeCategoryFilter = "All";
        categoryFilter.value = "All";
        activeTypeFilter = button.dataset.type;

        typeFilterButtons.forEach(function (otherButton) {
            otherButton.classList.remove("active");
        });

        button.classList.add("active");
        displayResources();
    });
});

categoryFilter.addEventListener("change", function () {
    startBrowseMode();

    // A biological category also works independently from type filters.
    activeTypeFilter = "All";

    typeFilterButtons.forEach(function (button) {
        button.classList.toggle("active", button.dataset.type === "All");
    });

    activeCategoryFilter = categoryFilter.value;
    displayResources();
});

clearFilters.addEventListener("click", function () {
    startBrowseMode();
    activeTypeFilter = "All";
    activeCategoryFilter = "All";
    categoryFilter.value = "All";

    typeFilterButtons.forEach(function (button) {
        button.classList.toggle("active", button.dataset.type === "All");
    });

    displayResources();
});


// ============================================================
// Learn & Troubleshoot Renderer
// ============================================================

function createHelpResourceHTML(resource) {
    return `
        <a class="help-resource" href="${resource.url}" target="_blank" rel="noopener noreferrer">
            <span class="help-resource-title">${resource.title} ↗</span>
            <span class="help-resource-meta">${resource.organization} · ${resource.sourceType}</span>
            <span class="help-resource-description">${resource.description}</span>
        </a>
    `;
}

function createHelpGroup(title, icon, resourcesList) {
    const links = resourcesList.map(createHelpResourceHTML).join("");

    return `
        <div class="col-lg-4">
            <div class="help-group">
                <h5>${icon} ${title}</h5>
                ${links}
            </div>
        </div>
    `;
}

function renderHelpResources(topic, containerSelector, heading) {
    const container = document.querySelector(containerSelector);
    const topicResources = helpResources[topic];
    const accordionId = `${topic}HelpAccordion`;
    const collapseId = `${topic}HelpCollapse`;

    container.innerHTML = `
        <div class="accordion help-accordion" id="${accordionId}">
            <div class="accordion-item">
                <h4 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                        Need help? ${heading}
                    </button>
                </h4>
                <div id="${collapseId}" class="accordion-collapse collapse" data-bs-parent="#${accordionId}">
                    <div class="accordion-body">
                        <p class="help-intro">${helpIntroductions[topic]}</p>
                        <div class="row g-3">
                            ${createHelpGroup("Learn", "📘", topicResources.learn)}
                            ${createHelpGroup("Troubleshoot", "🛠", topicResources.troubleshoot)}
                            ${createHelpGroup("Professional Tool", "🔬", topicResources.professionalTools)}
                        </div>
                        <div class="safety-note">
                            Educational calculations and explanations in this app are simplified. For experimentally important decisions, verify protocols, parameters, and tool documentation with the linked official scientific resources.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

renderHelpResources("sequence", "#sequenceHelp", "Understanding DNA sequences");
renderHelpResources("primer", "#primerHelp", "Primer design and troubleshooting");
renderHelpResources("pcr", "#pcrHelp", "PCR Help Center");
renderHelpResources("dilution", "#dilutionHelp", "Understanding dilutions");
renderHelpResources("restriction", "#restrictionHelp", "Restriction enzymes and digestion");


// ============================================================
// Shared Sequence Functions
// ============================================================

// Escape user-provided text before placing it inside innerHTML.
// This keeps FASTA headers and error messages as plain text.
function escapeHTML(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function cleanSequenceInput(rawInput, allowN) {
    const trimmedInput = rawInput.trim();

    if (trimmedInput === "") {
        return { error: "Please enter a DNA sequence." };
    }

    const lines = trimmedInput.split(/\r?\n/);
    let fastaHeader = "";
    let sequenceLines = lines.slice();

    const firstNonEmptyIndex = sequenceLines.findIndex(function (line) {
        return line.trim() !== "";
    });

    if (firstNonEmptyIndex !== -1 && sequenceLines[firstNonEmptyIndex].trim().startsWith(">")) {
        fastaHeader = sequenceLines[firstNonEmptyIndex].trim();
        sequenceLines.splice(firstNonEmptyIndex, 1);
    }

    const hasAnotherHeader = sequenceLines.some(function (line) {
        return line.trim().startsWith(">");
    });

    if (hasAnotherHeader) {
        return { error: "This beginner tool accepts one FASTA sequence at a time. We found more than one FASTA header." };
    }

    const sequence = sequenceLines.join("").replace(/\s/g, "").toUpperCase();

    if (sequence === "") {
        return { error: "The FASTA header was found, but there is no DNA sequence underneath it." };
    }

    const allowedPattern = allowN ? /^[ATGCN]+$/ : /^[ATGC]+$/;

    if (!allowedPattern.test(sequence)) {
        const validCharactersPattern = allowN ? /[ATGCN]/g : /[ATGC]/g;
        const invalidCharacters = Array.from(
            new Set(sequence.replace(validCharactersPattern, "").split(""))
        ).join(", ");
        return {
            error: `We found unsupported characters${invalidCharacters ? `: ${invalidCharacters}` : ""}. DNA sequences normally use nucleotide symbols such as A, T, G and C${allowN ? ", with N sometimes used for an unknown base" : ""}.`,
            fastaHeader: fastaHeader
        };
    }

    return {
        sequence: sequence,
        fastaHeader: fastaHeader
    };
}

function countBases(sequence) {
    const counts = { A: 0, T: 0, G: 0, C: 0, N: 0 };

    sequence.split("").forEach(function (base) {
        if (counts[base] !== undefined) {
            counts[base] += 1;
        }
    });

    return counts;
}

function calculateSequencePercentages(counts) {
    const calledBases = counts.A + counts.T + counts.G + counts.C;

    if (calledBases === 0) {
        return { gc: null, at: null, calledBases: 0 };
    }

    return {
        gc: ((counts.G + counts.C) / calledBases) * 100,
        at: ((counts.A + counts.T) / calledBases) * 100,
        calledBases: calledBases
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

function formatNumber(number, decimals) {
    return Number(number).toFixed(decimals);
}

function formatPercentage(value) {
    if (value === null) {
        return "N/A";
    }

    return `${formatNumber(value, 1)}%`;
}

function showSequenceError(message, fastaDetected) {
    const dnaResult = document.querySelector("#dnaResult");
    const sequenceContext = document.querySelector("#sequenceContext");
    const fastaMessage = fastaDetected
        ? " A line beginning with > is a FASTA definition line (header); the sequence should follow on the next line or lines."
        : "";

    dnaResult.className = "tool-result";
    dnaResult.innerHTML = `
        <div class="educational-alert">
            <strong>We could not analyze this sequence.</strong>
            <p class="mb-0">${escapeHTML(message)}${fastaMessage}</p>
        </div>
    `;

    sequenceContext.classList.remove("d-none");
    sequenceContext.innerHTML = `
        <h4>Need help with sequence format?</h4>
        <p>Check the sequence formatting first. A valid DNA sequence for this tool should contain only supported nucleotide letters after any FASTA header.</p>
        <div class="context-actions">
            <a class="context-link" href="https://www.ncbi.nlm.nih.gov/genbank/fastaformat" target="_blank" rel="noopener noreferrer">📘 Learn about FASTA format ↗</a>
        </div>
    `;
}


// ============================================================
// DNA Sequence Analyzer
// ============================================================

const dnaForm = document.querySelector("#dnaForm");
const dnaInput = document.querySelector("#dnaInput");
const dnaResult = document.querySelector("#dnaResult");
const dnaReset = document.querySelector("#dnaReset");
const sequenceContext = document.querySelector("#sequenceContext");

dnaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const cleaned = cleanSequenceInput(dnaInput.value, true);

    if (cleaned.error) {
        showSequenceError(cleaned.error, Boolean(cleaned.fastaHeader));
        return;
    }

    const counts = countBases(cleaned.sequence);
    const percentages = calculateSequencePercentages(counts);
    lastReverseComplement = getReverseComplement(cleaned.sequence);

    dnaResult.className = "tool-result";
    dnaResult.innerHTML = `
        <div class="metric-grid">
            <div class="metric"><span>Length</span><strong>${cleaned.sequence.length} bp</strong></div>
            <div class="metric"><span>GC content</span><strong>${formatPercentage(percentages.gc)}</strong></div>
            <div class="metric"><span>A</span><strong>${counts.A}</strong></div>
            <div class="metric"><span>T</span><strong>${counts.T}</strong></div>
            <div class="metric"><span>G</span><strong>${counts.G}</strong></div>
            <div class="metric"><span>C</span><strong>${counts.C}</strong></div>
            <div class="metric"><span>N</span><strong>${counts.N}</strong></div>
            <div class="metric"><span>AT content</span><strong>${formatPercentage(percentages.at)}</strong></div>
            <div class="metric"><span>Called A/T/G/C bases</span><strong>${percentages.calledBases}</strong></div>
        </div>
        <p class="form-help">GC and AT percentages are calculated from called A/T/G/C bases. N bases are excluded. If no called bases are present, GC and AT content are shown as N/A.</p>
        <h4 class="h6 mt-3">Reverse complement</h4>
        <div class="sequence-output">${lastReverseComplement}</div>
        <div class="tool-buttons">
            <button id="copyReverseButton" class="btn secondary-tool-button" type="button">Copy Reverse Complement</button>
            <span id="copyStatus" class="form-help"></span>
        </div>
    `;

    const copyReverseButton = document.querySelector("#copyReverseButton");
    const copyStatus = document.querySelector("#copyStatus");

    copyReverseButton.addEventListener("click", function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(lastReverseComplement)
                .then(function () {
                    copyStatus.textContent = "Copied.";
                })
                .catch(function () {
                    copyStatus.textContent = "Could not access the clipboard. You can select and copy the sequence manually.";
                });
        } else {
            copyStatus.textContent = "Clipboard access is not available in this browser. You can select and copy the sequence manually.";
        }
    });

    sequenceContext.classList.remove("d-none");
    sequenceContext.innerHTML = `
        <h4>Your sequence looks valid. What would you like to do next?</h4>
        ${cleaned.fastaHeader ? `<p><strong>FASTA detected:</strong> ${escapeHTML(cleaned.fastaHeader)} is the definition line. It identifies the sequence and is not counted as DNA.</p>` : ""}
        <div class="context-actions">
            <a class="context-link" href="https://blast.ncbi.nlm.nih.gov/Blast.cgi" target="_blank" rel="noopener noreferrer">Find similar sequences → NCBI BLAST</a>
            <a class="context-link" href="https://www.ncbi.nlm.nih.gov/nucleotide/" target="_blank" rel="noopener noreferrer">Search nucleotide records → NCBI</a>
            <a class="context-link" href="https://www.ebi.ac.uk/jdispatcher/" target="_blank" rel="noopener noreferrer">Explore sequence tools → EMBL-EBI</a>
        </div>
    `;
});

dnaReset.addEventListener("click", function () {
    dnaForm.reset();
    lastReverseComplement = "";
    dnaResult.className = "tool-result empty-result";
    dnaResult.innerHTML = "<p>Enter a sequence to see length, nucleotide counts, GC/AT content, and reverse complement.</p>";
    sequenceContext.classList.add("d-none");
    sequenceContext.innerHTML = "";
});


// ============================================================
// Primer Quick Check
// ============================================================

const primerForm = document.querySelector("#primerForm");
const primerInput = document.querySelector("#primerInput");
const primerResult = document.querySelector("#primerResult");
const primerReset = document.querySelector("#primerReset");
const primerContext = document.querySelector("#primerContext");

function calculateWallaceTm(counts) {
    return 2 * (counts.A + counts.T) + 4 * (counts.G + counts.C);
}

primerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const cleaned = cleanSequenceInput(primerInput.value, false);

    if (cleaned.error) {
        primerResult.className = "tool-result";
        primerResult.innerHTML = `<div class="educational-alert"><strong>Primer input needs attention.</strong><p class="mb-0">${escapeHTML(cleaned.error)}</p></div>`;
        primerContext.classList.remove("d-none");
        primerContext.innerHTML = `
            <h4>Need help with primer input?</h4>
            <div class="context-actions">
                <a class="context-link" href="https://www.ncbi.nlm.nih.gov/guide/howto/design-pcr-primers" target="_blank" rel="noopener noreferrer">📘 Learn about primer design ↗</a>
            </div>
        `;
        return;
    }

    const counts = countBases(cleaned.sequence);
    const percentages = calculateSequencePercentages(counts);
    const tm = calculateWallaceTm(counts);
    const warnings = [];

    if (cleaned.sequence.length < 18) {
        warnings.push("This primer is relatively short for many common PCR-design workflows. Treat this as a prompt to review the design, not as a failure diagnosis.");
    }

    if (cleaned.sequence.length > 30) {
        warnings.push("This primer is relatively long for many routine PCR primers. Longer oligos can be appropriate, but design context matters.");
    }

    if (percentages.gc < 40) {
        warnings.push("GC content is relatively low. Review primer-design guidance and the intended target before using the primer experimentally.");
    }

    if (percentages.gc > 60) {
        warnings.push("GC content is relatively high. High-GC primers can require additional optimization depending on sequence and PCR conditions.");
    }

    primerResult.className = "tool-result";
    primerResult.innerHTML = `
        <div class="metric-grid">
            <div class="metric"><span>Length</span><strong>${cleaned.sequence.length} nt</strong></div>
            <div class="metric"><span>GC content</span><strong>${formatPercentage(percentages.gc)}</strong></div>
            <div class="metric"><span>Approximate Tm</span><strong>${tm} °C</strong></div>
            <div class="metric"><span>A / T / G / C</span><strong>${counts.A} / ${counts.T} / ${counts.G} / ${counts.C}</strong></div>
        </div>
        <p class="form-help"><strong>Approximate Tm:</strong> Wallace rule, Tm ≈ 2 × (A + T) + 4 × (G + C). This is a quick educational estimate and does not model salt, Mg²⁺, oligo concentration, mismatches, or secondary structure.</p>
        ${warnings.length ? `<div class="educational-alert mt-3"><strong>Things to review</strong><ul class="mb-0 mt-2">${warnings.map(function (warning) { return `<li>${warning}</li>`; }).join("")}</ul></div>` : `<div class="alert alert-success mt-3 mb-0">No simple length or GC-content warning was triggered. This does not prove that the primer is specific or experimentally suitable.</div>`}
    `;

    primerContext.classList.remove("d-none");
    primerContext.innerHTML = `
        <h4>Next steps</h4>
        <p>A local length/GC/Tm check cannot evaluate primer specificity, target uniqueness, hairpins, or primer dimers completely.</p>
        <div class="context-actions">
            <a class="context-link" href="https://www.ncbi.nlm.nih.gov/tools/primer-blast/" target="_blank" rel="noopener noreferrer">Check specificity → Primer-BLAST</a>
            <a class="context-link" href="https://www.idtdna.com/pages/tools/oligoanalyzer" target="_blank" rel="noopener noreferrer">Analyze hairpins &amp; dimers → OligoAnalyzer</a>
            <a class="context-link" href="https://www.neb.com/en-gb/tools-and-resources/troubleshooting-guides/pcr-troubleshooting-guide" target="_blank" rel="noopener noreferrer">Learn about PCR optimization ↗</a>
        </div>
    `;
});

primerReset.addEventListener("click", function () {
    primerForm.reset();
    primerResult.className = "tool-result empty-result";
    primerResult.innerHTML = "<p>Enter a primer to see basic composition and an approximate Tm.</p>";
    primerContext.classList.add("d-none");
    primerContext.innerHTML = "";
});


// ============================================================
// PCR Calculator
// ============================================================

const pcrForm = document.querySelector("#pcrForm");
const pcrReactions = document.querySelector("#pcrReactions");
const pcrExtra = document.querySelector("#pcrExtra");
const pcrVolumes = document.querySelectorAll(".pcr-volume");
const pcrResult = document.querySelector("#pcrResult");
const pcrReset = document.querySelector("#pcrReset");
const pcrContext = document.querySelector("#pcrContext");

const pcrExampleValues = [12.5, 0.5, 0.5, 1, 10.5];

function getPositiveNumber(inputElement, allowZero) {
    const value = Number(inputElement.value);

    if (!Number.isFinite(value)) return null;
    if (allowZero && value >= 0) return value;
    if (!allowZero && value > 0) return value;
    return null;
}

pcrForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const reactions = getPositiveNumber(pcrReactions, false);
    const extraPercent = getPositiveNumber(pcrExtra, true);

    if (reactions === null || extraPercent === null) {
        pcrResult.className = "tool-result";
        pcrResult.innerHTML = `<div class="educational-alert"><strong>Please check the inputs.</strong><p class="mb-0">Enter a positive whole number of reactions and an extra percentage of zero or greater.</p></div>`;
        return;
    }

    if (!Number.isInteger(reactions)) {
        pcrResult.className = "tool-result";
        pcrResult.innerHTML = `<div class="educational-alert"><strong>Number of reactions must be a whole number.</strong><p class="mb-0">For example, use 8 reactions rather than 8.5.</p></div>`;
        return;
    }

    const reagentRows = [];
    let hasInvalidVolume = false;

    pcrVolumes.forEach(function (input) {
        const volume = getPositiveNumber(input, true);

        if (volume === null) {
            hasInvalidVolume = true;
            return;
        }

        reagentRows.push({
            reagent: input.dataset.reagent,
            perReaction: volume
        });
    });

    if (hasInvalidVolume) {
        pcrResult.className = "tool-result";
        pcrResult.innerHTML = `<div class="educational-alert"><strong>Please check reagent volumes.</strong><p class="mb-0">Use numeric volumes of zero or greater for every reagent row.</p></div>`;
        return;
    }

    const adjustedReactions = reactions * (1 + extraPercent / 100);
    const perReactionTotal = reagentRows.reduce(function (total, row) {
        return total + row.perReaction;
    }, 0);

    const resultRows = reagentRows.map(function (row) {
        return `
            <tr>
                <td>${row.reagent}</td>
                <td>${formatNumber(row.perReaction, 2)} µL</td>
                <td>${formatNumber(row.perReaction * adjustedReactions, 2)} µL</td>
            </tr>
        `;
    }).join("");

    pcrResult.className = "tool-result";
    pcrResult.innerHTML = `
        <div class="metric-grid">
            <div class="metric"><span>Reactions entered</span><strong>${reactions}</strong></div>
            <div class="metric"><span>Adjusted reaction equivalent</span><strong>${formatNumber(adjustedReactions, 2)}</strong></div>
            <div class="metric"><span>Per-reaction total</span><strong>${formatNumber(perReactionTotal, 2)} µL</strong></div>
            <div class="metric"><span>Extra allowance</span><strong>${formatNumber(extraPercent, 1)}%</strong></div>
        </div>
        <div class="table-responsive">
            <table class="table result-table">
                <thead><tr><th>Component</th><th>Per reaction</th><th>Total</th></tr></thead>
                <tbody>${resultRows}</tbody>
            </table>
        </div>
        <p class="form-help mt-2">Total volume needed = volume per reaction × adjusted reaction equivalent.</p>
    `;

    pcrContext.classList.remove("d-none");
    pcrContext.innerHTML = `
        <h4>PCR setup reminder</h4>
        <p>This calculator only scales the volumes you entered. If a PCR does not amplify as expected, researchers commonly investigate areas such as template quality, primer design, annealing conditions, and polymerase/reaction conditions. This app cannot diagnose the cause from volume information alone.</p>
        <div class="context-actions">
            <a class="context-link" href="https://www.addgene.org/protocols/pcr/" target="_blank" rel="noopener noreferrer">Read a PCR protocol ↗</a>
            <a class="context-link" href="https://www.neb.com/en-gb/tools-and-resources/troubleshooting-guides/pcr-troubleshooting-guide" target="_blank" rel="noopener noreferrer">Open PCR Troubleshooting Guide ↗</a>
        </div>
    `;
});

pcrReset.addEventListener("click", function () {
    pcrReactions.value = 8;
    pcrExtra.value = 10;
    pcrVolumes.forEach(function (input, index) {
        input.value = pcrExampleValues[index];
    });
    pcrResult.className = "tool-result empty-result mt-4";
    pcrResult.innerHTML = "<p>Adjust the example values to match your protocol, then calculate the total volume required.</p>";
    pcrContext.classList.add("d-none");
    pcrContext.innerHTML = "";
});


// ============================================================
// Dilution Calculator
// ============================================================

const dilutionForm = document.querySelector("#dilutionForm");
const stockConcentration = document.querySelector("#stockConcentration");
const desiredConcentration = document.querySelector("#desiredConcentration");
const finalVolume = document.querySelector("#finalVolume");
const volumeUnit = document.querySelector("#volumeUnit");
const dilutionResult = document.querySelector("#dilutionResult");
const dilutionReset = document.querySelector("#dilutionReset");
const dilutionContext = document.querySelector("#dilutionContext");

dilutionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const c1 = getPositiveNumber(stockConcentration, false);
    const c2 = getPositiveNumber(desiredConcentration, false);
    const v2 = getPositiveNumber(finalVolume, false);
    const unit = volumeUnit.value;

    if (c1 === null || c2 === null || v2 === null) {
        dilutionResult.className = "tool-result";
        dilutionResult.innerHTML = `<div class="educational-alert"><strong>Please enter positive numbers.</strong><p class="mb-0">C1, C2, and V2 must all be greater than zero.</p></div>`;
        return;
    }

    if (c2 > c1) {
        dilutionResult.className = "tool-result";
        dilutionResult.innerHTML = `
            <div class="educational-alert">
                <strong>The desired concentration is higher than the stock concentration.</strong>
                <p class="mb-0">A simple dilution can only decrease concentration. To obtain a higher concentration, a different preparation or concentration step would be required.</p>
            </div>
        `;
        dilutionContext.classList.remove("d-none");
        dilutionContext.innerHTML = `
            <h4>Why is this input impossible for a simple dilution?</h4>
            <p>In C1 × V1 = C2 × V2, the stock is the more concentrated starting solution. Adding diluent cannot make it more concentrated.</p>
            <div class="context-actions"><a class="context-link" href="https://www.idtdna.com/page/support-and-education/decoded-plus/easy-resuspension-and-dilution-of-oligonucleotides" target="_blank" rel="noopener noreferrer">📘 Learn about dilution calculations ↗</a></div>
        `;
        return;
    }

    const v1 = (c2 * v2) / c1;
    const diluent = v2 - v1;

    dilutionResult.className = "tool-result";
    dilutionResult.innerHTML = `
        <div class="metric-grid">
            <div class="metric"><span>Required stock volume (V1)</span><strong>${formatNumber(v1, 3)} ${unit}</strong></div>
            <div class="metric"><span>Diluent volume</span><strong>${formatNumber(diluent, 3)} ${unit}</strong></div>
            <div class="metric"><span>Final volume (V2)</span><strong>${formatNumber(v2, 3)} ${unit}</strong></div>
            <div class="metric"><span>Concentration ratio C2/C1</span><strong>${formatNumber(c2 / c1, 3)}</strong></div>
        </div>
        <p class="form-help">V1 = (C2 × V2) / C1. Diluent = V2 − V1.</p>
    `;

    dilutionContext.classList.remove("d-none");
    dilutionContext.innerHTML = `
        <h4>Understanding the result</h4>
        <p><strong>C1</strong> is the stock concentration, <strong>V1</strong> is the stock volume you need, <strong>C2</strong> is the desired concentration, and <strong>V2</strong> is the final total volume.</p>
        <div class="context-actions"><a class="context-link" href="https://www.idtdna.com/page/support-and-education/decoded-plus/easy-resuspension-and-dilution-of-oligonucleotides" target="_blank" rel="noopener noreferrer">📘 Learn about dilution calculations ↗</a></div>
    `;
});

dilutionReset.addEventListener("click", function () {
    dilutionForm.reset();
    dilutionResult.className = "tool-result empty-result mt-4";
    dilutionResult.innerHTML = "<p>Enter C1, C2, and V2 to calculate the required stock and diluent volumes.</p>";
    dilutionContext.classList.add("d-none");
    dilutionContext.innerHTML = "";
});


// ============================================================
// Restriction Site Finder
// ============================================================

const restrictionForm = document.querySelector("#restrictionForm");
const restrictionInput = document.querySelector("#restrictionInput");
const enzymeSelect = document.querySelector("#enzymeSelect");
const enzymeRecognition = document.querySelector("#enzymeRecognition");
const restrictionResult = document.querySelector("#restrictionResult");
const restrictionReset = document.querySelector("#restrictionReset");
const restrictionContext = document.querySelector("#restrictionContext");

function populateEnzymeSelect() {
    Object.keys(restrictionEnzymes).forEach(function (enzymeName) {
        const option = document.createElement("option");
        option.value = enzymeName;
        option.textContent = enzymeName;
        enzymeSelect.appendChild(option);
    });

    updateRecognitionDisplay();
}

function updateRecognitionDisplay() {
    const enzymeName = enzymeSelect.value;
    enzymeRecognition.textContent = restrictionEnzymes[enzymeName] || "—";
}

function findRestrictionPositions(sequence, recognitionSequence) {
    const positions = [];
    let searchStart = 0;

    while (searchStart <= sequence.length - recognitionSequence.length) {
        const matchIndex = sequence.indexOf(recognitionSequence, searchStart);

        if (matchIndex === -1) {
            break;
        }

        positions.push(matchIndex + 1);
        searchStart = matchIndex + 1;
    }

    return positions;
}

enzymeSelect.addEventListener("change", updateRecognitionDisplay);

restrictionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const cleaned = cleanSequenceInput(restrictionInput.value, true);

    if (cleaned.error) {
        restrictionResult.className = "tool-result";
        restrictionResult.innerHTML = `<div class="educational-alert"><strong>Sequence input needs attention.</strong><p class="mb-0">${escapeHTML(cleaned.error)}</p></div>`;
        return;
    }

    const enzymeName = enzymeSelect.value;
    const recognitionSequence = restrictionEnzymes[enzymeName];
    const positions = findRestrictionPositions(cleaned.sequence, recognitionSequence);

    if (positions.length === 0) {
        restrictionResult.className = "tool-result";
        restrictionResult.innerHTML = `
            <div class="metric-grid">
                <div class="metric"><span>Enzyme</span><strong>${enzymeName}</strong></div>
                <div class="metric"><span>Recognition site</span><strong>${recognitionSequence}</strong></div>
                <div class="metric"><span>Matches</span><strong>0</strong></div>
                <div class="metric"><span>Sequence length</span><strong>${cleaned.sequence.length} bp</strong></div>
            </div>
            <p>No ${recognitionSequence} recognition site was found in the sequence.</p>
        `;

        restrictionContext.classList.remove("d-none");
        restrictionContext.innerHTML = `
            <h4>No restriction site found. What next?</h4>
            <p>This only means the selected recognition sequence was not found in the entered sequence. It does not select an alternative enzyme for your experiment.</p>
            <div class="context-actions"><a class="context-link" href="https://enzymefinder.neb.com/" target="_blank" rel="noopener noreferrer">Find another enzyme → NEB Enzyme Finder</a></div>
        `;
        return;
    }

    restrictionResult.className = "tool-result";
    restrictionResult.innerHTML = `
        <div class="metric-grid">
            <div class="metric"><span>Enzyme</span><strong>${enzymeName}</strong></div>
            <div class="metric"><span>Recognition site</span><strong>${recognitionSequence}</strong></div>
            <div class="metric"><span>Matches</span><strong>${positions.length}</strong></div>
            <div class="metric"><span>Sequence length</span><strong>${cleaned.sequence.length} bp</strong></div>
        </div>
        <h4 class="h6">Recognition-site start positions (1-based)</h4>
        <div class="sequence-output">${positions.join(", ")}</div>
        <p class="form-help mt-2">These are recognition-sequence start positions, not cleavage coordinates. The six built-in recognition sequences are palindromic, so searching this sequence text is sufficient to detect those sites on double-stranded DNA.</p>
    `;

    restrictionContext.classList.remove("d-none");
    restrictionContext.innerHTML = `
        <h4>Restriction sites found. Before planning an experiment, check:</h4>
        <ul>
            <li>enzyme buffer compatibility</li>
            <li>recommended incubation temperature</li>
            <li>methylation sensitivity</li>
            <li>expected fragment sizes and experimental context</li>
        </ul>
        <div class="context-actions">
            <a class="context-link" href="https://enzymefinder.neb.com/" target="_blank" rel="noopener noreferrer">Check enzyme information → NEB</a>
            <a class="context-link" href="https://www.addgene.org/protocols/restriction-digest/" target="_blank" rel="noopener noreferrer">Read a restriction digest protocol ↗</a>
        </div>
    `;
});

restrictionReset.addEventListener("click", function () {
    restrictionForm.reset();
    updateRecognitionDisplay();
    restrictionResult.className = "tool-result empty-result";
    restrictionResult.innerHTML = "<p>Select an enzyme and enter a DNA sequence to find matching recognition sites.</p>";
    restrictionContext.classList.add("d-none");
    restrictionContext.innerHTML = "";
});

populateEnzymeSelect();


// ============================================================
// Footer Year
// ============================================================

currentYear.textContent = new Date().getFullYear();
