package tree_sitter_ocaml

// #cgo CFLAGS: -I../../ocaml/src -std=c11 -fPIC
// #include "../../ocaml/src/parser.c"
// #include "../../ocaml/src/scanner.c"
import "C"

import "unsafe"

// Get the tree-sitter Language for OCaml.
func OCaml() unsafe.Pointer {
	return unsafe.Pointer(C.tree_sitter_ocaml())
}
