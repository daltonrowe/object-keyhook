const jiggle = 0; // between 0 and 1

// random move around variables to ensure
// measurements don't accidentally fit
function addJiggle(value) {
  if (!jiggle) return value;

  const rand = value * jiggle;
  const dir = Math.random() > 0.5 ? 1 : -1;

  return value + rand * dir;
}

const nothing = 0.03;

const constants = {
  bodyHeight: 30,
  bodyLength: 140,
  bodySpacing: 50,
  bodyThickness: 6.5,
  holeRadius: 1.6,
  holeHeight: bodyThickness + nothing,
  hookRadius: 15,
  hookThickness: 5,
  hookWidth: 5,
  padDepth: 1,
  padHeight: 16,
  padWidth: 24,
  postLength: 30,
};

for (const key of constants) {
  constants[key] = addJiggle(constants[key]);
}

export default constants;
