const bullets = require("libs/bullets");

let col = Color.valueOf("#bf8af4");
const MothAirT4 = extend(UnitType, "pupa",{});
MothAirT4.constructor = () => extend(UnitEntity, {});

const polyphemusRay1 = extend(Weapon, "overload-ray", {
  x: 9,
  y: 19,
  rotate: true
});

const polyphemusRay2 = extend(Weapon, "overload-ray", {
  x: 20,
  y: 16,
  rotate: true
});

const polyphemusRay3 = extend(Weapon, "overload-ray", {
  x: 13,
  y: -1,
  rotate: true
});

MotnAirT4.weapons.addAll(polyphemusRay1,polyphemusRay2,polyphemusRay3)