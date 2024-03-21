export const RequestLogger  = (req, _, next) => {
  console.log(`[${req.method}] `.yellow.bold + `${req.originalUrl}`.green);
  next();
}
