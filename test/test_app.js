'use strict';

var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");

beforeEach(function () {
    return helpers.run(path.join(__dirname, "../app"))
});

describe("py-struct:app", function () {
    it("builds files", function () {
        assert.file([
            "LICENSE",
            "README.rst",
            "VERSIONS.md",
            "MANIFEST.in",
            ".gitignore", ".gitattributes",
            ".pylintrc",
            "prepare_environment.sh",
            ".gitlab-ci.yml",
            "emptyproject",
            "setup.py",
            "run_test.sh", "test/test_emptyproject.py",
            "docs/Makefile", "docs/source/conf.py", "docs/source/examples.rst",
            "docs/source/index.rst", "docs/source/modules.rst", "docs/source/tutorial.rst",
            "emptyproject/__init__.py", "emptyproject/emptyproject.py",
        ]);
    });
});
