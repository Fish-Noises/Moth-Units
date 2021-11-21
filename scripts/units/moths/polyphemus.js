const bullets = require("libs/bullets");

let col = Color.valueOf("#bf8af4");
const MothAirT4 = extend(UnitType, "polyphemus",{});
MothAirT4.constructor = () => extend(UnitEntity, {});
initialDmg: 5;
firstTierDmg: 8;
secondTierDmg: 14;
firingDuration: 0;

updateUnit(){
    this.super$updateUnit();
    switch (this.isShooting()){
      case 1:
        this.firingDuration = this.firingDuration + 1;
        break;
      case 0:
        this.firingDuration = 0;
    } 
}

const polyphemusRay1 = extend(Weapon, "moth-units-overload_ray", {
  x: 9,
  y: 17,
  shootY: 11,
  rotate: true,
  shootSound: Sounds.tractorbeam,
  reload: 120,
  continuous: true,
  alternate: false,
  shootStatusDuration: 600,
  shootStatus: StatusEffects.unmoving,
  bullet: bullets.newPrismBeam(MothAirT4.firingDuration,210,600)
});

const polyphemusRay2 = extend(Weapon, "moth-units-overload_ray", {
  x: 20,
  y: 14,
  rotate: true,
  reload: 120,
  shootY: 11,
  shootSound: Sounds.tractorbeam,
  continuous: true,
  alternate: false,
  shootStatusDuration: 600,
  shootStatus: StatusEffects.unmoving,
  bullet: bullets.newPrismBeam(MothAirT4.firingDuration,210,600)
});

const polyphemusRay3 = extend(Weapon, "moth-units-overload_ray", {
  updateWeapons(){
    this.super$updateWeapons();
    switch (this.isShooting()){
      case 1:
        this.firingDuration = this.firingDuration + 1;
        break;
      case 0:
        this.firingDuration = 0;
    } 
  },
  x: 13,
  y: -3,
  rotate: true,
  shotDelay: 5,
  reload: 600,
  shootSound: Sounds.tractorbeam,
  continuous: true,
  alternate: false,
  shootStatusDuration: 600,
  shootStatus: StatusEffects.unmoving,
  bullet: bullets.newPrismBeam(MothAirT4.firingDuration,210,600)
});

MothAirT4.weapons.addAll(polyphemusRay1,polyphemusRay2,polyphemusRay3);
