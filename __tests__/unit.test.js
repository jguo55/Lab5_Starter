// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('basic phone number', () => {
    expect(isPhoneNumber("669-241-3880")).toBe(true);
});

test('parentheses phone number', () => {
    expect(isPhoneNumber("(669) 241-3880")).toBe(true);
});

test('wrong digits phone number', () => {
    expect(isPhoneNumber("(669) 241-380")).toBe(false);
});

test('wrong format phone number', () => {
    expect(isPhoneNumber("241 - (992) 3921")).toBe(false);
});

test('basic email', () => {
    expect(isEmail("a@a.com")).toBe(true);
});

test('long email', () => {
    expect(isEmail("a3adfsadf@aasdfasdfasfas.co")).toBe(true);
});

test('2 @ email', () => {
    expect(isEmail("a@3adfsadf@aasdfasdfasfas.co")).toBe(false);
});

test('no @ email', () => {
    expect(isEmail("a3adfsadfasdfasdfasfas.co")).toBe(false);
});

test('basic strong password', () => {
    expect(isStrongPassword("a3adfsfasadco")).toBe(true);
});

test('underscore strong password', () => {
    expect(isStrongPassword("a3adfsfas_co")).toBe(true);
});

test('too short strong password', () => {
    expect(isStrongPassword("af_")).toBe(false);
});

test('too long strong password', () => {
    expect(isStrongPassword("asdfasdfasdfadsfaf_")).toBe(false);
});

test('basic date', () => {
    expect(isDate("5/4/2026")).toBe(true);
});

test('basic date 2', () => {
    expect(isDate("10/20/2026")).toBe(true);
});

test('wrong shorthand date', () => {
    expect(isDate("12/20/26")).toBe(false);
});

test('too long date', () => {
    expect(isDate("12/203/2026")).toBe(false);
});

test('basic hex code', () => {
    expect(isHexColor("#CCAA88")).toBe(true);
});

test('white hex code', () => {
    expect(isHexColor("#FFFFFF")).toBe(true);
});

test('wrong length hex code', () => {
    expect(isHexColor("#FFFFF8F")).toBe(false);
});

test('invalid hex code', () => {
    expect(isHexColor("G8FF8F")).toBe(false);
});