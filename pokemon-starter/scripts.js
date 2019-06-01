$(document).ready(function(){
	$("#btn1").click(getPokemon);

	let pokemon = {
		name: 'sylveon',
		attack: 0,
		img: ''
	};

	function geRandomPokemonLeft() {
		let randomNumber = Math.floor(Math.random() * 800) + 1;
		$.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(frunction(pokeData){
			console.log("Left Pokemon Data: ", pokeData);
		});
	}

	function getPokemon(){
		let id = Math.floor(Math.random()*800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/` , function(response) {
			console.log(response);
			console.log(response.name);
			$('#first').empty();
			$('#first').append(`<h1>${response.name}<h1>`);
		});

	}

});
