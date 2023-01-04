import {body} from "express-validator";

export const loginValidator = [
    body("email","incorrect email format").isEmail(),
    body("password","The password must contain at least 5 characters.").isLength({min: 5}),

];
export const registerValidator = [
    body("email","incorrect email format").isEmail(),
    body("password","The password must contain at least 5 characters.").isLength({min: 5}),
    body("fullName","The fullName must contain at least 3 characters.").isLength({min: 3}),
    body("avatarUrl","wrong avatar link").optional().isURL(),
];
export const postCreateValidator = [
    body("title","Enter article title").isLength({min:3}).isString(),
    body("text","Enter the text of the article").isLength({min: 10}).isString(),
    body("tags","invalid text format specify array").optional().isString(),
    body(" likes","Enter likes").optional().isString(),
    body("imgUrl","invalid image link").optional().isString(),


];