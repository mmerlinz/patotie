// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`500008000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000200080600000000000000000100000000000000000000000000000000000000000000010000080906000000000100000000000000000000010000000008090906000000000200000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000020004000000000400000000080909090600000000000000000000000000000000000000080600000002000000000004000000000000000008090906000000000000000000000809090909060000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400010000000000000000000000000000000004000000000000000000030000000000000000000000040000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d0c00000005070707070a0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b050707070707070a0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b05070707070a0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b050707070707070706`, img`
................................................................................
......................................................22........................
..........222....................2222...........................................
...............2....................................2....2....22222.............
......22.........2........2222..........222222..................................
..................................................2..................2..........
...........2....................................................................
222222...............22222222..................222222..................222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,sprites.dungeon.collectibleRedCrystal,sprites.builtin.oceanSand0,sprites.builtin.oceanSand5,sprites.builtin.oceanSand3,sprites.builtin.oceanSand6,sprites.builtin.oceanSand1,sprites.builtin.oceanSand2,sprites.builtin.oceanSand7,sprites.dungeon.hazardLava0,myTiles.tile2,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
