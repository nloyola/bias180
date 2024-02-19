const OFF = 0,
  WARN = 1,
  ERROR = 2;

module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts', 'src/app/_components/ui'],
  rules: {
    'comma-dangle': OFF,
    'simple-import-sort/imports': OFF,
    '@typescript-eslint/explicit-function-return-type': OFF
  }
};
