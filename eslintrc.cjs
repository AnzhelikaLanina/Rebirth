module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', 'build'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', 'react-refresh', 'simple-import-sort'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'prettier/prettier': 'warn',
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': 'warn',
        'react-refresh/only-export-components': 'off',
        'no-unused-vars': 'warn',
        'no-console': 'warn',
    },
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            rules: {
                'simple-import-sort/imports': [
                    'warn',
                    {
                        groups: [
                            ['^react', '^@?\\w'],
                            ['^(@|components)(/.*|$)'],
                            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                            ['^\\u0000'],
                            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                            ['^.+\\.?(css)$'],
                        ],
                    },
                ],
            },
        },
    ],
};
