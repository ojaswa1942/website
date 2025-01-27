module.exports = {
  docs: [
    'home',
    'installation',
    'quickstart',
    'code-property-graph',
    'traversal-basics',
    'c-syntaxtree',
    'organizing-projects',
    'shell',
    'interpreter',
    'scan',
    'exporting',
    'server',
    'extensions',
    'common-issues',
    'glossary',
      {
        type: 'category',
        label: 'LLVM Support',
        items: [
          'llvm2cpg/hello-llvm',
          'llvm2cpg/getting-bitcode'
        ]
      },
      {
        type: 'category',
        label: 'CPGQL Reference',
        items: [
          'cpgql/reference-card',
          'cpgql/node-type-steps',
          'cpgql/filter-steps',
          'cpgql/core-steps',
          'cpgql/repeat-steps',
          'cpgql/complex-steps',
          'cpgql/control-flow-steps',
          'cpgql/data-flow-steps',
          'cpgql/execution-directives',
          'cpgql/augmentation-directives',
          'cpgql/help-directive',
          'cpgql/calls',
          'cpgql/custom-defined-steps',
        ]
      },
    'upgrade-guides',
  ],
};
