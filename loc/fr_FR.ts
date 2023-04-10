// Credits:
// LeGrandGeek
// 0-zen

export const fr_FR = {
    display_name: 'Français',
    language_code: 'fr_FR',
    translations: {
        something_went_wrong: 'Une erreur s\'est produite',
        init: {
            initialising: 'Initialisation...',
            ready: 'Prêt',
        },
        settings: {
            heading: 'PARAMÈTRES',
            components: {
                language: 'Langue',
            },
            changing_language: 'Changement de langue...',
            changed_language: 'Langue changée',
        },
        import: {
            heading: '1. IMPORTER',
            button: 'Charger le modèle',
            importing_mesh: 'Chargement du modèle...',
            imported_mesh: 'Modèle chargé',
            rendering_mesh: 'Chargement du rendu...',
            rendered_mesh: 'Rendu terminé',
            no_vertices_loaded: 'Aucun sommet n\'a été chargé',
            no_triangles_loaded: 'Aucun triangle n\'a été chargé',
            could_not_scale_mesh: 'Impossible de redimensionner le modèle correctement - le modèle est probablement en 2D, faites-le pivoter pour qu\'il ait une hauteur non nulle.',
            invalid_encoding: 'Caractère inconnu, merci d\'encoder en UTF-8',
            invalid_face_data: 'Les informations sur les faces ont un nombre inattendu d\'informations sur les sommets: {{count, number}}',
            too_many_triangles: 'Le modèle chargé possède {{count, number}} triangles, pensez à le simplifier dans un programme tel que Blender.',
            vertex_triangle_count: '{{vertex_count, number}} sommets, {{triangle_count, number}} triangles',
            missing_normals: 'Certains sommets n\'ont pas de normales définies, cela peut causer des alignements de voxels incorrects',
            failed_to_parse_line: 'Impossible de lire la ligne "{{line}}", raison : "{{error}}"',
            gltf_experimental: 'L\'importeur GLTF est expérimental et peut se comporter de manière inattendue',
            components: {
                input: 'Modèle 3D (.obj, .gltf/.glb)',
                rotation: 'Rotation',
            },
        },
        materials: {
            heading: '2. TEXTURES',
            button: 'Mettre à jour les textures',
            updating_materials: 'Mise à jour des textures...',
            updated_materials: 'Textures mises à jour',
            components: {
                'no_materials_loaded': 'Aucune texture chargée',
                'material_type': 'Type',
                'solid': 'Solide',
                'textured': 'Image',
                'no_image_loaded': 'Pas d\'image chargée',
                'choose': 'Choisir',
                'texture_filtering': 'Filtrage',
                'texture_wrap': 'Enveloppe',
                'transparency': 'Transparence',
                'diffuse_map': 'Carte de diffusion',
                'alpha': 'Alpha',
                'alpha_map': 'Carte alpha map',
                'alpha_channel': 'Canal alpha ',
                'linear': 'Linéaire',
                'nearest': 'Plus proche',
                'clamp': 'Fixe',
                'repeat': 'Répété',
                'none': 'Aucun',
                'alpha_constant': 'Alpha constant',
                'diffuse_map_alpha_channel': 'Canal alpha de la carte alpha',
            },
        },
        voxelise: {
            heading: '3. VOXELISER',
            button: 'Voxeliser le modèle',
            loading_voxel_mesh: 'Chargement du modèle voxelisé...',
            loaded_voxel_mesh: 'Modèle voxelisé chargé',
            rendering_voxel_mesh: 'Chargement du rendu...',
            rendered_voxel_mesh: 'Rendu terminé',
            voxel_count: '{{count, number}} sommets',
            voxel_mesh_dimensions: 'Les dimensions sont {{x, number}} x {{y, number}} x {{z, number}}',
            components: {
                constraint_axis: 'Axe contraint',
                size: 'Taille',
                algorithm: 'Algorithme',
                ambient_occlusion: 'Occlusion ambiante',
                multisampling: 'Multi-échantillonnage',
                voxel_overlap: 'Recouvrement des voxels',
                colour: 'Couleur',
                x_axis: 'X (largeur) (rouge)',
                y_axis: 'Y (hauteur) (vert)',
                z_axis: 'Z (profondeur) (bleu)',
                ray_based: 'Par rayons',
                bvh_ray: 'BVH par rayons',
                ncrb: 'NCRB',
                average_recommended: 'Moyen (recommandé)',
                first: '1er',
                on_recommended: 'On (recommandé)',
                off_faster: 'Off (plus rapide)',
            },
        },
        assign: {
            heading: '3. ASSIGNER',
            button: 'Assigner les blocs',
            loading_block_mesh: 'Chargement du modèle en blocs...',
            loaded_block_mesh: 'Modèle en blocs chargé',
            rendering_block_mesh: 'Chargement du rendu...',
            rendered_block_mesh: 'Rendu terminé',
            deselected_blocks: '{{count, number}} blocs désélectionnés',
            selected_blocks: '{{count, number}} blocs sélectionnés',
            found_blocks: '{{count, number}} blocs trouvés',
            block_not_namespaced: '"{{block_name}}" n\'est pas nommé correctement, vouliez vous dire "minecraft:{{block_name}}"?',
            could_not_use_block: 'Impossible d\'utiliser "{{block_name}}" : non supporté',
            reading_palette: 'Lecture de {{file_name}}...',
            block_palette_missing_light_blocks: 'La palette de blocs ne contient pas de blocs lumineux à placer',
            blocks_missing_textures: '{{count, number}} bloc(s) de la palette n\'ont pas de texture, ils ne seront pas utilisés',
            falling_blocks: '{{count, number}} bloc(s) tomberont à cause de la gravité lorsque cette structure sera placée',
            components: {
                texture_atlas: 'Atlas des texture',
                block_palette: 'Palette de blocks',
                dithering: 'Dithering',
                dithering_magnitude: 'Magnitude du dithering',
                fallable_blocks: 'Blocs pouvant tomber',
                colour_accuracy: 'Précision de la couleur',
                smart_averaging: 'Moyennage intelligent',
                smoothness: 'Douceur',
                calculate_lighting: 'Calculer l\'éclairage',
                light_threshold: 'Limite de luminosité',
                vanilla: 'Vanilla',
                ordered: 'Ordonné',
                random: 'Aléatoire',
                off: 'Off',
                replace_falling: 'Remplacer les blocs qui peuvent tomber',
                replace_fallable: 'Remplacer les blocs qui vont tomber',
                do_nothing: 'Ne rien faire',
                search: 'Recherche...',
            },
        },
        export: {
            heading: '5. EXPORTER',
            button: 'Exporter la structure',
            exporting_structure: 'Exportation de la structure...',
            exported_structure: 'Structure exportée',
            schematic_unsupported_blocks: '{{count, number}} blocs ({{unique, number}} bloc) ne sont pas supportés par le format .schematic, des blocs de pierre seront utilisés à la place. Essayez d\'utiliser la palette schematic-friendly, ou d\'exporter en .litematica',
            nbt_exporter_too_big: 'Les blocs de structure ne supportent que des structures de taille 48x48x48, les blocs dépassant de cette zone seront retirés',
            components: {
                exporter: 'Exporteur',
                litematic: 'Litematic (.litematic)',
                schematic: 'Schematic (.schematic)',
                sponge_schematic: 'Schematic Sponge(.schem)',
                structure_blocks: 'Blocs de structure (.nbt)',
                indexed_json: 'JSON indexé (.json)',
                uncompressed_json: 'JSON non compressé (.json)',
            },
        },
        misc: {
            red: 'Rouge',
            green: 'Vert',
            blue: 'Bleu',
            alpha: 'Alpha',
            on: 'On',
            off: 'Off',
        },
    },
};
