let button = document.getElementById('button')
let check


let tarefa = function(){
	let lista = document.getElementById('lista')

	let novo = document.getElementById('novo').value

	let li = document.createElement('li')
	let input = document.createElement('input')
	input.type= "checkbox"

	li.append(input)

	li.append(novo)

	lista.append(li)

	li.addEventListener('click', function(){check_tarefa(li)})
}

let check_tarefa = function(check){
	check.remove()
	let lista2 = document.getElementById('lista2')
	let li2 = document.createElement('li')
	let div = document.createElement('div')
	let input2 = document.createElement('input')

	div.id = 'bu'

	input2.type = 'submit'
	input2.id = 'button2'
	input2.value = ''

	li2.append(check.innerText)
	li2.append(input2)
	lista2.append(li2)

	input2.addEventListener('click', function(){remover(input2, li2)})

}

let remover = function(rm, lirm){
	lirm.remove()
}
button.addEventListener('click', tarefa)