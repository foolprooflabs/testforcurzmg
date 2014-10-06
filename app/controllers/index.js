var Newsstand = require("ti.newsstand");
Newsstand.enableDevMode();

var issues = Alloy.Collections.issuev2;
issues.fetch();

var issue1 = Alloy.createModel("issuev2", {
    issueNo: 1,
    date: "1/1/2014",
    summary: "Some text.",
    cover: "/issues/cover_1.png"
});

var issue2 = Alloy.createModel("issuev2", {
    issueNo: 2,
    date: "1/2/2014",
    summary: "Some text.",
    cover: "/issues/cover_2.png"
});

var issue3 = Alloy.createModel("issuev2", {
    issueNo: 3,
    date: "1/3/2014",
    summary: "Some text.",
    cover: "/issues/cover_3.png"
});

issues.add(issue1);
issues.add(issue2);
issues.add(issue3);
issue1.save();
issue2.save();
issue3.save();
function viewSelect(tabbedBar) {
    var index = tabbedBar.index,
        library = $.library,
        store = $.store,
        bottomNav = $.bottomNav;

    if (index === 0) {
        library.visible = true;
        store.visible = false;
    } else {
        store.visible = true;
        library.visible = false;
    }
}

function alertModel(e){
  Ti.API.info(JSON.stringify(e.source.model));
    var modelId = e.source.model,
        model = issues.get(modelId),
        issueNumber = model.get("issueNo");

    alert(issueNumber);
}

function cleanup() {
    $.destroy();
}

$.index.open();