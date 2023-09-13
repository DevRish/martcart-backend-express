import { NextFunction, Request, Response } from "express";

interface IValidationError {
    location: string,
    field: string,
    error: string,
};

// generates and returns a middleware
export const checkField = (location: string, name: string) => {
    const fieldLocation = location;
    const fieldName = name;
    // eslint-disable-next-line @typescript-eslint/ban-types
    const validationChain: Function[] = []; // Function type is not recommended, but using it still as no proper structure came in mind
    const errors: IValidationError[] = [];

    const middleware = (req: Request, res: Response, next: NextFunction) => {
        if(req[fieldLocation][fieldName]) {
            for(const validationFunction of validationChain) {
                validationFunction(req[fieldLocation][fieldName]);
                // if errors encountered, validationFunction will store them in errors array
            }
        }
        if((!req[fieldLocation][fieldName]) || (errors.length>0)) {
            // if field isn't there or there are errors, return response and stop(dont proceed to next middlewares)
            res.status(400).json({ errors: errors }); // 400 = Bad Request
            return;
        }
        next();
    };

    return Object.assign(middleware, fieldName, fieldLocation, validationChain, errors);
};

export function isEmal() { // didn't make it arrow function as that may mess up the "this" keyword, we need "this" to be the object on which isEmail is called
    const fieldLocation = this.fieldLocation;
    const fieldName = this.fieldName;
    const errors: IValidationError[] = this.errors;
    const emailChecker = (s: string) => {
        // regex for email
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(s).toLowerCase())) {
            errors.push({ location: fieldLocation, field: fieldName, error: "Invalid Email Format" });
        }
    };
    this.validationChain.push(emailChecker);
    return this; // MANDATORY, for Method Chaining !!
};