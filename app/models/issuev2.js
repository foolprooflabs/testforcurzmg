exports.definition = {
config: {
    columns: {
        "issueNo": "number",
        "date": "string",
        "summary": "string",
        "cover": "string"
    },
    adapter: {
        type: "sql",
        collection_name: "issuev2"
    }
},
extendModel: function(Model) {
    _.extend(Model.prototype, {
        // extended functions and properties go here
    });

    return Model;
},
extendCollection: function(Collection) {
    _.extend(Collection.prototype, {
        // extended functions and properties go here
    });

    return Collection;
}
};