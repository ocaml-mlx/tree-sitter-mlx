/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

import ocaml from '../ocaml/grammar.js';

export default grammar(ocaml, {
  name: 'ocaml_mlx',

  rules: {
    _simple_expression: ($, original) => choice(
      original,
      $.jsx_expression,
    ),

    jsx_expression: $ => choice(
      $.jsx_element_self_closing,
      $._jsx_element,
    ),
    _jsx_element: $ => seq(
      $.jsx_element_opening,
      choice(
        repeat($._simple_expression),
        $.jsx_children_spread,
      ),
      $.jsx_element_closing,
    ),

    jsx_children_spread: $ => seq('...', $._simple_expression),

    jsx_tag: $ =>
      path($.module_path, choice($._value_name, $._module_name)),

    jsx_element_self_closing: $ =>
      seq('<', $.jsx_tag, repeat($.jsx_prop), '/>'),

    jsx_element_opening: $ =>
      seq('<', $.jsx_tag, repeat($.jsx_prop), '>'),

    jsx_element_closing: $ =>
      seq('</', $.jsx_tag, '>'),

    jsx_prop: $ => seq($.jsx_prop_name, optional(seq('=', $.jsx_prop_value))),
    jsx_prop_name: $ => seq(optional('?'), $._label_name),
    jsx_prop_value: $ => $._simple_expression,
  },
});

/**
 * @param {RuleOrLiteral} prefix
 * @param {RuleOrLiteral} final
 */
function path(prefix, final) {
  return choice(final, seq(prefix, '.', final));
}
