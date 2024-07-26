/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar(require('../ocaml/grammar'), {
  name: 'ocaml_mlx',

  rules: {
    _simple_expression: ($, original) => choice(
      original,
      $.jsx_expression
    ),

    jsx_expression: $ => choice(
       $.jsx_element_self_closing,
       $._jsx_element
     ),
    _jsx_element: $ => seq(
      $.jsx_element_opening,
      repeat($._simple_expression),
      $.jsx_element_closing,
    ),

    jsx_tag: $ =>
      path($.module_path, choice($._value_name, $._module_name)),

    jsx_element_self_closing: $ =>
      seq('<', $.jsx_tag, repeat($.jsx_prop), '/>'),

    jsx_element_opening: $ =>
      seq('<', $.jsx_tag, repeat($.jsx_prop), '>'),

    jsx_element_closing: $ =>
      seq('</', $.jsx_tag, '>'),

    jsx_prop:       $ => seq($.jsx_prop_name, '=', $.jsx_prop_value),
    jsx_prop_name:  $ => seq(optional('?'), $._label_name),
    jsx_prop_value: $ => $._simple_expression,
  }
})

function path(prefix, final) {
  return choice(final, seq(prefix, '.', final))
}
