import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

//get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  //res.statusCode = 404;

  //console.log(req.url);
  //console.log(req.method);
  try {
    //check if it is get request
    if (req.method === "GET") {
      let filePath;

      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/billing") {
        filePath = path.join(__dirname, "public", "billing.html");
      } else if (req.url === "/head") {
        filePath = path.join(__dirname, "public", "d1-head.html");
      } else if (req.url === "/manager") {
        filePath = path.join(__dirname, "public", "d2-manager.html");
      } else if (req.url === "/cashier") {
        filePath = path.join(__dirname, "public", "d3-cashier.html");
      } else if (req.url === "/desserts1") {
        filePath = path.join(__dirname, "public", "desserts1.html");
      } else if (req.url === "/desserts2") {
        filePath = path.join(__dirname, "public", "desserts2.html");
      } else if (req.url === "/drinks1") {
        filePath = path.join(__dirname, "public", "drinks1.html");
      } else if (req.url === "/drinks2") {
        filePath = path.join(__dirname, "public", "drinks2.html");
      } else if (req.url === "/drinks3") {
        filePath = path.join(__dirname, "public", "drinks3.html");
      } else if (req.url === "/groceries") {
        filePath = path.join(__dirname, "public", "groceries.html");
      } else if (req.url === "/inventory-form") {
        filePath = path.join(__dirname, "public", "inventory-form.html");
      } else if (req.url === "/inventory") {
        filePath = path.join(__dirname, "public", "inventory.html");
      } else if (req.url === "/machines") {
        filePath = path.join(__dirname, "public", "machines.html");
      } else if (req.url === "/main-course1") {
        filePath = path.join(__dirname, "public", "main-course1.html");
      } else if (req.url === "/main-course2") {
        filePath = path.join(__dirname, "public", "main-course2.html");
      } else if (req.url === "/main-course3") {
        filePath = path.join(__dirname, "public", "main-course3.html");
      } else if (req.url === "/main-course4") {
        filePath = path.join(__dirname, "public", "main-course4.html");
      } else if (req.url === "/order-index") {
        filePath = path.join(__dirname, "public", "order-index.html");
      } else if (req.url === "/other-items") {
        filePath = path.join(__dirname, "public", "other-items.html");
      } else if (req.url === "/payment") {
        filePath = path.join(__dirname, "public", "payment.html");
      } else if (req.url === "/report-selling") {
        filePath = path.join(__dirname, "public", "report-selling.html");
      } else if (req.url === "/reviews-form") {
        filePath = path.join(__dirname, "public", "reviews-form.html");
      } else if (req.url === "/reviews") {
        filePath = path.join(__dirname, "public", "reviews.html");
      } else if (req.url === "/staff") {
        filePath = path.join(__dirname, "public", "staff.html");
      } else if (req.url === "/starter1") {
        filePath = path.join(__dirname, "public", "starter1.html");
      } else if (req.url === "/starter2") {
        filePath = path.join(__dirname, "public", "starter2.html");
      } else if (req.url === "/starter3") {
        filePath = path.join(__dirname, "public", "starter3.html");
      } else if (req.url === "/table-booking") {
        filePath = path.join(__dirname, "public", "table-booking.html");
      } else if (req.url === "/utensiles") {
        filePath = path.join(__dirname, "public", "utensiles.html");
      } else if (req.url === "/veggies") {
        filePath = path.join(__dirname, "public", "veggies.html");
      } else {
        throw new Error("Not found");
      }
      const data= await fs.readFile(filePath);
      res.setHeader('Content-Type','text/html');
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("server error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});