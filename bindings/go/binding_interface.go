package tree_sitter_ocaml

// #cgo CFLAGS: -I../../ocaml/src -std=c11 -fPIC
// #include "../../ocaml_interface/src/parser.c"
// #include "../../ocaml_interface/src/scanner.c"
import "C"

import "unsafe"

// Get the tree-sitter Language for OCaml interfaces.
func OCamlInterface() unsafe.Pointer {
	return unsafe.Pointer(C.tree_sitter_ocaml_interface())
}
