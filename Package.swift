// swift-tools-version:5.3
import PackageDescription

let excludes = [
    "Cargo.toml",
    "Makefile",
    "binding.gyp",
    "bindings/go",
    "bindings/node",
    "bindings/python",
    "bindings/rust",
    "common/common.mak",
    "common/index.js",
    "package.json",
    "package-lock.json",
    "pyproject.toml",
    "setup.py",
    "test",
    ".editorconfig",
    ".github",
    ".gitignore",
    ".gitattributes",
]

let package = Package(
    name: "TreeSitterOCaml",
    products: [
        .library(name: "TreeSitterOCaml", targets: ["TreeSitterOCaml", "TreeSitterOCamlInterface", "TreeSitterOCamlType"]),
    ],
    dependencies: [],
    targets: [
        .target(
            name: "TreeSitterOCaml",
            path: ".",
            exclude: excludes + [
                "bindings/swift/TreeSitterOCamlInterface",
                "bindings/swift/TreeSitterOCamlType",
                "ocaml/Makefile",
                "ocaml/grammar.js",
                "ocaml_interface",
                "ocaml_type",
            ],
            sources: [
                "ocaml/src/parser.c",
                "ocaml/src/scanner.c",
            ],
            resources: [
                .copy("queries")
            ],
            publicHeadersPath: "bindings/swift",
            cSettings: [.headerSearchPath("ocaml/src")]
        )
        .target(
            name: "TreeSitterOCamlInterface",
            path: ".",
            exclude: excludes + [
                "bindings/swift/TreeSitterOCaml",
                "bindings/swift/TreeSitterOCamlType",
                "ocaml_interface/Makefile",
                "ocaml_interface/grammar.js",
                "ocaml",
                "ocaml_type",
            ],
            sources: [
                "ocaml_interface/src/parser.c",
                "ocaml_interface/src/scanner.c",
            ],
            publicHeadersPath: "bindings/swift",
            cSettings: [.headerSearchPath("ocaml_interface/src")]
        )
        .target(
            name: "TreeSitterOCamlType",
            path: ".",
            exclude: excludes + [
                "bindings/swift/TreeSitterOCaml",
                "bindings/swift/TreeSitterOCamlInterface",
                "ocaml_type/Makefile",
                "ocaml_type/grammar.js",
                "ocaml",
                "ocaml_interface",
            ],
            sources: [
                "ocaml_type/src/parser.c",
                "ocaml_type/src/scanner.c",
            ],
            publicHeadersPath: "bindings/swift",
            cSettings: [.headerSearchPath("ocaml_type/src")]
        )
    ],
    cLanguageStandard: .c11
)
