# Notes

- Using laravel Mix for compiling assets
- `build` : For assets generation
- `assets` : CSS / JS logics
- `webpack.mix.js` - Consist of assets generation structure
- `package.json` - Packages used for assets compilation & generation

# Usage

- `npm install` - Installing packages
- `npm run dev` - Generating assets in *dev* mode
- `npm run prod` - Generating assets in *prod* mode - (compact & unreadable)

# Github Action

- https://crontab.guru/every-1-hour (CRON time)
- https://github.com/actions (Git actions)

```
name: Integration CI

on:
  push:
    branches: [ master ]
  schedule:
    - cron: "0 * * * *" # Every hour

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: GA - Initialize the proccess
      uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: "17"
        cache: 'npm'
    - run: npm i
    - run: npm run dev

  unit-test:
    runs-on: ubuntu-latest
    steps:
    - name: GA - Initialize the proccess
      uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: "17"
        cache: 'npm'
    - run: npm i
    - run: npm run test

  cron-job:
    runs-on: ubuntu-latest
    steps:
    - name: Run a one-line script
      run: |-
        timestamp=$(date -u)
        echo Hello FADILXCODER @ ${timestamp} || exit 0
```
