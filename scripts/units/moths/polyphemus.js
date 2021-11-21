const bullets = require("libs/bullets");

let col = Color.valueOf("#bf8af4");
const MothAirT4 = extend(UnitType, "polyphemus",{});
MothAirT4.constructor = () => extend(UnitEntity, {});
initialDmg: 5;

const polyphemusRay1 = extend(Weapon, "moth-units-overload_ray", {
  x: 9,
  y: 19,
  rotate: true,
  shootSound: Sounds.tractorbeam,
  reload: 15,
  continuous: true,
  alternate: false,
  shootStatusDuration: 15,
  shootStatus: StatusEffects.unmoving,
  bullet: bullets.newPrismBeam(10,210,240)
});

const polyphemusRay2 = extend(Weapon, "moth-units-overload_ray", {
  x: 20,
  y: 16,
  rotate: true,
  reload: 15,
  shootSound: Sounds.tractorbeam,
  continuous: true,
  alternate: false,
  shootStatusDuration: 30,
  shootStatus: StatusEffects.unmoving,
  bullet: bullets.newPrismBeam(15,210,240)
});

const polyphemusRay3 = extend(Weapon, "moth-units-overload_ray", {
  x: 13,
  y: -1,
  rotate: true,
  reload: 15,
  shootSound: Sounds.tractorbeam,
  continuous: true,
  alternate: false,
  shootStatusDuration: 30,
  shootStatus: StatusEffects.unmoving,
  bullet: bullets.newPrismBeam(30,210,240)
});

MothAirT4.weapons.addAll(polyphemusRay1,polyphemusRay2,polyphemusRay3);
