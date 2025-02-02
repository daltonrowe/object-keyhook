const jiggle = 0; // between 0 and 1

// random move around variables to ensure
// measurements don't accidentally fit
function constant(value) {
  if (!jiggle) return value;

  const rand = value * jiggle;
  const dir = Math.random() > 0.5 ? 1 : -1;

  return value + rand * dir;
}

export const nothing = 0.03;

export const hookRadius = constant(15);
export const hookWidth = constant(5);
export const hookThickness = constant(5);

export const postLength = constant(30);

export const bodySpacing = constant(50);

export const bodyHeight = constant(30);
export const bodyThickness = constant(6.5);
export const bodyLength = constant(140);

export const padHeight = constant(16);
export const padWidth = constant(24);
export const padDepth = constant(1);

export const holeRadius = constant(1.6);
export const holeHeight = constant(bodyThickness + nothing);
