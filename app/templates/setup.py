from setuptools import setup

def readme():
    with open('README.rst') as f:
        return f.read()

setup(
    name='<%= projectID %>',
    version='1.0.0',
    description='<%= desc %>',
    long_description=readme(),
    url='https://github.com/<%= gituser %>/<%= projectID %>',
    download_url='https://github.com/<%= gituser %>/<%= projectID %>/tarball/1.0.0',
    author='<%= user %>',
    author_email='<%= email %>',
    keywords=['?'],
    packages=['<%= projectID %>'],
    install_requires=[
         'pytest>=2.9.2',
         'sphinx>=1.4.5',
         'gcsfs>=0.3.1', 
         'tqdm>=4.36.1',
         'pytest-cov>=2.8.1',
         'coverage>=4.5.4',

    ],
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.1',
        'Programming Language :: Python :: 3.2',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6'
    ]
)
