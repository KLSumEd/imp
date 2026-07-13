package tree_sitter_amp_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_amp "github.com/klsumed/imp/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_amp.Language())
	if language == nil {
		t.Errorf("Error loading AMP grammar")
	}
}
