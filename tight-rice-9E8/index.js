
let seed = Date.now();
let ctr = 0;

function setSeed(s) {
  seed = s;
}

function pick(n) {
  ctr++;
  let index = random() >> 8; // high byte
  index &= n;
  index += ctr;

  return index % n;
}

function random() {
  const value = generate(seed);
  seed = value;
  return value;
}

function generate(value) {
  return ((((value >> 9) & 1) ^ ((value >> 1) & 1)) << 15) | (value >> 1);
}

export default pick;
