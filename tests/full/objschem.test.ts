import { TextureFiltering } from '../../src/texture';
import { ColourSpace } from '../../src/util';
import { AppPaths, PathUtil } from '../../src/util/path_util';
import { runHeadless, THeadlessConfig } from '../../tools/headless';

const baseConfig: THeadlessConfig = {
    import: {
        filepath: '', // Must be an absolute path
    },
    voxelise: {
        voxeliser: 'bvh-ray',
        desiredHeight: 80,
        useMultisampleColouring: false,
        textureFiltering: TextureFiltering.Linear,
        voxelOverlapRule: 'average',
        enableAmbientOcclusion: false, // Only want true if exporting to .obj
    },
    assign: {
        textureAtlas: 'vanilla', // Must be an atlas name that exists in /resources/atlases
        blockPalette: 'all-snapshot', // Must be a palette name that exists in /resources/palettes
        blockAssigner: 'ordered-dithering',
        colourSpace: ColourSpace.RGB,
        fallable: 'replace-falling',
    },
    export: {
        filepath: '', // Must be an absolute path to the file (can be anywhere)
        exporter: 'obj', // 'schematic' / 'litematic',
    },
    debug: {
        showLogs: false,
        showWarnings: false,
    },
};

test('FULL Obj->Obj', () => {
    AppPaths.Get.setBaseDir(PathUtil.join(__dirname, '../..'));

    const config: THeadlessConfig = baseConfig;

    config.import.filepath = PathUtil.join(AppPaths.Get.resources, './samples/skull.obj');
    config.export.exporter = 'schem';
    config.export.filepath = PathUtil.join(AppPaths.Get.testData, '../out/out.schem');

    runHeadless(config);
});
