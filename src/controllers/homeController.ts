import { Request, Response } from "express";
var path =require('path');

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
export let form = (req: Request, res: Response) => {
  res.render("form", {
    title:"Create new User",
    randomText: req.query.text
  });
};
export let newTask = (req: Request, res: Response) => {
  res.render("form", {
    title:"create new task",
    randomText: req.query.text
  });
}