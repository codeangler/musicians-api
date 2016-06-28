function hello(req, res, next){
  res.write('Hello \n')
  next()
}