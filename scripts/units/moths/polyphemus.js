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


const cinderCannon1 = extend(Weapon, "moth-units-cinder-cannon", {
  x: 9,
  y: 17,
  rotate: true,
  reload: 10,
  shootY: 5,
  hitSize: 10,
  pierce: false,
  lifetime: 16,
  shootEffect: shootSmallFlame,
  hitEffect: hitFlameSmall,
  damage: 20,
  bullet: BulletType(4.1,35)
});

const cinderCannon2 = extend(Weapon, "moth-units-cinder-cannon", {
  x: 20,
  y: 14,
  rotate: true,
  reload: 10,
  shootY: 5,
  hitSize: 10,
  pierce: false,
  lifetime: 16,
  shootEffect: shootSmallFlame,
  hitEffect: hitFlameSmall,
  damage: 20,
  bullet: BulletType(4.1,35)
});

const overloadRay = extend(Weapon, "moth-units-overload-ray", {
  top: true,
  x: 13,
  y: -3,
  shooty: 5,
  rotate: true,
  reload: 600,
  shootSound: Sounds.tractorbeam,
  continuous: true,
  alternate: false,
  shootStatusDuration: 600,
  shootStatus: unmoving,
  bullet: modBullets.newPrismBeam(30,210,600)
});

MothAirT4.weapons.addAll(cinderCannon1,cinderCannon2,overloadRay);
