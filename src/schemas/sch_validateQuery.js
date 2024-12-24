
import { z } from 'zod';

const QueryValidationSchema = z.object({
    query: z.string(),
    isValid: z.boolean(),
});

import { zodToJsonSchema } from 'zod-to-json-schema';
const jsonSchema = zodToJsonSchema(QueryValidationSchema);

export {jsonSchema, QueryValidationSchema};
