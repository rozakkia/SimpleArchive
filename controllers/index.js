

exports.get_index = function( req, res, next) {
  res.render('index', { 
    title: 'Dashboard', 
    user: req.user });
}