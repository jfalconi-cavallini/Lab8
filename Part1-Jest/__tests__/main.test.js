const formatVolumeIconPath = require('../assets/scripts/main');

describe('volume level', () => {
    test('volume muted', () => {
        expect(formatVolumeIconPath(0)).toEqual("./assets/media/icons/volume-level-0.svg");
    });
    test('volume smaller than 33', () => {
        expect(formatVolumeIconPath(6)).toEqual("./assets/media/icons/volume-level-1.svg");
    });
    test('volume bigger than 33 smaller then 66', () => {
        expect(formatVolumeIconPath(40)).toEqual("./assets/media/icons/volume-level-2.svg");
    });
    test('volume bigger than 66', () => {
        expect(formatVolumeIconPath(80)).toEqual('./assets/media/icons/volume-level-3.svg');
    });
   

});