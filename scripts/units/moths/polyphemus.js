const modBullets = require("libs/bullets");

let col = Color.valueOf("#bf8af4");
const MothAirT4 = extend(UnitType, "polyphemus",{});
MothAirT4.constructor = () => extend(UnitEntity, {});
let initialDmg = 5;
let firstTierDmg = 8;
let secondTierDmg = 14;
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
}
const flameSpew = extend(BulletType, {
    speed: 8,
    damage: 40,
    hitSize: 11,
    lifetime: 13,
    pierce: true,
    status: StatusEffects.burning,
    statusDuration: 120,
    shootEffect: Fx.shootSmallFlame/*extend(Effect)*/,
    despawnEffect: Fx.none,
    keepVelocity: false,
    hittable: false,
    collidesTiles: false,
});

const cinderCannon1 = extend(Weapon, "moth-units-cinder-cannon", {
  x: 6,
  y: 14,
  rotate: true,
  reload: 10,
  shootY: 5,
  shootSound: Sound.flame,
  bullet: flameSpew
});

const cinderCannon2 = extend(Weapon, "moth-units-cinder-cannon", {
  x: 23,
  y: 16,
  rotate: true,
  reload: 10,
  shootY: 5,
  shootSound: Sound.flame,
  bullet: flameSpew
});

const overloadRay = extend(Weapon, "moth-units-overload-ray", {
  x: 13,
  y: -5,
  shooty: 5,
  rotate: true,
  reload: 600,
  shootSound: Sounds.tractorbeam,
  continuous: true,
  alternate: false,
  shootStatusDuration: 600,
  shootStatus: StatusEffects.unmoving,
  bullet: modBullets.newPrismBeam(firingDuration,210,600)
});

MothAirT4.weapons.addAll(cinderCannon1,cinderCannon2,overloadRay);
