import {body} from "express-validator";

 export const registerValidator = [
    body("email","incorrect email format").isEmail(),
    body("password","The password must contain at least 5 characters.").isLength({min: 5}),
    body("fullName","The fullName must contain at least 3 characters.").isLength({min: 3}),
    body("avatarUrl","wrong avatar link").optional().isURL(),
];