const bullets = require("libs/bullets");

let col = Color.valueOf("#bf8af4");
const MothAirT4 = extend(UnitType, "polyphemus",{});
MothAirT4.constructor = () => extend(UnitEntity, {});

const polyphemusRay1 = extend(Weapon, "moth-units-overload_ray", {
  x: 9,
  y: 19,
  rotate: true,
  shootSound: Sounds.tractorbeam,
  shotDelay: 15,
  continuous: true,
  alternate: false,
  shootStatusDuration: 30,
  shootStatus: StatusEffects.unmoving,
  bullet: bullets.newPrismBeam(25,210,15)
});

const polyphemusRay2 = extend(Weapon, "moth-units-overload_ray", {
  x: 20,
  y: 16,
  rotate: true,
  firstShotDelay: 180,
  shootSound: Sounds.tractorbeam,
  shotDelay: 15,
  continuous: true,
  alternate: false,
  shootStatusDuration: 30,
  shootStatus: StatusEffects.unmoving,
  bullet: bullets.newPrismBeam(50,210,15)
});

const polyphemusRay3 = extend(Weapon, "moth-units-overload_ray", {
  x: 13,
  y: -1,
  rotate: true,
  shotDelay: 15,
  shootSound: Sounds.tractorbeam,
  continuous: true,
  firstShotDelay: 600,
  alternate: false,
  shootStatusDuration: 30,
  shootStatus: StatusEffects.unmoving,
  bullet: bullets.newPrismBeam(125,210,15)
});

MothAirT4.weapons.addAll(polyphemusRay1,polyphemusRay2,polyphemusRay3);
