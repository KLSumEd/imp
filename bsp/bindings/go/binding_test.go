package tree_sitter_bsp_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_bsp "github.com/klsumed/imp/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_bsp.Language())
	if language == nil {
		t.Errorf("Error loading BSP grammar")
	}
}
