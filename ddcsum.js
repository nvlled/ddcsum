const data = [
    {
        "classNum": "000",
        "heading": "Computer science, information & general works"
    },
    {
        "classNum": "001",
        "heading": "Knowledge"
    },
    {
        "classNum": "002",
        "heading": "The book"
    },
    {
        "classNum": "003",
        "heading": "Systems"
    },
    {
        "classNum": "004",
        "heading": "Data processing & computer science"
    },
    {
        "classNum": "005",
        "heading": "Computer programming, programs & data"
    },
    {
        "classNum": "006",
        "heading": "Special computer methods"
    },
    {
        "classNum": "007",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "008",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "009",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "010",
        "heading": "Bibliography"
    },
    {
        "classNum": "011",
        "heading": "Bibliographies"
    },
    {
        "classNum": "012",
        "heading": "Bibliographies of individuals"
    },
    {
        "classNum": "013",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "014",
        "heading": "Of anonymous & pseudonymous works"
    },
    {
        "classNum": "015",
        "heading": "Bibliographies of works from specific places"
    },
    {
        "classNum": "016",
        "heading": "Bibliographies of works on specific subjects"
    },
    {
        "classNum": "017",
        "heading": "General subject catalogs"
    },
    {
        "classNum": "018",
        "heading": "Catalogs arranged by author, date, etc."
    },
    {
        "classNum": "019",
        "heading": "Dictionary catalogs"
    },
    {
        "classNum": "020",
        "heading": "Library & information sciences"
    },
    {
        "classNum": "021",
        "heading": "Library relationships"
    },
    {
        "classNum": "022",
        "heading": "Administration of physical plant"
    },
    {
        "classNum": "023",
        "heading": "Personnel management"
    },
    {
        "classNum": "024",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "025",
        "heading": "Library operations"
    },
    {
        "classNum": "026",
        "heading": "Libraries for specific subjects"
    },
    {
        "classNum": "027",
        "heading": "General libraries"
    },
    {
        "classNum": "028",
        "heading": "Reading & use of other information media"
    },
    {
        "classNum": "029",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "030",
        "heading": "General encyclopedic works"
    },
    {
        "classNum": "031",
        "heading": "Encyclopedias in American English"
    },
    {
        "classNum": "032",
        "heading": "Encyclopedias in English"
    },
    {
        "classNum": "033",
        "heading": "In other Germanic languages"
    },
    {
        "classNum": "034",
        "heading": "Encyclopedias in French, Occitan & Catalan"
    },
    {
        "classNum": "035",
        "heading": "In Italian, Romanian & related languages"
    },
    {
        "classNum": "036",
        "heading": "Encyclopedias in Spanish & Portuguese"
    },
    {
        "classNum": "037",
        "heading": "Encyclopedias in Slavic languages"
    },
    {
        "classNum": "038",
        "heading": "Encyclopedias in Scandinavian languages"
    },
    {
        "classNum": "039",
        "heading": "Encyclopedias in other languages"
    },
    {
        "classNum": "040",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "041",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "042",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "043",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "044",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "045",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "046",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "047",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "048",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "049",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "050",
        "heading": "General serial publications"
    },
    {
        "classNum": "051",
        "heading": "Serials in American English"
    },
    {
        "classNum": "052",
        "heading": "Serials in English"
    },
    {
        "classNum": "053",
        "heading": "Serials in other Germanic languages"
    },
    {
        "classNum": "054",
        "heading": "Serials in French, Occitan & Catalan"
    },
    {
        "classNum": "055",
        "heading": "In Italian, Romanian & related languages"
    },
    {
        "classNum": "056",
        "heading": "Serials in Spanish & Portuguese"
    },
    {
        "classNum": "057",
        "heading": "Serials in Slavic languages"
    },
    {
        "classNum": "058",
        "heading": "Serials in Scandinavian languages"
    },
    {
        "classNum": "059",
        "heading": "Serials in other languages"
    },
    {
        "classNum": "060",
        "heading": "General organizations & museum science"
    },
    {
        "classNum": "061",
        "heading": "Organizations in North America"
    },
    {
        "classNum": "062",
        "heading": "Organizations in British Isles; in England"
    },
    {
        "classNum": "063",
        "heading": "Organizations in central Europe; in Germany"
    },
    {
        "classNum": "064",
        "heading": "Organizations in France & Monaco"
    },
    {
        "classNum": "065",
        "heading": "Organizations in Italy & adjacent islands"
    },
    {
        "classNum": "066",
        "heading": "In Iberian Peninsula & adjacent islands"
    },
    {
        "classNum": "067",
        "heading": "Organizations in eastern Europe; in Russia"
    },
    {
        "classNum": "068",
        "heading": "Organizations in other geographic areas"
    },
    {
        "classNum": "069",
        "heading": "Museum science"
    },
    {
        "classNum": "070",
        "heading": "News media, journalism & publishing"
    },
    {
        "classNum": "071",
        "heading": "Newspapers in North America"
    },
    {
        "classNum": "072",
        "heading": "Newspapers in British Isles; in England"
    },
    {
        "classNum": "073",
        "heading": "Newspapers in central Europe; in Germany"
    },
    {
        "classNum": "074",
        "heading": "Newspapers in France & Monaco"
    },
    {
        "classNum": "075",
        "heading": "Newspapers in Italy & adjacent islands"
    },
    {
        "classNum": "076",
        "heading": "In Iberian Peninsula & adjacent islands"
    },
    {
        "classNum": "077",
        "heading": "Newspapers in eastern Europe; in Russia"
    },
    {
        "classNum": "078",
        "heading": "Newspapers in Scandinavia"
    },
    {
        "classNum": "079",
        "heading": "Newspapers in other geographic areas"
    },
    {
        "classNum": "080",
        "heading": "General collections"
    },
    {
        "classNum": "081",
        "heading": "Collections in American English"
    },
    {
        "classNum": "082",
        "heading": "Collections in English"
    },
    {
        "classNum": "083",
        "heading": "Collections in other Germanic languages"
    },
    {
        "classNum": "084",
        "heading": "Collections in French, Occitan & Catalan"
    },
    {
        "classNum": "085",
        "heading": "In Italian, Romanian & related languages"
    },
    {
        "classNum": "086",
        "heading": "Collections in Spanish & Portuguese"
    },
    {
        "classNum": "087",
        "heading": "Collections in Slavic languages"
    },
    {
        "classNum": "088",
        "heading": "Collections in Scandinavian languages"
    },
    {
        "classNum": "089",
        "heading": "Collections in other languages"
    },
    {
        "classNum": "090",
        "heading": "Manuscripts & rare books"
    },
    {
        "classNum": "091",
        "heading": "Manuscripts"
    },
    {
        "classNum": "092",
        "heading": "Block books"
    },
    {
        "classNum": "093",
        "heading": "Incunabula"
    },
    {
        "classNum": "094",
        "heading": "Printed books"
    },
    {
        "classNum": "095",
        "heading": "Books notable for bindings"
    },
    {
        "classNum": "096",
        "heading": "Books notable for illustrations"
    },
    {
        "classNum": "097",
        "heading": "Books notable for ownership or origin"
    },
    {
        "classNum": "098",
        "heading": "Prohibited works, forgeries & hoaxes"
    },
    {
        "classNum": "099",
        "heading": "Books notable for format"
    },
    {
        "classNum": "100",
        "heading": "Philosophy & psychology"
    },
    {
        "classNum": "101",
        "heading": "Theory of philosophy"
    },
    {
        "classNum": "102",
        "heading": "Miscellany"
    },
    {
        "classNum": "103",
        "heading": "Dictionaries & encyclopedias"
    },
    {
        "classNum": "104",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "105",
        "heading": "Serial publications"
    },
    {
        "classNum": "106",
        "heading": "Organizations & management"
    },
    {
        "classNum": "107",
        "heading": "Education, research & related topics"
    },
    {
        "classNum": "108",
        "heading": "Kinds of persons treatment"
    },
    {
        "classNum": "109",
        "heading": "Historical & collected persons treatment"
    },
    {
        "classNum": "110",
        "heading": "Metaphysics"
    },
    {
        "classNum": "111",
        "heading": "Ontology"
    },
    {
        "classNum": "112",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "113",
        "heading": "Cosmology"
    },
    {
        "classNum": "114",
        "heading": "Space"
    },
    {
        "classNum": "115",
        "heading": "Time"
    },
    {
        "classNum": "116",
        "heading": "Change"
    },
    {
        "classNum": "117",
        "heading": "Structure"
    },
    {
        "classNum": "118",
        "heading": "Force & energy"
    },
    {
        "classNum": "119",
        "heading": "Number & quantity"
    },
    {
        "classNum": "120",
        "heading": "Epistemology, causation & humankind"
    },
    {
        "classNum": "121",
        "heading": "Epistemology"
    },
    {
        "classNum": "122",
        "heading": "Causation"
    },
    {
        "classNum": "123",
        "heading": "Determinism & indeterminism"
    },
    {
        "classNum": "124",
        "heading": "Teleology"
    },
    {
        "classNum": "125",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "126",
        "heading": "The self"
    },
    {
        "classNum": "127",
        "heading": "The unconscious & the subconscious"
    },
    {
        "classNum": "128",
        "heading": "Humankind"
    },
    {
        "classNum": "129",
        "heading": "Origin & destiny of individual souls"
    },
    {
        "classNum": "130",
        "heading": "Parapsychology & occultism"
    },
    {
        "classNum": "131",
        "heading": "Parapsychological & occult methods"
    },
    {
        "classNum": "132",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "133",
        "heading": "Specific topics in parapsychology & occultism"
    },
    {
        "classNum": "134",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "135",
        "heading": "Dreams & mysteries"
    },
    {
        "classNum": "136",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "137",
        "heading": "Divinatory graphology"
    },
    {
        "classNum": "138",
        "heading": "Physiognomy"
    },
    {
        "classNum": "139",
        "heading": "Phrenology"
    },
    {
        "classNum": "140",
        "heading": "Specific philosophical schools"
    },
    {
        "classNum": "141",
        "heading": "Idealism & related systems"
    },
    {
        "classNum": "142",
        "heading": "Critical philosophy"
    },
    {
        "classNum": "143",
        "heading": "Bergsonism & intuitionism"
    },
    {
        "classNum": "144",
        "heading": "Humanism & related systems"
    },
    {
        "classNum": "145",
        "heading": "Sensationalism"
    },
    {
        "classNum": "146",
        "heading": "Naturalism & related systems"
    },
    {
        "classNum": "147",
        "heading": "Pantheism & related systems"
    },
    {
        "classNum": "148",
        "heading": "Eclecticism, liberalism & traditionalism"
    },
    {
        "classNum": "149",
        "heading": "Other philosophical systems\t150 Psychology"
    },
    {
        "classNum": "151",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "152",
        "heading": "Perception, movement, emotions & drives"
    },
    {
        "classNum": "153",
        "heading": "Mental processes & intelligence"
    },
    {
        "classNum": "154",
        "heading": "Subconscious & altered states"
    },
    {
        "classNum": "155",
        "heading": "Differential & developmental psychology"
    },
    {
        "classNum": "156",
        "heading": "Comparative psychology"
    },
    {
        "classNum": "157",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "158",
        "heading": "Applied psychology"
    },
    {
        "classNum": "159",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "160",
        "heading": "Logic"
    },
    {
        "classNum": "161",
        "heading": "Induction"
    },
    {
        "classNum": "162",
        "heading": "Deduction"
    },
    {
        "classNum": "163",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "164",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "165",
        "heading": "Fallacies & sources of error"
    },
    {
        "classNum": "166",
        "heading": "Syllogisms"
    },
    {
        "classNum": "167",
        "heading": "Hypotheses"
    },
    {
        "classNum": "168",
        "heading": "Argument & persuasion"
    },
    {
        "classNum": "169",
        "heading": "Analogy"
    },
    {
        "classNum": "170",
        "heading": "Ethics"
    },
    {
        "classNum": "171",
        "heading": "Ethical systems"
    },
    {
        "classNum": "172",
        "heading": "Political ethics"
    },
    {
        "classNum": "173",
        "heading": "Ethics of family relationships"
    },
    {
        "classNum": "174",
        "heading": "Occupational ethics"
    },
    {
        "classNum": "175",
        "heading": "Ethics of recreation & leisure"
    },
    {
        "classNum": "176",
        "heading": "Ethics of sex & reproduction"
    },
    {
        "classNum": "177",
        "heading": "Ethics of social relations"
    },
    {
        "classNum": "178",
        "heading": "Ethics of consumption"
    },
    {
        "classNum": "179",
        "heading": "Other ethical norms"
    },
    {
        "classNum": "180",
        "heading": "Ancient, medieval & eastern philosophy"
    },
    {
        "classNum": "181",
        "heading": "Eastern philosophy"
    },
    {
        "classNum": "182",
        "heading": "Pre-Socratic Greek philosophies"
    },
    {
        "classNum": "183",
        "heading": "Socratic & related philosophies"
    },
    {
        "classNum": "184",
        "heading": "Platonic philosophy"
    },
    {
        "classNum": "185",
        "heading": "Aristotelian philosophy"
    },
    {
        "classNum": "186",
        "heading": "Skeptic & Neoplatonic philosophies"
    },
    {
        "classNum": "187",
        "heading": "Epicurean philosophy"
    },
    {
        "classNum": "188",
        "heading": "Stoic philosophy"
    },
    {
        "classNum": "189",
        "heading": "Medieval western philosophy"
    },
    {
        "classNum": "190",
        "heading": "Modern western philosophy"
    },
    {
        "classNum": "191",
        "heading": "Philosophy of United States & Canada"
    },
    {
        "classNum": "192",
        "heading": "Philosophy of British Isles"
    },
    {
        "classNum": "193",
        "heading": "Philosophy of Germany & Austria"
    },
    {
        "classNum": "194",
        "heading": "Philosophy of France"
    },
    {
        "classNum": "195",
        "heading": "Philosophy of Italy"
    },
    {
        "classNum": "196",
        "heading": "Philosophy of Spain & Portugal"
    },
    {
        "classNum": "197",
        "heading": "Philosophy of former Soviet Union"
    },
    {
        "classNum": "198",
        "heading": "Philosophy of Scandinavia"
    },
    {
        "classNum": "199",
        "heading": "Philosophy in other geographic areas"
    },
    {
        "classNum": "200",
        "heading": "Religion"
    },
    {
        "classNum": "201",
        "heading": "Religious mythology & social theology"
    },
    {
        "classNum": "202",
        "heading": "Doctrines"
    },
    {
        "classNum": "203",
        "heading": "Public worship & other practices"
    },
    {
        "classNum": "204",
        "heading": "Religious experience, life & practice"
    },
    {
        "classNum": "205",
        "heading": "Religious ethics"
    },
    {
        "classNum": "206",
        "heading": "Leaders & organization"
    },
    {
        "classNum": "207",
        "heading": "Missions & religious education"
    },
    {
        "classNum": "208",
        "heading": "Sources"
    },
    {
        "classNum": "209",
        "heading": "Sects & reform movements"
    },
    {
        "classNum": "210",
        "heading": "Philosophy & theory of religion"
    },
    {
        "classNum": "211",
        "heading": "Concepts of God"
    },
    {
        "classNum": "212",
        "heading": "Existence, knowability & attributes of God"
    },
    {
        "classNum": "213",
        "heading": "Creation"
    },
    {
        "classNum": "214",
        "heading": "Theodicy"
    },
    {
        "classNum": "215",
        "heading": "Science & religion"
    },
    {
        "classNum": "216",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "217",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "218",
        "heading": "Humankind"
    },
    {
        "classNum": "219",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "220",
        "heading": "Bible"
    },
    {
        "classNum": "221",
        "heading": "Old Testament (Tanakh)"
    },
    {
        "classNum": "222",
        "heading": "Historical books of Old Testament"
    },
    {
        "classNum": "223",
        "heading": "Poetic books of Old Testament"
    },
    {
        "classNum": "224",
        "heading": "Prophetic books of Old Testament"
    },
    {
        "classNum": "225",
        "heading": "New Testament"
    },
    {
        "classNum": "226",
        "heading": "Gospels & Acts"
    },
    {
        "classNum": "227",
        "heading": "Epistles"
    },
    {
        "classNum": "228",
        "heading": "Revelation (Apocalypse)"
    },
    {
        "classNum": "229",
        "heading": "Apocrypha & pseudepigrapha"
    },
    {
        "classNum": "230",
        "heading": "Christianity & Christian theology"
    },
    {
        "classNum": "231",
        "heading": "God"
    },
    {
        "classNum": "232",
        "heading": "Jesus Christ & his family"
    },
    {
        "classNum": "233",
        "heading": "Humankind"
    },
    {
        "classNum": "234",
        "heading": "Salvation & grace"
    },
    {
        "classNum": "235",
        "heading": "Spiritual beings"
    },
    {
        "classNum": "236",
        "heading": "Eschatology"
    },
    {
        "classNum": "237",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "238",
        "heading": "Creeds & catechisms"
    },
    {
        "classNum": "239",
        "heading": "Apologetics & polemics"
    },
    {
        "classNum": "240",
        "heading": "Christian moral & devotional theology"
    },
    {
        "classNum": "241",
        "heading": "Christian ethics"
    },
    {
        "classNum": "242",
        "heading": "Devotional literature"
    },
    {
        "classNum": "243",
        "heading": "Evangelistic writings for individuals"
    },
    {
        "classNum": "244",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "245",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "246",
        "heading": "Use of art in Christianity"
    },
    {
        "classNum": "247",
        "heading": "Church furnishings & articles"
    },
    {
        "classNum": "248",
        "heading": "Christian experience, practice & life"
    },
    {
        "classNum": "249",
        "heading": "Christian observances in family life"
    },
    {
        "classNum": "250",
        "heading": "Christian orders & local church"
    },
    {
        "classNum": "251",
        "heading": "Preaching"
    },
    {
        "classNum": "252",
        "heading": "Texts of sermons"
    },
    {
        "classNum": "253",
        "heading": "Pastoral office & work"
    },
    {
        "classNum": "254",
        "heading": "Parish administration"
    },
    {
        "classNum": "255",
        "heading": "Religious congregations & orders"
    },
    {
        "classNum": "256",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "257",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "258",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "259",
        "heading": "Pastoral care of families & kinds of persons"
    },
    {
        "classNum": "260",
        "heading": "Social & ecclesiastical theology"
    },
    {
        "classNum": "261",
        "heading": "Social theology"
    },
    {
        "classNum": "262",
        "heading": "Ecclesiology"
    },
    {
        "classNum": "263",
        "heading": "Days, times & places of observance"
    },
    {
        "classNum": "264",
        "heading": "Public worship"
    },
    {
        "classNum": "265",
        "heading": "Sacraments, other rites & acts"
    },
    {
        "classNum": "266",
        "heading": "Missions"
    },
    {
        "classNum": "267",
        "heading": "Associations for religious work"
    },
    {
        "classNum": "268",
        "heading": "Religious education"
    },
    {
        "classNum": "269",
        "heading": "Spiritual renewal"
    },
    {
        "classNum": "270",
        "heading": "History of Christianity & Christian church"
    },
    {
        "classNum": "271",
        "heading": "Religious orders in church history"
    },
    {
        "classNum": "272",
        "heading": "Persecutions in church history"
    },
    {
        "classNum": "273",
        "heading": "Doctrinal controversies & heresies"
    },
    {
        "classNum": "274",
        "heading": "History of Christianity in Europe"
    },
    {
        "classNum": "275",
        "heading": "History of Christianity in Asia"
    },
    {
        "classNum": "276",
        "heading": "History of Christianity in Africa"
    },
    {
        "classNum": "277",
        "heading": "History of Christianity in North America"
    },
    {
        "classNum": "278",
        "heading": "History of Christianity in South America"
    },
    {
        "classNum": "279",
        "heading": "History of Christianity in other areas"
    },
    {
        "classNum": "280",
        "heading": "Christian denominations & sects"
    },
    {
        "classNum": "281",
        "heading": "Early church & Eastern churches"
    },
    {
        "classNum": "282",
        "heading": "Roman Catholic Church"
    },
    {
        "classNum": "283",
        "heading": "Anglican churches"
    },
    {
        "classNum": "284",
        "heading": "Protestants of Continental origin"
    },
    {
        "classNum": "285",
        "heading": "Presbyterian, Reformed & Congregational"
    },
    {
        "classNum": "286",
        "heading": "Baptist, Disciples of Christ & Adventist"
    },
    {
        "classNum": "287",
        "heading": "Methodist & related churches"
    },
    {
        "classNum": "288",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "289",
        "heading": "Other denominations & sects"
    },
    {
        "classNum": "290",
        "heading": "Other religions"
    },
    {
        "classNum": "291",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "292",
        "heading": "Greek & Roman religion"
    },
    {
        "classNum": "293",
        "heading": "Germanic religion"
    },
    {
        "classNum": "294",
        "heading": "Religions of Indic origin"
    },
    {
        "classNum": "295",
        "heading": "Zoroastrianism"
    },
    {
        "classNum": "296",
        "heading": "Judaism"
    },
    {
        "classNum": "297",
        "heading": "Islam, Babism & Bahai Faith"
    },
    {
        "classNum": "298",
        "heading": "(Optional number)"
    },
    {
        "classNum": "299",
        "heading": "Religions not provided for elsewhere"
    },
    {
        "classNum": "300",
        "heading": "Social sciences"
    },
    {
        "classNum": "301",
        "heading": "Sociology & anthropology"
    },
    {
        "classNum": "302",
        "heading": "Social interaction"
    },
    {
        "classNum": "303",
        "heading": "Social processes"
    },
    {
        "classNum": "304",
        "heading": "Factors affecting social behavior"
    },
    {
        "classNum": "305",
        "heading": "Social groups"
    },
    {
        "classNum": "306",
        "heading": "Culture & institutions"
    },
    {
        "classNum": "307",
        "heading": "Communities"
    },
    {
        "classNum": "308",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "309",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "310",
        "heading": "Collections of general statistics"
    },
    {
        "classNum": "311",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "312",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "313",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "314",
        "heading": "General statistics of Europe"
    },
    {
        "classNum": "315",
        "heading": "General statistics of Asia"
    },
    {
        "classNum": "316",
        "heading": "General statistics of Africa"
    },
    {
        "classNum": "317",
        "heading": "General statistics of North America"
    },
    {
        "classNum": "318",
        "heading": "General statistics of South America"
    },
    {
        "classNum": "319",
        "heading": "General statistics of other areas"
    },
    {
        "classNum": "320",
        "heading": "Political science"
    },
    {
        "classNum": "321",
        "heading": "Systems of governments & states"
    },
    {
        "classNum": "322",
        "heading": "Relation of state to organized groups"
    },
    {
        "classNum": "323",
        "heading": "Civil & political rights"
    },
    {
        "classNum": "324",
        "heading": "The political process"
    },
    {
        "classNum": "325",
        "heading": "International migration & colonization"
    },
    {
        "classNum": "326",
        "heading": "Slavery & emancipation"
    },
    {
        "classNum": "327",
        "heading": "International relations"
    },
    {
        "classNum": "328",
        "heading": "The legislative process"
    },
    {
        "classNum": "329",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "330",
        "heading": "Economics"
    },
    {
        "classNum": "331",
        "heading": "Labor economics"
    },
    {
        "classNum": "332",
        "heading": "Financial economics"
    },
    {
        "classNum": "333",
        "heading": "Economics of land & energy"
    },
    {
        "classNum": "334",
        "heading": "Cooperatives"
    },
    {
        "classNum": "335",
        "heading": "Socialism & related systems"
    },
    {
        "classNum": "336",
        "heading": "Public finance"
    },
    {
        "classNum": "337",
        "heading": "International economics"
    },
    {
        "classNum": "338",
        "heading": "Production"
    },
    {
        "classNum": "339",
        "heading": "Macroeconomics & related topics"
    },
    {
        "classNum": "340",
        "heading": "Law"
    },
    {
        "classNum": "341",
        "heading": "Law of nations"
    },
    {
        "classNum": "342",
        "heading": "Constitutional & administrative law"
    },
    {
        "classNum": "343",
        "heading": "Military, tax, trade & industrial law"
    },
    {
        "classNum": "344",
        "heading": "Labor, social, education & cultural law"
    },
    {
        "classNum": "345",
        "heading": "Criminal law"
    },
    {
        "classNum": "346",
        "heading": "Private law"
    },
    {
        "classNum": "347",
        "heading": "Civil procedure & courts"
    },
    {
        "classNum": "348",
        "heading": "Laws, regulations & cases"
    },
    {
        "classNum": "349",
        "heading": "Law of specific jurisdictions & areas\t"
    },
    {
        "classNum": "350",
        "heading": "Public administration & military science"
    },
    {
        "classNum": "351",
        "heading": "Public administration"
    },
    {
        "classNum": "352",
        "heading": "General considerations of public administration"
    },
    {
        "classNum": "353",
        "heading": "Specific fields of public administration"
    },
    {
        "classNum": "354",
        "heading": "Administration of economy & environment"
    },
    {
        "classNum": "355",
        "heading": "Military science"
    },
    {
        "classNum": "356",
        "heading": "Infantry forces & warfare"
    },
    {
        "classNum": "357",
        "heading": "Mounted forces & warfare"
    },
    {
        "classNum": "358",
        "heading": "Air & other specialized forces"
    },
    {
        "classNum": "359",
        "heading": "Sea forces & warfare"
    },
    {
        "classNum": "360",
        "heading": "Social problems & services; associations"
    },
    {
        "classNum": "361",
        "heading": "Social problems & social welfare in general"
    },
    {
        "classNum": "362",
        "heading": "Social welfare problems & services"
    },
    {
        "classNum": "363",
        "heading": "Other social problems & services"
    },
    {
        "classNum": "364",
        "heading": "Criminology"
    },
    {
        "classNum": "365",
        "heading": "Penal & related institutions"
    },
    {
        "classNum": "366",
        "heading": "Associations"
    },
    {
        "classNum": "367",
        "heading": "General clubs"
    },
    {
        "classNum": "368",
        "heading": "Insurance"
    },
    {
        "classNum": "369",
        "heading": "Miscellaneous kinds of associations"
    },
    {
        "classNum": "370",
        "heading": "Education"
    },
    {
        "classNum": "371",
        "heading": "Schools & their activities; special education"
    },
    {
        "classNum": "372",
        "heading": "Elementary education"
    },
    {
        "classNum": "373",
        "heading": "Secondary education"
    },
    {
        "classNum": "374",
        "heading": "Adult education"
    },
    {
        "classNum": "375",
        "heading": "Curricula"
    },
    {
        "classNum": "376",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "377",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "378",
        "heading": "Higher education"
    },
    {
        "classNum": "379",
        "heading": "Public policy issues in education"
    },
    {
        "classNum": "380",
        "heading": "Commerce, communications & transportation"
    },
    {
        "classNum": "381",
        "heading": "Commerce"
    },
    {
        "classNum": "382",
        "heading": "International commerce"
    },
    {
        "classNum": "383",
        "heading": "Postal communication"
    },
    {
        "classNum": "384",
        "heading": "Communications; telecommunication"
    },
    {
        "classNum": "385",
        "heading": "Railroad transportation"
    },
    {
        "classNum": "386",
        "heading": "Inland waterway & ferry transportation"
    },
    {
        "classNum": "387",
        "heading": "Water, air & space transportation"
    },
    {
        "classNum": "388",
        "heading": "Transportation; ground transportation"
    },
    {
        "classNum": "389",
        "heading": "Metrology & standardization"
    },
    {
        "classNum": "390",
        "heading": "Customs, etiquette & folklore"
    },
    {
        "classNum": "391",
        "heading": "Costume & personal appearance"
    },
    {
        "classNum": "392",
        "heading": "Customs of life cycle & domestic life"
    },
    {
        "classNum": "393",
        "heading": "Death customs"
    },
    {
        "classNum": "394",
        "heading": "General customs"
    },
    {
        "classNum": "395",
        "heading": "Etiquette (Manners)"
    },
    {
        "classNum": "396",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "397",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "398",
        "heading": "Folklore"
    },
    {
        "classNum": "399",
        "heading": "Customs of war & diplomacy"
    },
    {
        "classNum": "400",
        "heading": "Language"
    },
    {
        "classNum": "401",
        "heading": "Philosophy & theory"
    },
    {
        "classNum": "402",
        "heading": "Miscellany"
    },
    {
        "classNum": "403",
        "heading": "Dictionaries & encyclopedias"
    },
    {
        "classNum": "404",
        "heading": "Special topics"
    },
    {
        "classNum": "405",
        "heading": "Serial publications"
    },
    {
        "classNum": "406",
        "heading": "Organizations & management"
    },
    {
        "classNum": "407",
        "heading": "Education, research & related topics"
    },
    {
        "classNum": "408",
        "heading": "Kinds of persons treatment"
    },
    {
        "classNum": "409",
        "heading": "Geographic & persons treatment"
    },
    {
        "classNum": "410",
        "heading": "Linguistics"
    },
    {
        "classNum": "411",
        "heading": "Writing systems"
    },
    {
        "classNum": "412",
        "heading": "Etymology"
    },
    {
        "classNum": "413",
        "heading": "Dictionaries"
    },
    {
        "classNum": "414",
        "heading": "Phonology & phonetics"
    },
    {
        "classNum": "415",
        "heading": "Grammar"
    },
    {
        "classNum": "416",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "417",
        "heading": "Dialectology & historical linguistics"
    },
    {
        "classNum": "418",
        "heading": "Standard usage & applied linguistics"
    },
    {
        "classNum": "419",
        "heading": "Sign languages"
    },
    {
        "classNum": "420",
        "heading": "English & Old English"
    },
    {
        "classNum": "421",
        "heading": "English writing system & phonology"
    },
    {
        "classNum": "422",
        "heading": "English etymology"
    },
    {
        "classNum": "423",
        "heading": "English dictionaries"
    },
    {
        "classNum": "424",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "425",
        "heading": "English grammar"
    },
    {
        "classNum": "426",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "427",
        "heading": "English language variations"
    },
    {
        "classNum": "428",
        "heading": "Standard English usage"
    },
    {
        "classNum": "429",
        "heading": "Old English (Anglo-Saxon)"
    },
    {
        "classNum": "430",
        "heading": "Germanic languages; German"
    },
    {
        "classNum": "431",
        "heading": "German writing systems & phonology"
    },
    {
        "classNum": "432",
        "heading": "German etymology"
    },
    {
        "classNum": "433",
        "heading": "German dictionaries"
    },
    {
        "classNum": "434",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "435",
        "heading": "German grammar"
    },
    {
        "classNum": "436",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "437",
        "heading": "German language variations"
    },
    {
        "classNum": "438",
        "heading": "Standard German usage"
    },
    {
        "classNum": "439",
        "heading": "Other Germanic languages"
    },
    {
        "classNum": "440",
        "heading": "Romance languages; French"
    },
    {
        "classNum": "441",
        "heading": "French writing systems & phonology"
    },
    {
        "classNum": "442",
        "heading": "French etymology"
    },
    {
        "classNum": "443",
        "heading": "French dictionaries"
    },
    {
        "classNum": "444",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "445",
        "heading": "French grammar"
    },
    {
        "classNum": "446",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "447",
        "heading": "French language variations"
    },
    {
        "classNum": "448",
        "heading": "Standard French usage"
    },
    {
        "classNum": "449",
        "heading": "Occitan & Catalan\t"
    },
    {
        "classNum": "450",
        "heading": "Italian, Romanian & related languages"
    },
    {
        "classNum": "451",
        "heading": "Italian writing systems & phonology"
    },
    {
        "classNum": "452",
        "heading": "Italian etymology"
    },
    {
        "classNum": "453",
        "heading": "Italian dictionaries"
    },
    {
        "classNum": "454",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "455",
        "heading": "Italian grammar"
    },
    {
        "classNum": "456",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "457",
        "heading": "Italian language variations"
    },
    {
        "classNum": "458",
        "heading": "Standard Italian usage"
    },
    {
        "classNum": "459",
        "heading": "Romanian & related languages"
    },
    {
        "classNum": "460",
        "heading": "Spanish & Portuguese languages"
    },
    {
        "classNum": "461",
        "heading": "Spanish writing systems & phonology"
    },
    {
        "classNum": "462",
        "heading": "Spanish etymology"
    },
    {
        "classNum": "463",
        "heading": "Spanish dictionaries"
    },
    {
        "classNum": "464",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "465",
        "heading": "Spanish grammar"
    },
    {
        "classNum": "466",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "467",
        "heading": "Spanish language variations"
    },
    {
        "classNum": "468",
        "heading": "Standard Spanish usage"
    },
    {
        "classNum": "469",
        "heading": "Portuguese"
    },
    {
        "classNum": "470",
        "heading": "Italic languages; Latin"
    },
    {
        "classNum": "471",
        "heading": "Classical Latin writing & phonology"
    },
    {
        "classNum": "472",
        "heading": "Classical Latin etymology"
    },
    {
        "classNum": "473",
        "heading": "Classical Latin dictionaries"
    },
    {
        "classNum": "474",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "475",
        "heading": "Classical Latin grammar"
    },
    {
        "classNum": "476",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "477",
        "heading": "Old, postclassical & Vulgar Latin"
    },
    {
        "classNum": "478",
        "heading": "Classical Latin usage"
    },
    {
        "classNum": "479",
        "heading": "Other Italic languages"
    },
    {
        "classNum": "480",
        "heading": "Hellenic languages; classical Greek"
    },
    {
        "classNum": "481",
        "heading": "Classical Greek writing & phonology"
    },
    {
        "classNum": "482",
        "heading": "Classical Greek etymology"
    },
    {
        "classNum": "483",
        "heading": "Classical Greek dictionaries"
    },
    {
        "classNum": "484",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "485",
        "heading": "Classical Greek grammar"
    },
    {
        "classNum": "486",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "487",
        "heading": "Preclassical & postclassical Greek"
    },
    {
        "classNum": "488",
        "heading": "Classical Greek usage"
    },
    {
        "classNum": "489",
        "heading": "Other Hellenic languages"
    },
    {
        "classNum": "490",
        "heading": "Other languages"
    },
    {
        "classNum": "491",
        "heading": "East Indo-European & Celtic languages"
    },
    {
        "classNum": "492",
        "heading": "Afro-Asiatic languages; Semitic languages"
    },
    {
        "classNum": "493",
        "heading": "Non-Semitic Afro-Asiatic languages"
    },
    {
        "classNum": "494",
        "heading": "Altaic, Uralic, Hyperborean & Dravidian"
    },
    {
        "classNum": "495",
        "heading": "Languages of East & Southeast Asia"
    },
    {
        "classNum": "496",
        "heading": "African languages"
    },
    {
        "classNum": "497",
        "heading": "North American native languages"
    },
    {
        "classNum": "498",
        "heading": "South American native languages"
    },
    {
        "classNum": "499",
        "heading": "Austronesian & other languages"
    },
    {
        "classNum": "500",
        "heading": "Natural Sciences and Mathemetics"
    },
    {
        "classNum": "501",
        "heading": "Philosophy & theory"
    },
    {
        "classNum": "502",
        "heading": "Miscellany"
    },
    {
        "classNum": "503",
        "heading": "Dictionaries & encyclopedias"
    },
    {
        "classNum": "504",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "505",
        "heading": "Serial publications"
    },
    {
        "classNum": "506",
        "heading": "Organizations & management"
    },
    {
        "classNum": "507",
        "heading": "Education, research & related topics"
    },
    {
        "classNum": "508",
        "heading": "Natural history"
    },
    {
        "classNum": "509",
        "heading": "Historical, geographic & persons treatment"
    },
    {
        "classNum": "510",
        "heading": "Mathematics"
    },
    {
        "classNum": "511",
        "heading": "General principles of mathematics"
    },
    {
        "classNum": "512",
        "heading": "Algebra"
    },
    {
        "classNum": "513",
        "heading": "Arithmetic"
    },
    {
        "classNum": "514",
        "heading": "Topology"
    },
    {
        "classNum": "515",
        "heading": "Analysis"
    },
    {
        "classNum": "516",
        "heading": "Geometry"
    },
    {
        "classNum": "517",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "518",
        "heading": "Numerical analysis"
    },
    {
        "classNum": "519",
        "heading": "Probabilities & applied mathematics"
    },
    {
        "classNum": "520",
        "heading": "Astronomy & allied sciences"
    },
    {
        "classNum": "521",
        "heading": "Celestial mechanics"
    },
    {
        "classNum": "522",
        "heading": "Techniques, equipment & materials"
    },
    {
        "classNum": "523",
        "heading": "Specific celestial bodies & phenomena"
    },
    {
        "classNum": "524",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "525",
        "heading": "Earth (Astronomical geography)"
    },
    {
        "classNum": "526",
        "heading": "Mathematical geography"
    },
    {
        "classNum": "527",
        "heading": "Celestial navigation"
    },
    {
        "classNum": "528",
        "heading": "Ephemerides"
    },
    {
        "classNum": "529",
        "heading": "Chronology"
    },
    {
        "classNum": "530",
        "heading": "Physics"
    },
    {
        "classNum": "531",
        "heading": "Classical mechanics; solid mechanics"
    },
    {
        "classNum": "532",
        "heading": "Fluid mechanics; liquid mechanics"
    },
    {
        "classNum": "533",
        "heading": "Gas mechanics"
    },
    {
        "classNum": "534",
        "heading": "Sound & related vibrations"
    },
    {
        "classNum": "535",
        "heading": "Light & infrared & ultraviolet phenomena"
    },
    {
        "classNum": "536",
        "heading": "Heat"
    },
    {
        "classNum": "537",
        "heading": "Electricity & electronics"
    },
    {
        "classNum": "538",
        "heading": "Magnetism"
    },
    {
        "classNum": "539",
        "heading": "Modern physics"
    },
    {
        "classNum": "540",
        "heading": "Chemistry & allied sciences"
    },
    {
        "classNum": "541",
        "heading": "Physical chemistry"
    },
    {
        "classNum": "542",
        "heading": "Techniques, equipment & materials"
    },
    {
        "classNum": "543",
        "heading": "Analytical chemistry"
    },
    {
        "classNum": "544",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "545",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "546",
        "heading": "Inorganic chemistry"
    },
    {
        "classNum": "547",
        "heading": "Organic chemistry"
    },
    {
        "classNum": "548",
        "heading": "Crystallography"
    },
    {
        "classNum": "549",
        "heading": "Mineralogy\t550 Earth sciences"
    },
    {
        "classNum": "551",
        "heading": "Geology, hydrology & meteorology"
    },
    {
        "classNum": "552",
        "heading": "Petrology"
    },
    {
        "classNum": "553",
        "heading": "Economic geology"
    },
    {
        "classNum": "554",
        "heading": "Earth sciences of Europe"
    },
    {
        "classNum": "555",
        "heading": "Earth sciences of Asia"
    },
    {
        "classNum": "556",
        "heading": "Earth sciences of Africa"
    },
    {
        "classNum": "557",
        "heading": "Earth sciences of North America"
    },
    {
        "classNum": "558",
        "heading": "Earth sciences of South America"
    },
    {
        "classNum": "559",
        "heading": "Earth sciences of other areas"
    },
    {
        "classNum": "560",
        "heading": "Paleontology; paleozoology"
    },
    {
        "classNum": "561",
        "heading": "Paleobotany; fossil microorganisms"
    },
    {
        "classNum": "562",
        "heading": "Fossil invertebrates"
    },
    {
        "classNum": "563",
        "heading": "Fossil marine & seashore invertebrates"
    },
    {
        "classNum": "564",
        "heading": "Fossil mollusks & molluscoids"
    },
    {
        "classNum": "565",
        "heading": "Fossil arthropods"
    },
    {
        "classNum": "566",
        "heading": "Fossil chordates"
    },
    {
        "classNum": "567",
        "heading": "Fossil cold-blooded vertebrates; fossil fishes"
    },
    {
        "classNum": "568",
        "heading": "Fossil birds"
    },
    {
        "classNum": "569",
        "heading": "Fossil mammals"
    },
    {
        "classNum": "570",
        "heading": "Life sciences; biology"
    },
    {
        "classNum": "571",
        "heading": "Physiology & related subjects"
    },
    {
        "classNum": "572",
        "heading": "Biochemistry"
    },
    {
        "classNum": "573",
        "heading": "Specific physiological systems in animals"
    },
    {
        "classNum": "574",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "575",
        "heading": "Specific parts of & systems in plants"
    },
    {
        "classNum": "576",
        "heading": "Genetics & evolution"
    },
    {
        "classNum": "577",
        "heading": "Ecology"
    },
    {
        "classNum": "578",
        "heading": "Natural history of organisms"
    },
    {
        "classNum": "579",
        "heading": "Microorganisms, fungi & algae"
    },
    {
        "classNum": "580",
        "heading": "Plants (Botany)"
    },
    {
        "classNum": "581",
        "heading": "Specific topics in natural history"
    },
    {
        "classNum": "582",
        "heading": "Plants noted for characteristics & flowers"
    },
    {
        "classNum": "583",
        "heading": "Dicotyledons"
    },
    {
        "classNum": "584",
        "heading": "Monocotyledons"
    },
    {
        "classNum": "585",
        "heading": "Gymnosperms; conifers"
    },
    {
        "classNum": "586",
        "heading": "Seedless plants"
    },
    {
        "classNum": "587",
        "heading": "Vascular seedless plants"
    },
    {
        "classNum": "588",
        "heading": "Bryophytes"
    },
    {
        "classNum": "589",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "590",
        "heading": "Animals (Zoology)"
    },
    {
        "classNum": "591",
        "heading": "Specific topics in natural history"
    },
    {
        "classNum": "592",
        "heading": "Invertebrates"
    },
    {
        "classNum": "593",
        "heading": "Marine & seashore invertebrates"
    },
    {
        "classNum": "594",
        "heading": "Mollusks & molluscoids"
    },
    {
        "classNum": "595",
        "heading": "Arthropods"
    },
    {
        "classNum": "596",
        "heading": "Chordates"
    },
    {
        "classNum": "597",
        "heading": "Cold-blooded vertebrates; fishes"
    },
    {
        "classNum": "598",
        "heading": "Birds"
    },
    {
        "classNum": "599",
        "heading": "Mammals"
    },
    {
        "classNum": "600",
        "heading": "Technology"
    },
    {
        "classNum": "601",
        "heading": "Philosophy & theory"
    },
    {
        "classNum": "602",
        "heading": "Miscellany"
    },
    {
        "classNum": "603",
        "heading": "Dictionaries & encyclopedias"
    },
    {
        "classNum": "604",
        "heading": "Special topics"
    },
    {
        "classNum": "605",
        "heading": "Serial publications"
    },
    {
        "classNum": "606",
        "heading": "Organizations"
    },
    {
        "classNum": "607",
        "heading": "Education, research & related topics"
    },
    {
        "classNum": "608",
        "heading": "Inventions & patents"
    },
    {
        "classNum": "609",
        "heading": "Historical, geographic & persons treatment"
    },
    {
        "classNum": "610",
        "heading": "Medicine & health"
    },
    {
        "classNum": "611",
        "heading": "Human anatomy, cytology & histology"
    },
    {
        "classNum": "612",
        "heading": "Human physiology"
    },
    {
        "classNum": "613",
        "heading": "Personal health & safety"
    },
    {
        "classNum": "614",
        "heading": "Incidence & prevention of disease"
    },
    {
        "classNum": "615",
        "heading": "Pharmacology & therapeutics"
    },
    {
        "classNum": "616",
        "heading": "Diseases"
    },
    {
        "classNum": "617",
        "heading": "Surgery & related medical specialties"
    },
    {
        "classNum": "618",
        "heading": "Gynecology, obstetrics, pediatrics & geriatrics"
    },
    {
        "classNum": "619",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "620",
        "heading": "Engineering & allied operations"
    },
    {
        "classNum": "621",
        "heading": "Applied physics"
    },
    {
        "classNum": "622",
        "heading": "Mining & related operations"
    },
    {
        "classNum": "623",
        "heading": "Military & nautical engineering"
    },
    {
        "classNum": "624",
        "heading": "Civil engineering"
    },
    {
        "classNum": "625",
        "heading": "Engineering of railroads & roads"
    },
    {
        "classNum": "626",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "627",
        "heading": "Hydraulic engineering"
    },
    {
        "classNum": "628",
        "heading": "Sanitary & municipal engineering"
    },
    {
        "classNum": "629",
        "heading": "Other branches of engineering"
    },
    {
        "classNum": "630",
        "heading": "Agriculture & related technologies"
    },
    {
        "classNum": "631",
        "heading": "Techniques, equipment & materials"
    },
    {
        "classNum": "632",
        "heading": "Plant injuries, diseases & pests"
    },
    {
        "classNum": "633",
        "heading": "Field & plantation crops"
    },
    {
        "classNum": "634",
        "heading": "Orchards, fruits & forestry"
    },
    {
        "classNum": "635",
        "heading": "Garden crops (Horticulture)"
    },
    {
        "classNum": "636",
        "heading": "Animal husbandry"
    },
    {
        "classNum": "637",
        "heading": "Processing dairy & related products"
    },
    {
        "classNum": "638",
        "heading": "Insect culture"
    },
    {
        "classNum": "639",
        "heading": "Hunting, fishing & conservation"
    },
    {
        "classNum": "640",
        "heading": "Home & family management"
    },
    {
        "classNum": "641",
        "heading": "Food & drink"
    },
    {
        "classNum": "642",
        "heading": "Meals & table service"
    },
    {
        "classNum": "643",
        "heading": "Housing & household equipment"
    },
    {
        "classNum": "644",
        "heading": "Household utilities"
    },
    {
        "classNum": "645",
        "heading": "Household furnishings"
    },
    {
        "classNum": "646",
        "heading": "Sewing, clothing & personal living"
    },
    {
        "classNum": "647",
        "heading": "Management of public households"
    },
    {
        "classNum": "648",
        "heading": "Housekeeping"
    },
    {
        "classNum": "649",
        "heading": "Child rearing & home care of persons\t"
    },
    {
        "classNum": "650",
        "heading": "Management & auxiliary services"
    },
    {
        "classNum": "651",
        "heading": "Office services"
    },
    {
        "classNum": "652",
        "heading": "Processes of written communication"
    },
    {
        "classNum": "653",
        "heading": "Shorthand"
    },
    {
        "classNum": "654",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "655",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "656",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "657",
        "heading": "Accounting"
    },
    {
        "classNum": "658",
        "heading": "General management"
    },
    {
        "classNum": "659",
        "heading": "Advertising & public relations"
    },
    {
        "classNum": "660",
        "heading": "Chemical engineering"
    },
    {
        "classNum": "661",
        "heading": "Industrial chemicals"
    },
    {
        "classNum": "662",
        "heading": "Explosives, fuels & related products"
    },
    {
        "classNum": "663",
        "heading": "Beverage technology"
    },
    {
        "classNum": "664",
        "heading": "Food technology"
    },
    {
        "classNum": "665",
        "heading": "Industrial oils, fats, waxes & gases"
    },
    {
        "classNum": "666",
        "heading": "Ceramic & allied technologies"
    },
    {
        "classNum": "667",
        "heading": "Cleaning, color & coating technologies"
    },
    {
        "classNum": "668",
        "heading": "Technology of other organic products"
    },
    {
        "classNum": "669",
        "heading": "Metallurgy"
    },
    {
        "classNum": "670",
        "heading": "Manufacturing"
    },
    {
        "classNum": "671",
        "heading": "Metalworking & primary metal products"
    },
    {
        "classNum": "672",
        "heading": "Iron, steel & other iron alloys"
    },
    {
        "classNum": "673",
        "heading": "Nonferrous metals"
    },
    {
        "classNum": "674",
        "heading": "Lumber processing, wood products & cork"
    },
    {
        "classNum": "675",
        "heading": "Leather & fur processing"
    },
    {
        "classNum": "676",
        "heading": "Pulp & paper technology"
    },
    {
        "classNum": "677",
        "heading": "Textiles"
    },
    {
        "classNum": "678",
        "heading": "Elastomers & elastomer products"
    },
    {
        "classNum": "679",
        "heading": "Other products of specific materials"
    },
    {
        "classNum": "680",
        "heading": "Manufacture for specific uses"
    },
    {
        "classNum": "681",
        "heading": "Precision instruments & other devices"
    },
    {
        "classNum": "682",
        "heading": "Small forge work (Blacksmithing)"
    },
    {
        "classNum": "683",
        "heading": "Hardware & household appliances"
    },
    {
        "classNum": "684",
        "heading": "Furnishings & home workshops"
    },
    {
        "classNum": "685",
        "heading": "Leather, fur goods & related products"
    },
    {
        "classNum": "686",
        "heading": "Printing & related activities"
    },
    {
        "classNum": "687",
        "heading": "Clothing & accessories"
    },
    {
        "classNum": "688",
        "heading": "Other final products & packaging"
    },
    {
        "classNum": "689",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "690",
        "heading": "Buildings"
    },
    {
        "classNum": "691",
        "heading": "Building materials"
    },
    {
        "classNum": "692",
        "heading": "Auxiliary construction practices"
    },
    {
        "classNum": "693",
        "heading": "Specific materials & purposes"
    },
    {
        "classNum": "694",
        "heading": "Wood construction & carpentry"
    },
    {
        "classNum": "695",
        "heading": "Roof covering"
    },
    {
        "classNum": "696",
        "heading": "Utilities"
    },
    {
        "classNum": "697",
        "heading": "Heating, ventilating & air-conditioning"
    },
    {
        "classNum": "698",
        "heading": "Detail finishing"
    },
    {
        "classNum": "699",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "700",
        "heading": "The arts; fine & decorative arts"
    },
    {
        "classNum": "701",
        "heading": "Philosophy of fine & decorative arts"
    },
    {
        "classNum": "702",
        "heading": "Miscellany of fine & decorative arts"
    },
    {
        "classNum": "703",
        "heading": "Dictionaries of fine & decorative arts"
    },
    {
        "classNum": "704",
        "heading": "Special topics in fine & decorative arts"
    },
    {
        "classNum": "705",
        "heading": "Serial publications of fine & decorative arts"
    },
    {
        "classNum": "706",
        "heading": "Organizations & management"
    },
    {
        "classNum": "707",
        "heading": "Education, research & related topics"
    },
    {
        "classNum": "708",
        "heading": "Galleries, museums & private collections"
    },
    {
        "classNum": "709",
        "heading": "Historical, geographic & persons treatment"
    },
    {
        "classNum": "710",
        "heading": "Civic & landscape art"
    },
    {
        "classNum": "711",
        "heading": "Area planning"
    },
    {
        "classNum": "712",
        "heading": "Landscape architecture"
    },
    {
        "classNum": "713",
        "heading": "Landscape architecture of trafficways"
    },
    {
        "classNum": "714",
        "heading": "Water features"
    },
    {
        "classNum": "715",
        "heading": "Woody plants"
    },
    {
        "classNum": "716",
        "heading": "Herbaceous plants"
    },
    {
        "classNum": "717",
        "heading": "Structures in landscape architecture"
    },
    {
        "classNum": "718",
        "heading": "Landscape design of cemeteries"
    },
    {
        "classNum": "719",
        "heading": "Natural landscapes"
    },
    {
        "classNum": "720",
        "heading": "Architecture"
    },
    {
        "classNum": "721",
        "heading": "Architectural structure"
    },
    {
        "classNum": "722",
        "heading": "Architecture to ca. 300"
    },
    {
        "classNum": "723",
        "heading": "Architecture from ca. 300 to 1399"
    },
    {
        "classNum": "724",
        "heading": "Architecture from 1400"
    },
    {
        "classNum": "725",
        "heading": "Public structures"
    },
    {
        "classNum": "726",
        "heading": "Buildings for religious purposes"
    },
    {
        "classNum": "727",
        "heading": "Buildings for education & research"
    },
    {
        "classNum": "728",
        "heading": "Residential & related buildings"
    },
    {
        "classNum": "729",
        "heading": "Design & decoration"
    },
    {
        "classNum": "730",
        "heading": "Plastic arts; sculpture"
    },
    {
        "classNum": "731",
        "heading": "Processes, forms & subjects of sculpture"
    },
    {
        "classNum": "732",
        "heading": "Sculpture to ca. 500"
    },
    {
        "classNum": "733",
        "heading": "Greek, Etruscan & Roman sculpture"
    },
    {
        "classNum": "734",
        "heading": "Sculpture from ca. 500 to 1399"
    },
    {
        "classNum": "735",
        "heading": "Sculpture from 1400"
    },
    {
        "classNum": "736",
        "heading": "Carving & carvings"
    },
    {
        "classNum": "737",
        "heading": "Numismatics & sigillography"
    },
    {
        "classNum": "738",
        "heading": "Ceramic arts"
    },
    {
        "classNum": "739",
        "heading": "Art metalwork"
    },
    {
        "classNum": "740",
        "heading": "Drawing & decorative arts"
    },
    {
        "classNum": "741",
        "heading": "Drawing & drawings"
    },
    {
        "classNum": "742",
        "heading": "Perspective"
    },
    {
        "classNum": "743",
        "heading": "Drawing & drawings by subject"
    },
    {
        "classNum": "744",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "745",
        "heading": "Decorative arts"
    },
    {
        "classNum": "746",
        "heading": "Textile arts"
    },
    {
        "classNum": "747",
        "heading": "Interior decoration"
    },
    {
        "classNum": "748",
        "heading": "Glass"
    },
    {
        "classNum": "749",
        "heading": "Furniture & accessories\t"
    },
    {
        "classNum": "750",
        "heading": "Painting & paintings"
    },
    {
        "classNum": "751",
        "heading": "Techniques, equipment, materials & forms"
    },
    {
        "classNum": "752",
        "heading": "Color"
    },
    {
        "classNum": "753",
        "heading": "Symbolism, allegory, mythology & legend"
    },
    {
        "classNum": "754",
        "heading": "Genre paintings"
    },
    {
        "classNum": "755",
        "heading": "Religion"
    },
    {
        "classNum": "756",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "757",
        "heading": "Human figures"
    },
    {
        "classNum": "758",
        "heading": "Other subjects"
    },
    {
        "classNum": "759",
        "heading": "Historical, geographic & persons treatment"
    },
    {
        "classNum": "760",
        "heading": "Graphic arts; printmaking & prints"
    },
    {
        "classNum": "761",
        "heading": "Relief processes (Block printing)"
    },
    {
        "classNum": "762",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "763",
        "heading": "Lithographic processes"
    },
    {
        "classNum": "764",
        "heading": "Chromolithography & serigraphy"
    },
    {
        "classNum": "765",
        "heading": "Metal engraving"
    },
    {
        "classNum": "766",
        "heading": "Mezzotinting, aquatinting & related processes"
    },
    {
        "classNum": "767",
        "heading": "Etching & drypoint"
    },
    {
        "classNum": "768",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "769",
        "heading": "Prints"
    },
    {
        "classNum": "770",
        "heading": "Photography, photographs & computer art"
    },
    {
        "classNum": "771",
        "heading": "Techniques, equipment & materials"
    },
    {
        "classNum": "772",
        "heading": "Metallic salt processes"
    },
    {
        "classNum": "773",
        "heading": "Pigment processes of printing"
    },
    {
        "classNum": "774",
        "heading": "Holography"
    },
    {
        "classNum": "775",
        "heading": "Digital photography"
    },
    {
        "classNum": "776",
        "heading": "Computer art (Digital art)"
    },
    {
        "classNum": "777",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "778",
        "heading": "Fields & kinds of photography"
    },
    {
        "classNum": "779",
        "heading": "Photographs"
    },
    {
        "classNum": "780",
        "heading": "Music"
    },
    {
        "classNum": "781",
        "heading": "General principles & musical forms"
    },
    {
        "classNum": "782",
        "heading": "Vocal music"
    },
    {
        "classNum": "783",
        "heading": "Music for single voices; the voice"
    },
    {
        "classNum": "784",
        "heading": "Instruments & instrumental ensembles"
    },
    {
        "classNum": "785",
        "heading": "Ensembles with one instrument per part"
    },
    {
        "classNum": "786",
        "heading": "Keyboard & other instruments"
    },
    {
        "classNum": "787",
        "heading": "Stringed instruments"
    },
    {
        "classNum": "788",
        "heading": "Wind instruments"
    },
    {
        "classNum": "789",
        "heading": "(Optional number)"
    },
    {
        "classNum": "790",
        "heading": "Recreational & performing arts"
    },
    {
        "classNum": "791",
        "heading": "Public performances"
    },
    {
        "classNum": "792",
        "heading": "Stage presentations"
    },
    {
        "classNum": "793",
        "heading": "Indoor games & amusements"
    },
    {
        "classNum": "794",
        "heading": "Indoor games of skill"
    },
    {
        "classNum": "795",
        "heading": "Games of chance"
    },
    {
        "classNum": "796",
        "heading": "Athletic & outdoor sports & games"
    },
    {
        "classNum": "797",
        "heading": "Aquatic & air sports"
    },
    {
        "classNum": "798",
        "heading": "Equestrian sports & animal racing"
    },
    {
        "classNum": "799",
        "heading": "Fishing, hunting & shooting"
    },
    {
        "classNum": "800",
        "heading": "Literature & rhetoric"
    },
    {
        "classNum": "801",
        "heading": "Philosophy & theory"
    },
    {
        "classNum": "802",
        "heading": "Miscellany"
    },
    {
        "classNum": "803",
        "heading": "Dictionaries & encyclopedias"
    },
    {
        "classNum": "804",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "805",
        "heading": "Serial publications"
    },
    {
        "classNum": "806",
        "heading": "Organizations & management"
    },
    {
        "classNum": "807",
        "heading": "Education, research & related topics"
    },
    {
        "classNum": "808",
        "heading": "Rhetoric & collections of literature"
    },
    {
        "classNum": "809",
        "heading": "History, description & criticism"
    },
    {
        "classNum": "810",
        "heading": "American literature in English"
    },
    {
        "classNum": "811",
        "heading": "American poetry in English"
    },
    {
        "classNum": "812",
        "heading": "American drama in English"
    },
    {
        "classNum": "813",
        "heading": "American fiction in English"
    },
    {
        "classNum": "814",
        "heading": "American essays in English"
    },
    {
        "classNum": "815",
        "heading": "American speeches in English"
    },
    {
        "classNum": "816",
        "heading": "American letters in English"
    },
    {
        "classNum": "817",
        "heading": "American humor & satire in English"
    },
    {
        "classNum": "818",
        "heading": "American miscellaneous writings"
    },
    {
        "classNum": "819",
        "heading": "(Optional number)"
    },
    {
        "classNum": "820",
        "heading": "English & Old English literatures"
    },
    {
        "classNum": "821",
        "heading": "English poetry"
    },
    {
        "classNum": "822",
        "heading": "English drama"
    },
    {
        "classNum": "823",
        "heading": "English fiction"
    },
    {
        "classNum": "824",
        "heading": "English essays"
    },
    {
        "classNum": "825",
        "heading": "English speeches"
    },
    {
        "classNum": "826",
        "heading": "English letters"
    },
    {
        "classNum": "827",
        "heading": "English humor & satire"
    },
    {
        "classNum": "828",
        "heading": "English miscellaneous writings"
    },
    {
        "classNum": "829",
        "heading": "Old English (Anglo-Saxon)"
    },
    {
        "classNum": "830",
        "heading": "Literatures of Germanic languages"
    },
    {
        "classNum": "831",
        "heading": "German poetry"
    },
    {
        "classNum": "832",
        "heading": "German drama"
    },
    {
        "classNum": "833",
        "heading": "German fiction"
    },
    {
        "classNum": "834",
        "heading": "German essays"
    },
    {
        "classNum": "835",
        "heading": "German speeches"
    },
    {
        "classNum": "836",
        "heading": "German letters"
    },
    {
        "classNum": "837",
        "heading": "German humor & satire"
    },
    {
        "classNum": "838",
        "heading": "German miscellaneous writings"
    },
    {
        "classNum": "839",
        "heading": "Other Germanic literatures"
    },
    {
        "classNum": "840",
        "heading": "Literatures of Romance languages"
    },
    {
        "classNum": "841",
        "heading": "French poetry"
    },
    {
        "classNum": "842",
        "heading": "French drama"
    },
    {
        "classNum": "843",
        "heading": "French fiction"
    },
    {
        "classNum": "844",
        "heading": "French essays"
    },
    {
        "classNum": "845",
        "heading": "French speeches"
    },
    {
        "classNum": "846",
        "heading": "French letters"
    },
    {
        "classNum": "847",
        "heading": "French humor & satire"
    },
    {
        "classNum": "848",
        "heading": "French miscellaneous writings"
    },
    {
        "classNum": "849",
        "heading": "Occitan & Catalan literatures\t"
    },
    {
        "classNum": "850",
        "heading": "Italian, Romanian & related literatures"
    },
    {
        "classNum": "851",
        "heading": "Italian poetry"
    },
    {
        "classNum": "852",
        "heading": "Italian drama"
    },
    {
        "classNum": "853",
        "heading": "Italian fiction"
    },
    {
        "classNum": "854",
        "heading": "Italian essays"
    },
    {
        "classNum": "855",
        "heading": "Italian speeches"
    },
    {
        "classNum": "856",
        "heading": "Italian letters"
    },
    {
        "classNum": "857",
        "heading": "Italian humor & satire"
    },
    {
        "classNum": "858",
        "heading": "Italian miscellaneous writings"
    },
    {
        "classNum": "859",
        "heading": "Romanian & related literatures"
    },
    {
        "classNum": "860",
        "heading": "Spanish & Portuguese literatures"
    },
    {
        "classNum": "861",
        "heading": "Spanish poetry"
    },
    {
        "classNum": "862",
        "heading": "Spanish drama"
    },
    {
        "classNum": "863",
        "heading": "Spanish fiction"
    },
    {
        "classNum": "864",
        "heading": "Spanish essays"
    },
    {
        "classNum": "865",
        "heading": "Spanish speeches"
    },
    {
        "classNum": "866",
        "heading": "Spanish letters"
    },
    {
        "classNum": "867",
        "heading": "Spanish humor & satire"
    },
    {
        "classNum": "868",
        "heading": "Spanish miscellaneous writings"
    },
    {
        "classNum": "869",
        "heading": "Portuguese literature"
    },
    {
        "classNum": "870",
        "heading": "Italic literatures; Latin literature"
    },
    {
        "classNum": "871",
        "heading": "Latin poetry"
    },
    {
        "classNum": "872",
        "heading": "Latin dramatic poetry & drama"
    },
    {
        "classNum": "873",
        "heading": "Latin epic poetry & fiction"
    },
    {
        "classNum": "874",
        "heading": "Latin lyric poetry"
    },
    {
        "classNum": "875",
        "heading": "Latin speeches"
    },
    {
        "classNum": "876",
        "heading": "Latin letters"
    },
    {
        "classNum": "877",
        "heading": "Latin humor & satire"
    },
    {
        "classNum": "878",
        "heading": "Latin miscellaneous writings"
    },
    {
        "classNum": "879",
        "heading": "Literatures of other Italic languages"
    },
    {
        "classNum": "880",
        "heading": "Hellenic literatures; classical Greek"
    },
    {
        "classNum": "881",
        "heading": "Classical Greek poetry"
    },
    {
        "classNum": "882",
        "heading": "Classical Greek dramatic poetry & drama"
    },
    {
        "classNum": "883",
        "heading": "Classical Greek epic poetry & fiction"
    },
    {
        "classNum": "884",
        "heading": "Classical Greek lyric poetry"
    },
    {
        "classNum": "885",
        "heading": "Classical Greek speeches"
    },
    {
        "classNum": "886",
        "heading": "Classical Greek letters"
    },
    {
        "classNum": "887",
        "heading": "Classical Greek humor & satire"
    },
    {
        "classNum": "888",
        "heading": "Classical Greek miscellaneous writings"
    },
    {
        "classNum": "889",
        "heading": "Modern Greek literature"
    },
    {
        "classNum": "890",
        "heading": "Literatures of other languages"
    },
    {
        "classNum": "891",
        "heading": "East Indo-European & Celtic literatures"
    },
    {
        "classNum": "892",
        "heading": "Afro-Asiatic literatures; Semitic literatures"
    },
    {
        "classNum": "893",
        "heading": "Non-Semitic Afro-Asiatic literatures"
    },
    {
        "classNum": "894",
        "heading": "Altaic, Uralic, Hyperborean & Dravidian"
    },
    {
        "classNum": "895",
        "heading": "Literatures of East & Southeast Asia"
    },
    {
        "classNum": "896",
        "heading": "African literatures"
    },
    {
        "classNum": "897",
        "heading": "North American native literatures"
    },
    {
        "classNum": "898",
        "heading": "South American native literatures"
    },
    {
        "classNum": "899",
        "heading": "Austronesian & other literatures"
    },
    {
        "classNum": "900",
        "heading": "History & geography"
    },
    {
        "classNum": "901",
        "heading": "Philosophy & theory"
    },
    {
        "classNum": "902",
        "heading": "Miscellany"
    },
    {
        "classNum": "903",
        "heading": "Dictionaries & encyclopedias"
    },
    {
        "classNum": "904",
        "heading": "Collected accounts of events"
    },
    {
        "classNum": "905",
        "heading": "Serial publications"
    },
    {
        "classNum": "906",
        "heading": "Organizations & management"
    },
    {
        "classNum": "907",
        "heading": "Education, research & related topics"
    },
    {
        "classNum": "908",
        "heading": "Kinds of persons treatment"
    },
    {
        "classNum": "909",
        "heading": "World history"
    },
    {
        "classNum": "910",
        "heading": "Geography & travel"
    },
    {
        "classNum": "911",
        "heading": "Historical geography"
    },
    {
        "classNum": "912",
        "heading": "Atlases, maps, charts & plans"
    },
    {
        "classNum": "913",
        "heading": "Geography of & travel in ancient world"
    },
    {
        "classNum": "914",
        "heading": "Geography of & travel in Europe"
    },
    {
        "classNum": "915",
        "heading": "Geography of & travel in Asia"
    },
    {
        "classNum": "916",
        "heading": "Geography of & travel in Africa"
    },
    {
        "classNum": "917",
        "heading": "Geography of & travel in North America"
    },
    {
        "classNum": "918",
        "heading": "Geography of & travel in South America"
    },
    {
        "classNum": "919",
        "heading": "Geography of & travel in other areas"
    },
    {
        "classNum": "920",
        "heading": "Biography, genealogy & insignia"
    },
    {
        "classNum": "921",
        "heading": "(Optional number)"
    },
    {
        "classNum": "922",
        "heading": "(Optional number)"
    },
    {
        "classNum": "923",
        "heading": "(Optional number)"
    },
    {
        "classNum": "924",
        "heading": "(Optional number)"
    },
    {
        "classNum": "925",
        "heading": "(Optional number)"
    },
    {
        "classNum": "926",
        "heading": "(Optional number)"
    },
    {
        "classNum": "927",
        "heading": "(Optional number)"
    },
    {
        "classNum": "928",
        "heading": "(Optional number)"
    },
    {
        "classNum": "929",
        "heading": "Genealogy, names & insignia"
    },
    {
        "classNum": "930",
        "heading": "History of ancient world to ca. 499"
    },
    {
        "classNum": "931",
        "heading": "China to 420"
    },
    {
        "classNum": "932",
        "heading": "Egypt to 640"
    },
    {
        "classNum": "933",
        "heading": "Palestine to 70"
    },
    {
        "classNum": "934",
        "heading": "India to 647"
    },
    {
        "classNum": "935",
        "heading": "Mesopotamia & Iranian Plateau to 637"
    },
    {
        "classNum": "936",
        "heading": "Europe north & west of Italy to ca. 499"
    },
    {
        "classNum": "937",
        "heading": "Italy & adjacent territories to 476"
    },
    {
        "classNum": "938",
        "heading": "Greece to 323"
    },
    {
        "classNum": "939",
        "heading": "Other parts of ancient world to ca. 640"
    },
    {
        "classNum": "940",
        "heading": "History of Europe"
    },
    {
        "classNum": "941",
        "heading": "British Isles"
    },
    {
        "classNum": "942",
        "heading": "England & Wales"
    },
    {
        "classNum": "943",
        "heading": "Central Europe; Germany"
    },
    {
        "classNum": "944",
        "heading": "France & Monaco"
    },
    {
        "classNum": "945",
        "heading": "Italian Peninsula & adjacent islands"
    },
    {
        "classNum": "946",
        "heading": "Iberian Peninsula & adjacent islands"
    },
    {
        "classNum": "947",
        "heading": "Eastern Europe; Russia"
    },
    {
        "classNum": "948",
        "heading": "Scandinavia"
    },
    {
        "classNum": "949",
        "heading": "Other parts of Europe\t"
    },
    {
        "classNum": "950",
        "heading": "History of Asia; Far East"
    },
    {
        "classNum": "951",
        "heading": "China & adjacent areas"
    },
    {
        "classNum": "952",
        "heading": "Japan"
    },
    {
        "classNum": "953",
        "heading": "Arabian Peninsula & adjacent areas"
    },
    {
        "classNum": "954",
        "heading": "South Asia; India"
    },
    {
        "classNum": "955",
        "heading": "Iran"
    },
    {
        "classNum": "956",
        "heading": "Middle East (Near East)"
    },
    {
        "classNum": "957",
        "heading": "Siberia (Asiatic Russia)"
    },
    {
        "classNum": "958",
        "heading": "Central Asia"
    },
    {
        "classNum": "959",
        "heading": "Southeast Asia"
    },
    {
        "classNum": "960",
        "heading": "History of Africa"
    },
    {
        "classNum": "961",
        "heading": "Tunisia & Libya"
    },
    {
        "classNum": "962",
        "heading": "Egypt & Sudan"
    },
    {
        "classNum": "963",
        "heading": "Ethiopia & Eritrea"
    },
    {
        "classNum": "964",
        "heading": "Northwest African coast & offshore islands"
    },
    {
        "classNum": "965",
        "heading": "Algeria"
    },
    {
        "classNum": "966",
        "heading": "West Africa & offshore islands"
    },
    {
        "classNum": "967",
        "heading": "Central Africa & offshore islands"
    },
    {
        "classNum": "968",
        "heading": "Southern Africa; Republic of South Africa"
    },
    {
        "classNum": "969",
        "heading": "South Indian Ocean islands"
    },
    {
        "classNum": "970",
        "heading": "History of North America"
    },
    {
        "classNum": "971",
        "heading": "Canada"
    },
    {
        "classNum": "972",
        "heading": "Middle America; Mexico"
    },
    {
        "classNum": "973",
        "heading": "United States"
    },
    {
        "classNum": "974",
        "heading": "Northeastern United States"
    },
    {
        "classNum": "975",
        "heading": "Southeastern United States"
    },
    {
        "classNum": "976",
        "heading": "South central United States"
    },
    {
        "classNum": "977",
        "heading": "North central United States"
    },
    {
        "classNum": "978",
        "heading": "Western United States"
    },
    {
        "classNum": "979",
        "heading": "Great Basin & Pacific Slope region"
    },
    {
        "classNum": "980",
        "heading": "History of South America"
    },
    {
        "classNum": "981",
        "heading": "Brazil"
    },
    {
        "classNum": "982",
        "heading": "Argentina"
    },
    {
        "classNum": "983",
        "heading": "Chile"
    },
    {
        "classNum": "984",
        "heading": "Bolivia"
    },
    {
        "classNum": "985",
        "heading": "Peru"
    },
    {
        "classNum": "986",
        "heading": "Colombia & Ecuador"
    },
    {
        "classNum": "987",
        "heading": "Venezuela"
    },
    {
        "classNum": "988",
        "heading": "Guiana"
    },
    {
        "classNum": "989",
        "heading": "Paraguay & Uruguay"
    },
    {
        "classNum": "990",
        "heading": "History of other areas"
    },
    {
        "classNum": "991",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "992",
        "heading": "[Unassigned]"
    },
    {
        "classNum": "993",
        "heading": "New Zealand"
    },
    {
        "classNum": "994",
        "heading": "Australia"
    },
    {
        "classNum": "995",
        "heading": "Melanesia; New Guinea"
    },
    {
        "classNum": "996",
        "heading": "Other parts of Pacific; Polynesia"
    },
    {
        "classNum": "997",
        "heading": "Atlantic Ocean islands"
    },
    {
        "classNum": "998",
        "heading": "Arctic islands & Antarctica"
    },
    {
        "classNum": "999",
        "heading": "Extraterrestrial worlds"
    }
];

const generateCutter = require("cuttersanborn");

const util = {
    firstLowerLetter(str) {
        if (!str || !str.trim())
            return "";
        return str[0].toLowerCase();
    },
}

function generateCallNumber(args) {
    let {
        author,
        biographySubject,
        title,
        classNumber,
        publishYear,
        copyNumber,
    } = args;
    let fields = [classNumber];

    let {firstname: afname, lastname: alname} = author || {};
    let suf = util.firstLowerLetter(title);
    if (biographySubject) {
        let {firstname: bfname, lastname: blname} = biographySubject || {};
        fields = fields.concat([
            generateCutter(blname, bfname) + suf,
            generateCutter(alname, afname),
        ]);
    } else if (afname && alname) {
        fields = fields.concat([
            generateCutter(alname, afname)+suf,
        ]);
    }
    if (!isNaN(+copyNumber)) {
        fields.push(`c.${copyNumber}`);
    }
    if (publishYear) {
        fields.push(publishYear);
    }

    return fields.filter(o=>o).join(" ");
}

module.exports = {
    summary: data,
    generateCallNumber,
}
