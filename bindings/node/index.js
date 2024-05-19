const root = require("path").join(__dirname, "..", "..");

module.exports = require("node-gyp-build")(root);

try {
  module.exports.ocaml.nodeTypeInfo = require("../../ocaml/src/node-types.json");
  module.exports.interface.nodeTypeInfo = require("../../ocaml_interface/src/node-types.json");
  module.exports.type.nodeTypeInfo = require("../../ocaml_type/src/node-types.json");
} catch (_) {}
