/**
 * @file The Immortal Model Parser. Designed to parse the Archeotech (*.act) markup language, and the Bane (*.bane) Scripting Language
 * @author KLSumEd <kaisumed@gmail.com>
 * @license GPL 2.0
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "imp",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
