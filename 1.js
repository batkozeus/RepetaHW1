let resortPeople = prompt('Введите число учасников группы', '');

let taba = document.getElementById("taba");
let sharm = document.getElementById("sharm");
let hurgada = document.getElementById("hurgada");
let yourHotel = document.getElementById("your-hotel");

let tabaFree = 6;
let sharmFree = 25;
let hurgadaFree = 15;
if (resortPeople == null) {
	alert('Вы передумали!');
}
else {
	let chosenHotel ='';
	if ((resortPeople > 0) && (resortPeople%1==0)) {
		if (resortPeople<=25) {
			let sharmPeople = confirm('Согласны ли Вы быть в группе Sharm?');
			if (sharmPeople == true) {
				sharm.innerHTML = `Sharm - ${25-resortPeople} мест`;
				alert("Приятного путешествия в группе Sharm");
				chosenHotel = "Приятного путешествия в группе Sharm";
			}
			else if (resortPeople<=15) {
				let hurgadaPeople = confirm("Согласны ли Вы быть в группе Hurgada?");
				if (hurgadaPeople == true) {
					hurgada.innerHTML = `Hurgada - ${15-resortPeople} мест`;
					alert("Приятного путешествия в группе Hurgada");
					chosenHotel = "Приятного путешествия в группе Hurgada";
				}
				else if (resortPeople<=6) {
					let tabaPeople = confirm("Согласны ли Вы быть в группе Taba?");
					if (tabaPeople == true) {
						taba.innerHTML = `Taba - ${6-resortPeople} мест`;
						alert("Приятного путешествия в группе Taba");
						chosenHotel = "Приятного путешествия в группе Taba";
					}
					else {
						alert("Мест нигде нету!");
						chosenHotel = "Мест нигде нету!";
					}
				}
				else {
					alert("Мест нигде нету!");
					chosenHotel = "Мест нигде нету!";
				}
			}
			else {
				alert("Мест нигде нету!");
				chosenHotel = "Мест нигде нету!";
			}
		}
		else {
			alert("Мест нигде нету!");
			chosenHotel = "Мест нигде нету!";
		}
		console.log(chosenHotel);
		yourHotel.innerHTML = `${chosenHotel}`;
	}
	else {
		alert("Ошибка ввода!");
	}
}
