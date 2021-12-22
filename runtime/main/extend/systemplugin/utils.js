export function hasComplete(...args) {
  if (args[0] === undefined) {
    return;
  }
  args[0].call(this);
}

export function getRandomArbitrary(min, max) {
  return Math.random().toFixed(6) * (max - min) + min;
}

export const paramMock = {
  businessErrorMock: null,
  paramNumberMock: '[PC Preview] unknow number',
  paramStringMock: '[PC Preview] unknow string',
  paramBooleanMock: '[PC Preview] unknow boolean',
  paramObjectMock: '[PC Preview] unknow object',
  paramArrayMock: '[PC Preview] unknow Array'
};
