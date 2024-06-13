import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.string().required(),
    PORT: Joi.number().default(3000),
    DEFAULT_LIMIT: Joi.number().default(10),
    // NODE_ENV: Joi.string().valid('dev', 'prod', 'test').default('dev')
});