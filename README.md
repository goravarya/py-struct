# Py-struct

[![Project Status](http://www.repostatus.org/badges/latest/inactive.svg)](http://www.repostatus.org/#inactive)
[![travis](https://travis-ci.org/cristian-rincon/py-struct.svg?branch=master)](https://travis-ci.org/cristian-rincon/py-struct)
[![appveyor](https://ci.appveyor.com/api/projects/status/6kpnkmlva9hio2hc?svg=true)](https://ci.appveyor.com/project/cristian-rincon/py-struct)
[![codecov](https://codecov.io/gh/cristian-rincon/py-struct/branch/master/graph/badge.svg)](https://codecov.io/gh/cristian-rincon/py-struct)
[![npm version](https://badge.fury.io/js/generator-python-bones.svg)](https://www.npmjs.com/package/generator-py-struct)
[![npm download](https://img.shields.io/npm/dt/@cristian-rincon/py-struct.svg)](https://www.npmjs.com/package/@cristian-rincon/py-struct)



## Introduction

`py-struct` is a yeoman-generator for `Python`-projects using `setuptools`. Projects created with `py-struct` are ready for publication to `pypi` and `conda`. The generator creates a package barebone that support:

* a standard `setup.py`, `setup.cfg`, `MANIFEST.in`,
* project automationg `tox`,
* static code analysis and reports using `pylint`, `flake8` and `bandit`,
* a unit-test suite using `pytest/unittest`,
* `build.sh`, `bld.dat` and `meta.yaml` for `conda` packages,
* documentation with `readthedocs.io` and `sphinx`,
* badges for the *project status*, *build status* using Travis CI and *code coverage* using Codecov,
* custom README.md, TODO.md and VERSIONS.md files,
* `.gitignore`, `.gitattributes`, `.travis.yml`, `coveragerc`,
* a GPL3 license.

The resulting folder-structure looks like this:

```sh
   |____.bandit.yml
   |____.codecov.yml
   |____.coveragerc
   |____.gitattributes
   |____.gitignore
   |____.pylintrc
   |____.travis.yml
   |____.yo-rc.json
   |____LICENSE
   |____MANIFEST.in
   |____README.rst
   |____TODO.md
   |____VERSIONS.md
   |____bld.dat
   |____build.sh
   |____docs
   | |____Makefile
   | |____source
   | | |____conf.py
   | | |____index.rst
   | | |____examples.rst
   | | |____modules.rst
   | | |____tutorial.rst
   |____emptyproject
   | |______init__.py
   |____install.sh
   |____meta.yaml
   |____requirements.txt
   |____setup.cfg
   |____setup.py
   |____tests
   | |____test_me.py
   | |____emptyproject.py
   |____test.sh
   |____tox.ini
```

## Installation

Yeoman comes with [```npm```](https://nodejs.org/en/download/current/), so install it first and then call:

```sh
  npm install -g yo
  npm install -g generator-@cristian-rincon/py-struct
```

Once you have the package, you can create a scaffold using:

```sh
  yo py-struct
```

This builds the skeleton. Afterwards modify the sources and documentation and build both using:

```sh
  pipenv install && pipenv install --dev .
  cd docs && make html
```

## Author

* Cristian Rincón <a href="mailto:cristian.o.rincon.b@gmail.com">cristian.o.rincon.b@gmail.com</a>
