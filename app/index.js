"use strict";

const Generator = require("yeoman-generator");
// var chalk = require("chalk");
const yosay = require("yosay");
const superb = require("superb");
// var mkdirp = require("mkdirp");
const _s = require("underscore.string");
const _ = require("lodash");

const GeneratorUtils = require("./src/GeneratorUtils");

module.exports = class extends Generator {
    prompting() {

        this.log(yosay(
            "Welcome to " + superb() + " MarketplaceAdapter!\n" +
            "I'll walk you through the installation."
        ));

        this.config.set(this.args = {projectID: 'YahooJP'});
        this.clientDir = `${_s.slugify(this.args.projectID)}`;
        // return this.prompt(GeneratorUtils.getPrompts()).then((answers) => {
        //     this.log(answers);
        //     this.args = answers;
        //     this.config.set(this.args);
        //     this.clientDir = `${_s.slugify(this.args.projectID)}`;
        //     console.log(this.answers);
        // });
    }

    _copyClient() {
        const clientFileName = `${this.args.projectID.toLowerCase()}_client.py`;
        this.fs.copyTpl(
            this.templatePath("client/client.py"),
            this.destinationPath(`${this.clientDir}/${clientFileName}`), {
                projectID: this.args.projectID,
                clientDir: this.clientDir
            });
    }

    _copyFiles(files) {
        files.forEach((fileName) => {
            this.fs.copy(
                this.templatePath(fileName),
                this.destinationPath(fileName));
        });
    }

    writing() {
        this._copyFiles([
            "requirements.txt",
            "test-requirements.txt",
            "buildspec.yml",
            ".gitignore",
            "template.yml"
        ]);
        this._copyClient();
        return;

        this.fs.copyTpl(
            this.templatePath("docs/Makefile"),
            this.destinationPath("docs/Makefile"), {
                projectID: this.args.projectID
            });

        var conff = ["conf.py", "examples.rst", "index.rst", "modules.rst", "tutorial.rst"]
        for (var i in conff) {
            this.fs.copyTpl(
                this.templatePath("docs/source/" + conff[i]),
                this.destinationPath("docs/source/" + conff[i]), {
                    projectID: this.args.projectID,
                    desc: this.args.desc,
                    email: this.args.email,
                    user: this.args.user
                });
        }

        var fls = [`__init__.py`, `emptyproject.py`]
        for (var i in fls)
        {
            this.fs.copyTpl(
                this.templatePath(fls[i]),
                this.destinationPath(this.args.projectID + "/" + fls[i]), {
                    projectID: this.args.projectID,
                    desc: this.args.desc,
                    email: this.args.email,
                    user: this.args.user
                });
        }

        this.fs.copyTpl(
            this.templatePath("test.py"),
            this.destinationPath(`test/test_${this.args.projectID}.py`), {
                projectID: this.args.projectID,
                desc: this.args.desc,
                email: this.args.email,
                user: this.args.user
            });
        /* Copy credentials.json */
        this.fs.copyTpl(
            this.templatePath(this.args.credentials),
            this.destinationPath("auth/credentials.json"),{
                projectID: this.args.projectID, 
            });

        var els = ["README.rst","setup.py","VERSIONS.md"]
        for (i in els)
        {
          this.fs.copyTpl(
              this.templatePath(els[i]),
              this.destinationPath(els[i]), {
                projectID: this.args.projectID,
                gituser: this.args.gituser,
                desc: this.args.desc,
                email: this.args.email,
                user: this.args.user
              });
        }


        var cops = [
            "prepare_environment.sh",
            "LICENSE", "MANIFEST.in", 
            "run_test.sh",".gitlab-ci.yml"
        ];

        for (var i in cops)
        {
            this.fs.copy(
                this.templatePath(cops[i]),
                this.destinationPath(cops[i]));
        }

        var hcops = [
            "gitignore",
            "gitattributes", "pylintrc"
        ];

        for (var i in hcops)
        {
            this.fs.copy(
                this.templatePath(hcops[i]),
                this.destinationPath("." + hcops[i]));
        }
    }

    end() {
        //this.config.save();
        this.log(yosay("Generated the default adapter. Enjoy!!"));
    }
};
