var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var result = {
    title: "A guide to @@start@@Ember@@end@@.js",
    url: "/a-guide-to-ember",
    description: "The framework @@start@@Ember@@end@@.js in a nutshell"
};
var markup = highlight(__makeTemplateObject(["<li>", "</li>"], ["<li>", "</li>"]), result.title);
console.log(markup);
function highlight(strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var str = ""; // The result string
    strings.forEach(function (templ, i) {
        var _a, _b;
        // Fetch the expression from the same position
        // or assign an empty string
        var expr = (_b = (_a = values[i]) === null || _a === void 0 ? void 0 : _a.replace("@@start@@", "<em>").replace("@@end@@", "</em>")) !== null && _b !== void 0 ? _b : "";
        // Merge template and expression
        str += templ + expr;
    });
    return str;
}
