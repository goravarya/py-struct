# <%= projectID %>: <%= desc %>
#
# Copyright (C) <%= user %>
#
# This file is part of <%= projectID %>.
#
# @author = '<%= user %>'
# @email = '<%= email %>'


import pytest
import unittest

class Test(unittest.TestCase):
    def setUp(self):
        self.a = 1

    def test_me(self):
        b = 1
        assert b == self.a
