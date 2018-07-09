
# ddcsum

a library for generating DDC cutter numbers and call numbers,
and also a repository for ddc (3rd) summaries in different formats

# Usage and API Documentation
```
// import
const ddcsum = require("ddcsum");


// Generate cutter number
let firstname = "ronald";
let lastname  = "casili";
let cutterNum = ddcsum.generateCutterNumber(lastname, firstname)
// cutterNum == "C339"



// Generate call number
let callNumber1 = ddcsum.generateCallNumber({
    classNumber: "000",
    author: { firstname, lastname }
});
// callNumber1 == "000 C339"

let callNumber2 = ddcsum.generateCallNumber({
    classNumber: "000",
    title: "How to Fail a Software Project",
    author: { firstname, lastname }
});
// callNumber2 == "000 C339h"

let callNumber3 = ddcsum.generateCallNumber({
    classNumber: "000",
    title: "How to Fail a Software Project",
    publishYear: 2019,
    author: { firstname, lastname }
});
// callNumber3 == "000 C339h 2019"

let callNumber4 = ddcsum.generateCallNumber({
    classNumber: "000",
    title: "How to Fail a Software Project",
    author: { firstname, lastname }
    publishYear: 2019,
    copyNumber: 5,
});
// callNumber4 == "000 C339h c.5 2019"

```


# References
http://library.mtsu.edu/dewey/

https://www.oclc.org/en/dewey/features/summaries.html



