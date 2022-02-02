module.exports = {
    concealed(){
        let concealed = extend(StatusEffect,"concealed",{
            effect: Fx.freezing,
            color: Color.valueOf("d4d2ff")
            /*init(){
                this.opposite(revealed);
            },
            draw(unit){
                this.super$draw(unit);
            }*/
        });
        return concealed;
    },
    revealed(){
        let revealed= extend(StatusEffect,"revealed",{
            effect: Fx.freezing,
            color: Color.valueOf("a0f598")
        });
        return revealed;
    }
}
