import XCTest
import SwiftTreeSitter
import TreeSitterAmp

final class TreeSitterAmpTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_amp())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading AMP grammar")
    }
}
