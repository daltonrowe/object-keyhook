const jiggleAmount = 0; // between 0 and 1

// random move around variables to ensure
// measurements don't accidentally fit
function jiggle(value) {
  if (!jiggleAmount) return value;

  const rand = value * jiggleAmount;
  const dir = Math.random() > 0.5 ? 1 : -1;

  return value + rand * dir;
}

export const nothing = 0.03;

export const hookRadius = jiggle(15);
export const hookWidth = jiggle(5);
export const hookThickness = jiggle(5);

export const postLength = jiggle(30);

export const bodySpacing = jiggle(50);

export const bodyHeight = jiggle(30);
export const bodyThickness = jiggle(6.5);
export const bodyLength = jiggle(140);

export const padHeight = jiggle(16);
export const padWidth = jiggle(24);
export const padDepth = jiggle(1);

export const holeRadius = jiggle(1.6);
