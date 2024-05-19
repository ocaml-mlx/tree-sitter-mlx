all install uninstall clean:
	$(MAKE) -C ocaml $@
	$(MAKE) -C ocaml_interface $@
	$(MAKE) -C ocaml_type $@

test:
	$(TS) test
	$(TS) parse examples/* --quiet --time

.PHONY: all install uninstall clean test update
