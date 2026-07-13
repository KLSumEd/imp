/**
 * @file The Bane Script Parser. Designed to parse the Bane (*.bane) Scripting Language.
 * @author Kai Sumner-Edwards <kaisumed@gmail.com>
 * @license GPL 2.0
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "bsp",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
