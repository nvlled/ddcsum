const generateCutterNumber = require("cuttersanborn");

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
            generateCutterNumber(blname, bfname) + suf,
            generateCutterNumber(alname, afname),
        ]);
    } else if (afname && alname) {
        fields = fields.concat([
            generateCutterNumber(alname, afname)+suf,
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
    data: require("./data.js"),
    generateCutterNumber,
    generateCallNumber,
}
