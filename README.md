# Py-struct

[![Project Status](http://www.repostatus.org/badges/latest/active.svg)](http://www.repostatus.org/#active)
[![travis](https://travis-ci.org/cristian-rincon/py-struct.svg?branch=master)](https://travis-ci.org/cristian-rincon/py-struct)
[![appveyor](https://ci.appveyor.com/api/projects/status/6kpnkmlva9hio2hc?svg=true)](https://ci.appveyor.com/project/cristian-rincon/py-struct)
[![codecov](https://codecov.io/gh/cristian-rincon/py-struct/branch/master/graph/badge.svg)](https://codecov.io/gh/cristian-rincon/py-struct)
[![npm version](https://badge.fury.io/js/generator-py-struct.svg)](https://badge.fury.io/js/generator-py-struct)
[![npm download](https://img.shields.io/npm/dt/@cristian-rincon/py-struct.svg)](https://www.npmjs.com/package/@cristian-rincon/py-struct)



## Introduction

`py-struct` is a yeoman-generator for `Python` projects using `setuptools`. Projects created with `py-struct` are ready for publication to `pypi` and `conda`. The generator creates a package barebone that support:

* a standard `setup.py`, `MANIFEST.in`.
* project automationg `tox`.
* static code analysis and reports using `pylint`.
* a unit-test suite using `pytest/unittest`,
* `build.sh` for `conda` packages,
* documentation with `readthedocs.io` and `sphinx`,
* custom README.md, and VERSIONS.md files,
* `.gitignore`, `.gitattributes`, `coveragerc`,


The resulting folder-structure looks like this:

```sh
  .
  ├── build.sh
  ├── credentials.json
  ├── docs
  │   ├── Makefile
  │   └── source
  │       ├── conf.py
  │       ├── examples.rst
  │       ├── index.rst
  │       ├── modules.rst
  │       └── tutorial.rst
  ├── emptyproject.py
  ├── gitattributes
  ├── gitignore
  ├── __init__.py
  ├── LICENSE
  ├── MANIFEST.in
  ├── prepare_environment.sh
  ├── pylintrc
  ├── README.rst
  ├── run_test.sh
  ├── setup.py
  ├── test.py
  ├── tree
  └── VERSIONS.md

```

## Installation

Yeoman comes with [```npm```](https://nodejs.org/en/download/current/), so install it first and then call:

```sh
  npm install -g yo
  npm install -g generator-py-struct
```

Once you have the package, you can create a scaffold using:

```sh
  yo py-struct
```

This builds the skeleton. Afterwards modify the sources and documentation and build both using:

```sh
  ./prepare_environment.sh
  cd docs && make html
```

## Author

* Cristian Rincón <a href="mailto:cristian.o.rincon.b@gmail.com">cristian.o.rincon.b@gmail.com</a>
