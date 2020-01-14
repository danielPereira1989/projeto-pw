window.onload = () => {



	renderSponsors()

  }

const rendersponsor = document.getElementById("renderSponsors")
const renderSponsors = async () => {
  const response = await fetch(`http://localhost:3000/sponser`)
  console.log("sdfghj")
  const sponsers = await response.json()
    let str= ``
    console.log("asdddss")
    for (const sponser of sponsers){
	 str += `
	 <div class="col-md-2">
				<h4 style> ${sponser.nome_patrocinador}</h4>
       </div>
	`
	}
    rendersponsor.innerHTML = str
 

  }