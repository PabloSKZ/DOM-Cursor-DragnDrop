let perso = new Fighter

let modifyPerso = () => {
    formClass = document.getElementById("form-class").value
    switch (formClass) {
        case 'Fighter':
            perso = new Fighter
          break;
        case 'Healer':
        perso = new Healer
        break;
        case 'Paladin':
            perso = new Paladin
          break;
        case 'Assassin':
        perso = new Assassin
        break;
        case 'Berzerker':
            perso = new Berzerker
          break;
        default:
          console.log("Unknown class");
      }

      formName = document.getElementById("form-name").value
      if (formName != "") {
        perso.name = formName
      } else {
          console.log("oh fada")
      }

      formHp = document.getElementById("form-hp").value
      if (parseInt(formHp) > 0) {
        perso.hp = formHp
      } else {
          console.log("oh fada")
      }

      formMana = document.getElementById("form-mana").value
      if (parseInt(formMana) > 0) {
        perso.mana = formMana
      } else {
          console.log("oh fada")
      }

      formDmg = document.getElementById("form-dmg").value
      if (parseInt(formDmg) > 0) {
        perso.dmg = formDmg
      } else {
          console.log("oh fada")
      }
}

perso.displayInformation()


document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
    e.preventDefault()
    modifyPerso()
    perso.displayInformation()
})

const img = document.getElementById("img")

let testY = 0
let testX = 0
let fisrtTime = true

img.addEventListener("dragstart", e => {
  if (fisrtTime) {
    testY = e.screenY
    testX = e.screenX
    fisrtTime = false
  }
})

img.addEventListener("dragend", e => {
  console.log(testY)
  img.setAttribute("style", "top:"+(e.screenY-testY)+"px; left:"+(e.screenX-testX)+"px;")
})

const cursor = document.querySelector(".cursor")

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top:"+e.pageY+"px; left:"+e.pageX+"px;")
        })