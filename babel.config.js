module.exports = function babelConfig(api) {
  api.cache.forever();
  return {
    babelrcRoots: [
      '.',
      './packages/*',
    ],
    presets: [
      [
        '@babel/env',
        {
          modules: false,
          useBuiltIns: 'usage',
          targets: {
            browsers: ['> 1%'],
          },
        },
      ],
      '@babel/typescript',
      '@babel/react',
    ],
  };
};
