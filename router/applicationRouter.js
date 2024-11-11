import { Router } from "express";
import { s, s1, s2, s3, s4 } from '../controller/applicationController.js';
const rt = Router();
rt.post("/apply", s);
rt.get("/dashboard", s1);
rt.get("/dashboard/:id", s4);
rt.put("/dashboard/:id", s3);
rt.delete("/dashboard/:id", s2);
export default rt; s