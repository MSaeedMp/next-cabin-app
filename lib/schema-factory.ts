import {
  reservationSchema,
  reviewSchema,
  signInSchema,
  signUpSchema,
  updateProfileSchema,
} from "./schemas";

// Add other schemas here
const schemas = {
  signInSchema,
  signUpSchema,
  updateProfileSchema,
  reservationSchema,
  reviewSchema,
  // Add other schemas like `userSchema` here
};

export type SchemaKeys = keyof typeof schemas;

// Factory function
const schemaFactory = (name: SchemaKeys) => {
  return schemas[name];
};

export default schemaFactory;
