{
  "targets": [
    {
      "target_name": "tree_sitter_ocaml_binding",
      "dependencies": [
        "<!(node -p \"require('node-addon-api').targets\"):node_addon_api_except",
      ],
      "include_dirs": [
        "ocaml/src"
      ],
      "sources": [
        "bindings/node/binding.cc",
        "ocaml/src/parser.c",
        "ocaml/src/scanner.c",
        "ocaml_interface/src/parser.c",
        "ocaml_interface/src/scanner.c",
        "ocaml_type/src/parser.c",
        "ocaml_type/src/scanner.c",
      ],
      "cflags_c": [
        "-std=c11",
      ]
    },
  ]
}
