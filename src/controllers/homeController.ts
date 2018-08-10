import { Request, Response } from "express";
var path =require('path');
var email: any;

export let index = (req: Request, res: Response) => {
  res.render("page-a", {
    title: "Home",
  });
};
export let about = (req: Request, res: Response) => {
  res.render("page-b", {
    title:"About"
    
  });
};
export let basic = (req: Request, res: Response) => {
  res.render("page-c", {
    title:"message",
    randomText: req.query.text
  });
};
export let newUser = (req: Request, res: Response) => {
  res.render("form-task", {
    title:"create new User",
    email : req.query.text
  });
}