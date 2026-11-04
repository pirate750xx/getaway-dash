/**
 * glMatrix v3.4.3
 */
var glMatrix = {
  ARRAY_TYPE: (typeof Float32Array !== 'undefined') ? Float32Array : Array,
  RANDOM: Math.random,
  EPSILON: 0.000001,
  toRadian: function(a) { return a * Math.PI / 180; },
  setMatrixArrayType: function(type) { this.ARRAY_TYPE = type; }
};
