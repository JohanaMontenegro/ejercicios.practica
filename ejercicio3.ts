let variable: string = String(prompt("ingrese una letra"));

function tablaDel9() {
  if (
    variable === "A" ||
    variable === "B" ||
    variable === "c" ||
    variable === "D"
  ) {
    for (let i: number = 1; i <= 10; i++) {
      console.log(`9*${i} =` + 9 * i);
    }
  }
}
tablaDel9();
