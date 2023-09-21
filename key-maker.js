import { writeFileSync } from 'fs';
import { randomBytes } from 'crypto';
try {
  writeFileSync('master-key.txt', randomBytes(96));
} catch (err) {
  console.error(err);
}
