var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pessoas');
var Pessoa = mongoose.model('Pessoa', mongoose.Schema({
	nome:String,
	departamento:String,
	area:String,
	cargo:String,
	contato:String,
	salario:String
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/pessoa'));

app.get('/api/pessoas', function(req, res){
	Pessoa.find(function(err, pessoas){
		if(err)
			res.send(err);
		res.json(pessoas);
	});
});

app.get('/api/pessoas/:id', function(req, res){
	Pessoa.findOne({_id:req.params.id}, function(err, pessoa){
		if(err)
			res.send(err);
		res.json(pessoa);
	});
});
app.post('/api/pessoas', function(req, res){
	Pessoa.create( req.body, function(err, pessoas){
		if(err)
			res.send(err);
		res.json(pessoas);
	});
});

app.delete('/api/pessoas/:id', function(req, res){
	Pessoa.findOneAndRemove({_id:req.params.id}, function(err, pessoa){
		if(err)
			res.send(err);
		res.json(pessoa);
	});
});
app.put('/api/pessoas/:id', function(req, res){
	var query = {
		nome:req.body.nome,
		departamento:req.body.departamento,
		area:req.body.area,
		cargo:req.body.cargo,
		contato:req.body.contato,
		salario:req.body.salario
	};
	Pessoa.findOneAndUpdate({_id:req.params.id}, query, function(err, pessoa){
		if(err)
			res.send(err);
		res.json(pessoa);
	});
});
app.listen(3000, function(){
	console.log('server is running on port 3000..');
});