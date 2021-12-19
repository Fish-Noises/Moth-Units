const modBullets = require("libs/bullets");

let col = Color.valueOf("#bf8af4");
const MothAirT4 = extend(UnitType, "polyphemus",{});
MothAirT4.constructor = () => extend(UnitEntity, {
    update(){
        this.super$update();
  }
});
/*let i = 1;*/
const flameSpew = extend(BulletType, {
    speed: 3,
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
});

const overloadBeam = modBullets.newPrismBeam(40,210,480)
overloadBeam.update: function(b){
        if(!b) return;
        this.super$update(b);

        let target = Damage.linecast(b, b.x, b.y, b.rotation(), this.length);
        b.data = target;

        if(target instanceof Hitboxc){
          if(b.timer.get(1, 10)){
            let hit = target;

            hit.collision(b, hit.x, hit.y);
            b.collision(hit, hit.x, hit.y);
            this.damage += 2;
          }
        }else if(target instanceof Building){
          if(b.timer.get(1, 10)){
            let tile = target;

            if(tile.collide(b)){
              tile.collision(b);
              this.hit(b, tile.x, tile.y);
              this.damage += 2;
            }
          }
        }else{
          b.data = new Vec2().trns(b.rotation(), this.length).add(b.x, b.y);
        }
    }
  })});

const overloadRay = extend(Weapon, "moth-units-overload-ray", {
  x: 13,
  y: -5,
  shooty: 5,
  rotate: true,
  reload: 300,
  shootSound: Sounds.tractorbeam,
  continuous: true,
  alternate: false,
  shootStatusDuration: 600,
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

MothAirT4.weapons.addAll(cinderCannon1,cinderCannon2,overloadRay);
