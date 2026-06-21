# unit-tests-playground

Minimal math functions tested with four different unit test runners. Used by HelpMeTest terminal VM regression tests to verify that globally-installed test runners work on a cloned repo without `npm install`.

| File | Runner | Command |
|---|---|---|
| `math.test.js` | Jest | `jest --no-coverage` |
| `math.vitest.js` | Vitest | `vitest run` |
| `math.mocha.js` | Mocha | `mocha math.mocha.js` |
| `test_math.py` | Pytest | `pytest test_math.py -v` |

All four suites test the same six functions: `add`, `subtract`, `multiply`, `divide`, `factorial`, `isPrime`.
