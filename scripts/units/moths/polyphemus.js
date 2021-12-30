const modBullets = require("libs/bullets");

let col = Color.valueOf("#bf8af4");
const MothAirT4 = extend(UnitType, "polyphemus",{});
/*MothAirT4.constructor = () => extend(UnitEntity, {
    update(){
        this.super$update();
        this.overloadRay.bullet.damage += 1
  }
});*/
/*Will figure out damage ramping later, t5 takes priority*/
/*let i = 1;*/
/*const flameSpew = extend(BulletType, {
    speed: 3,
    damage: 40,
    hitSize: 11,
    lifetime: 13,
    pierce: true,
    status: StatusEffects.burning,
    statusDuration: 120,
    shootEffect: Fx.shootSmallFlame/*extend(Effect),
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
  shootSound: Sounds.flame,
  bullet: flameSpew
});

const cinderCannon2 = extend(Weapon, "moth-units-cinder-cannon", {
  x: 23,
  y: 16,
  rotate: true,
  reload: 10,
  shootY: 5,
  shootSound: Sounds.flame,
  bullet: flameSpew
});*/

const overloadBeam = modBullets.newPrismBeam(140, 210, 360);

const overloadRay = extend(Weapon, "moth-units-overload-ray", {
  x: 19,
  y: -11.25,
  shooty: 17,
  rotate: true,
  reload: 240,
  shootSound: Sounds.tractorbeam,
  continuous: true,
  alternate: false,
  shootStatusDuration: 360,
  shootStatus: StatusEffects.unmoving,
  bullet: overloadBeam
});
/*update(){
        this.super$update();
        if(isShooting()){
            this.weapons.overloadRay.bullet.damage += 100;
            this.weapons.overloadRay.bullet.width += 0.2;
        }
  }*/

MothAirT4.weapons.addAll(overloadRay);
