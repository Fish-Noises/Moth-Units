const modBullets = require("libs/bullets");

let col = Color.valueOf("#bf8af4");
const MothAirT4 = extend(UnitType, "polyphemus",{});
MothAirT4.constructor = () => extend(UnitEntity, {});
/*
let initialDmg: 5;
let firstTierDmg: 8;
let secondTierDmg: 14;
let firingDuration = 0;

updateUnit(){
    this.super$updateUnit();
    switch (this.isShooting()){
      case 1:
        firingDuration = firingDuration + 1;
        break;
      case 0:
        firingDuration = 0;
    } 
}*/
const flameSpew = extend(BulletType, {
    speed: 3,
    damage: 25,
    hitSize: 11,
    lifetime: 13,
    pierce: true,
    status: StatusEffects.burning,
    statusDuration: 120,
    shootEffect: Fx.shootSmallFlame,
    hitEffect: Fx.hitFlameSmall,
    despawnEffect: none,
    keepVelocity: false,
    hittable: false
});

const cinderCannon1 = extend(Weapon, "moth-units-cinder-cannon", {
  x: 9,
  y: 17,
  rotate: true,
  reload: 10,
  shootY: 5,
  //bullet: flameSpew
});

const cinderCannon2 = extend(Weapon, "moth-units-cinder-cannon", {
  x: 20,
  y: 14,
  rotate: true,
  reload: 10,
  shootY: 5,
  //bullet: flameSpew
});

const overloadRay = extend(Weapon, "moth-units-overload-ray", {
  x: 13,
  y: -3,
  shooty: 5,
  rotate: true,
  reload: 600,
  shootSound: Sounds.tractorbeam,
  continuous: true,
  alternate: false,
  shootStatusDuration: 600,
  shootStatus: StatusEffects.unmoving,
  bullet: modBullets.newPrismBeam(30,210,600)
});

MothAirT4.weapons.addAll(cinderCannon1,cinderCannon2,overloadRay);
