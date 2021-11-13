const { PI } = Math;

exports.area = (r) => PI * r * r;

exports.circumferenve = (r) => 2 * PI * r;

module.exports = function (r) {
  return {
    area() { return PI * r * r},
    circumferenve() { return 2 * PI * r}
  }
};