package tree_sitter_ocaml

// #cgo CFLAGS: -I../../grammars/mlx/src -std=c11 -fPIC
// #include "../../grammars/mlx/src/parser.c"
// #include "../../grammars/mlx/src/scanner.c"
import "C"

import "unsafe"

// Get the tree-sitter Language for OCaml with JSX (mlx).
func LanguageOCamlMlx() unsafe.Pointer {
	return unsafe.Pointer(C.tree_sitter_ocaml_mlx())
}
