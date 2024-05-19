fn main() {
    let root_dir = std::path::Path::new(".");
    let ocaml_dir = root_dir.join("ocaml").join("src");
    let interface_dir = root_dir.join("ocaml_interface").join("src");
    let type_dir = root_dir.join("ocaml_type").join("src");
    let common_dir = root_dir.join("common");

    let mut c_config = cc::Build::new();
    c_config.std("c11").include(&ocaml_dir);

    for dir in &[ocaml_dir, interface_dir, type_dir] {
        let parser_path = dir.join("parser.c");
        let scanner_path = dir.join("scanner.c");
        c_config.file(&parser_path);
        c_config.file(&scanner_path);
        println!("cargo:rerun-if-changed={}", parser_path.to_str().unwrap());
        println!("cargo:rerun-if-changed={}", scanner_path.to_str().unwrap());
    }

    println!(
        "cargo:rerun-if-changed={}",
        common_dir.join("scanner.h").to_str().unwrap()
    );

    c_config.compile("tree-sitter-ocaml");
}
