import pytest


def add(a, b):
    return a + b


def subtract(a, b):
    return a - b


def multiply(a, b):
    return a * b


def divide(a, b):
    if b == 0:
        raise ValueError('division by zero')
    return a / b


def factorial(n):
    if n < 0:
        raise ValueError('negative input')
    if n == 0:
        return 1
    return n * factorial(n - 1)


def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True


def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0


def test_subtract():
    assert subtract(5, 3) == 2
    assert subtract(0, 5) == -5


def test_multiply():
    assert multiply(3, 4) == 12
    assert multiply(0, 100) == 0


def test_divide():
    assert divide(10, 2) == 5
    with pytest.raises(ValueError, match='division by zero'):
        divide(1, 0)


def test_factorial():
    assert factorial(0) == 1
    assert factorial(5) == 120
    with pytest.raises(ValueError, match='negative input'):
        factorial(-1)


def test_is_prime():
    assert not is_prime(1)
    assert is_prime(2)
    assert is_prime(17)
