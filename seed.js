const knife = await prisma.item.create({
            data: {
              name: "Knife",
              imageURL: "https://csgostash.com/img/misc/rare_item.png?id=3a8208a7138f9be71c5cfe2c47b80874",
              rarity: "LEGENDARY",
              price: 9000
            },
          });
          const galilarchatterbox = await prisma.item.create({
            data: {
              name: "Galil AR | Chatterbox",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_galil_abrasion_light_large.8398e4836a0c26add3514a6af2262704d85fec07.png",
              rarity: "MYTHICAL",
              price: 354
            },
          });
          const awpmanowar = await prisma.item.create({
            data: {
              name: "AWP | Man-o'-war",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_am_awp_glory_light_large.348eae0f5d4da8671886826648dd4197a9829090.png",
              rarity: "MYTHICAL",
              price: 279
            },
          });
          const ak47cartel = await prisma.item.create({
            data: {
              name: "AK-47 | Cartel",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_aq_ak47_cartel_light_large.2e7be9f4c7bda304f2a7c374260d95affca93f0b.png",
              rarity: "RARE",
              price: 192
            },
          });
          const m4a4dragonking = await prisma.item.create({
            data: {
              name: "M4A4 | 龍王 (Dragon King)",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_ancestral_light_large.cbd9732689f42b7aec91bdb9166b1ee414974cb7.png",
              rarity: "RARE",
              price: 206
            },
          });
          const p250muertos = await prisma.item.create({
            data: {
              name: "P250 | Muertos",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_mandala_light_large.0acb51464cd72643c6a1fefaf8736288eb5d02f7.png",
              rarity: "RARE",
              price: 58
            },
          });
          const deserteaglenaga = await prisma.item.create({
            data: {
              name: "Desert Eagle | Naga",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aq_deagle_naga_light_large.b410ad835b1894a448676ae0590586298af2cb33.png",
              rarity: "UNCOMMON",
              price: 41
            },
          });
          const dualberettasurbanshock = await prisma.item.create({
            data: {
              name: "Dual Berettas | Urban Shock",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_cu_elites_urbanstorm_light_large.d33c9dd65434d8b9f4e7b5092fcc2e07a874e625.png",
              rarity: "UNCOMMON",
              price: 18
            },
          });
          const mac10malachite = await prisma.item.create({
            data: {
              name: "MAC-10 | Malachite",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_am_mac10_malachite_light_large.65b0eff12e655fb94ec9de545348178f1a5d60e0.png",
              rarity: "UNCOMMON",
              price: 22
            },
          });
          const sawedoffserenity = await prisma.item.create({
            data: {
              name: "Sawed-Off | Serenity",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_deva_light_large.9ffde04f2f082dce492b2fa6e250f69f538a50b5.png",
              rarity: "UNCOMMON",
              price: 18
            },
          });
          const glock18catacombs = await prisma.item.create({
            data: {
              name: "Glock-18 | Catacombs",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_deathtoll_light_large.cfcc6a17037a33bbb524ca1856c07cf76dda449d.png",
              rarity: "COMMON",
              price: 5
            },
          });
          const mp9deadlypoison = await prisma.item.create({
            data: {
              name: "MP9 | Deadly Poison",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_deadly_poison_light_large.0776976e709ec7b503dd7e47b8c962338615b5da.png",
              rarity: "COMMON",
              price: 9
            },
          });
          const m249systemlock = await prisma.item.create({
            data: {
              name: "M249 | System Lock",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_cu_m249_sektor_light_large.c957e70c656024b2c062f7af2031a76cb3c83f1c.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const xm1014quicksilver = await prisma.item.create({
            data: {
              name: "XM1014 | Quicksilver",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm1014_sigla_light_large.71c180cd3b8bdea7d0b119ab2b9d54792c51b3aa.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const scar20grotto = await prisma.item.create({
            data: {
              name: "SCAR-20 | Grotto",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_aq_scar20_leak_light_large.06b9231638ba347e91c671ecf2c1364754794893.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const m4a1shyperbeast = await prisma.item.create({
            data: {
              name: "M4A1-S | Hyper Beast",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1_hyper_beast_light_large.31850937661935a062d5f6faf5a1f02fdb90b861.png",
              rarity: "MYTHICAL",
              price: 808
            },
          });
          const mac10neonrider = await prisma.item.create({
            data: {
              name: "MAC-10 | Neon Rider",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_neonrider_light_large.4ba82cf2ba2d9fdc694d707b563421bbcc20b174.png",
              rarity: "MYTHICAL",
              price: 88
            },
          });
          const galilareco = await prisma.item.create({
            data: {
              name: "Galil AR | Eco",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_galil_eco_light_large.7f64e2d77423b3c4263a74caeda18383c2e487d5.png",
              rarity: "RARE",
              price: 154
            },
          });
          const fivesevenmonkeybusiness = await prisma.item.create({
            data: {
              name: "Five-SeveN | Monkey Business",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_banana_light_large.2d78a6614cb329ada893c8d028eb5c2b485f26f0.png",
              rarity: "RARE",
              price: 68
            },
          });
          const famasdjinn = await prisma.item.create({
            data: {
              name: "FAMAS | Djinn",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_aq_famas_jinn_light_large.a0e1b8e2a572c5e3d6472181d4a0d6ce7f51139f.png",
              rarity: "RARE",
              price: 55
            },
          });
          const awpwormgod = await prisma.item.create({
            data: {
              name: "AWP | Worm God",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_aq_awp_twine_light_large.f976c41b8f978d2b8d13734f14f6586982d859f1.png",
              rarity: "UNCOMMON",
              price: 20
            },
          });
          const mag7heat = await prisma.item.create({
            data: {
              name: "MAG-7 | Heat",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_redhot_light_large.76087a836e8c98fd10765a4b56dca946ba5acb4d.png",
              rarity: "UNCOMMON",
              price: 16
            },
          });
          const cz75autopoleposition = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Pole Position",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_cu_cz75_precision_light_large.a0d0ea9d92ff9c535cbdaa9c07a1a95a5181a82b.png",
              rarity: "UNCOMMON",
              price: 10
            },
          });
          const ump45grandprix = await prisma.item.create({
            data: {
              name: "UMP-45 | Grand Prix",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_am_ump_racer_light_large.6d935bf0d33ca90994b1dd9aec78a8938dcd94a2.png",
              rarity: "UNCOMMON",
              price: 2
            },
          });
          const ak47elitebuild = await prisma.item.create({
            data: {
              name: "AK-47 | Elite Build",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_mastery_light_large.4305c0ba4b02ce531fc08c275fa6a9d87da2cf7e.png",
              rarity: "COMMON",
              price: 35
            },
          });
          const deserteaglebronzedeco = await prisma.item.create({
            data: {
              name: "Desert Eagle | Bronze Deco",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_am_bronze_sparkle_light_large.42dc1d2bae9e586f75d6425f94a195014891533b.png",
              rarity: "COMMON",
              price: 11
            },
          });
          const p250valence = await prisma.item.create({
            data: {
              name: "P250 | Valence",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_aq_p250_contour_light_large.faf5b305c68d8ea23814163b0a69dafa7318b818.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const sawedofforigami = await prisma.item.create({
            data: {
              name: "Sawed-Off | Origami",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_origami_light_large.5f1b3cef6d518cda69daafddd9b2c240a29cf0cc.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const mp7armorcore = await prisma.item.create({
            data: {
              name: "MP7 | Armor Core",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_aq_mp7_ultramodern_light_large.5351e1926e4a9599d149c4941a8603f4143ff999.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const negevmanowar = await prisma.item.create({
            data: {
              name: "Negev | Man-o'-war",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_am_negev_glory_light_large.11ebbe525e92bd0a56dd4d3a7795a31a01823ba7.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const gloves = await prisma.item.create({
            data: {
              name: "Gloves",
              imageURL: "https://csgostash.com/img/misc/rare_item.png?id=3a8208a7138f9be71c5cfe2c47b80874",
              rarity: "LEGENDARY",
              price: 9000
            },
          });
          const m4a1sprintstream = await prisma.item.create({
            data: {
              name: "M4A1-S | Printstream",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_printstream_light_large.99e340c2eed00b54eef5320fd63e009fcede6cae.png",
              rarity: "MYTHICAL",
              price: 3050
            },
          });
          const glock18neonoir = await prisma.item.create({
            data: {
              name: "Glock-18 | Neo-Noir",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_noir_light_large.c93d0cbfa767d1f822a53ebfca0d57f532088c48.png",
              rarity: "MYTHICAL",
              price: 331
            },
          });
          const fivesevenfairytale = await prisma.item.create({
            data: {
              name: "Five-SeveN | Fairy Tale",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_five_seven_diary_light_large.e09a26df236581e02db30cdbb9c55adb2a4d2292.png",
              rarity: "RARE",
              price: 264
            },
          });
          const m4a4cybersecurity = await prisma.item.create({
            data: {
              name: "M4A4 | Cyber Security",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_cyberpunk_light_large.8ed70290de88498fcfdc0c89f23ba2ad60bd13a5.png",
              rarity: "RARE",
              price: 288
            },
          });
          const uspsmonstermashup = await prisma.item.create({
            data: {
              name: "USP-S | Monster Mashup",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_krokos_light_large.ef94a997db4a990e55bc44d4b07b25f0f420e59e.png",
              rarity: "RARE",
              price: 233
            },
          });
          const awpexoskeleton = await prisma.item.create({
            data: {
              name: "AWP | Exoskeleton",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_gs_awp_exoskeleton_light_large.7b7a8af63a8c06beacea7494a41adcda5d5afdd8.png",
              rarity: "UNCOMMON",
              price: 73
            },
          });
          const ssg08parallax = await prisma.item.create({
            data: {
              name: "SSG 08 | Parallax",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_chromatic_light_large.66f506ebe947b68afa1d3a6cbbdd8916b054f84a.png",
              rarity: "UNCOMMON",
              price: 28
            },
          });
          const novaclearpolymer = await prisma.item.create({
            data: {
              name: "Nova | Clear Polymer",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_nova_polymer_light_large.a45b7ef66f8e62eecf26687892e5c4a76966d7f6.png",
              rarity: "UNCOMMON",
              price: 28
            },
          });
          const ump45goldbismuth = await prisma.item.create({
            data: {
              name: "UMP-45 | Gold Bismuth",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_gs_ump_gold_bismuth_light_large.c09fa5b0617d1c486737c9beb39f79bec31621dc.png",
              rarity: "UNCOMMON",
              price: 29
            },
          });
          const dualberettasdezastre = await prisma.item.create({
            data: {
              name: "Dual Berettas | Dezastre",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_gs_dual_elites_dezastre_light_large.9b7aa9accd1e31a202b0f2ab66d0cf8d3039ee7d.png",
              rarity: "UNCOMMON",
              price: 31
            },
          });
          const galilarvandal = await prisma.item.create({
            data: {
              name: "Galil AR | Vandal",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_gs_galil_vandal_light_large.5144c3d7d0d1789bc5a25d3a62f15ccd876c9855.png",
              rarity: "COMMON",
              price: 5
            },
          });
          const p250contaminant = await prisma.item.create({
            data: {
              name: "P250 | Contaminant",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_infect_light_large.235d9f1d0efc7fe74748085ecd87540a03a4551d.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const m249deeprelief = await prisma.item.create({
            data: {
              name: "M249 | Deep Relief",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_cu_m249_deep_relief_light_large.227a01518f45cbb6a43981e36b76f60785f9085b.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const cz75autovendetta = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Vendetta",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_gs_cz75_vendetta_light_large.0c3e295e82d8131b10e8daa2a1568e578fe01541.png",
              rarity: "COMMON",
              price: 5
            },
          });
          const mp5sdconditionzero = await prisma.item.create({
            data: {
              name: "MP5-SD | Condition Zero",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5_conditionzero_light_large.4ed0ebd4f909faf2e09b5e18ec08e0a093719f63.png",
              rarity: "COMMON",
              price: 5
            },
          });
          const p90cocoarampage = await prisma.item.create({
            data: {
              name: "P90 | Cocoa Rampage",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_hy_p90_dino_rampage_light_large.2231742f05375d3370f5f8fbc7fd3f3f623af688.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const g3sg1digitalmesh = await prisma.item.create({
            data: {
              name: "G3SG1 | Digital Mesh",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_disrupt_light_large.393db5c1a143ad7fc9e3c42a7d17ca860ce490ab.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const m4a1schanticosfire = await prisma.item.create({
            data: {
              name: "M4A1-S | Chantico's Fire",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_soultaker_light_large.4939d69bd691d421ca9c7d6558b46088c8ac5317.png",
              rarity: "MYTHICAL",
              price: 684
            },
          });
          const ppbizonjudgementofanubis = await prisma.item.create({
            data: {
              name: "PP-Bizon | Judgement of Anubis",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_curse_light_large.c19cf584d3e28db4914d1559cd387999457944d8.png",
              rarity: "MYTHICAL",
              price: 78
            },
          });
          const p250asiimov = await prisma.item.create({
            data: {
              name: "P250 | Asiimov",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_asiimov_light_large.7ccf465f7dc55d2d960465d404c10cbc8c442cee.png",
              rarity: "RARE",
              price: 97
            },
          });
          const ump45primalsaber = await prisma.item.create({
            data: {
              name: "UMP-45 | Primal Saber",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump45_primalsaber_light_large.67bef91a43734d654516f65c4288711b257d2049.png",
              rarity: "RARE",
              price: 49
            },
          });
          const augfleetflock = await prisma.item.create({
            data: {
              name: "AUG | Fleet Flock",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_aug_swallows_light_large.29e48baa4086b20e4a5f714b5f8cc6350de7c758.png",
              rarity: "RARE",
              price: 57
            },
          });
          const ssg08ghostcrusader = await prisma.item.create({
            data: {
              name: "SSG 08 | Ghost Crusader",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_gs_ssg08_armacore_light_large.043342869c64e1a08107055a4e1b332ad9c763c0.png",
              rarity: "UNCOMMON",
              price: 16
            },
          });
          const xm1014blacktie = await prisma.item.create({
            data: {
              name: "XM1014 | Black Tie",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_cu_xm1014_spectrum_light_large.6318ee51c405fb5e8a40aedfc3d98d530f789a5b.png",
              rarity: "UNCOMMON",
              price: 10
            },
          });
          const tec9reentry = await prisma.item.create({
            data: {
              name: "Tec-9 | Re-Entry",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_am_tec9_redblast_light_large.0f8de75737cc35ac1d14cf74924838da4d7ab849.png",
              rarity: "UNCOMMON",
              price: 7
            },
          });
          const galilarfirefight = await prisma.item.create({
            data: {
              name: "Galil AR | Firefight",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_gs_galilar_incenerator_light_large.669901b842361b46108ced0a555f5575839d093e.png",
              rarity: "UNCOMMON",
              price: 10
            },
          });
          const cz75autoredastor = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Red Astor",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_gs_cz75a_redastor_light_large.e00e688986c50877a103fe66d70fdf1fc13bbe8b.png",
              rarity: "UNCOMMON",
              price: 9
            },
          });
          const mp9bioleak = await prisma.item.create({
            data: {
              name: "MP9 | Bioleak",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_am_mp9_bioleak_light_large.d9b0d0e9fea2104871e0510bd704bfa03cdd6056.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const dualberettasventilators = await prisma.item.create({
            data: {
              name: "Dual Berettas | Ventilators",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_gs_dualberettas_ventilators_light_large.45cb1ffd25de1ed5b90ba104b1f8e0a8eb2eb255.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const p2000oceanic = await prisma.item.create({
            data: {
              name: "P2000 | Oceanic",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_hy_p2000_oceani_light_large.8f64654c5964975c85201b1dbbdf7b8ffab768be.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const m249spectre = await prisma.item.create({
            data: {
              name: "M249 | Spectre",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_cu_m249_spectre_light_large.b0a23c44e56390b4bbdc2c389911f6cc2b42da3d.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const g3sg1orangecrash = await prisma.item.create({
            data: {
              name: "G3SG1 | Orange Crash",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_sp_g3sg1_militiaorange_light_large.215d54d5c86185e61d65694899bf029f6e070cab.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const sg553atlas = await prisma.item.create({
            data: {
              name: "SG 553 | Atlas",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_atlas_light_large.536218f8160485fa927e19fa06fedae43d9c04e6.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const sawedofffubar = await prisma.item.create({
            data: {
              name: "Sawed-Off | Fubar",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_gs_sawedoff_fubar_light_large.0673d87171fccc0fc98e77806da7259e283283ea.png",
              rarity: "COMMON",
              price: 0
            },
          });
          const deserteagleoceandrive = await prisma.item.create({
            data: {
              name: "Desert Eagle | Ocean Drive",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_deagle_kitch_light_large.0df9b5246d27786b413642f5fc959f37d8892c3a.png",
              rarity: "MYTHICAL",
              price: 932
            },
          });
          const ak47leetmuseo = await prisma.item.create({
            data: {
              name: "AK-47 | Leet Museo",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_abstract_light_large.c0eca2ab0cee2c60491b9b64358f72ae4398e78a.png",
              rarity: "MYTHICAL",
              price: 513
            },
          });
          const glock18snackattack = await prisma.item.create({
            data: {
              name: "Glock-18 | Snack Attack",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_snackattack_light_large.145d863714fb0fd6f766ef28f3639c0efded5018.png",
              rarity: "RARE",
              price: 136
            },
          });
          const ssg08turbopeek = await prisma.item.create({
            data: {
              name: "SSG 08 | Turbo Peek",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg_overtake_light_large.62261051818eb21f13e782cd49a33970360b4581.png",
              rarity: "RARE",
              price: 87
            },
          });
          const mac10toybox = await prisma.item.create({
            data: {
              name: "MAC-10 | Toybox",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_toybox_light_large.0eaa520b37c7d53ed3ef541e59d2303714c7e21d.png",
              rarity: "RARE",
              price: 89
            },
          });
          const m4a4spiderlily = await prisma.item.create({
            data: {
              name: "M4A4 | Spider Lily",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_gs_m4_flowers_light_large.9953864326ad495e32b855ac45d96367b149be90.png",
              rarity: "UNCOMMON",
              price: 97
            },
          });
          const famaszxspectron = await prisma.item.create({
            data: {
              name: "FAMAS | ZX Spectron",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_cu_famas_spectron_light_large.5212ab188ec7d54b55d4280c3b508b11b1f567ed.png",
              rarity: "UNCOMMON",
              price: 60
            },
          });
          const mp9mountfuji = await prisma.item.create({
            data: {
              name: "MP9 | Mount Fuji",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_aa_mp9_fuji_pink_light_large.5c7bf05ff05d82c34b6d71a3aa97537e55cec97e.png",
              rarity: "UNCOMMON",
              price: 38
            },
          });
          const fivesevenboostprotocol = await prisma.item.create({
            data: {
              name: "Five-SeveN | Boost Protocol",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_gs_five_seven_efusion_light_large.78c44b69ab40456b90279ad0252463e9de816e78.png",
              rarity: "UNCOMMON",
              price: 17
            },
          });
          const mag7bi83spectrum = await prisma.item.create({
            data: {
              name: "MAG-7 | BI83 Spectrum",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_gs_mag7_bismuth_light_large.f5df59b5024b23a1ca187985b7650e337adda4b4.png",
              rarity: "UNCOMMON",
              price: 16
            },
          });
          const uspsblacklotus = await prisma.item.create({
            data: {
              name: "USP-S | Black Lotus",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_black_lotus_light_large.d40de54b67e255871a2a31a15e871e8d185049ea.png",
              rarity: "COMMON",
              price: 31
            },
          });
          const xm1014watchdog = await prisma.item.create({
            data: {
              name: "XM1014 | Watchdog",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_gs_xm1014_watchdog_light_large.5443196414c00a57b26d9af50d4a75a35dd8dbd8.png",
              rarity: "COMMON",
              price: 16
            },
          });
          const augplague = await prisma.item.create({
            data: {
              name: "AUG | Plague",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_gs_aug_plague_light_large.d7c01b0e4e2bc1e890cf3965874fad8a1bb27a17.png",
              rarity: "COMMON",
              price: 8
            },
          });
          const ppbizonlumen = await prisma.item.create({
            data: {
              name: "PP-Bizon | Lumen",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_gs_bizon_flasher_light_large.a200d5213d5fe9f2e74b5ca5b9ce8eeb7eee4d5f.png",
              rarity: "COMMON",
              price: 5
            },
          });
          const dualberettastread = await prisma.item.create({
            data: {
              name: "Dual Berettas | Tread",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_gs_dual_berettas_tread_light_large.c48f5d783dd8f91dabffcd64cd2d95690b309ce5.png",
              rarity: "COMMON",
              price: 6
            },
          });
          const mp7guerrilla = await prisma.item.create({
            data: {
              name: "MP7 | Guerrilla",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7_khaki_light_large.c9fb92fece0f425328e2c5c8c536302ed2dbcf99.png",
              rarity: "COMMON",
              price: 6
            },
          });
          const g3sg1keepingtabs = await prisma.item.create({
            data: {
              name: "G3SG1 | Keeping Tabs",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_cu_g3sg1_tacticalmap_light_large.c1340d04161c17f48cf0091a52f649c1e9bd8d41.png",
              rarity: "COMMON",
              price: 5
            },
          });
          const m4a4temukau = await prisma.item.create({
            data: {
              name: "M4A4 | Temukau",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_temukau_light_large.a41eb80c70cbbee5d84e53b5cd1eaa10954c938d.png",
              rarity: "MYTHICAL",
              price: 3035
            },
          });
          const ak47headshot = await prisma.item.create({
            data: {
              name: "AK-47 | Head Shot",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_head_shot_holo_light_large.85be84ba7c07917493b8e8a66c9d95c928ebe8b6.png",
              rarity: "MYTHICAL",
              price: 2097
            },
          });
          const awpduality = await prisma.item.create({
            data: {
              name: "AWP | Duality",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_gs_awp_limbo_snake_light_large.60984ce1e5c1a4ac10e83444a9b7e7f78dd98b1e.png",
              rarity: "RARE",
              price: 2796
            },
          });
          const ump45wildchild = await prisma.item.create({
            data: {
              name: "UMP-45 | Wild Child",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump_clutch_kick_light_large.b57e43c07b433517b1c3bdaa1e52ce44878af481.png",
              rarity: "RARE",
              price: 270
            },
          });
          const p2000wickedsick = await prisma.item.create({
            data: {
              name: "P2000 | Wicked Sick",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2000_decline_light_large.7f57145674a5e41b3b8e7fe70be4ffbb57ec6f84.png",
              rarity: "RARE",
              price: 275
            },
          });
          const m4a1semphorosaurs = await prisma.item.create({
            data: {
              name: "M4A1-S | Emphorosaur-S",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_feeding_frenzy_light_large.e1cb803e0e10ae4457e42d34ec8515b1500f4762.png",
              rarity: "UNCOMMON",
              price: 83
            },
          });
          const p90neoqueen = await prisma.item.create({
            data: {
              name: "P90 | Neoqueen",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_neoqueen_light_large.fa2a81f8c7906b2683b5eb4b562edd2529ad2cf0.png",
              rarity: "UNCOMMON",
              price: 31
            },
          });
          const glock18umbralrabbit = await prisma.item.create({
            data: {
              name: "Glock-18 | Umbral Rabbit",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_moon_rabbit_light_large.9063b9745250446c657632eb13a6325f51d101f2.png",
              rarity: "UNCOMMON",
              price: 33
            },
          });
          const mac10sakkaku = await prisma.item.create({
            data: {
              name: "MAC-10 | Sakkaku",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_sakkaku_light_large.b590689d0ca099e8a759dd0a86da0710a58bca42.png",
              rarity: "UNCOMMON",
              price: 34
            },
          });
          const r8revolverbananacannon = await prisma.item.create({
            data: {
              name: "R8 Revolver | Banana Cannon",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_r8_banana_light_large.50f0b729a36a405d48b41d58463234dbbd15b9cf.png",
              rarity: "UNCOMMON",
              price: 32
            },
          });
          const mp5sdliquidation = await prisma.item.create({
            data: {
              name: "MP5-SD | Liquidation",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_cu_mp5sd_quick_liquidation_light_large.2b446c710928debe38469e33b3b9030bd218c0e3.png",
              rarity: "COMMON",
              price: 6
            },
          });
          const mp9featherweight = await prisma.item.create({
            data: {
              name: "MP9 | Featherweight",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_superlight_light_large.81ad837f4c889f250fa03b227ef74555614de55d.png",
              rarity: "COMMON",
              price: 6
            },
          });
          const mag7insomnia = await prisma.item.create({
            data: {
              name: "MAG-7 | Insomnia",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_insomnia_light_large.0d971fb17ca0bb1df7baed6a1caa902c56c1ea5b.png",
              rarity: "COMMON",
              price: 6
            },
          });
          const sg553cyberforce = await prisma.item.create({
            data: {
              name: "SG 553 | Cyberforce",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_cyberforce_light_large.63aa4e611195d801eb706ac65d38df68f98e2b76.png",
              rarity: "COMMON",
              price: 6
            },
          });
          const tec9rebel = await prisma.item.create({
            data: {
              name: "Tec-9 | Rebel",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_freedom_light_large.bb79585222a88d4dd3b154915c5527cac7e507d1.png",
              rarity: "COMMON",
              price: 6
            },
          });
          const p250rebuilt = await prisma.item.create({
            data: {
              name: "P250 | Re.built",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_rebuilt_light_large.69d4fcb9a8151d09818d1c26cf4c7b03d046b5a1.png",
              rarity: "COMMON",
              price: 5
            },
          });
          const scar20fragments = await prisma.item.create({
            data: {
              name: "SCAR-20 | Fragments",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_gs_scar_fragments_black_light_large.d6bde287b06ba2380ba07621a0b06c36b13c4025.png",
              rarity: "COMMON",
              price: 5
            },
          });
          const uspsprintstream = await prisma.item.create({
            data: {
              name: "USP-S | Printstream",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_printstream_light_large.9f5bcd4f94db3d965b3b2e7c3aace470e9466380.png",
              rarity: "MYTHICAL",
              price: 944
            },
          });
          const awpchromaticaberration = await prisma.item.create({
            data: {
              name: "AWP | Chromatic Aberration",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_chroma_pink_light_large.afc69cbf51b04e24149744b6ee1d998cc18d3002.png",
              rarity: "MYTHICAL",
              price: 371
            },
          });
          const ak47icecoaled = await prisma.item.create({
            data: {
              name: "AK-47 | Ice Coaled",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_cogthings_light_large.9b4678a70c315e5d60a203436b7a95cd4c5dcc89.png",
              rarity: "RARE",
              price: 283
            },
          });
          const sawedoffkisslove = await prisma.item.create({
            data: {
              name: "Sawed-Off | Kiss♥Love",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_kisslove_light_large.55dc07f073e8c5ce65f21e4fb5957625db7ba266.png",
              rarity: "RARE",
              price: 103
            },
          });
          const p250visions = await prisma.item.create({
            data: {
              name: "P250 | Visions",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_gs_p250_visions_light_large.a47ba6d191d3c734c3248667fb341a0e3f0c423e.png",
              rarity: "RARE",
              price: 89
            },
          });
          const r8revolvercrazy8 = await prisma.item.create({
            data: {
              name: "R8 Revolver | Crazy 8",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_revolver_purple_elite_light_large.12a25ff5490bc9199a7ef870677455e42b9d8847.png",
              rarity: "UNCOMMON",
              price: 21
            },
          });
          const sg553dragontech = await prisma.item.create({
            data: {
              name: "SG 553 | Dragon Tech",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_cyber_dragon_light_large.563b70babc5251fe5df218140582cd0aa576701e.png",
              rarity: "UNCOMMON",
              price: 19
            },
          });
          const dualberettasfloracarnivora = await prisma.item.create({
            data: {
              name: "Dual Berettas | Flora Carnivora",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_cu_dual_elites_evil_flora_light_large.3afd7e8e7cf008e4b38a206b79adae3b9d0d7757.png",
              rarity: "UNCOMMON",
              price: 20
            },
          });
          const p90ventrush = await prisma.item.create({
            data: {
              name: "P90 | Vent Rush",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_tangled_light_large.d1c6b11dc6876f1cf546281df8b8fac68a037518.png",
              rarity: "UNCOMMON",
              price: 17
            },
          });
          const m249downtown = await prisma.item.create({
            data: {
              name: "M249 | Downtown",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_cu_m249_downvote_light_large.9d51d5d89b1df07b160580b5b929f66f06bb8310.png",
              rarity: "UNCOMMON",
              price: 18
            },
          });
          const m4a4polymag = await prisma.item.create({
            data: {
              name: "M4A4 | Poly Mag",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_elite_tactical_light_large.015fd86aa32f4f0331aa1b7dc2571d89dbf38671.png",
              rarity: "COMMON",
              price: 5
            },
          });
          const glock18winterized = await prisma.item.create({
            data: {
              name: "Glock-18 | Winterized",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_gs_glock_elite_camo_light_large.00d135c0b32cabd8b48692d11794c830a9a4de5c.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const famasmeow36 = await prisma.item.create({
            data: {
              name: "FAMAS | Meow 36",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_gs_famas_corp_meow_light_large.7e27ced9616b1a4808cad37e8c0c653b9c866f07.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const galilardestroyer = await prisma.item.create({
            data: {
              name: "Galil AR | Destroyer",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_galil_destroyer_light_large.00308096b32ca8c6252ed241878ca1ec5e743c36.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const ump45roadblock = await prisma.item.create({
            data: {
              name: "UMP-45 | Roadblock",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_gs_ump_roadblock_light_large.d6b1372a575db666a8a7f039a39c05597d6cb60b.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const mac10monkeyflage = await prisma.item.create({
            data: {
              name: "MAC-10 | Monkeyflage",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_monkeyflage_light_large.8f24ab7b33719d43a7d4e0886cb3f79d506e7068.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const negevdropme = await prisma.item.create({
            data: {
              name: "Negev | Drop Me",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_clear_sky_light_large.fc6f06d0f44e71207660f44b9b56021ce42a7e46.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const ak47nightwish = await prisma.item.create({
            data: {
              name: "AK-47 | Nightwish",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_nightwish_light_large.0c4581be094e2bd732bec18ebdad2f71b1018af2.png",
              rarity: "MYTHICAL",
              price: 957
            },
          });
          const mp9starlightprotector = await prisma.item.create({
            data: {
              name: "MP9 | Starlight Protector",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_gs_mp9_starlight_light_large.79d29560c71c4ba592824c1a1e3a8172cc7269be.png",
              rarity: "MYTHICAL",
              price: 219
            },
          });
          const mp7abyssalapparition = await prisma.item.create({
            data: {
              name: "MP7 | Abyssal Apparition",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7_fear_light_large.17f608ce70f44af09c1a92c541430804429ae2d6.png",
              rarity: "RARE",
              price: 67
            },
          });
          const famasrapideyemovement = await prisma.item.create({
            data: {
              name: "FAMAS | Rapid Eye Movement",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_gs_famas_rapid_eyes_light_large.8a166e6d36121b16dddc11b9aca94d5c541b0b56.png",
              rarity: "RARE",
              price: 82
            },
          });
          const dualberettasmelondrama = await prisma.item.create({
            data: {
              name: "Dual Berettas | Melondrama",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_cu_elites_beware_light_large.3a4517010e237136f9cca5c593beedd94a2a0a15.png",
              rarity: "RARE",
              price: 70
            },
          });
          const m4a1snightterror = await prisma.item.create({
            data: {
              name: "M4A1-S | Night Terror",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_gs_m4a1s_insomnia_light_large.265e6eb866d751caf4bbe7f8c8b62e400c5f0175.png",
              rarity: "UNCOMMON",
              price: 15
            },
          });
          const uspstickettohell = await prisma.item.create({
            data: {
              name: "USP-S | Ticket to Hell",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_to_hell_light_large.13912fa139f2055f7e3044a234ad111bbbce548f.png",
              rarity: "UNCOMMON",
              price: 17
            },
          });
          const ppbizonspacecat = await prisma.item.create({
            data: {
              name: "PP-Bizon | Space Cat",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_spacecat_light_large.c2c9bbf949c4bdf2ce3173cd2447559177716dd3.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const g3sg1dreamglade = await prisma.item.create({
            data: {
              name: "G3SG1 | Dream Glade",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_cu_g3sg1_glade_light_large.93e176857183136f472c81b75331929d7b51d3ad.png",
              rarity: "UNCOMMON",
              price: 10
            },
          });
          const xm1014zombieoffensive = await prisma.item.create({
            data: {
              name: "XM1014 | Zombie Offensive",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_am_xm_zombie_offensive_light_large.0e15d69fbf9b3d93b14f54f85fa84bcb45c8f49e.png",
              rarity: "UNCOMMON",
              price: 7
            },
          });
          const mac10ensnared = await prisma.item.create({
            data: {
              name: "MAC-10 | Ensnared",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_pixie_light_large.26950e30ef7e74e69920d67965c409b8b88902c8.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const fivesevenscrawl = await prisma.item.create({
            data: {
              name: "Five-SeveN | Scrawl",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_alpha_omega_light_large.698d00d53621c1b2358655aaff4f729bc0ed6300.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const mp5sdnecrojr = await prisma.item.create({
            data: {
              name: "MP5-SD | Necro Jr.",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5_kid_necronomicon_light_large.87443871e29948cd2cea24c01bd241b3623e91dd.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const p2000liftedspirits = await prisma.item.create({
            data: {
              name: "P2000 | Lifted Spirits",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2k_flying_dream_light_large.db13d5d635e72a5c6d5ab742a6fa3a1ec4129405.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const sawedoffspiritboard = await prisma.item.create({
            data: {
              name: "Sawed-Off | Spirit Board",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_ouija_light_large.79ee13876374fa1fd2f04bea84124c265fb55407.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const mag7foresight = await prisma.item.create({
            data: {
              name: "MAG-7 | Foresight",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_predictor_light_large.431734cae141d06a20fa3615d38e3b15c708602a.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const scar20poultrygeist = await prisma.item.create({
            data: {
              name: "SCAR-20 | Poultrygeist",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_sp_scar_chickenfight_light_large.b32fde27f0f45456b4c1e5f049be6f44bc8649b7.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const uspsthetraitor = await prisma.item.create({
            data: {
              name: "USP-S | The Traitor",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_gs_usps_hangedman_light_large.a01890fdeb8335437df7af6641a7b4f6e2fcca34.png",
              rarity: "MYTHICAL",
              price: 454
            },
          });
          const m4a4inlivingcolor = await prisma.item.create({
            data: {
              name: "M4A4 | In Living Color",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_love_light_large.5f7f6a3085aedc1a878dd10881144e7898a2db3d.png",
              rarity: "MYTHICAL",
              price: 326
            },
          });
          const galilarchromaticaberration = await prisma.item.create({
            data: {
              name: "Galil AR | Chromatic Aberration",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_galil_chroma_pink_light_large.e29cb838de1fc6318d36ed2d7263b7fcef10a4d8.png",
              rarity: "RARE",
              price: 62
            },
          });
          const mp9foodchain = await prisma.item.create({
            data: {
              name: "MP9 | Food Chain",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_food_chain_light_large.5895f4cc864387a61a3783470037e6ed1953f7df.png",
              rarity: "RARE",
              price: 62
            },
          });
          const xm1014xoxo = await prisma.item.create({
            data: {
              name: "XM1014 | XOXO",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm1014_punk_light_large.8c6eb5bcf234179713a52b1a5e22c64c21c52007.png",
              rarity: "RARE",
              price: 50
            },
          });
          const ak47slate = await prisma.item.create({
            data: {
              name: "AK-47 | Slate",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_professional_light_large.d09d623d0a725c63e8a3905f66bba41ba2ed59e8.png",
              rarity: "UNCOMMON",
              price: 93
            },
          });
          const deserteagletriggerdiscipline = await prisma.item.create({
            data: {
              name: "Desert Eagle | Trigger Discipline",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_deag_trigger_discipline_light_large.9d8615945f079e3f7ea84c572fd34408fee6341c.png",
              rarity: "UNCOMMON",
              price: 19
            },
          });
          const p250cybershell = await prisma.item.create({
            data: {
              name: "P250 | Cyber Shell",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_gs_p250_cybershell_light_large.9f0408cde898dd81609541a8e68ff1ffe81320fd.png",
              rarity: "UNCOMMON",
              price: 7
            },
          });
          const negevdev_texture = await prisma.item.create({
            data: {
              name: "Negev | dev_texture",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_devtexture_light_large.a0c6f2fcbac9d473d7b9d0452773843c284683e3.png",
              rarity: "UNCOMMON",
              price: 7
            },
          });
          const mac10buttonmasher = await prisma.item.create({
            data: {
              name: "MAC-10 | Button Masher",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_portable_light_large.d4e97127a92ecba12884e5af083aa84685486b39.png",
              rarity: "UNCOMMON",
              price: 7
            },
          });
          const glock18clearpolymer = await prisma.item.create({
            data: {
              name: "Glock-18 | Clear Polymer",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_gs_glock_polymer_light_large.9a56b15b2deea5847b0820c5ad982c1796cc8e0c.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const cz75autocircaetus = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Circaetus",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_cu_cz75_whirlwind_light_large.86609770746655c350bb7b087a8c0f1f1b55d01f.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const sg553heavymetal = await prisma.item.create({
            data: {
              name: "SG 553 | Heavy Metal",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_gs_sg553_deathmetal_light_large.c41041d1a69838d3b66f21032254066eaea8fe41.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const r8revolverjunkyard = await prisma.item.create({
            data: {
              name: "R8 Revolver | Junk Yard",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_r8_rustking_light_large.5245178cf84e1bf8d77eb7a3ec19d108a70131d3.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const m249osipr = await prisma.item.create({
            data: {
              name: "M249 | O.S.I.P.R.",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_gs_m249_combine_light_large.6f8724ef896506ede0925a425da05969f19aafdc.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const novawindblown = await prisma.item.create({
            data: {
              name: "Nova | Windblown",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_sp_nova_wind_dispersal_light_large.9156d5a206e0e4b47f814bee9b6b54ac0a16b159.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const ump45oscillator = await prisma.item.create({
            data: {
              name: "UMP-45 | Oscillator",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_am_ump45_electrowave_light_large.98b6a5211b19bfeecb69d08cc7ebe6584cff353f.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const deserteagleprintstream = await prisma.item.create({
            data: {
              name: "Desert Eagle | Printstream",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_deag_printstream_light_large.b468e56607da39fb2c88e493456290fd5db174c8.png",
              rarity: "MYTHICAL",
              price: 882
            },
          });
          const ak47legionofanubis = await prisma.item.create({
            data: {
              name: "AK-47 | Legion of Anubis",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_anubis_light_large.77994b9d6a2f3020c0c5aa8c9c7f70357d460bff.png",
              rarity: "MYTHICAL",
              price: 230
            },
          });
          const glock18vogue = await prisma.item.create({
            data: {
              name: "Glock-18 | Vogue",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_eyecontact_light_large.fb7988d1d3d9ff159f81d3c0d9a2eacb976e2842.png",
              rarity: "RARE",
              price: 67
            },
          });
          const m4a4toothfairy = await prisma.item.create({
            data: {
              name: "M4A4 | Tooth Fairy",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_queenfairy_light_large.e5fb022145442cf85ba485d8c3cfd4f6391938e0.png",
              rarity: "RARE",
              price: 66
            },
          });
          const xm1014entombed = await prisma.item.create({
            data: {
              name: "XM1014 | Entombed",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_cu_xm1014_amulet_blue_light_large.1375467de64fba676253ac771bc9ce8f83b6a8f7.png",
              rarity: "RARE",
              price: 59
            },
          });
          const mag7monstercall = await prisma.item.create({
            data: {
              name: "MAG-7 | Monster Call",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_monster_call_light_large.8bd66022cda47ab85f73e765dc35526e6a2ce7f0.png",
              rarity: "UNCOMMON",
              price: 10
            },
          });
          const mac10allure = await prisma.item.create({
            data: {
              name: "MAC-10 | Allure",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_isoonna_light_large.004a4ddf7e9318cfbe98448b1c3b888fd4aff8dd.png",
              rarity: "UNCOMMON",
              price: 11
            },
          });
          const galilarconnexion = await prisma.item.create({
            data: {
              name: "Galil AR | Connexion",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_gs_galil_phoenix_light_large.62909a6e708a56e8679b9aa9225ba438b1539511.png",
              rarity: "UNCOMMON",
              price: 9
            },
          });
          const tec9brother = await prisma.item.create({
            data: {
              name: "Tec-9 | Brother",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_gs_tec9_guerilla_light_large.796534c0914361eec796eccd5558930096f75f96.png",
              rarity: "UNCOMMON",
              price: 10
            },
          });
          const mp5sdkitbash = await prisma.item.create({
            data: {
              name: "MP5-SD | Kitbash",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5sd_wasteland_legacy_light_large.95ba928dc2c910eb819194227aa9196fdf6d9eea.png",
              rarity: "UNCOMMON",
              price: 9
            },
          });
          const ssg08mainframe001 = await prisma.item.create({
            data: {
              name: "SSG 08 | Mainframe 001",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_mainframe_light_large.7d7d861da80bfecbe5141f19fbd32b95fb4496cf.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const ppbizonrunic = await prisma.item.create({
            data: {
              name: "PP-Bizon | Runic",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_gs_bizon_hellraider_light_large.c7aa487268b1e88b2e7fb1ff3c8c2eeeb24d4500.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const p2000gnarled = await prisma.item.create({
            data: {
              name: "P2000 | Gnarled",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_aq_p2000_lost_world_light_large.1d8b2a14b2b5b787ba450205bb3f133678dbe682.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const p90freight = await prisma.item.create({
            data: {
              name: "P90 | Freight",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_container_light_large.ee8d779318fc1367b1c63bbfa202d6261a0171c1.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const p250cassette = await prisma.item.create({
            data: {
              name: "P250 | Cassette",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_cassette_light_large.8e62f8c18421bceb377e95aa6a806b5767fcf731.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const negevultralight = await prisma.item.create({
            data: {
              name: "Negev | Ultralight",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_ultralight_light_large.f47680cfcd5c2eb1594fd5ae51ed9caf1bb6d9cd.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const sg553olrusty = await prisma.item.create({
            data: {
              name: "SG 553 | Ol' Rusty",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_gs_sg553_rusty_light_large.c5dd8204f44be6e68069633eb261b66641444ff6.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const m4a4neonoir = await prisma.item.create({
            data: {
              name: "M4A4 | Neo-Noir",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_neo_noir_light_large.b03bd6902c1d714af0bd4795dce8e653dd12dcc9.png",
              rarity: "MYTHICAL",
              price: 295
            },
          });
          const mp7bloodsport = await prisma.item.create({
            data: {
              name: "MP7 | Bloodsport",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_gs_mp7_bloodsport_light_large.ab5c304901ceb320482742b041815e7b5e3ccb95.png",
              rarity: "MYTHICAL",
              price: 31
            },
          });
          const uspscortex = await prisma.item.create({
            data: {
              name: "USP-S | Cortex",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_cut_light_large.573fc8c594667e378f3ed9890ce48bbb586e8de0.png",
              rarity: "RARE",
              price: 60
            },
          });
          const awpmortis = await prisma.item.create({
            data: {
              name: "AWP | Mortis",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_gs_awp_death_light_large.19bdee04e6a0b4a3b8f832fd8ea18fea1e558f2e.png",
              rarity: "RARE",
              price: 51
            },
          });
          const augstymphalian = await prisma.item.create({
            data: {
              name: "AUG | Stymphalian",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_gs_aug_stymphalian_birds_light_large.0840c45db138a07275c2250a0881fe752f27c601.png",
              rarity: "RARE",
              price: 47
            },
          });
          const glock18moonrise = await prisma.item.create({
            data: {
              name: "Glock-18 | Moonrise",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_aa_glock_18_urban_moon_fever_light_large.a0227f81e44dba68abbe595d427d62f9f90da99d.png",
              rarity: "UNCOMMON",
              price: 9
            },
          });
          const mag7swag7 = await prisma.item.create({
            data: {
              name: "MAG-7 | SWAG-7",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_aq_mag7_swag7_light_large.20341e396db88a5ecde84f8b803a500f4aec3b55.png",
              rarity: "UNCOMMON",
              price: 9
            },
          });
          const ump45arcticwolf = await prisma.item.create({
            data: {
              name: "UMP-45 | Arctic Wolf",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump45_white_fang_light_large.f63a10d5ee18e3045adfdcf963b9067b3b0a6b48.png",
              rarity: "UNCOMMON",
              price: 7
            },
          });
          const novawildsix = await prisma.item.create({
            data: {
              name: "Nova | Wild Six",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_gs_nova_anchorite_light_large.419b869b5316b67a6ed673edafd088a9d16c066c.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const negevlionfish = await prisma.item.create({
            data: {
              name: "Negev | Lionfish",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_sp_negev_lionfish_light_large.f8326a67617c5138ab8b6f6afc81375fbd091033.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const r8revolvergrip = await prisma.item.create({
            data: {
              name: "R8 Revolver | Grip",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_revolver_tread_light_large.7c3bd1302f62853e5694aec2d70cf1c7140b3fc0.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const p2000urbanhazard = await prisma.item.create({
            data: {
              name: "P2000 | Urban Hazard",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2000_urban_hazard_light_large.17657c4e9c3379f634c78e4d02ca9e9facbe9edb.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const fivesevenflametest = await prisma.item.create({
            data: {
              name: "Five-SeveN | Flame Test",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_gs_fiveseven_hot_rod_violet_light_large.66cb3d6336f4ea07a7f4ebbd3192c59f0afca3fc.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const mp9blacksand = await prisma.item.create({
            data: {
              name: "MP9 | Black Sand",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_black_sand_light_large.37dce08f403ec73c1e16b3dc46068b22293e9514.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const xm1014oxideblaze = await prisma.item.create({
            data: {
              name: "XM1014 | Oxide Blaze",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_cu_xm1014_oxide_blaze_light_large.691be80b706e1ea4faf9b5c9bec40b3611b1d440.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const ppbizonnightriot = await prisma.item.create({
            data: {
              name: "PP-Bizon | Night Riot",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_riot_light_large.2f0848b27a917287062306f49870cf9ec06bbbbe.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const sg553aloha = await prisma.item.create({
            data: {
              name: "SG 553 | Aloha",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_sp_sg533_aloha_light_large.03aa863680ab2223924ae9cbe8b7662a84fb162c.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const awplightningstrike = await prisma.item.create({
            data: {
              name: "AWP | Lightning Strike",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_am_lightning_awp_light_large.3761894103ee0fec90af459928635933ba27e36d.png",
              rarity: "MYTHICAL",
              price: 3765
            },
          });
          const ak47casehardened = await prisma.item.create({
            data: {
              name: "AK-47 | Case Hardened",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_aq_oiled_light_large.92c8d125e4e54758d37e946496030e9a18833b58.png",
              rarity: "RARE",
              price: 2359
            },
          });
          const deserteaglehypnotic = await prisma.item.create({
            data: {
              name: "Desert Eagle | Hypnotic",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aa_vertigo_light_large.85a16e4bfb8b1cc6393ca5d0c6d3a1e6e6023323.png",
              rarity: "RARE",
              price: 893
            },
          });
          const glock18dragontattoo = await prisma.item.create({
            data: {
              name: "Glock-18 | Dragon Tattoo",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_am_dragon_glock_light_large.e42a72a19a2239c992573b88179897af37c7f849.png",
              rarity: "UNCOMMON",
              price: 403
            },
          });
          const uspsdarkwater = await prisma.item.create({
            data: {
              name: "USP-S | Dark Water",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_am_zebra_dark_light_large.add709b2eb683853f9508ddf9c22503d7efb9925.png",
              rarity: "UNCOMMON",
              price: 324
            },
          });
          const m4a1sdarkwater = await prisma.item.create({
            data: {
              name: "M4A1-S | Dark Water",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_am_zebra_dark_light_large.f484368a478f5e02d1b9d5e2816354fe705503f3.png",
              rarity: "UNCOMMON",
              price: 353
            },
          });
          const sg553ultraviolet = await prisma.item.create({
            data: {
              name: "SG 553 | Ultraviolet",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_so_purple_light_large.44483356b334466acb6e781057d8f96a73cb376f.png",
              rarity: "COMMON",
              price: 168
            },
          });
          const mp7skulls = await prisma.item.create({
            data: {
              name: "MP7 | Skulls",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_hy_skulls_light_large.3e38912bdbea8a2b03b149e619f9f141e54facfd.png",
              rarity: "COMMON",
              price: 73
            },
          });
          const augwings = await prisma.item.create({
            data: {
              name: "AUG | Wings",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_hy_feathers_aug_light_large.e1419b52a3ddd4bed5328f438ea5dea07b0ba248.png",
              rarity: "COMMON",
              price: 73
            },
          });
          const p90deathbykitty = await prisma.item.create({
            data: {
              name: "P90 | Death by Kitty",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_catskulls_p90_light_large.0ff2c5c53a691e28de02cd7b40e395d53d8c6826.png",
              rarity: "MYTHICAL",
              price: 342
            },
          });
          const awpboom = await prisma.item.create({
            data: {
              name: "AWP | BOOM",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_hy_blam_simple_light_large.ed114947481e0366b2cde092a8ddac4d7250775b.png",
              rarity: "RARE",
              price: 3568
            },
          });
          const ak47redlaminate = await prisma.item.create({
            data: {
              name: "AK-47 | Red Laminate",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_hy_ak47lam_light_large.199620e808579639264cf753d0650721b4bc1f37.png",
              rarity: "RARE",
              price: 1727
            },
          });
          const galilarorangeddpat = await prisma.item.create({
            data: {
              name: "Galil AR | Orange DDPAT",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_hy_ddpat_orange_light_large.8499a023e61f6d3f7d03012521422bedaedd6c2b.png",
              rarity: "UNCOMMON",
              price: 256
            },
          });
          const p250splash = await prisma.item.create({
            data: {
              name: "P250 | Splash",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_sp_splash_p250_light_large.9270d8d14c39aef83407ea50e51f0eb89c17263d.png",
              rarity: "UNCOMMON",
              price: 178
            },
          });
          const sawedofforangeddpat = await prisma.item.create({
            data: {
              name: "Sawed-Off | Orange DDPAT",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_hy_ddpat_orange_light_large.04fe163870ad65e17d8e4dd9403180ed3c5a218d.png",
              rarity: "UNCOMMON",
              price: 186
            },
          });
          const m4a4fadedzebra = await prisma.item.create({
            data: {
              name: "M4A4 | Faded Zebra",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_sp_zebracam_bw_light_large.de08ef2a6d7524e682118cef5d12124c5156dfa8.png",
              rarity: "COMMON",
              price: 54
            },
          });
          const mag7memento = await prisma.item.create({
            data: {
              name: "MAG-7 | Memento",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_hy_icosahedron_light_large.f7ea8cca0b48a0463d0877af9c94e7f54d0f1d79.png",
              rarity: "COMMON",
              price: 20
            },
          });
          const famasdoomkitty = await prisma.item.create({
            data: {
              name: "FAMAS | Doomkitty",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_hy_doomkitty_light_large.c9dd7b8fb1a44d5691684aae406d360433550468.png",
              rarity: "COMMON",
              price: 14
            },
          });
          const m4a4xray = await prisma.item.create({
            data: {
              name: "M4A4 | X-Ray",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_xray_m4_light_large.e929bb3998df4902c2bd6f6fbb775cec071558ba.png",
              rarity: "MYTHICAL",
              price: 186
            },
          });
          const deserteaglecobaltdisruption = await prisma.item.create({
            data: {
              name: "Desert Eagle | Cobalt Disruption",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_am_ddpatdense_peacock_light_large.a486db3160bcdcf6bc5a1d8179c450b02f620151.png",
              rarity: "RARE",
              price: 513
            },
          });
          const awpelectrichive = await prisma.item.create({
            data: {
              name: "AWP | Electric Hive",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_hy_hive_light_large.2189958e2afa2c69cfcdd807124c279a0e645625.png",
              rarity: "RARE",
              price: 424
            },
          });
          const famasafterimage = await prisma.item.create({
            data: {
              name: "FAMAS | Afterimage",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_cu_broken_path_famas_light_large.5d45539735d838ffefd26467a8c767b71807c785.png",
              rarity: "RARE",
              price: 276
            },
          });
          const ak47bluelaminate = await prisma.item.create({
            data: {
              name: "AK-47 | Blue Laminate",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_hy_ak47lam_blue_light_large.9f8ec5103efa5b7a0b3919a13b4de78e1bd612a0.png",
              rarity: "UNCOMMON",
              price: 76
            },
          });
          const p90blindspot = await prisma.item.create({
            data: {
              name: "P90 | Blind Spot",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_hy_modspots_light_large.a702b8feaf0e2568e60efb2ab722819b0521ea4b.png",
              rarity: "UNCOMMON",
              price: 65
            },
          });
          const galilarbluetitanium = await prisma.item.create({
            data: {
              name: "Galil AR | Blue Titanium",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_an_titanium30v_light_large.4264e8ec1cedb3bce31a89c934c630bd56d480c1.png",
              rarity: "COMMON",
              price: 12
            },
          });
          const p250steeldisruption = await prisma.item.create({
            data: {
              name: "P250 | Steel Disruption",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_am_ddpatdense_silver_light_large.36220b384099ed61c2b9ba64af899b892e4a4c58.png",
              rarity: "COMMON",
              price: 10
            },
          });
          const novaghostcamo = await prisma.item.create({
            data: {
              name: "Nova | Ghost Camo",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_sp_camo_wood_blue_light_large.d63e06a38ef396a945defd7c1ad9da9ba79fe60d.png",
              rarity: "COMMON",
              price: 9
            },
          });
          const fivesevennightshade = await prisma.item.create({
            data: {
              name: "Five-SeveN | Nightshade",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_hy_flowers_light_large.4f94edf6ac032c15fedafa6ba1f2425a4ca8bded.png",
              rarity: "COMMON",
              price: 11
            },
          });
          const g3sg1azurezebra = await prisma.item.create({
            data: {
              name: "G3SG1 | Azure Zebra",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_sp_zebracam_blue_light_large.42199f9c4c0bd1ff9f569d6e7348c5cedf4630f5.png",
              rarity: "COMMON",
              price: 9
            },
          });
          const ppbizonwatersigil = await prisma.item.create({
            data: {
              name: "PP-Bizon | Water Sigil",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_hy_water_crest_light_large.c4d0aad9cb87870f84f3709ff3b8ecc9fe489d89.png",
              rarity: "COMMON",
              price: 13
            },
          });
          const ssg08bloodinthewater = await prisma.item.create({
            data: {
              name: "SSG 08 | Blood in the Water",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_shark_light_large.00812c20a896847013b0a2913a166f6ba220a258.png",
              rarity: "MYTHICAL",
              price: 424
            },
          });
          const p90coldblooded = await prisma.item.create({
            data: {
              name: "P90 | Cold Blooded",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_am_slither_p90_light_large.583a90c66858cf0cc20253d2f4a0be1168eadbca.png",
              rarity: "RARE",
              price: 308
            },
          });
          const uspsserum = await prisma.item.create({
            data: {
              name: "USP-S | Serum",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_am_electric_red_light_large.ef8005beba74458fabbe8f664e0b210b2ef3a007.png",
              rarity: "RARE",
              price: 280
            },
          });
          const fivesevencasehardened = await prisma.item.create({
            data: {
              name: "Five-SeveN | Case Hardened",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_aq_oiled_light_large.fdaa095453965b2be93f8aa90ae469d926fac4e7.png",
              rarity: "UNCOMMON",
              price: 140
            },
          });
          const mp9hypnotic = await prisma.item.create({
            data: {
              name: "MP9 | Hypnotic",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_aa_vertigo_light_large.41a7195e0a6ba44c2fc64d64bee0635444b0c569.png",
              rarity: "UNCOMMON",
              price: 65
            },
          });
          const dualberettashemoglobin = await prisma.item.create({
            data: {
              name: "Dual Berettas | Hemoglobin",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_am_ossify_red_light_large.9da21d3dc7b64952d853818075f524a9e4c1dfd3.png",
              rarity: "UNCOMMON",
              price: 53
            },
          });
          const novagraphite = await prisma.item.create({
            data: {
              name: "Nova | Graphite",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_am_crumple_light_large.e46bab0dc8f8fe10b83c18ed9f9d9945352781af.png",
              rarity: "UNCOMMON",
              price: 43
            },
          });
          const m4a1sbloodtiger = await prisma.item.create({
            data: {
              name: "M4A1-S | Blood Tiger",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_hy_redtiger_light_large.0b40a51b0020fa1781ddb7368e3b39c03263b2dd.png",
              rarity: "COMMON",
              price: 22
            },
          });
          const scar20crimsonweb = await prisma.item.create({
            data: {
              name: "SCAR-20 | Crimson Web",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_hy_webs_darker_light_large.8e06e878c22b82c6bb1045f26e1bbc1926faecf2.png",
              rarity: "COMMON",
              price: 87
            },
          });
          const tec9bluetitanium = await prisma.item.create({
            data: {
              name: "Tec-9 | Blue Titanium",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_an_titanium30v_light_large.76078065235a996df8184b684159dfee7efcd530.png",
              rarity: "COMMON",
              price: 18
            },
          });
          const p250hive = await prisma.item.create({
            data: {
              name: "P250 | Hive",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_hy_redhex_light_large.099092ccf56439b922b51569ce87f2f908abcc19.png",
              rarity: "COMMON",
              price: 18
            },
          });
          const famashexane = await prisma.item.create({
            data: {
              name: "FAMAS | Hexane",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_hy_bluehex_light_large.fe87763b33ea8963cf87e9b8fd7b9bfc9014d747.png",
              rarity: "COMMON",
              price: 16
            },
          });
          const cz75autovictoria = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Victoria",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_aq_etched_cz75_light_large.5fa7e4f56600efeaceb99a948c6fa5dc3648a3b9.png",
              rarity: "MYTHICAL",
              price: 67
            },
          });
          const p250undertow = await prisma.item.create({
            data: {
              name: "P250 | Undertow",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_am_p250_beaded_paint_light_large.2ddd1d4b6dd6fa2082001802a60acfa9daba722d.png",
              rarity: "RARE",
              price: 282
            },
          });
          const cz75autothefuschiaisnow = await prisma.item.create({
            data: {
              name: "CZ75-Auto | The Fuschia Is Now",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_am_fuschia_light_large.9ca4218835426c791482a3d7cc3b00d00c958d40.png",
              rarity: "RARE",
              price: 272
            },
          });
          const fivesevencoppergalaxy = await prisma.item.create({
            data: {
              name: "Five-SeveN | Copper Galaxy",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_am_copper_flecks_light_large.d2af814b76763880470bc7039d5569eb74b26978.png",
              rarity: "UNCOMMON",
              price: 89
            },
          });
          const deserteagleheirloom = await prisma.item.create({
            data: {
              name: "Desert Eagle | Heirloom",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aq_engraved_deagle_light_large.804a1a01a29bf80673b739f3eb220272a6838193.png",
              rarity: "UNCOMMON",
              price: 79
            },
          });
          const cz75autotreadplate = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Tread Plate",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_am_diamond_plate_light_large.ef425c82bae5d971bd5e1e9c54b9cd2f992e4e16.png",
              rarity: "UNCOMMON",
              price: 31
            },
          });
          const tec9titaniumbit = await prisma.item.create({
            data: {
              name: "Tec-9 | Titanium Bit",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_am_fluted_tec9_light_large.bfb4506150a675b24d3178f457507db2903364d6.png",
              rarity: "UNCOMMON",
              price: 32
            },
          });
          const uspsstainless = await prisma.item.create({
            data: {
              name: "USP-S | Stainless",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_aq_usp_stainless_light_large.3f6edb8ebd4138742504859e0d3e7c51a23c39db.png",
              rarity: "COMMON",
              price: 156
            },
          });
          const glock18bluefissure = await prisma.item.create({
            data: {
              name: "Glock-18 | Blue Fissure",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_hy_craquelure_light_large.8e97eb17a01e73c47a8987685d740b344aeb2cb8.png",
              rarity: "COMMON",
              price: 66
            },
          });
          const cz75autocrimsonweb = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Crimson Web",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_hy_webs_light_large.2093b43aefa82ee6713c472384ea283fdd44f023.png",
              rarity: "COMMON",
              price: 69
            },
          });
          const dualberettaspanther = await prisma.item.create({
            data: {
              name: "Dual Berettas | Panther",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_so_panther_light_large.019431b3fca18b027d07fe29d0ee7bf88df75576.png",
              rarity: "COMMON",
              price: 11
            },
          });
          const p2000redfragcam = await prisma.item.create({
            data: {
              name: "P2000 | Red FragCam",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_hy_poly_camo_light_large.e4c6576e012974ba60e6dbc70fe5cd1cacc30011.png",
              rarity: "COMMON",
              price: 9
            },
          });
          const ak47jaguar = await prisma.item.create({
            data: {
              name: "AK-47 | Jaguar",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_panther_ak47_light_large.6b7c82083b5fbb71631ad7961ac1543d1fc2a5cd.png",
              rarity: "MYTHICAL",
              price: 1094
            },
          });
          const m4a4bulletrain = await prisma.item.create({
            data: {
              name: "M4A4 | Bullet Rain",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_bullet_rain_m4a1_light_large.4b359387b8abcdb0ae92134ba0f2106c405d9222.png",
              rarity: "MYTHICAL",
              price: 570
            },
          });
          const novabloomstick = await prisma.item.create({
            data: {
              name: "Nova | Bloomstick",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_spring_nova_light_large.0be95a01dd54b579186464d0533c5195ffb14a8f.png",
              rarity: "RARE",
              price: 267
            },
          });
          const awpcorticera = await prisma.item.create({
            data: {
              name: "AWP | Corticera",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_favela_awp_light_large.4329c047ea1899f3846a1a81539ba2a27665a54e.png",
              rarity: "RARE",
              price: 282
            },
          });
          const augbengaltiger = await prisma.item.create({
            data: {
              name: "AUG | Bengal Tiger",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_hy_tiger_light_large.d2fe957d3903dc5779403ed1c95947e18fa7e6fd.png",
              rarity: "RARE",
              price: 256
            },
          });
          const p2000corticera = await prisma.item.create({
            data: {
              name: "P2000 | Corticera",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_favela_p2000_light_large.cc40db4d5048c7ddcfb52642d954e91400e59290.png",
              rarity: "RARE",
              price: 85
            },
          });
          const deserteaglecrimsonweb = await prisma.item.create({
            data: {
              name: "Desert Eagle | Crimson Web",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_hy_webs_darker_light_large.7b9cb19bac52ebe7c49e3abdfb0c400ea252fef8.png",
              rarity: "UNCOMMON",
              price: 770
            },
          });
          const mp7oceanfoam = await prisma.item.create({
            data: {
              name: "MP7 | Ocean Foam",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_am_ossify_blue_light_large.b2c077afc23ddb48381629155713816dbf09fb84.png",
              rarity: "UNCOMMON",
              price: 26
            },
          });
          const ppbizonbluestreak = await prisma.item.create({
            data: {
              name: "PP-Bizon | Blue Streak",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_hy_splatter_light_large.7a7417d95485ceb2148bdd3d228219307082ea8a.png",
              rarity: "UNCOMMON",
              price: 76
            },
          });
          const glock18steeldisruption = await prisma.item.create({
            data: {
              name: "Glock-18 | Steel Disruption",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_am_ddpatdense_silver_light_large.4d83c0a0b958bb15f694c7047996ece59f4be05a.png",
              rarity: "UNCOMMON",
              price: 23
            },
          });
          const p90virus = await prisma.item.create({
            data: {
              name: "P90 | Virus",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_hy_zombie_light_large.7f66b30e6902ae7722b7951fd7446ae7e9b3880e.png",
              rarity: "UNCOMMON",
              price: 22
            },
          });
          const mac10ultraviolet = await prisma.item.create({
            data: {
              name: "MAC-10 | Ultraviolet",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_so_purple_light_large.c4e2252fe50aab42b6dcd871f33786f68e6261ea.png",
              rarity: "COMMON",
              price: 106
            },
          });
          const uspsbloodtiger = await prisma.item.create({
            data: {
              name: "USP-S | Blood Tiger",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_hy_redtiger_light_large.5d778f6030de49296f349081781d84ef215a9b90.png",
              rarity: "COMMON",
              price: 17
            },
          });
          const negevbratatat = await prisma.item.create({
            data: {
              name: "Negev | Bratatat",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_bratatat_negev_light_large.b7589c335fb7066d53b1897e000f031d316641e6.png",
              rarity: "COMMON",
              price: 28
            },
          });
          const cz75autohexane = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Hexane",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_hy_bluehex_light_large.032e4b0999830a45d7439d07faef66b8299a105f.png",
              rarity: "COMMON",
              price: 15
            },
          });
          const ssg08darkwater = await prisma.item.create({
            data: {
              name: "SSG 08 | Dark Water",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_am_zebra_dark_light_large.5636371696eee32d9a3e588ff3b42f6b33776d99.png",
              rarity: "COMMON",
              price: 8
            },
          });
          const xm1014redpython = await prisma.item.create({
            data: {
              name: "XM1014 | Red Python",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_hy_snakeskin_red_light_large.d019a25e10fe53f2edf2958fb322c59621abc4de.png",
              rarity: "COMMON",
              price: 7
            },
          });
          const ak47asiimov = await prisma.item.create({
            data: {
              name: "AK-47 | Asiimov",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_asiimov_light_large.665fc3b83c8046398787a57d2ef7a9d938244820.png",
              rarity: "MYTHICAL",
              price: 1420
            },
          });
          const awpneonoir = await prisma.item.create({
            data: {
              name: "AWP | Neo-Noir",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_neonoir_light_large.c5dd57f8555d13c41f08024f27a9314074b698af.png",
              rarity: "MYTHICAL",
              price: 271
            },
          });
          const mp5sdphosphor = await prisma.item.create({
            data: {
              name: "MP5-SD | Phosphor",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5_festival_drip_light_large.c71af0a784e5ecd6e5d5f2f71961be155e283cde.png",
              rarity: "RARE",
              price: 58
            },
          });
          const deserteaglemechaindustries = await prisma.item.create({
            data: {
              name: "Desert Eagle | Mecha Industries",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_gs_deagle_mecha_light_large.e08c1fd8709f6b368956c41c68b17c15ff635635.png",
              rarity: "RARE",
              price: 60
            },
          });
          const ump45momentum = await prisma.item.create({
            data: {
              name: "UMP-45 | Momentum",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump_arrows_light_large.83f1e692bdafa92f29ce15aebb02502c9e70f276.png",
              rarity: "RARE",
              price: 52
            },
          });
          const uspsflashback = await prisma.item.create({
            data: {
              name: "USP-S | Flashback",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_flashback_light_large.47e10129af33303bac557560400c33e4fe555680.png",
              rarity: "UNCOMMON",
              price: 7
            },
          });
          const p250nevermore = await prisma.item.create({
            data: {
              name: "P250 | Nevermore",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_aa_p250_gravediggers_light_large.df680e4648f5e08ec6e92ed36a5b9c05ae8bc5f4.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const mac10pipedown = await prisma.item.create({
            data: {
              name: "MAC-10 | Pipe Down",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_gs_mac10_exo_pipes_light_large.355aad3fa1602f8e682a5663f72b12feba0d4cf2.png",
              rarity: "UNCOMMON",
              price: 9
            },
          });
          const galilarsignal = await prisma.item.create({
            data: {
              name: "Galil AR | Signal",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_hy_galil_signal_red_light_large.d7c26f54fd72ec451094ea7791e921346e013197.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const g3sg1scavenger = await prisma.item.create({
            data: {
              name: "G3SG1 | Scavenger",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_savage_light_large.e452574f580f51b1da6312c0f80a0dc07e073d8b.png",
              rarity: "UNCOMMON",
              price: 7
            },
          });
          const m4a4magnesium = await prisma.item.create({
            data: {
              name: "M4A4 | Magnesium",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_gs_m4a4_chopper_ghost_light_large.374913da49233223de4ca1ff09a20cc2a7a94288.png",
              rarity: "COMMON",
              price: 9
            },
          });
          const tec9fubar = await prisma.item.create({
            data: {
              name: "Tec-9 | Fubar",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_gs_tec9_fubar_light_large.00f64007983561f57c808b23e9260ebea6437bc7.png",
              rarity: "COMMON",
              price: 6
            },
          });
          const glock18oxideblaze = await prisma.item.create({
            data: {
              name: "Glock-18 | Oxide Blaze",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock18_corroden_light_large.68906a0523399b599555746b51db2ffac29c5db5.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const novawoodfired = await prisma.item.create({
            data: {
              name: "Nova | Wood Fired",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_gs_nova_hunter_brute_light_large.8e2520f25098056ccd03b679859458fdc006c0a7.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const mp9modestthreat = await prisma.item.create({
            data: {
              name: "MP9 | Modest Threat",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_gs_mp9_colony01_light_large.f8d9792131b786025a960ddeda2eeb77f97c55e3.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const sawedoffblacksand = await prisma.item.create({
            data: {
              name: "Sawed-Off | Black Sand",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_black_sand_light_large.7ed9ce5083489c0fdf92814f0ebf6945ec6f29d4.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const sg553dangerclose = await prisma.item.create({
            data: {
              name: "SG 553 | Danger Close",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_gs_sg553_over_heated_light_large.aba3188360b2a87b8687d73af6c2e3034290402c.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const awpwildfire = await prisma.item.create({
            data: {
              name: "AWP | Wildfire",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_wildfire_light_large.61e36b12eb45a39836cdb5badb5a536737684861.png",
              rarity: "MYTHICAL",
              price: 1161
            },
          });
          const famascommemoration = await prisma.item.create({
            data: {
              name: "FAMAS | Commemoration",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_gs_famas_legacy_gold_light_large.34013884c12276d1c83ceb4ea9fb83428df02920.png",
              rarity: "MYTHICAL",
              price: 190
            },
          });
          const mp9hydra = await prisma.item.create({
            data: {
              name: "MP9 | Hydra",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_hydra_light_large.b7763a811b3bc9d19d04502fba0edc6cbe355766.png",
              rarity: "RARE",
              price: 96
            },
          });
          const augdeathbypuppy = await prisma.item.create({
            data: {
              name: "AUG | Death by Puppy",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_am_aug_death_by_doggy_light_large.eb9b56273d30c50b93d2cb0a2e2843b525012878.png",
              rarity: "RARE",
              price: 75
            },
          });
          const p90nostalgia = await prisma.item.create({
            data: {
              name: "P90 | Nostalgia",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90_nostalgia_light_large.8d1cfe3582915ab9702b57e1376eb0d0ffab2331.png",
              rarity: "RARE",
              price: 77
            },
          });
          const mp5sdagent = await prisma.item.create({
            data: {
              name: "MP5-SD | Agent",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5_fbi_light_large.98c397d31feb201fd3d754a2e0b1d1508d75b2b9.png",
              rarity: "UNCOMMON",
              price: 15
            },
          });
          const ump45plastique = await prisma.item.create({
            data: {
              name: "UMP-45 | Plastique",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump_bomb_light_large.48162f997295cb72c35acb2eafbef620b60a1659.png",
              rarity: "UNCOMMON",
              price: 10
            },
          });
          const fivesevenbuddy = await prisma.item.create({
            data: {
              name: "Five-SeveN | Buddy",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_gsg9_light_large.870dec48f951d3a6420bdb332f0acd25ee1254b1.png",
              rarity: "UNCOMMON",
              price: 10
            },
          });
          const p250inferno = await prisma.item.create({
            data: {
              name: "P250 | Inferno",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_gs_p250_inferno_light_large.89b435cf4b1eab8a9fed8f7aa19228fe9421b4eb.png",
              rarity: "UNCOMMON",
              price: 10
            },
          });
          const m249aztec = await prisma.item.create({
            data: {
              name: "M249 | Aztec",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_aq_m249_aztec_light_large.81173c5b61be806039e643a0c273e4dce33bd5ee.png",
              rarity: "UNCOMMON",
              price: 10
            },
          });
          const glock18sacrifice = await prisma.item.create({
            data: {
              name: "Glock-18 | Sacrifice",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_hero_light_large.7b0f5975c7e0ba3ce1694c4795520184fc56c367.png",
              rarity: "COMMON",
              price: 7
            },
          });
          const famasdecommissioned = await prisma.item.create({
            data: {
              name: "FAMAS | Decommissioned",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_cu_famas_nuke_tension_light_large.0cf9412e22f626e675b76506cf2f240a64a05b22.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const dualberettaselite16 = await prisma.item.create({
            data: {
              name: "Dual Berettas | Elite 1.6",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_gs_dual_elites_classic_light_large.a899ad9f2e1bb8522fdeb022c99c64c2456826d1.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const mac10classiccrate = await prisma.item.create({
            data: {
              name: "MAC-10 | Classic Crate",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_gs_mac10_dust_crate_light_large.988816a75bc41f34cb18aff91ce6256299a9a52c.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const tec9flashout = await prisma.item.create({
            data: {
              name: "Tec-9 | Flash Out",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_flash_light_large.977076b5fe7a2fdb9337de2a3ff7c4b867e9b674.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const mag7popdog = await prisma.item.create({
            data: {
              name: "MAG-7 | Popdog",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_gs_mag7_popdog_light_large.3c45fd23cd1947bb9b1747e36823980a44feaed4.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const scar20assault = await prisma.item.create({
            data: {
              name: "SCAR-20 | Assault",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_cu_scar_assault_light_large.57aa89979dfaab334bb3e91c09f54269e98cf47a.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const ak47aquamarinerevenge = await prisma.item.create({
            data: {
              name: "AK-47 | Aquamarine Revenge",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_courage_alt_light_large.27e4e7d38dc2ce36ffe86bd6ec65d6f525751eaa.png",
              rarity: "MYTHICAL",
              price: 766
            },
          });
          const awphyperbeast = await prisma.item.create({
            data: {
              name: "AWP | Hyper Beast",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_hyper_beast_light_large.55efa5e3094af71ca6a56b6eac96cb022f7ecd8b.png",
              rarity: "MYTHICAL",
              price: 728
            },
          });
          const mp7nemesis = await prisma.item.create({
            data: {
              name: "MP7 | Nemesis",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7_nemsis_light_large.72074e71a27827f41dc5d6f511d2f003c1b60d8a.png",
              rarity: "RARE",
              price: 76
            },
          });
          const sg553cyrex = await prisma.item.create({
            data: {
              name: "SG 553 | Cyrex",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_cyrex_light_large.ef2fb1e4d88e8eb7c0efe12e231a773ca1792a4d.png",
              rarity: "RARE",
              price: 95
            },
          });
          const cz75autoyellowjacket = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Yellow Jacket",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_cu_cz75a_chastizer_light_large.d3234c712c3c068adbbfd5718c468c778f2351dd.png",
              rarity: "RARE",
              price: 95
            },
          });
          const m4a4evildaimyo = await prisma.item.create({
            data: {
              name: "M4A4 | Evil Daimyo",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_evil_daimyo_light_large.c208ba252c0d8902caa973a634cbfa945508a716.png",
              rarity: "UNCOMMON",
              price: 36
            },
          });
          const negevloudmouth = await prisma.item.create({
            data: {
              name: "Negev | Loudmouth",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_annihilator_light_large.421039357ccbbcb9ba1456caa1ed2ae4829b5495.png",
              rarity: "UNCOMMON",
              price: 24
            },
          });
          const p2000handgun = await prisma.item.create({
            data: {
              name: "P2000 | Handgun",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_aq_p2000_boom_light_large.39f01b0b86b795bea56300432fecfbf93415ee58.png",
              rarity: "UNCOMMON",
              price: 22
            },
          });
          const mp9rubypoisondart = await prisma.item.create({
            data: {
              name: "MP9 | Ruby Poison Dart",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_am_mp9_nitrogen_light_large.3a0b5a7cd31a7cfd5f0d90b9a0a1dbfcdb642cca.png",
              rarity: "UNCOMMON",
              price: 14
            },
          });
          const famasneuralnet = await prisma.item.create({
            data: {
              name: "FAMAS | Neural Net",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_am_famas_dots_light_large.dc6f19278bac52ea06b8e3576fa324624f2f82b4.png",
              rarity: "UNCOMMON",
              price: 11
            },
          });
          const galilarrocketpop = await prisma.item.create({
            data: {
              name: "Galil AR | Rocket Pop",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_galilar_particles_light_large.8732f64d53dbc9b0c732641655d4f99124d8cacc.png",
              rarity: "COMMON",
              price: 32
            },
          });
          const uspstorque = await prisma.item.create({
            data: {
              name: "USP-S | Torque",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_progressiv_light_large.91cde781cd0c8502bbbb66f37cc7f1baf2a10c05.png",
              rarity: "COMMON",
              price: 9
            },
          });
          const glock18bunsenburner = await prisma.item.create({
            data: {
              name: "Glock-18 | Bunsen Burner",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_aq_glock18_flames_blue_light_large.5fed23d5a32793c25914eeb99b45f1a2b0cb9d6c.png",
              rarity: "COMMON",
              price: 13
            },
          });
          const p90elitebuild = await prisma.item.create({
            data: {
              name: "P90 | Elite Build",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90_mastery_light_large.f58ff489c92ffa8c6e4c42814bad01c352df0ab6.png",
              rarity: "COMMON",
              price: 7
            },
          });
          const novaranger = await prisma.item.create({
            data: {
              name: "Nova | Ranger",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_nova_ranger_light_large.e3e9d3d47d5707092223a268ef59adb53ce76278.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const ump45riot = await prisma.item.create({
            data: {
              name: "UMP-45 | Riot",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump45_uproar_light_large.04cd84320c4370bced14a3989b0e141cff67ec88.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const m4a4buzzkill = await prisma.item.create({
            data: {
              name: "M4A4 | Buzz Kill",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_gs_m4a4_sector_light_large.43ec111ef558f74c49e31621d455f93ba414714e.png",
              rarity: "MYTHICAL",
              price: 360
            },
          });
          const ssg08dragonfire = await prisma.item.create({
            data: {
              name: "SSG 08 | Dragonfire",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_dragonfire_scope_light_large.482858c9d088454b42e53f02d927a8203c69dfc2.png",
              rarity: "MYTHICAL",
              price: 159
            },
          });
          const famasmechaindustries = await prisma.item.create({
            data: {
              name: "FAMAS | Mecha Industries",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_gs_famas_mecha_light_large.c26d3fccc156fe26ba3325ed73b29092b3e18093.png",
              rarity: "RARE",
              price: 48
            },
          });
          const sawedoffwastelandprincess = await prisma.item.create({
            data: {
              name: "Sawed-Off | Wasteland Princess",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_wp_sawedoff_light_large.5c3f71cb929e5d2922b25c7644d0ff1981d92fa0.png",
              rarity: "RARE",
              price: 41
            },
          });
          const p90shallowgrave = await prisma.item.create({
            data: {
              name: "P90 | Shallow Grave",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_shallow_grave_light_large.948019f5ffb76bcc24cfede19c992ffb34e3ecaf.png",
              rarity: "RARE",
              price: 49
            },
          });
          const uspscyrex = await prisma.item.create({
            data: {
              name: "USP-S | Cyrex",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_cyrex_light_large.caef5e9fa7e19c3a4fd6f135d7ae122459b348d0.png",
              rarity: "UNCOMMON",
              price: 23
            },
          });
          const m4a1sflashback = await prisma.item.create({
            data: {
              name: "M4A1-S | Flashback",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1_flashback_light_large.5e6c2d582d33006425b61dc0e0e8c28ecda9f853.png",
              rarity: "UNCOMMON",
              price: 26
            },
          });
          const dualberettasroyalconsorts = await prisma.item.create({
            data: {
              name: "Dual Berettas | Royal Consorts",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_gs_dual_berettas_golden_venice_light_large.23d73db6cf2b2a7af26414d26373171dd3be06b1.png",
              rarity: "UNCOMMON",
              price: 19
            },
          });
          const novagila = await prisma.item.create({
            data: {
              name: "Nova | Gila",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_am_nova_sand_light_large.0dcb0fc065477e01afda8ecbc83208551a5f2e97.png",
              rarity: "UNCOMMON",
              price: 7
            },
          });
          const g3sg1stinger = await prisma.item.create({
            data: {
              name: "G3SG1 | Stinger",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_viper_yellow_light_large.5a77c59b8c295d2e10f27b8372a146e973ddfb25.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const glock18ironwork = await prisma.item.create({
            data: {
              name: "Glock-18 | Ironwork",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_aq_glock_dark-fall_light_large.ac35c22bc50660c89ecfe7654ee93bb9f00bd6f4.png",
              rarity: "COMMON",
              price: 8
            },
          });
          const mp7cirrus = await prisma.item.create({
            data: {
              name: "MP7 | Cirrus",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_gs_final_pooldeadv2_light_large.30ea2c8c934b49fa0a5e2b8c50ec880c10e2f295.png",
              rarity: "COMMON",
              price: 5
            },
          });
          const p2000turf = await prisma.item.create({
            data: {
              name: "P2000 | Turf",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_gs_p2000-sport_light_large.96ad9b76130cea95ec2f1bc61ee428e6a998a398.png",
              rarity: "COMMON",
              price: 5
            },
          });
          const galilarblacksand = await prisma.item.create({
            data: {
              name: "Galil AR | Black Sand",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_galil_ar-camo_light_large.63272b54e93d40433f8ceec41efec2004d51941d.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const mag7sonar = await prisma.item.create({
            data: {
              name: "MAG-7 | Sonar",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_am_mag7_malform_light_large.8a87c99550a4f609e7357bb4f63facf86279afca.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const mp9sandscale = await prisma.item.create({
            data: {
              name: "MP9 | Sand Scale",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_aa_hide-mp9_light_large.77be0c0ed8276383c6a2d42842df3108bbdd173b.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const cz75autopolymer = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Polymer",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_am_czv2_mf_light_large.e99dde293e56f61d77908b8326d2a89155389783.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const m4a1smechaindustries = await prisma.item.create({
            data: {
              name: "M4A1-S | Mecha Industries",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_gs_m4a1_mecha_industries_light_large.2973cf5ca9d1592d6652bf14ac89bcd8593d4f0a.png",
              rarity: "MYTHICAL",
              price: 478
            },
          });
          const glock18wastelandrebel = await prisma.item.create({
            data: {
              name: "Glock-18 | Wasteland Rebel",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_wasteland_rebel_light_large.284899ab35e5a29c6edb64b2af194cee19a0ed89.png",
              rarity: "MYTHICAL",
              price: 55
            },
          });
          const m4a4desolatespace = await prisma.item.create({
            data: {
              name: "M4A4 | Desolate Space",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_desolate_space_light_large.1fcbd5e124ae7c54cf12e6f76c431e6671a73845.png",
              rarity: "RARE",
              price: 198
            },
          });
          const p2000imperialdragon = await prisma.item.create({
            data: {
              name: "P2000 | Imperial Dragon",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_gs_p2000_imperial_dragon_light_large.cc82bc6353a0e8ce963f6b0b600905d4dc37bf4a.png",
              rarity: "RARE",
              price: 51
            },
          });
          const scar20bloodsport = await prisma.item.create({
            data: {
              name: "SCAR-20 | Bloodsport",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_gs_scar20_bloodsport_light_large.dd99feccb31d2ec296bcd620abd885e6fe50d44e.png",
              rarity: "RARE",
              price: 45
            },
          });
          const awpphobos = await prisma.item.create({
            data: {
              name: "AWP | Phobos",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_gs_awp_phobos_light_large.fca961cc99c704f09c44e6e82378434ef0e22087.png",
              rarity: "UNCOMMON",
              price: 17
            },
          });
          const r8revolverreboot = await prisma.item.create({
            data: {
              name: "R8 Revolver | Reboot",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_cu_r8_cybersport_light_large.d5eb827f99a401915b8377eda7b81a0bc9cae4bf.png",
              rarity: "UNCOMMON",
              price: 20
            },
          });
          const augaristocrat = await prisma.item.create({
            data: {
              name: "AUG | Aristocrat",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_gs_aug_aristocrat_light_large.4004dbb20c03d1a210ff9a98968ddb251bdfddc6.png",
              rarity: "UNCOMMON",
              price: 13
            },
          });
          const p90chopper = await prisma.item.create({
            data: {
              name: "P90 | Chopper",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_full_throttle_light_large.70ef68d70617eb318e2df05e09f780448a1baf0d.png",
              rarity: "UNCOMMON",
              price: 11
            },
          });
          const sawedofflimelight = await prisma.item.create({
            data: {
              name: "Sawed-Off | Limelight",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawed_off_lime_light_large.87fbbe1597ea04a51b56f3b0f7c3fc6a5ff6553c.png",
              rarity: "UNCOMMON",
              price: 13
            },
          });
          const fivesevenviolentdaimyo = await prisma.item.create({
            data: {
              name: "Five-SeveN | Violent Daimyo",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_five_seven_daimyo_light_large.d394398cae1977546887145dcf6a4892d2ed29aa.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const tec9icecap = await prisma.item.create({
            data: {
              name: "Tec-9 | Ice Cap",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_am_tec_9_sea_salt_light_large.726f78fd872aa2ccfcab9a051b4b79c314d50a4e.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const p250ironclad = await prisma.item.create({
            data: {
              name: "P250 | Iron Clad",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_gs_p250_metal_panels_light_large.a104ce12e50fa24711708782e5d7b23e1bcb7d1b.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const mac10carnivore = await prisma.item.create({
            data: {
              name: "MAC-10 | Carnivore",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_aq_mac_10_alien_camo_light_large.10568510ec37ec8515546e5ac03455391bb9ec2d.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const novaexo = await prisma.item.create({
            data: {
              name: "Nova | Exo",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_aq_nova_sci_fi_light_large.9cf268816cad5bdbe33bd4d1ddce1eb81f905164.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const ppbizonharvester = await prisma.item.create({
            data: {
              name: "PP-Bizon | Harvester",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_gs_pp_bizon_harvester_light_large.654d26d43d7e4583a0ede5e0ea6bb697858698dc.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const sg553aerial = await prisma.item.create({
            data: {
              name: "SG 553 | Aerial",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_aerial_light_large.a123874095a96a92aaacd0f64a4fef54fa455e82.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const ak47neonrider = await prisma.item.create({
            data: {
              name: "AK-47 | Neon Rider",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_neon_rider_light_large.9209192b514c4ec98146b4747dec8ce407a977c8.png",
              rarity: "MYTHICAL",
              price: 893
            },
          });
          const deserteaglecodered = await prisma.item.create({
            data: {
              name: "Desert Eagle | Code Red",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_gs_deagle_aggressor_light_large.51ffb87f03ae0d3c467d4412f3c246067748e61d.png",
              rarity: "MYTHICAL",
              price: 570
            },
          });
          const m4a1snightmare = await prisma.item.create({
            data: {
              name: "M4A1-S | Nightmare",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_nightmare_light_large.68e892eb4dedad809205a5fd06f175297d1be1cb.png",
              rarity: "RARE",
              price: 303
            },
          });
          const famaseyeofathena = await prisma.item.create({
            data: {
              name: "FAMAS | Eye of Athena",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_cu_famas_owl_orange_light_large.7cb3a86d36317530964f40d66b755789de7ca88a.png",
              rarity: "RARE",
              price: 76
            },
          });
          const sawedoffdevourer = await prisma.item.create({
            data: {
              name: "Sawed-Off | Devourer",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_devourer_light_large.d8365e13320f20eb532a2d5109e1fc35562bc376.png",
              rarity: "RARE",
              price: 78
            },
          });
          const awppaw = await prisma.item.create({
            data: {
              name: "AWP | PAW",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_am_awp_pawpaw_light_large.0ff115c31307cc3122536c44a9aef7e64277dc19.png",
              rarity: "UNCOMMON",
              price: 31
            },
          });
          const novatoysoldier = await prisma.item.create({
            data: {
              name: "Nova | Toy Soldier",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_nova_toy_soldier_light_large.e35320d18405b77fb9dd5e495fe4f625b8ab6c82.png",
              rarity: "UNCOMMON",
              price: 19
            },
          });
          const cz75autoeco = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Eco",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_cu_cz75_eco_light_large.19aa7b914ac71968e73ac48b112b9f4c8116c767.png",
              rarity: "UNCOMMON",
              price: 20
            },
          });
          const mp7powercore = await prisma.item.create({
            data: {
              name: "MP7 | Powercore",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_gs_powercore_mp7_light_large.cff12134204aef1ddc67e142088a2b7cec911960.png",
              rarity: "UNCOMMON",
              price: 15
            },
          });
          const g3sg1highseas = await prisma.item.create({
            data: {
              name: "G3SG1 | High Seas",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_buccaneer_light_large.68c69e9856fd43f17a4165d1f27116496657fd00.png",
              rarity: "UNCOMMON",
              price: 15
            },
          });
          const glock18warhawk = await prisma.item.create({
            data: {
              name: "Glock-18 | Warhawk",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_gs_glock_thunder_dust_light_large.0e26afdd95bac17ce01c6e097ca0b97db3cffee4.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const p90traction = await prisma.item.create({
            data: {
              name: "P90 | Traction",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_tread_light_large.0acb87de3db60e1c07aa159fd5b8238b11bb8f8f.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const tec9snek9 = await prisma.item.create({
            data: {
              name: "Tec-9 | Snek-9",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_snake_light_large.9065015e55daa4190b97a8bc033925ed0aeb1abd.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const mp9capillary = await prisma.item.create({
            data: {
              name: "MP9 | Capillary",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_vein_light_large.d0189b21fba4603ff88d407d6af0e63093f22ba7.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const dualberettasshred = await prisma.item.create({
            data: {
              name: "Dual Berettas | Shred",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_sp_elites_winter_raider_light_large.eddc2e91d0081e57588b745589209094a6b3e9b6.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const augamberslipstream = await prisma.item.create({
            data: {
              name: "AUG | Amber Slipstream",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_hy_aug_torn_orange_light_large.53b51a022d38ea39eff5ffbed92551dc741e17c3.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const r8revolversurvivalist = await prisma.item.create({
            data: {
              name: "R8 Revolver | Survivalist",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_cu_r8_survivalist_light_large.cda482f11a63c89c574211b8d5ea9a60703e3cd2.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const m4a1scyrex = await prisma.item.create({
            data: {
              name: "M4A1-S | Cyrex",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_cyrex_light_large.144b4053eb73b4a47f8128ebb0e808d8e28f5b9c.png",
              rarity: "MYTHICAL",
              price: 256
            },
          });
          const p90asiimov = await prisma.item.create({
            data: {
              name: "P90 | Asiimov",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90-asiimov_light_large.0ca7f7fc032c98c5cc506ccde92b33e5836a8a88.png",
              rarity: "MYTHICAL",
              price: 245
            },
          });
          const glock18waterelemental = await prisma.item.create({
            data: {
              name: "Glock-18 | Water Elemental",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock-liquescent_light_large.151e954ed4aef28ccc55d0ca4b43a7d9644f36ac.png",
              rarity: "RARE",
              price: 105
            },
          });
          const deserteagleconspiracy = await prisma.item.create({
            data: {
              name: "Desert Eagle | Conspiracy",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_deagle_aureus_light_large.7fa76057cb05f2cab829be448f120ae540715d0e.png",
              rarity: "RARE",
              price: 59
            },
          });
          const fivesevenfowlplay = await prisma.item.create({
            data: {
              name: "Five-SeveN | Fowl Play",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_aq_57_feathers_light_large.aa942f28d5fd868643b54ba0c317703d8b615754.png",
              rarity: "RARE",
              price: 48
            },
          });
          const novakoi = await prisma.item.create({
            data: {
              name: "Nova | Koi",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_nova_koi_light_large.28c3fe03f736b48dee10e1e88e77ac02132dcba6.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const p250supernova = await prisma.item.create({
            data: {
              name: "P250 | Supernova",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_bittersweet_light_large.83cd48968d79412e0cf2233b8e18602ff2790ad4.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const cz75autotigris = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Tigris",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_cu_c75a-tiger_light_large.b754b5a73c8f2b207942eb046efdbd4cade04513.png",
              rarity: "UNCOMMON",
              price: 11
            },
          });
          const ppbizonosiris = await prisma.item.create({
            data: {
              name: "PP-Bizon | Osiris",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon-osiris_light_large.269e03e1ad598b76adb884704c4f48d725beb5fc.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const ssg08abyss = await prisma.item.create({
            data: {
              name: "SSG 08 | Abyss",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_aq_leviathan_light_large.0d0ce425b5374642d0d1fbfd0c0ec634eb8570fb.png",
              rarity: "COMMON",
              price: 17
            },
          });
          const p2000ivory = await prisma.item.create({
            data: {
              name: "P2000 | Ivory",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2000_ivory_light_large.2a47b14b59ce796956958ce13cb60617148f7711.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const mp7urbanhazard = await prisma.item.create({
            data: {
              name: "MP7 | Urban Hazard",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7-commander_light_large.260d3f2765c83f75eadac5abd6ef4187ea2c2089.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const ump45labyrinth = await prisma.item.create({
            data: {
              name: "UMP-45 | Labyrinth",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_hy_lines_orange_light_large.d004ea389236e6fa5da2f0555ab5b3723bdf36d1.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const negevdesertstrike = await prisma.item.create({
            data: {
              name: "Negev | Desert-Strike",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_titanstorm_light_large.eb7badc75ecbb1b4cdf35bfb53088731bbe11cb0.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const awpasiimov = await prisma.item.create({
            data: {
              name: "AWP | Asiimov",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_asimov_light_large.32d9045f8a2bcd13ca18390cc9fd82026e7195ab.png",
              rarity: "MYTHICAL",
              price: 864
            },
          });
          const augchameleon = await prisma.item.create({
            data: {
              name: "AUG | Chameleon",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_aug_chameleonaire_light_large.ad1d2f62d1481931d8e23e0ab0fbd4e7a61135f7.png",
              rarity: "MYTHICAL",
              price: 46
            },
          });
          const ak47redline = await prisma.item.create({
            data: {
              name: "AK-47 | Redline",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_cobra_light_large.7494bfdf4855fd4e6a2dbd983ed0a243c80ef830.png",
              rarity: "RARE",
              price: 542
            },
          });
          const novaantique = await prisma.item.create({
            data: {
              name: "Nova | Antique",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_nova_antique_light_large.3391e20bf69d1a630ab0551fd0c2fa196d028e44.png",
              rarity: "RARE",
              price: 64
            },
          });
          const p90trigon = await prisma.item.create({
            data: {
              name: "P90 | Trigon",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90_trigon_light_large.9f93f859fe1d03dfced62e52c4cab39ae2f8a9f3.png",
              rarity: "RARE",
              price: 66
            },
          });
          const uspsguardian = await prisma.item.create({
            data: {
              name: "USP-S | Guardian",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_elegant_light_large.416f607cc5faeb52be0f22e1b98450391f452ac2.png",
              rarity: "UNCOMMON",
              price: 27
            },
          });
          const mac10heat = await prisma.item.create({
            data: {
              name: "MAC-10 | Heat",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_redhot_light_large.d5e1e0b433e3340266635970ca45cbbf810216f2.png",
              rarity: "UNCOMMON",
              price: 31
            },
          });
          const famassergeant = await prisma.item.create({
            data: {
              name: "FAMAS | Sergeant",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_an_famas_sgt_light_large.5a9241d41a3c35a3fbb20aebcd22253a6a85f72f.png",
              rarity: "UNCOMMON",
              price: 25
            },
          });
          const sg553pulse = await prisma.item.create({
            data: {
              name: "SG 553 | Pulse",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_pulse_light_large.d564900d05df0ee1da737cde6144eb55fa36684f.png",
              rarity: "UNCOMMON",
              price: 23
            },
          });
          const tec9sandstorm = await prisma.item.create({
            data: {
              name: "Tec-9 | Sandstorm",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_sandstorm_light_large.e38b0daacb3aa5d8f692a5ee05ad4bc0885808cd.png",
              rarity: "COMMON",
              price: 7
            },
          });
          const negevterrain = await prisma.item.create({
            data: {
              name: "Negev | Terrain",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_sp_negev_turq_terrain_light_large.9c6c678b0e6bc949c0688f3e1cf39ca73e0a44ae.png",
              rarity: "COMMON",
              price: 7
            },
          });
          const ump45corporal = await prisma.item.create({
            data: {
              name: "UMP-45 | Corporal",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump_corporal_light_large.ae233b4fabc9ff5fef6d25a87175ce5ad8f2ee6e.png",
              rarity: "COMMON",
              price: 5
            },
          });
          const mag7heavenguard = await prisma.item.create({
            data: {
              name: "MAG-7 | Heaven Guard",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_heaven_light_large.ea002eaa1f984e278f59a934ca9016f038d06120.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const ak47fireserpent = await prisma.item.create({
            data: {
              name: "AK-47 | Fire Serpent",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_fireserpent_ak47_bravo_light_large.9390e7fd091ea8a0434fd2143e0acf0d5d1bbc97.png",
              rarity: "MYTHICAL",
              price: 2450
            },
          });
          const deserteaglegoldenkoi = await prisma.item.create({
            data: {
              name: "Desert Eagle | Golden Koi",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_am_scales_bravo_light_large.6cba46695e74a8bee932ea90cea24e146cbef5e7.png",
              rarity: "MYTHICAL",
              price: 447
            },
          });
          const p2000oceanfoam = await prisma.item.create({
            data: {
              name: "P2000 | Ocean Foam",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_am_ossify_blue_p2000_bravo_light_large.91f225635f7e4a986b51e09bba106ca6a4bf7dbb.png",
              rarity: "RARE",
              price: 811
            },
          });
          const p90emeralddragon = await prisma.item.create({
            data: {
              name: "P90 | Emerald Dragon",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_dragon_p90_bravo_light_large.200ef513ae29ae7651ad3f31e68b5b186279572f.png",
              rarity: "RARE",
              price: 3963
            },
          });
          const awpgraphite = await prisma.item.create({
            data: {
              name: "AWP | Graphite",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_am_crumple_bravo_light_large.5f59de227d280f3c3b39fae7e49ac143338ca5b2.png",
              rarity: "RARE",
              price: 1340
            },
          });
          const uspsovergrowth = await prisma.item.create({
            data: {
              name: "USP-S | Overgrowth",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_hy_siege_bravo_light_large.517b89e78bfe8bad7ca1aab7edf1d02a56b2da26.png",
              rarity: "UNCOMMON",
              price: 442
            },
          });
          const m4a4zirka = await prisma.item.create({
            data: {
              name: "M4A4 | Zirka",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_sp_star_bravo_light_large.d4a56abe885a1a03ea173a6aaeb4f10bcec6a0c2.png",
              rarity: "UNCOMMON",
              price: 246
            },
          });
          const mac10graven = await prisma.item.create({
            data: {
              name: "MAC-10 | Graven",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_aq_etched_mac10_bravo_light_large.ec4cf2f7748ac5318292630c8c7e3c2d016723e3.png",
              rarity: "UNCOMMON",
              price: 336
            },
          });
          const m4a1sbrightwater = await prisma.item.create({
            data: {
              name: "M4A1-S | Bright Water",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_hy_ocean_bravo_light_large.7a942449926153575269af174733edc7bed5faeb.png",
              rarity: "UNCOMMON",
              price: 168
            },
          });
          const galilarshattered = await prisma.item.create({
            data: {
              name: "Galil AR | Shattered",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_hy_crumple_bravo_light_large.fcf25827c0ef88bac7e5b0567ecd5a7dbee01791.png",
              rarity: "COMMON",
              price: 84
            },
          });
          const sg553wavespray = await prisma.item.create({
            data: {
              name: "SG 553 | Wave Spray",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_sp_spray_waves_bravo_light_large.5d4e0e3977bf9f1fa8dd1576b5576b429546f98d.png",
              rarity: "COMMON",
              price: 151
            },
          });
          const ump45bonepile = await prisma.item.create({
            data: {
              name: "UMP-45 | Bone Pile",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_sp_skull_diagram_bravo_light_large.f3bf563f6e0274f55377e4fe0422905586a3d19b.png",
              rarity: "COMMON",
              price: 98
            },
          });
          const g3sg1demeter = await prisma.item.create({
            data: {
              name: "G3SG1 | Demeter",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_hy_bluepolygon_bravo_light_large.6638623a4979512bb048fa22f9ec06a5c1172c7e.png",
              rarity: "COMMON",
              price: 67
            },
          });
          const novatempest = await prisma.item.create({
            data: {
              name: "Nova | Tempest",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_hy_seaside_bravo_light_large.bad13bb67e67ee02b782a574376df5e7e4ff766d.png",
              rarity: "COMMON",
              price: 59
            },
          });
          const dualberettasblacklimba = await prisma.item.create({
            data: {
              name: "Dual Berettas | Black Limba",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_cu_season_elites_bravo_light_large.03b5f4afcbffb80f73ce009da240f4aa1455c15f.png",
              rarity: "COMMON",
              price: 50
            },
          });
          const m4a4desertstrike = await prisma.item.create({
            data: {
              name: "M4A4 | Desert-Strike",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_titanstorm_light_large.a161ff6ea23af2d9bbdc0a757f5163fa1ad87a30.png",
              rarity: "MYTHICAL",
              price: 76
            },
          });
          const ak47vulcan = await prisma.item.create({
            data: {
              name: "AK-47 | Vulcan",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_rubber_light_large.5836c38d3037a5a1f90ffdc8c9d0b94367ca8efd.png",
              rarity: "MYTHICAL",
              price: 378
            },
          });
          const uspscaiman = await prisma.item.create({
            data: {
              name: "USP-S | Caiman",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_kaiman_light_large.8ed168478e306bd382a90afb1b71ad9f7551b342.png",
              rarity: "RARE",
              price: 334
            },
          });
          const m4a1satomicalloy = await prisma.item.create({
            data: {
              name: "M4A1-S | Atomic Alloy",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_am_m4a1-s_alloy_orange_light_large.82bd272d0256f17eb86029a8d1411c4e5bf2bc9c.png",
              rarity: "RARE",
              price: 642
            },
          });
          const scar20cyrex = await prisma.item.create({
            data: {
              name: "SCAR-20 | Cyrex",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_cu_scar_cyrex_light_large.ee4da13e2d74d0fd1fdbaa8f2ca49eb1c7f0acca.png",
              rarity: "RARE",
              price: 318
            },
          });
          const mac10tatter = await prisma.item.create({
            data: {
              name: "MAC-10 | Tatter",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_korupt_light_large.e1efdcab099278a147fe2f07405214218e74e705.png",
              rarity: "UNCOMMON",
              price: 50
            },
          });
          const augtorque = await prisma.item.create({
            data: {
              name: "AUG | Torque",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_aug_progressiv_light_large.f712baf9253bd357c71a1525dac51e30298c9535.png",
              rarity: "UNCOMMON",
              price: 51
            },
          });
          const xm1014heavenguard = await prisma.item.create({
            data: {
              name: "XM1014 | Heaven Guard",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_cu_xm1014_heaven_guard_light_large.c7f3f8815f9caa92daa5ffe4390880c1606f4a81.png",
              rarity: "UNCOMMON",
              price: 50
            },
          });
          const ppbizonantique = await prisma.item.create({
            data: {
              name: "PP-Bizon | Antique",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_antique_light_large.06467175511976dae4219e9cb2fc8ab20df0e653.png",
              rarity: "UNCOMMON",
              price: 49
            },
          });
          const p90module = await prisma.item.create({
            data: {
              name: "P90 | Module",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_an_royalbleed_light_large.58dfb4851908d78c31e205477793a620923737db.png",
              rarity: "COMMON",
              price: 8
            },
          });
          const cz75autotwist = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Twist",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_am_gyrate_light_large.90f97369a79695a7fdcb633a9c9a9e56f29a05d5.png",
              rarity: "COMMON",
              price: 8
            },
          });
          const p2000pulse = await prisma.item.create({
            data: {
              name: "P2000 | Pulse",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2000_pulse_light_large.a79fcfcd59202495573abfddc1e7627be62b4e1c.png",
              rarity: "COMMON",
              price: 9
            },
          });
          const tec9isaac = await prisma.item.create({
            data: {
              name: "Tec-9 | Isaac",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_asiimov_light_large.9a4fb9bbf6f01209b8fd3effeda1eecfc1e5a9a3.png",
              rarity: "COMMON",
              price: 45
            },
          });
          const galilarkami = await prisma.item.create({
            data: {
              name: "Galil AR | Kami",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_hy_galil_kami_light_large.f1783721b5318ea51bcb7890bf9cd0084afcd3e3.png",
              rarity: "COMMON",
              price: 10
            },
          });
          const ssg08slashed = await prisma.item.create({
            data: {
              name: "SSG 08 | Slashed",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_immortal_light_large.294156dbab19f645942fe9cbafed88165aa70044.png",
              rarity: "COMMON",
              price: 6
            },
          });
          const ak47neonrevolution = await prisma.item.create({
            data: {
              name: "AK-47 | Neon Revolution",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_anarchy_light_large.6e98f0c6fcb81aaeca03c56eed68962f50c9ef94.png",
              rarity: "MYTHICAL",
              price: 536
            },
          });
          const famasrollcage = await prisma.item.create({
            data: {
              name: "FAMAS | Roll Cage",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_gs_famas_rally_light_large.538baee44eb772de95029e4267ea9c41101bbc94.png",
              rarity: "MYTHICAL",
              price: 113
            },
          });
          const tec9fuelinjector = await prisma.item.create({
            data: {
              name: "Tec-9 | Fuel Injector",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_gs_tec9_supercharged_light_large.e3ebc20f10eae02790fe95703b6099acca1d1809.png",
              rarity: "RARE",
              price: 73
            },
          });
          const augsydmead = await prisma.item.create({
            data: {
              name: "AUG | Syd Mead",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_gs_aug_syd_mead_light_large.333597e0555639f5d77541c363a9bb38d95055f3.png",
              rarity: "RARE",
              price: 54
            },
          });
          const mp9airlock = await prisma.item.create({
            data: {
              name: "MP9 | Airlock",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_narcis_light_large.c63eaf3fab8c65ec3ab22da8205cbe3c51366d7a.png",
              rarity: "RARE",
              price: 55
            },
          });
          const deserteagledirective = await prisma.item.create({
            data: {
              name: "Desert Eagle | Directive",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aq_desert_eagle_constable_light_large.fb2f2673dd3997a21bff9129e0d2e294c03095e8.png",
              rarity: "UNCOMMON",
              price: 47
            },
          });
          const glock18weasel = await prisma.item.create({
            data: {
              name: "Glock-18 | Weasel",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock18_weasel_light_large.e02e6e5196ebdee47c595799ff011dd645147505.png",
              rarity: "UNCOMMON",
              price: 19
            },
          });
          const mag7petroglyph = await prisma.item.create({
            data: {
              name: "MAG-7 | Petroglyph",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_tribal_light_large.c226728af447f07808ea5954eb9a24528092d972.png",
              rarity: "UNCOMMON",
              price: 7
            },
          });
          const sg553triarch = await prisma.item.create({
            data: {
              name: "SG 553 | Triarch",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg556_triarch_light_large.3ea74bea530adda100d25911372ca313ea99453a.png",
              rarity: "UNCOMMON",
              price: 10
            },
          });
          const scar20powercore = await prisma.item.create({
            data: {
              name: "SCAR-20 | Powercore",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_gs_scar20_powercore_light_large.74bcd65b1a4a52dd397ede5aa59b860ca4c38939.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const p90grim = await prisma.item.create({
            data: {
              name: "P90 | Grim",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90_grimm_light_large.59514d7b54f637f314329bb3fef1c7ffd1b153ba.png",
              rarity: "COMMON",
              price: 7
            },
          });
          const fivesevenscumbria = await prisma.item.create({
            data: {
              name: "Five-SeveN | Scumbria",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_aq_five_seven_scumbria_light_large.bc05fc6435b84525a0ab140bc72e032a98dab710.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const negevdazzle = await prisma.item.create({
            data: {
              name: "Negev | Dazzle",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_hy_negev_dazzle_light_large.3558ece2a70252dcaa8ea9e324539ae1a4fc1bc0.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const ump45briefing = await prisma.item.create({
            data: {
              name: "UMP-45 | Briefing",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump45_metritera_light_large.46ac4388a9651c555ec6849358b85f60a87c328d.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const cz75autoimprint = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Imprint",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_gs_cz75_tread_light_large.8c276db730bb33477aaa52f7a23825f295e14364.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const g3sg1ventilator = await prisma.item.create({
            data: {
              name: "G3SG1 | Ventilator",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_ventilator_light_large.5cd3643d4d9cd0599e25a1302e788611bd9a0023.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const xm1014slipstream = await prisma.item.create({
            data: {
              name: "XM1014 | Slipstream",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_hy_xm1014_fractal_blue_light_large.e9720fb7b5928db8bcf79d62850af5bf475b9ec5.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const ak47wastelandrebel = await prisma.item.create({
            data: {
              name: "AK-47 | Wasteland Rebel",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_tribute_ak47_light_large.f0ccfeea8a432a82cf4fb7f0411a724dbb43459a.png",
              rarity: "MYTHICAL",
              price: 1474
            },
          });
          const p2000fireelemental = await prisma.item.create({
            data: {
              name: "P2000 | Fire Elemental",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2000_fire_elemental_light_large.1e57d4d9f1c51e613c1923377aa55fab4b0ab1bc.png",
              rarity: "MYTHICAL",
              price: 145
            },
          });
          const p250cartel = await prisma.item.create({
            data: {
              name: "P250 | Cartel",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_aq_p250_cartel_light_large.d63ea117934ac8f9a40afe027fa4a1438dbb1777.png",
              rarity: "RARE",
              price: 93
            },
          });
          const xm1014tranquility = await prisma.item.create({
            data: {
              name: "XM1014 | Tranquility",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_cu_xm1014_caritas_light_large.060e6378f5b5ab6fc53a2db451f3d68b8033f304.png",
              rarity: "RARE",
              price: 86
            },
          });
          const scar20cardiac = await prisma.item.create({
            data: {
              name: "SCAR-20 | Cardiac",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_cu_scar20_intervention_light_large.96d9a26cca617207208a836d424d676bcb2ce3b9.png",
              rarity: "RARE",
              price: 79
            },
          });
          const m4a1sbasilisk = await prisma.item.create({
            data: {
              name: "M4A1-S | Basilisk",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_aq_m4a1s_basilisk_light_large.18370d6557500376e137c7f6b07c7ed46c9dccf2.png",
              rarity: "UNCOMMON",
              price: 64
            },
          });
          const m4a4griffin = await prisma.item.create({
            data: {
              name: "M4A4 | Griffin",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_griffin_light_large.255bd83fd343ea8e8d84a1d5c94959d0b26cafae.png",
              rarity: "UNCOMMON",
              price: 38
            },
          });
          const glock18grinder = await prisma.item.create({
            data: {
              name: "Glock-18 | Grinder",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_aq_glock_coiled_light_large.d4dcbf0d27479b95a4ad43c36f3b3f3dc87bbd84.png",
              rarity: "UNCOMMON",
              price: 12
            },
          });
          const sawedoffhighwayman = await prisma.item.create({
            data: {
              name: "Sawed-Off | Highwayman",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_aq_sawedoff_blackgold_light_large.4a8c3a27c780c2a5ec3e4b6686498dce439d5a73.png",
              rarity: "UNCOMMON",
              price: 11
            },
          });
          const mag7firestarter = await prisma.item.create({
            data: {
              name: "MAG-7 | Firestarter",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_sp_mag7_firebitten_light_large.640af2edb52a7f170620e175ddaa5f5cf763325b.png",
              rarity: "COMMON",
              price: 23
            },
          });
          const fivesevenurbanhazard = await prisma.item.create({
            data: {
              name: "Five-SeveN | Urban Hazard",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_urban_hazard_light_large.456966d23faf1034c51b8130b7a70294af087026.png",
              rarity: "COMMON",
              price: 8
            },
          });
          const ump45delusion = await prisma.item.create({
            data: {
              name: "UMP-45 | Delusion",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_sp_ump45_d-visions_light_large.33ae7e9e8bf24ee97f4f3d3ee113e51782a756fa.png",
              rarity: "COMMON",
              price: 13
            },
          });
          const g3sg1murky = await prisma.item.create({
            data: {
              name: "G3SG1 | Murky",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_am_g3sg1_murky_light_large.bc4e8d0e70d2952576d5c9653da71f21bc02b810.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const mp9dart = await prisma.item.create({
            data: {
              name: "MP9 | Dart",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_chevron_light_large.698ab583537e3ed4b7661d3fcf75be62f0cdfab9.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const awponitaiji = await prisma.item.create({
            data: {
              name: "AWP | Oni Taiji",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_hannya_light_large.dc87e0f1aeeabe6c1c840f2a9e756ea261ef9d81.png",
              rarity: "MYTHICAL",
              price: 3617
            },
          });
          const fivesevenhyperbeast = await prisma.item.create({
            data: {
              name: "Five-SeveN | Hyper Beast",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_hyperbeast_light_large.d2ef18b57b0b821624e42830ee4c47e241ed4476.png",
              rarity: "MYTHICAL",
              price: 489
            },
          });
          const m4a4hellfire = await prisma.item.create({
            data: {
              name: "M4A4 | Hellfire",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_hellfire_light_large.d3675840da1d60e19ba26fc11539e9351a0ec892.png",
              rarity: "RARE",
              price: 514
            },
          });
          const dualberettascobrastrike = await prisma.item.create({
            data: {
              name: "Dual Berettas | Cobra Strike",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_gs_dualberettas_cobra_light_large.0c2576234d95cb12089d9fdad47d1f7eed7f56c8.png",
              rarity: "RARE",
              price: 313
            },
          });
          const galilarsugarrush = await prisma.item.create({
            data: {
              name: "Galil AR | Sugar Rush",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_galil_candychaos_light_large.70c1dba6c2de996ec666a260b604c760e01bb20d.png",
              rarity: "RARE",
              price: 354
            },
          });
          const ak47orbitmk01 = await prisma.item.create({
            data: {
              name: "AK-47 | Orbit Mk01",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak_colony01_red_light_large.b688da7615b6e76fa34f775e200914dc44d5336c.png",
              rarity: "UNCOMMON",
              price: 144
            },
          });
          const p250redrock = await prisma.item.create({
            data: {
              name: "P250 | Red Rock",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_axiom_light_large.a9b34e0a93dbaa8fa60dfdb080827b919938d9f6.png",
              rarity: "UNCOMMON",
              price: 49
            },
          });
          const ssg08deathshead = await prisma.item.create({
            data: {
              name: "SSG 08 | Death's Head",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_deathshead_light_large.78676bc5fce74af519abdccae4d119727c392faf.png",
              rarity: "UNCOMMON",
              price: 51
            },
          });
          const p2000woodsman = await prisma.item.create({
            data: {
              name: "P2000 | Woodsman",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2000_hunter_light_large.57f4ea5be4f9bece6a3b71521a370d9afb4abb1f.png",
              rarity: "UNCOMMON",
              price: 61
            },
          });
          const p90deathgrip = await prisma.item.create({
            data: {
              name: "P90 | Death Grip",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_hy_p90_barebones_blue_light_large.c908d6fc6d53cb2f4168a64b9a32e4b6b5479fc8.png",
              rarity: "UNCOMMON",
              price: 58
            },
          });
          const uspsblueprint = await prisma.item.create({
            data: {
              name: "USP-S | Blueprint",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usps_blueprint_light_large.e4195098bb3a105e6545d32c4d72888f673bd761.png",
              rarity: "COMMON",
              price: 205
            },
          });
          const m4a1sbriefing = await prisma.item.create({
            data: {
              name: "M4A1-S | Briefing",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_metritera_light_large.ec9c5f86d6788402519be7bd51b849355fbf93ee.png",
              rarity: "COMMON",
              price: 59
            },
          });
          const tec9cutout = await prisma.item.create({
            data: {
              name: "Tec-9 | Cut Out",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_aq_tec9_chalk_pattern_light_large.e0425d0a56ca5a2240b71495a5ef2bc4af0e9331.png",
              rarity: "COMMON",
              price: 28
            },
          });
          const mag7hardwater = await prisma.item.create({
            data: {
              name: "MAG-7 | Hard Water",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_am_mag7_caustic_light_large.133bbfa9f3cf8220f8eb5556d4d54a766cf1c9e0.png",
              rarity: "COMMON",
              price: 12
            },
          });
          const famasmacabre = await prisma.item.create({
            data: {
              name: "FAMAS | Macabre",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_sp_famas_macabre_light_large.7582150e24a69922b814d6b56004327e2219890d.png",
              rarity: "COMMON",
              price: 14
            },
          });
          const mac10aloha = await prisma.item.create({
            data: {
              name: "MAC-10 | Aloha",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_am_mac10_aloha_light_large.bde81a20851cfd9f788d66745f69a288e57ea319.png",
              rarity: "COMMON",
              price: 11
            },
          });
          const ump45metalflowers = await prisma.item.create({
            data: {
              name: "UMP-45 | Metal Flowers",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_aq_ump45_flameflower_light_large.9c5aedb21ad6461f0761375c53b50f030fa0e10c.png",
              rarity: "COMMON",
              price: 13
            },
          });
          const ak47fuelinjector = await prisma.item.create({
            data: {
              name: "AK-47 | Fuel Injector",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_supercharged_light_large.8a0d53e84b7049366a3e3dbb25d29f473d76dceb.png",
              rarity: "MYTHICAL",
              price: 3122
            },
          });
          const m4a4thebattlestar = await prisma.item.create({
            data: {
              name: "M4A4 | The Battlestar",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_gs_m4a4_pioneer_light_large.2dcc4c93ad184179e34b9359090d7398718d36e4.png",
              rarity: "MYTHICAL",
              price: 121
            },
          });
          const deserteaglekumichodragon = await prisma.item.create({
            data: {
              name: "Desert Eagle | Kumicho Dragon",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aq_deserteagle_kumichodragon_light_large.19874e9a20cfac49efbe1f1557b995e453633ffe.png",
              rarity: "RARE",
              price: 223
            },
          });
          const awpelitebuild = await prisma.item.create({
            data: {
              name: "AWP | Elite Build",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_mastery_light_large.617e335043f250cdb9d6a4c798e075be9560cdd4.png",
              rarity: "RARE",
              price: 202
            },
          });
          const novahyperbeast = await prisma.item.create({
            data: {
              name: "Nova | Hyper Beast",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_nova_hyperbeast_light_large.ec64e1aa22dc78fa692a2269a99669842b91cc6f.png",
              rarity: "RARE",
              price: 200
            },
          });
          const glock18royallegion = await prisma.item.create({
            data: {
              name: "Glock-18 | Royal Legion",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_gs_glock18_award_light_large.198c0dc5630970b1f3bbcb307a1318745ca006e7.png",
              rarity: "UNCOMMON",
              price: 32
            },
          });
          const famasvalence = await prisma.item.create({
            data: {
              name: "FAMAS | Valence",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_aq_famas_contour_light_large.65d515ab34a6f50c8a5296b562a81da42663b819.png",
              rarity: "UNCOMMON",
              price: 32
            },
          });
          const mp7impire = await prisma.item.create({
            data: {
              name: "MP7 | Impire",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_sp_mp7_impire_light_large.aee431bcc2114fbc9f5cf46ca9735c86ddb450ba.png",
              rarity: "UNCOMMON",
              price: 22
            },
          });
          const fiveseventriumvirate = await prisma.item.create({
            data: {
              name: "Five-SeveN | Triumvirate",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_augmented_light_large.eb79857bc2e4b80f4edf61a0c5a72fbae80f3a20.png",
              rarity: "UNCOMMON",
              price: 25
            },
          });
          const mag7praetorian = await prisma.item.create({
            data: {
              name: "MAG-7 | Praetorian",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_gs_mag7_praetorian_light_large.55d96fbd30315911a2397ef950887e8fda43a3ec.png",
              rarity: "UNCOMMON",
              price: 22
            },
          });
          const uspsleadconduit = await prisma.item.create({
            data: {
              name: "USP-S | Lead Conduit",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_gs_usp_voltage_light_large.11e40b4d4fc09043d4fa513f3913ca65ffcfbb41.png",
              rarity: "COMMON",
              price: 14
            },
          });
          const ssg08necropos = await prisma.item.create({
            data: {
              name: "SSG 08 | Necropos",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_necropos_light_large.cd2f32aa0349edcad3aefae80b509fc5962a2b30.png",
              rarity: "COMMON",
              price: 7
            },
          });
          const ppbizonphoticzone = await prisma.item.create({
            data: {
              name: "PP-Bizon | Photic Zone",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_citizen_light_large.c33a99fe761fc52535224e73d2af91b92ac77637.png",
              rarity: "COMMON",
              price: 10
            },
          });
          const dualberettascartel = await prisma.item.create({
            data: {
              name: "Dual Berettas | Cartel",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_aq_dualberettas_cartel_light_large.52ed24116db8a7254a366ea9f4f49b3ceff9eed3.png",
              rarity: "COMMON",
              price: 7
            },
          });
          const mac10lapisgator = await prisma.item.create({
            data: {
              name: "MAC-10 | Lapis Gator",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_am_mac10_electricity_light_large.88207515fce5ebad84df16d60ff2203a5d4a2702.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const tec9jambiya = await prisma.item.create({
            data: {
              name: "Tec-9 | Jambiya",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_gs_tec9_jambiya_light_large.d1f42521bb774564f80a512c3990e768179cf111.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const m4a4theemperor = await prisma.item.create({
            data: {
              name: "M4A4 | The Emperor",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_gs_m4a4_emperor_light_large.61be48559b0a5d57e04108f876f5cf755ec8acc8.png",
              rarity: "MYTHICAL",
              price: 1318
            },
          });
          const fivesevenangrymob = await prisma.item.create({
            data: {
              name: "Five-SeveN | Angry Mob",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_five_seven_angry_light_large.54986e86178e0462d34fe78b6b726292813541f5.png",
              rarity: "MYTHICAL",
              price: 82
            },
          });
          const augmomentum = await prisma.item.create({
            data: {
              name: "AUG | Momentum",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_aug_momentum_light_large.1f36037cec707a957785625f04b3740bb5286d16.png",
              rarity: "RARE",
              price: 188
            },
          });
          const xm1014incinegator = await prisma.item.create({
            data: {
              name: "XM1014 | Incinegator",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_cu_xm1014_incinerator_light_large.7649f64bbfea49d6f0d951320e0bdd98d6bee088.png",
              rarity: "RARE",
              price: 57
            },
          });
          const r8revolverskullcrusher = await prisma.item.create({
            data: {
              name: "R8 Revolver | Skull Crusher",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_cu_revolver_oppressor_light_large.59414a184bcf3310d43528701292ba4f68ba55a0.png",
              rarity: "RARE",
              price: 11
            },
          });
          const awpatheris = await prisma.item.create({
            data: {
              name: "AWP | Atheris",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_viper_light_large.2de75408a7c595312d58203f53c73a3a18faa4a3.png",
              rarity: "UNCOMMON",
              price: 124
            },
          });
          const deserteaglelightrail = await prisma.item.create({
            data: {
              name: "Desert Eagle | Light Rail",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_gs_deagle_exo_light_large.8bdc93f1b45efba187748065deff967eef8f2f2d.png",
              rarity: "UNCOMMON",
              price: 28
            },
          });
          const ump45moonrise = await prisma.item.create({
            data: {
              name: "UMP-45 | Moonrise",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_aa_ump45_moonrise_sunset_light_large.63cf279a66d95757f4fefe498b89480966887083.png",
              rarity: "UNCOMMON",
              price: 7
            },
          });
          const tec9bamboozle = await prisma.item.create({
            data: {
              name: "Tec-9 | Bamboozle",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_bamboo_light_large.24d8986c41f344d8c1e9167a935c7b904757f85e.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const mp5sdgauss = await prisma.item.create({
            data: {
              name: "MP5-SD | Gauss",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5sd_astromatic_light_large.d7acba118f13e4b7b0d9146dddd32cf71da9210d.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const ak47uncharted = await prisma.item.create({
            data: {
              name: "AK-47 | Uncharted",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_aztec_light_large.368d90ba7bc01aa56489792a8962df5343238c5c.png",
              rarity: "COMMON",
              price: 8
            },
          });
          const galilarakoben = await prisma.item.create({
            data: {
              name: "Galil AR | Akoben",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_sp_galil_akoben_light_large.35a9e7a0fa943ac20d1b145d36bf3d4ccf33cc84.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const p90offworld = await prisma.item.create({
            data: {
              name: "P90 | Off World",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90_offworld_light_large.45f1db5b8b435574f46fffe77960d8ef29519eca.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const mac10whitefish = await prisma.item.create({
            data: {
              name: "MAC-10 | Whitefish",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_gs_mac10_fish_bait_light_large.31a855282029b915748b21c11521b5f111b05e67.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const famascrypsis = await prisma.item.create({
            data: {
              name: "FAMAS | Crypsis",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_sp_famas_ghost_insects_light_large.727c7db3f6df4aae8b692f6966dba460acafb07f.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const p250verdigris = await prisma.item.create({
            data: {
              name: "P250 | Verdigris",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_aq_p250_verdigris_light_large.379d19af038211ca3bf7d20c4c75726e9be36856.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const mp7mischief = await prisma.item.create({
            data: {
              name: "MP7 | Mischief",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7_racketeer_light_large.ba5b3641b7b309cdd16d9f54fc2bc2331e738929.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const m4a1splayertwo = await prisma.item.create({
            data: {
              name: "M4A1-S | Player Two",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_csgo2048_light_large.6531225ca224416df4dc6aa12c6ecea582b1e110.png",
              rarity: "MYTHICAL",
              price: 715
            },
          });
          const glock18bulletqueen = await prisma.item.create({
            data: {
              name: "Glock-18 | Bullet Queen",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock18_warmaiden_light_large.d99a6fdb4c1469d164182a74edba8de055726aa5.png",
              rarity: "MYTHICAL",
              price: 303
            },
          });
          const ak47phantomdisruptor = await prisma.item.create({
            data: {
              name: "AK-47 | Phantom Disruptor",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak-47_phantom_disruptor_light_large.c14fcebe17a4c1a509edc597b33dcb9b5dcda32b.png",
              rarity: "RARE",
              price: 94
            },
          });
          const mac10discotech = await prisma.item.create({
            data: {
              name: "MAC-10 | Disco Tech",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_nacre_light_large.80fa2f0691e37e6e2a2755b8a7f6ccd6bfa83f3b.png",
              rarity: "RARE",
              price: 131
            },
          });
          const mag7justice = await prisma.item.create({
            data: {
              name: "MAG-7 | Justice",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_gs_mag7_justice_light_large.fcdc73ab779ab093ee7d90d91c1e3c369bbc8d65.png",
              rarity: "RARE",
              price: 62
            },
          });
          const ssg08feverdream = await prisma.item.create({
            data: {
              name: "SSG 08 | Fever Dream",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_fever_dream_light_large.cec554a86204344d6476b9071158fd02963a1aac.png",
              rarity: "UNCOMMON",
              price: 12
            },
          });
          const sg553darkwing = await prisma.item.create({
            data: {
              name: "SG 553 | Darkwing",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_darkwing_light_large.f9c302279afebdd221344fa59f738f9317dc4122.png",
              rarity: "UNCOMMON",
              price: 14
            },
          });
          const p2000acidetched = await prisma.item.create({
            data: {
              name: "P2000 | Acid Etched",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_aq_p2000_acid_clover_light_large.9b6c7f2c0bd30dc66570c41101129e1a624ab7b8.png",
              rarity: "UNCOMMON",
              price: 15
            },
          });
          const sawedoffapocalypto = await prisma.item.create({
            data: {
              name: "Sawed-Off | Apocalypto",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_apocalypto_light_large.fc0f69fec04cf4d6955ef4aa6629d083aa554af6.png",
              rarity: "UNCOMMON",
              price: 12
            },
          });
          const scar20enforcer = await prisma.item.create({
            data: {
              name: "SCAR-20 | Enforcer",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_gs_scar20_enforcer_light_large.20eba3a5a84f35019ceb7faae45a0b4246a72998.png",
              rarity: "UNCOMMON",
              price: 11
            },
          });
          const awpcapillary = await prisma.item.create({
            data: {
              name: "AWP | Capillary",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_vein_light_large.8665dc4b4231298e9bbcab7aad3abbbf22e3edd8.png",
              rarity: "COMMON",
              price: 15
            },
          });
          const deserteagleblueply = await prisma.item.create({
            data: {
              name: "Desert Eagle | Blue Ply",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_deagle_replica_light_large.900a30787dd7f4f32435cc55e56dc345d780baae.png",
              rarity: "COMMON",
              price: 6
            },
          });
          const augtomcat = await prisma.item.create({
            data: {
              name: "AUG | Tom Cat",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_gs_aug_thunderstorm_light_large.127ba1a9f7c7eef6b701bf01ad50b3b146f9b951.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const mp5sddesertstrike = await prisma.item.create({
            data: {
              name: "MP5-SD | Desert Strike",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_cu_mp5_desert_strike_light_large.44958e2a47446043d6c929d5f4b4e3bea10f41c9.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const negevprototype = await prisma.item.create({
            data: {
              name: "Negev | Prototype",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_prototype_light_large.d1e542d85756bfc96bb32e6d2f8b548fbb26b2ad.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const cz75autodistressed = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Distressed",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_cu_cz75_cerakote_light_large.2f8286a9ca2313c23c6d9ad8d1c94650ef856c37.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const r8revolverboneforged = await prisma.item.create({
            data: {
              name: "R8 Revolver | Bone Forged",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_r8_leviathan_light_large.656b77eecd4ef8f55f11866cce3da2778d6cc7d5.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const m4a4royalpaladin = await prisma.item.create({
            data: {
              name: "M4A4 | Royal Paladin",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_gs_m4a4_royal_squire_light_large.f802ec3cf9c1c6837d841384f6d112367340880b.png",
              rarity: "MYTHICAL",
              price: 908
            },
          });
          const r8revolverfade = await prisma.item.create({
            data: {
              name: "R8 Revolver | Fade",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_aa_fade_revolver_light_large.af77aee9f82936e7510b89e7f0c1bbf6bfaaff45.png",
              rarity: "MYTHICAL",
              price: 161
            },
          });
          const ak47pointdisarray = await prisma.item.create({
            data: {
              name: "AK-47 | Point Disarray",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_point_disarray_light_large.ba0f6ccdcb917aa2bde2ef0312c57d763a61d341.png",
              rarity: "RARE",
              price: 207
            },
          });
          const g3sg1theexecutioner = await prisma.item.create({
            data: {
              name: "G3SG1 | The Executioner",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_cu_g3sg1_executioner_light_large.36071be17a266f28d8631b0fd73a9be6767ce399.png",
              rarity: "RARE",
              price: 64
            },
          });
          const p90shapewood = await prisma.item.create({
            data: {
              name: "P90 | Shapewood",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90_shapewood_light_large.e7744840c89b1b83be82d2f64beb5a6719c47bd3.png",
              rarity: "RARE",
              price: 66
            },
          });
          const negevpowerloader = await prisma.item.create({
            data: {
              name: "Negev | Power Loader",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_impact_light_large.3315f6272c9bb790f96731643232008b4b8c7296.png",
              rarity: "UNCOMMON",
              price: 32
            },
          });
          const tec9avalanche = await prisma.item.create({
            data: {
              name: "Tec-9 | Avalanche",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_avalanche_light_large.eb6726a24084bf5f3c8c8c70cd8ea37425a708e3.png",
              rarity: "UNCOMMON",
              price: 20
            },
          });
          const ppbizonfuelrod = await prisma.item.create({
            data: {
              name: "PP-Bizon | Fuel Rod",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_noxious_light_large.dc3af57fa024448b24e4ddb8838a0a339cee46ce.png",
              rarity: "UNCOMMON",
              price: 18
            },
          });
          const sg553tigermoth = await prisma.item.create({
            data: {
              name: "SG 553 | Tiger Moth",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_gs_sg553_tiger_moth_light_large.18de0e5e029741a67330038e646fab1596fcfe88.png",
              rarity: "UNCOMMON",
              price: 15
            },
          });
          const fivesevenretrobution = await prisma.item.create({
            data: {
              name: "Five-SeveN | Retrobution",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_retrobution_light_large.7ef4b20b8c9aed4d6461861c9d93b81630f6ac71.png",
              rarity: "UNCOMMON",
              price: 16
            },
          });
          const xm1014tecluburner = await prisma.item.create({
            data: {
              name: "XM1014 | Teclu Burner",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm1014_hot_rod_light_large.f664b036e9b4ec638574f17a9b7ea0905e8c57e0.png",
              rarity: "UNCOMMON",
              price: 12
            },
          });
          const r8revolvercrimsonweb = await prisma.item.create({
            data: {
              name: "R8 Revolver | Crimson Web",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_hy_webs_light_large.2a0bbba44388502060a910b5a18f5b64b5be0b3d.png",
              rarity: "COMMON",
              price: 31
            },
          });
          const deserteaglecorinthian = await prisma.item.create({
            data: {
              name: "Desert Eagle | Corinthian",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aq_deagle_corinthian_light_large.1a694892a1953a131775451d0542508b4b3d9e77.png",
              rarity: "COMMON",
              price: 7
            },
          });
          const augricochet = await prisma.item.create({
            data: {
              name: "AUG | Ricochet",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_am_aug_jumble_light_large.d86901a42f239ddc39cd645d2a17281881fe37d5.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const p2000imperial = await prisma.item.create({
            data: {
              name: "P2000 | Imperial",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_am_p2000_imperial_red_light_large.c47e207307725ed1f9e8cf6d1478dbfd3523c7a7.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const scar20outbreak = await prisma.item.create({
            data: {
              name: "SCAR-20 | Outbreak",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_hy_scar20_jungler_light_large.4f6402fac5ca041aae7db17b214e5cfd55149c44.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const sawedoffyorick = await prisma.item.create({
            data: {
              name: "Sawed-Off | Yorick",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_gs_sawedoff_necromancer_light_large.8cead257afdfaf5b852a61d2358aa3fb84def860.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const awpcontainmentbreach = await prisma.item.create({
            data: {
              name: "AWP | Containment Breach",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_virus_light_large.00307f818d425d94cb8e4eeda1e27699f713fb45.png",
              rarity: "MYTHICAL",
              price: 2981
            },
          });
          const mac10stalker = await prisma.item.create({
            data: {
              name: "MAC-10 | Stalker",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_gs_mac10_stalker_light_large.cb4d7a60a69978f1575526f979be8e1e1538a673.png",
              rarity: "MYTHICAL",
              price: 404
            },
          });
          const ssg08bloodshot = await prisma.item.create({
            data: {
              name: "SSG 08 | Bloodshot",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_tickler_light_large.b6a73afa62f8983211740a1570410df4864f45f6.png",
              rarity: "RARE",
              price: 311
            },
          });
          const tec9decimator = await prisma.item.create({
            data: {
              name: "Tec-9 | Decimator",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_gs_tec9_decimator_light_large.11236163667e1dd46c3d869d844e384a23544513.png",
              rarity: "RARE",
              price: 252
            },
          });
          const sg553colonyiv = await prisma.item.create({
            data: {
              name: "SG 553 | Colony IV",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_reactor_light_large.af5c07d2528198641adf32cf3498aa7d2823b048.png",
              rarity: "RARE",
              price: 203
            },
          });
          const ak47ratrod = await prisma.item.create({
            data: {
              name: "AK-47 | Rat Rod",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_nibbler_light_large.1c402d395b628aa5667239eec44640d7f603d754.png",
              rarity: "UNCOMMON",
              price: 72
            },
          });
          const augarcticwolf = await prisma.item.create({
            data: {
              name: "AUG | Arctic Wolf",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_aug_whitefang_light_large.051b21da4e56c64ad78ee8a67a0e9e237a4e01b1.png",
              rarity: "UNCOMMON",
              price: 38
            },
          });
          const mp7neonply = await prisma.item.create({
            data: {
              name: "MP7 | Neon Ply",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7_replica_light_large.f56c050cb5147918efb6872ce61fda358a684cf5.png",
              rarity: "UNCOMMON",
              price: 27
            },
          });
          const p2000obsidian = await prisma.item.create({
            data: {
              name: "P2000 | Obsidian",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2000_obsidian_light_large.0a6ad31fe8f70401ffdd377c289309d0256282c6.png",
              rarity: "UNCOMMON",
              price: 29
            },
          });
          const ppbizonembargo = await prisma.item.create({
            data: {
              name: "PP-Bizon | Embargo",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_road_warrior_light_large.92dd3aa0346010a6e3a625d01ae4f965195a05d2.png",
              rarity: "UNCOMMON",
              price: 24
            },
          });
          const dualberettasbalance = await prisma.item.create({
            data: {
              name: "Dual Berettas | Balance",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_gs_dual_elites_rose_light_large.8df8980203b198879875be44656361ccbb41791e.png",
              rarity: "COMMON",
              price: 10
            },
          });
          const r8revolvermemento = await prisma.item.create({
            data: {
              name: "R8 Revolver | Memento",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_r8_memento_light_large.8ca600a94c72b5a3b33bb826a1a588f7e48d5e78.png",
              rarity: "COMMON",
              price: 7
            },
          });
          const g3sg1blacksand = await prisma.item.create({
            data: {
              name: "G3SG1 | Black Sand",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_cu_g3sg1_blacksand_light_large.8a9b364779493ae19a87eb4e73aa47f4432d3f41.png",
              rarity: "COMMON",
              price: 6
            },
          });
          const novaplume = await prisma.item.create({
            data: {
              name: "Nova | Plume",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_nova_featherswing_light_large.49e81792746dc7844ff18c45fb23030cd8b66d59.png",
              rarity: "COMMON",
              price: 6
            },
          });
          const m249warbird = await prisma.item.create({
            data: {
              name: "M249 | Warbird",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_gs_m249_warbird_veteran_light_large.29a2ee22222b037e6825fb0c230aa799718e4115.png",
              rarity: "COMMON",
              price: 5
            },
          });
          const mp5sdacidwash = await prisma.item.create({
            data: {
              name: "MP5-SD | Acid Wash",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5_etch_light_large.a86867a43e3607c1826b6d106870bf69642687b0.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const scar20torn = await prisma.item.create({
            data: {
              name: "SCAR-20 | Torn",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_sp_scar20_striker_dust_light_large.0842dbdf0fe714c92f634b376e15c2f8c21b6d56.png",
              rarity: "COMMON",
              price: 5
            },
          });
          const uspskillconfirmed = await prisma.item.create({
            data: {
              name: "USP-S | Kill Confirmed",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_kill_confirmed_light_large.a3a7b8f19c9fb931b18c1edd7dd21d44e2c3c2e0.png",
              rarity: "MYTHICAL",
              price: 1215
            },
          });
          const m4a1sgoldencoil = await prisma.item.create({
            data: {
              name: "M4A1-S | Golden Coil",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_gs_m4a1s_snakebite_gold_light_large.574ace77e1044dbf3a387f200b2867332e974f70.png",
              rarity: "MYTHICAL",
              price: 1143
            },
          });
          const ak47frontsidemisty = await prisma.item.create({
            data: {
              name: "AK-47 | Frontside Misty",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_winter_sport_light_large.785a08aecd996dcffc6f38373fdc73697e601a6a.png",
              rarity: "RARE",
              price: 495
            },
          });
          const ssg08bigiron = await prisma.item.create({
            data: {
              name: "SSG 08 | Big Iron",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_technicality_light_large.1a057a14ca191ce12629e06217cbe86097444b03.png",
              rarity: "RARE",
              price: 138
            },
          });
          const g3sg1flux = await prisma.item.create({
            data: {
              name: "G3SG1 | Flux",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_flux_purple_light_large.6ed40e104625c9607e7df5ee60373a19d3dae634.png",
              rarity: "RARE",
              price: 129
            },
          });
          const galilarstonecold = await prisma.item.create({
            data: {
              name: "Galil AR | Stone Cold",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_gs_galil_nightwing_light_large.bc71fb0b9102f22348f39015b7de5affd60829e0.png",
              rarity: "UNCOMMON",
              price: 36
            },
          });
          const p250wingshot = await prisma.item.create({
            data: {
              name: "P250 | Wingshot",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_hy_p250_crackshot_light_large.538a33bb8d7af894f965257c39f699168e125cdd.png",
              rarity: "UNCOMMON",
              price: 27
            },
          });
          const m249nebulacrusader = await prisma.item.create({
            data: {
              name: "M249 | Nebula Crusader",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_gs_m249_nebula_crusader_light_large.60f60c9e8203575e3e3f5574db51132e2b2fe7c7.png",
              rarity: "UNCOMMON",
              price: 24
            },
          });
          const mp7specialdelivery = await prisma.item.create({
            data: {
              name: "MP7 | Special Delivery",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7_classified_light_large.231ba61751c2976258bf96b3d1db5ae6ecb03b95.png",
              rarity: "UNCOMMON",
              price: 23
            },
          });
          const dualberettasdualingdragons = await prisma.item.create({
            data: {
              name: "Dual Berettas | Dualing Dragons",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_cu_dualberretta_dragons_light_large.2742674cbf237d1ba5fb6ed9f0d90e00a03570f9.png",
              rarity: "COMMON",
              price: 10
            },
          });
          const glock18wraiths = await prisma.item.create({
            data: {
              name: "Glock-18 | Wraiths",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_gs_glock18_wrathys_light_large.8cf4aba20d193a1646b378a3d04a6fee3f66724c.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const famassurvivorz = await prisma.item.create({
            data: {
              name: "FAMAS | Survivor Z",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_cu_famas_lenta_light_large.7ab508a407e56ab541dae127ef5fc64f09f6ae08.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const xm1014scumbria = await prisma.item.create({
            data: {
              name: "XM1014 | Scumbria",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm1014_scumbria_light_large.b8e79b3c4391784151d789edde360dbaaef7fd1f.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const mac10rangeen = await prisma.item.create({
            data: {
              name: "MAC-10 | Rangeen",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_alekhya_duo_light_large.7173900a6b75cee250a55197483cba3c0204b955.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const mag7cobaltcore = await prisma.item.create({
            data: {
              name: "MAG-7 | Cobalt Core",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_myrcene_light_large.7cd0ed89db7accc44d3289f9f1529e0a75f4643e.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const scar20greenmarine = await prisma.item.create({
            data: {
              name: "SCAR-20 | Green Marine",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_gs_scar20_peacemaker03_light_large.061f9ac2ff0a040f6fcc296c451c09fe2e198f83.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const ak47bloodsport = await prisma.item.create({
            data: {
              name: "AK-47 | Bloodsport",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_bloodsport_light_large.40f076f6b92e08acc37860923533aa9768795b2b.png",
              rarity: "MYTHICAL",
              price: 866
            },
          });
          const uspsneonoir = await prisma.item.create({
            data: {
              name: "USP-S | Neo-Noir",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usps_noir_light_large.ed0f4245c1b9031c6d410300ce6de1f1efb75481.png",
              rarity: "MYTHICAL",
              price: 495
            },
          });
          const m4a1sdecimator = await prisma.item.create({
            data: {
              name: "M4A1-S | Decimator",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_gs_m4a1_decimator_light_large.5af82e99273fcc0a4ad35b2971b63787ee989d6a.png",
              rarity: "RARE",
              price: 188
            },
          });
          const awpfeverdream = await prisma.item.create({
            data: {
              name: "AWP | Fever Dream",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_psychopath_light_large.11e54a670b779e1757cce18ea252d70eb35c6a75.png",
              rarity: "RARE",
              price: 87
            },
          });
          const cz75autoxiangliu = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Xiangliu",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_gs_cz_snakes_purple_light_large.a06599fab1d73352fd970fc0356c215c50ca7e9a.png",
              rarity: "RARE",
              price: 71
            },
          });
          const m249emeraldpoisondart = await prisma.item.create({
            data: {
              name: "M249 | Emerald Poison Dart",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_sp_m249_frog_original_light_large.7331eb3d676ebdf8df71adb58b43aea63660f785.png",
              rarity: "UNCOMMON",
              price: 12
            },
          });
          const ump45scaffold = await prisma.item.create({
            data: {
              name: "UMP-45 | Scaffold",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_gs_ump_abyss_light_large.55910298a6be9b071156ef176a31d26007d92d0f.png",
              rarity: "UNCOMMON",
              price: 15
            },
          });
          const galilarcrimsontsunami = await prisma.item.create({
            data: {
              name: "Galil AR | Crimson Tsunami",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_sp_galil_wave_light_large.0a4761ebb660428a77a622885054e1c44cf03959.png",
              rarity: "UNCOMMON",
              price: 12
            },
          });
          const mac10lastdive = await prisma.item.create({
            data: {
              name: "MAC-10 | Last Dive",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_aa_mac10_the_last_dive_light_large.d0039a83384acbe26f9337c8a83e81f6410b7dc9.png",
              rarity: "UNCOMMON",
              price: 12
            },
          });
          const xm1014seasons = await prisma.item.create({
            data: {
              name: "XM1014 | Seasons",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm_leaf_fade_light_large.f753b1b710a8023e299d1918ca150b42483ca1cd.png",
              rarity: "UNCOMMON",
              price: 12
            },
          });
          const deserteagleoxideblaze = await prisma.item.create({
            data: {
              name: "Desert Eagle | Oxide Blaze",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_desert_eagle_corroden_light_large.5fde2cc1c9b82b0e9823445c7fb2be334bc286af.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const scar20blueprint = await prisma.item.create({
            data: {
              name: "SCAR-20 | Blueprint",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_cu_blueprint_scar_light_large.9a71e8191c2b2081f5fd3884f57f919663b26ee5.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const fivesevencapillary = await prisma.item.create({
            data: {
              name: "Five-SeveN | Capillary",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_vein_light_large.464ec691b3c3c9c828aa1a8d4e2b076daa4b7a4f.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const sawedoffzander = await prisma.item.create({
            data: {
              name: "Sawed-Off | Zander",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_aq_sawedoff_zander2_light_large.514f7c6c606296838f56020877d7762c594dc4bd.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const ppbizonjungleslipstream = await prisma.item.create({
            data: {
              name: "PP-Bizon | Jungle Slipstream",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_hy_bizon_torn_green_light_large.1aa076ede6a2511bf676ffb1c5a3eafca71c58a6.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const p250ripple = await prisma.item.create({
            data: {
              name: "P250 | Ripple",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_am_p250_sputnik_light_large.38766530975aaa4006dda7a24533ac1b05a6b6a8.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const mp7akoben = await prisma.item.create({
            data: {
              name: "MP7 | Akoben",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_sp_mp7_tribal_yellow_light_large.1c05d27487feb5d82e8165721942ea3a67e6ba33.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const ak47theempress = await prisma.item.create({
            data: {
              name: "AK-47 | The Empress",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_empress_light_large.f81d0b07dca381635c89f74bcdb6b64a6da6e81c.png",
              rarity: "MYTHICAL",
              price: 988
            },
          });
          const p250seeyalater = await prisma.item.create({
            data: {
              name: "P250 | See Ya Later",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_cybercroc_light_large.396de1d53797f8875d242d1eb33d5b81dce2bb8e.png",
              rarity: "MYTHICAL",
              price: 73
            },
          });
          const m4a1sleadedglass = await prisma.item.create({
            data: {
              name: "M4A1-S | Leaded Glass",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_gs_m4a1_shatter_light_large.f4d487cbf956eb13a505b8926c8f0f63cb3604b3.png",
              rarity: "RARE",
              price: 80
            },
          });
          const ppbizonhighroller = await prisma.item.create({
            data: {
              name: "PP-Bizon | High Roller",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_all_in_light_large.d31ae97fe448b550cfe06d617daa3575c77e8c2a.png",
              rarity: "RARE",
              price: 67
            },
          });
          const r8revolverllamacannon = await prisma.item.create({
            data: {
              name: "R8 Revolver | Llama Cannon",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_r8_llamacannon_light_large.ae4ce84764b4892a2ea2d3f9f0afc57023f7bdc8.png",
              rarity: "RARE",
              price: 69
            },
          });
          const mp9goo = await prisma.item.create({
            data: {
              name: "MP9 | Goo",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_goo_light_large.3cab8ecb356ee5f2549c1b148f5961fdf5d9cd76.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const xm1014ziggy = await prisma.item.create({
            data: {
              name: "XM1014 | Ziggy",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm1014_ziggy_anarchy_light_large.7042642ba5043be6e1cb82d6bb9a05678402dea1.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const ump45exposure = await prisma.item.create({
            data: {
              name: "UMP-45 | Exposure",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump45_x-ray_machine_light_large.a4563e015fd33d1874cc220458db2754a15dd08a.png",
              rarity: "UNCOMMON",
              price: 8
            },
          });
          const cz75autotacticat = await prisma.item.create({
            data: {
              name: "CZ75-Auto | Tacticat",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_gs_cz75_tacticat_light_large.ed9ba2f6cb8fd5e2a2b6cfb1b9a0ba4c87c93ec3.png",
              rarity: "UNCOMMON",
              price: 9
            },
          });
          const sg553phantom = await prisma.item.create({
            data: {
              name: "SG 553 | Phantom",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_gs_sg553_phantom_light_large.51fc477c1024614f6f52080d3b7200408c9d2881.png",
              rarity: "UNCOMMON",
              price: 7
            },
          });
          const glock18offworld = await prisma.item.create({
            data: {
              name: "Glock-18 | Off World",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_indigo_light_large.3786c7c3be7d03ee053050af2f7a8427782742e1.png",
              rarity: "COMMON",
              price: 4
            },
          });
          const augtriqua = await prisma.item.create({
            data: {
              name: "AUG | Triqua",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_aug_orange_triangle_light_large.793eb05ec841c2664b8482565e5d080c731d6ecd.png",
              rarity: "COMMON",
              price: 3
            },
          });
          const tec9crackedopal = await prisma.item.create({
            data: {
              name: "Tec-9 | Cracked Opal",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_cracked_opal_light_large.d6e9cc1c31550faeac9c55341be170abf07245b7.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const g3sg1hunter = await prisma.item.create({
            data: {
              name: "G3SG1 | Hunter",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_cetme_redux_light_large.18ad1afdb32fca22879dcdd22e579c5afaef6ad8.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const mac10oceanic = await prisma.item.create({
            data: {
              name: "MAC-10 | Oceanic",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_am_mac10_oceani_light_large.25e5d3d5e249e11fe32971fa7bcdc0e5a1c777bd.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const sawedoffmorris = await prisma.item.create({
            data: {
              name: "Sawed-Off | Morris",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_aq_sawed-off_flower_light_large.0d98b08ce8023d49dac2f76b10ef2f3cd7a33350.png",
              rarity: "COMMON",
              price: 2
            },
          });
          const scar20jungleslipstream = await prisma.item.create({
            data: {
              name: "SCAR-20 | Jungle Slipstream",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_hy_scar20_jungle_slipstream_light_large.d49f99ac854c1a25fc46bde5dd32f438bdd587f1.png",
              rarity: "COMMON",
              price: 1
            },
          });
          const m4a4asiimov = await prisma.item.create({
            data: {
              name: "M4A4 | Asiimov",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4_asimov_light_large.af03179f3d43ff55b0c3d114c537eac77abdb6cf.png",
              rarity: "MYTHICAL",
              price: 1161
            },
          });
          const sawedoffthekraken = await prisma.item.create({
            data: {
              name: "Sawed-Off | The Kraken",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_octopump_light_large.761df5911efc6a96061c7b34e41a2ff6ec61e58b.png",
              rarity: "MYTHICAL",
              price: 52
            },
          });
          const awpredline = await prisma.item.create({
            data: {
              name: "AWP | Redline",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_cobra_light_large.cf20ce6ac1151b4a30d8a84081ec4373cbfad4a4.png",
              rarity: "RARE",
              price: 354
            },
          });
          const m4a1sguardian = await prisma.item.create({
            data: {
              name: "M4A1-S | Guardian",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1-s_elegant_light_large.1acbb0060648091ac532de68cfd720b7ad980564.png",
              rarity: "RARE",
              price: 223
            },
          });
          const p250mehndi = await prisma.item.create({
            data: {
              name: "P250 | Mehndi",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_refined_light_large.9da38bc561b6576555b1700e9e10ddbc52994c67.png",
              rarity: "RARE",
              price: 136
            },
          });
          const dualberettasmarina = await prisma.item.create({
            data: {
              name: "Dual Berettas | Marina",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_hy_marina_sunrise_light_large.bcdf31f5af4a5b9bef2bb0d5336715a3a0407b92.png",
              rarity: "UNCOMMON",
              price: 71
            },
          });
          const mp9roseiron = await prisma.item.create({
            data: {
              name: "MP9 | Rose Iron",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_am_thorny_rose_mp9_light_large.a187f13404eba96de622f4c94e85078fb18d8d7c.png",
              rarity: "UNCOMMON",
              price: 39
            },
          });
          const famaspulse = await prisma.item.create({
            data: {
              name: "FAMAS | Pulse",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_cu_famas_pulse_light_large.fad5dfcd7b0ccfe655c7c3903d091140904959ec.png",
              rarity: "UNCOMMON",
              price: 36
            },
          });
          const novarisingskull = await prisma.item.create({
            data: {
              name: "Nova | Rising Skull",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_skull_nova_light_large.558d42424adda8cc3383b05d5388f75837b07efa.png",
              rarity: "UNCOMMON",
              price: 32
            },
          });
          const ppbizoncobalthalftone = await prisma.item.create({
            data: {
              name: "PP-Bizon | Cobalt Halftone",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_am_turqoise_halftone_light_large.e34dc4bab2f1da66b04bd2d3cadb51339ce81f4d.png",
              rarity: "COMMON",
              price: 13
            },
          });
          const galilarsandstorm = await prisma.item.create({
            data: {
              name: "Galil AR | Sandstorm",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_sandstorm_light_large.008937727e75bf840d2b511d3d8493a12b5ed2ac.png",
              rarity: "COMMON",
              price: 15
            },
          });
          const fivesevenkami = await prisma.item.create({
            data: {
              name: "Five-SeveN | Kami",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_hy_kami_light_large.ce4939fe41b30c6143f487879a57e4f5f227e811.png",
              rarity: "COMMON",
              price: 7
            },
          });
          const m249magma = await prisma.item.create({
            data: {
              name: "M249 | Magma",
              imageURL: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_aq_obsidian_light_large.c8a38c9354c2f4531f0802eaa49caa9878bbf9ed.png",
              rarity: "COMMON",
              price: 6
            },
          });
          await prisma.case.create({
            data: {
                name: "Chroma Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFEuh_KQJTtEuI63xIXbxqOtauyClTMEsJV1jruS89T3iQKx_BBqa2j3JpjVLFH1xpp0EQ/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: galilarchatterbox.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awpmanowar.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47cartel.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: m4a4dragonking.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: p250muertos.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: deserteaglenaga.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: dualberettasurbanshock.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: mac10malachite.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: sawedoffserenity.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: glock18catacombs.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: mp9deadlypoison.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: m249systemlock.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: xm1014quicksilver.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: scar20grotto.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Chroma 2 Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFAuhqSaKWtEu43mxtbbk6b1a77Twm4Iu8Yl3bCU9Imii1Xt80M5MmD7JZjVLFH-6VnQJQ/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a1shyperbeast.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: mac10neonrider.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: galilareco.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: fivesevenmonkeybusiness.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: famasdjinn.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: awpwormgod.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: mag7heat.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: cz75autopoleposition.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: ump45grandprix.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: ak47elitebuild.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: deserteaglebronzedeco.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: p250valence.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: sawedofforigami.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: mp7armorcore.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: negevmanowar.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Operation Broken Fang Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU3naeZIWUStYjgxdnewfGmZb6DxW8AupMp27yT9IqiilCxqkRkZGyldoaLMlhp6IQjKcg/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: gloves.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a1sprintstream.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: glock18neonoir.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: fivesevenfairytale.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4cybersecurity.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: uspsmonstermashup.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awpexoskeleton.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ssg08parallax.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: novaclearpolymer.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ump45goldbismuth.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: dualberettasdezastre.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: galilarvandal.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p250contaminant.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: m249deeprelief.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: cz75autovendetta.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp5sdconditionzero.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p90cocoarampage.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: g3sg1digitalmesh.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Chroma 3 Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYynaSdJGhE74y0wNWIw_OlNuvXkDpSuZQmi--SrN-h3gey-Uo6YWmlIoCLMlhplhFFvwI/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a1schanticosfire.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ppbizonjudgementofanubis.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p250asiimov.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ump45primalsaber.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: augfleetflock.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ssg08ghostcrusader.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: xm1014blacktie.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: tec9reentry.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: galilarfirefight.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: cz75autoredastor.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp9bioleak.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: dualberettasventilators.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p2000oceanic.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: m249spectre.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: g3sg1orangecrash.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: sg553atlas.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: sawedofffubar.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Operation Riptide Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU5narKKW4SvIrhw9PZlaPwNuqAxmgBucNz2L3C8dyj31Xn-0VtMW3wdY6LMlhplna0TPI/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: deserteagleoceandrive.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47leetmuseo.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: glock18snackattack.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ssg08turbopeek.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mac10toybox.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4spiderlily.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: famaszxspectron.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mp9mountfuji.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: fivesevenboostprotocol.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: mag7bi83spectrum.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: uspsblacklotus.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: xm1014watchdog.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: augplague.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: ppbizonlumen.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: dualberettastread.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp7guerrilla.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: g3sg1keepingtabs.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Revolution Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQynaHMJT9B74-ywtjYxfOmMe_Vx28AucQj3brAoYrz3Fay_kY4MG_wdYeLMlhpLMaM-1U/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: gloves.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4temukau.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47headshot.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awpduality.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ump45wildchild.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p2000wickedsick.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a1semphorosaurs.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p90neoqueen.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: glock18umbralrabbit.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mac10sakkaku.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: r8revolverbananacannon.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp5sdliquidation.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp9featherweight.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mag7insomnia.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: sg553cyberforce.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: tec9rebel.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p250rebuilt.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: scar20fragments.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Recoil Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQxnaecIT8Wv9rilYTYkfTyNuiFwmhUvpZz3-2Z9oqg0Vew80NvZzuiJdeLMlhpwFO-XdA/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: gloves.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: uspsprintstream.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awpchromaticaberration.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47icecoaled.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: sawedoffkisslove.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p250visions.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: r8revolvercrazy8.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: sg553dragontech.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: dualberettasfloracarnivora.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p90ventrush.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: m249downtown.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: m4a4polymag.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: glock18winterized.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: famasmeow36.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: galilardestroyer.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: ump45roadblock.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mac10monkeyflage.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: negevdropme.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Dreams & Nightmares Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQwnfCcJmxDv9rhwIHZwqP3a-uGwz9Xv8F0j-qQrI3xiVLkrxVuZW-mJoWLMlhpWhFkc9M/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47nightwish.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mp9starlightprotector.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mp7abyssalapparition.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: famasrapideyemovement.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: dualberettasmelondrama.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a1snightterror.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: uspstickettohell.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ppbizonspacecat.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: g3sg1dreamglade.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: xm1014zombieoffensive.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mac10ensnared.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: fivesevenscrawl.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp5sdnecrojr.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p2000liftedspirits.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: sawedoffspiritboard.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mag7foresight.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: scar20poultrygeist.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Snakebite Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naLOJzgUuYqyzIaIxa6jMOLXxGkHvcMjibmU99Sg3Qaw-hA_ZWrzLISLMlhpgJJUhGE/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: gloves.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: uspsthetraitor.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4inlivingcolor.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: galilarchromaticaberration.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mp9foodchain.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: xm1014xoxo.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47slate.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: deserteagletriggerdiscipline.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p250cybershell.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: negevdev_texture.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: mac10buttonmasher.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: glock18clearpolymer.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: cz75autocircaetus.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: sg553heavymetal.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: r8revolverjunkyard.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: m249osipr.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: novawindblown.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: ump45oscillator.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Fracture Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU2nfGaJG0btN2wwYHfxa-hY-uFxj4Dv50nj7uXpI7w3AewrhBpMWH6d9CLMlhpEbAe-Zk/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: deserteagleprintstream.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47legionofanubis.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: glock18vogue.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4toothfairy.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: xm1014entombed.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mag7monstercall.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mac10allure.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: galilarconnexion.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: tec9brother.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: mp5sdkitbash.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: ssg08mainframe001.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: ppbizonrunic.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p2000gnarled.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p90freight.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p250cassette.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: negevultralight.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: sg553olrusty.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Clutch Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY5naqQIz4R7Yjix9bZkvKiZrmAzzlTu5AoibiT8d_x21Wy8hY_MWz1doSLMlhpM3FKbNs/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: gloves.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4neonoir.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mp7bloodsport.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: uspscortex.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awpmortis.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: augstymphalian.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: glock18moonrise.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mag7swag7.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ump45arcticwolf.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: novawildsix.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: negevlionfish.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: r8revolvergrip.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p2000urbanhazard.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: fivesevenflametest.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp9blacksand.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: xm1014oxideblaze.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: ppbizonnightriot.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: sg553aloha.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "CS:GO Weapon Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5_T3eAQ3i6DMIW0X7ojiwoHax6egMOKGxj4G68Nz3-jCp4itjFWx-ktqfSmtcwqVx6sT/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 6,
                            item: {
                                connect: {
                                    id: awplightningstrike.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: ak47casehardened.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: deserteaglehypnotic.id
                                }
                            }
                        },    {
                            dropRate: 5,
                            item: {
                                connect: {
                                    id: glock18dragontattoo.id
                                }
                            }
                        },    {
                            dropRate: 5,
                            item: {
                                connect: {
                                    id: uspsdarkwater.id
                                }
                            }
                        },    {
                            dropRate: 5,
                            item: {
                                connect: {
                                    id: m4a1sdarkwater.id
                                }
                            }
                        },    {
                            dropRate: 23,
                            item: {
                                connect: {
                                    id: sg553ultraviolet.id
                                }
                            }
                        },    {
                            dropRate: 23,
                            item: {
                                connect: {
                                    id: mp7skulls.id
                                }
                            }
                        },    {
                            dropRate: 23,
                            item: {
                                connect: {
                                    id: augwings.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "eSports 2013 Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsVk5kKhZDpYX3e1YznfCcdzkR74vnw9TZwa-sYOOCzzoF6ZJ0jL6Qp9uj3Qbj_Uc6Z2z1I9WLMlhp9VPHu3g/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 6,
                            item: {
                                connect: {
                                    id: p90deathbykitty.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: awpboom.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: ak47redlaminate.id
                                }
                            }
                        },    {
                            dropRate: 5,
                            item: {
                                connect: {
                                    id: galilarorangeddpat.id
                                }
                            }
                        },    {
                            dropRate: 5,
                            item: {
                                connect: {
                                    id: p250splash.id
                                }
                            }
                        },    {
                            dropRate: 5,
                            item: {
                                connect: {
                                    id: sawedofforangeddpat.id
                                }
                            }
                        },    {
                            dropRate: 23,
                            item: {
                                connect: {
                                    id: m4a4fadedzebra.id
                                }
                            }
                        },    {
                            dropRate: 23,
                            item: {
                                connect: {
                                    id: mag7memento.id
                                }
                            }
                        },    {
                            dropRate: 23,
                            item: {
                                connect: {
                                    id: famasdoomkitty.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "eSports 2013 Winter Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsVk5kKhZDpYX3e1Yz7KKcPzwav9jnzdfdlfWmY7_TzmkF6ZMlj77A9o3x0Qe1qhBkZGjxI9LBJgMgIQaH1G7WeaA/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 6,
                            item: {
                                connect: {
                                    id: m4a4xray.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: deserteaglecobaltdisruption.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: awpelectrichive.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: famasafterimage.id
                                }
                            }
                        },    {
                            dropRate: 7,
                            item: {
                                connect: {
                                    id: ak47bluelaminate.id
                                }
                            }
                        },    {
                            dropRate: 7,
                            item: {
                                connect: {
                                    id: p90blindspot.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: galilarbluetitanium.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: p250steeldisruption.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: novaghostcamo.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: fivesevennightshade.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: g3sg1azurezebra.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: ppbizonwatersigil.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "CS:GO Weapon Case 2",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5PT8elUwgKKZJmtEvo_kxITZk6StNe-Fz2pTu8Aj3eqVpIqgjVfjrRI9fSmtc1Nw-Kh3/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 6,
                            item: {
                                connect: {
                                    id: ssg08bloodinthewater.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: p90coldblooded.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: uspsserum.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: fivesevencasehardened.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: mp9hypnotic.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: dualberettashemoglobin.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: novagraphite.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: m4a1sbloodtiger.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: scar20crimsonweb.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: tec9bluetitanium.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: p250hive.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: famashexane.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "CS:GO Weapon Case 3",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5fSnf15k0KGacG0UtYXnzdTdkq-gariGlDgHvMcmjryZotqg2wCxrUVtfSmtc20v4quI/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 6,
                            item: {
                                connect: {
                                    id: cz75autovictoria.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: p250undertow.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: cz75autothefuschiaisnow.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: fivesevencoppergalaxy.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: deserteagleheirloom.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: cz75autotreadplate.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: tec9titaniumbit.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: uspsstainless.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: glock18bluefissure.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: cz75autocrimsonweb.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: dualberettaspanther.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: p2000redfragcam.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "eSports 2014 Summer Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsVk5kKhZDpYX3e1Y07ODdfDBH_pKzwdfSkqTyZLjQxjsF7sEoiLyQ9I2ljgHt_EZlYzr6J4DHIA9oZ1-D5BHglkR7Cs6C/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47jaguar.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4bulletrain.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: novabloomstick.id
                                }
                            }
                        },    {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: awpcorticera.id
                                }
                            }
                        },    {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: augbengaltiger.id
                                }
                            }
                        },    {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: p2000corticera.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: deserteaglecrimsonweb.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mp7oceanfoam.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ppbizonbluestreak.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: glock18steeldisruption.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p90virus.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: mac10ultraviolet.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: uspsbloodtiger.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: negevbratatat.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: cz75autohexane.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: ssg08darkwater.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: xm1014redpython.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Danger Zone Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUxnaPLJz5H74y1xtTcz6etNumIx29U6Zd3j7yQoYih3lG1-UJqY27xJIeLMlhpaD9Aclo/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47asiimov.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awpneonoir.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mp5sdphosphor.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: deserteaglemechaindustries.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ump45momentum.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: uspsflashback.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p250nevermore.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mac10pipedown.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: galilarsignal.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: g3sg1scavenger.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: m4a4magnesium.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: tec9fubar.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: glock18oxideblaze.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: novawoodfired.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp9modestthreat.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: sawedoffblacksand.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: sg553dangerclose.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "CS20 Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU0naHKIj9D7oTgl4LelaGnMuqIwDgFusR337HCpYmhiwzm8ktqMjv2INKLMlhprbp6CTE/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awpwildfire.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: famascommemoration.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mp9hydra.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: augdeathbypuppy.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p90nostalgia.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mp5sdagent.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ump45plastique.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: fivesevenbuddy.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p250inferno.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: m249aztec.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: glock18sacrifice.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: famasdecommissioned.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: dualberettaselite16.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mac10classiccrate.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: tec9flashout.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mag7popdog.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: scar20assault.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Falchion Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FF8ugPDMIWpAuIq1w4KIlaChZOyFwzgJuZNy3-2T89T0jlC2rhZla2vwIJjVLFHz75yKpg/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47aquamarinerevenge.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awphyperbeast.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mp7nemesis.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: sg553cyrex.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: cz75autoyellowjacket.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4evildaimyo.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: negevloudmouth.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: p2000handgun.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: mp9rubypoisondart.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: famasneuralnet.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: galilarrocketpop.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: uspstorque.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: glock18bunsenburner.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: p90elitebuild.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: novaranger.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: ump45riot.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Glove Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY1naTMdzwTtNrukteIkqT2MO_Uwz5Q6cYhibyXo4rw2ALsrkRoYjuncNCLMlhpEV4XDTk/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: gloves.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4buzzkill.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ssg08dragonfire.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: famasmechaindustries.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: sawedoffwastelandprincess.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p90shallowgrave.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: uspscyrex.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a1sflashback.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: dualberettasroyalconsorts.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: novagila.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: g3sg1stinger.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: glock18ironwork.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp7cirrus.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p2000turf.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: galilarblacksand.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mag7sonar.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp9sandscale.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: cz75autopolymer.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Gamma Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYznarJJjkQ6ovjw4SPlfP3auqEl2oBuJB1j--WoY322QziqkdpZGr3IteLMlhpw4RJCv8/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a1smechaindustries.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: glock18wastelandrebel.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4desolatespace.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p2000imperialdragon.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: scar20bloodsport.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awpphobos.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: r8revolverreboot.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: augaristocrat.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p90chopper.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: sawedofflimelight.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: fivesevenviolentdaimyo.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: tec9icecap.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p250ironclad.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mac10carnivore.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: novaexo.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: ppbizonharvester.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: sg553aerial.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Horizon Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUwnfbOdDgavYXukYTZkqf2ZbrTwmkE6scgj7CY94ml3FXl-ENkMW3wctOLMlhpVHKV9YA/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47neonrider.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: deserteaglecodered.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a1snightmare.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: famaseyeofathena.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: sawedoffdevourer.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awppaw.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: novatoysoldier.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: cz75autoeco.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mp7powercore.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: g3sg1highseas.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: glock18warhawk.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p90traction.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: tec9snek9.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp9capillary.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: dualberettasshred.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: augamberslipstream.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: r8revolversurvivalist.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Operation Breakout Weapon Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFMu1aPMI24auITjxteJwPXxY72AkGgIvZAniLjHpon2jlbl-kpvNjz3JJjVLFG9rl1YLQ/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a1scyrex.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p90asiimov.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: glock18waterelemental.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: deserteagleconspiracy.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: fivesevenfowlplay.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: novakoi.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: p250supernova.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: cz75autotigris.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: ppbizonosiris.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: ssg08abyss.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: p2000ivory.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: mp7urbanhazard.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: ump45labyrinth.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: negevdesertstrike.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Operation Phoenix Weapon Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUuh6qZJmlD7tiyl4OIlaGhYuLTzjhVupJ12urH89ii3lHlqEdoMDr2I5jVLFFSv_J2Rg/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awpasiimov.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: augchameleon.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: ak47redline.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: novaantique.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: p90trigon.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: uspsguardian.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: mac10heat.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: famassergeant.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: sg553pulse.id
                                }
                            }
                        },    {
                            dropRate: 18,
                            item: {
                                connect: {
                                    id: tec9sandstorm.id
                                }
                            }
                        },    {
                            dropRate: 18,
                            item: {
                                connect: {
                                    id: negevterrain.id
                                }
                            }
                        },    {
                            dropRate: 18,
                            item: {
                                connect: {
                                    id: ump45corporal.id
                                }
                            }
                        },    {
                            dropRate: 18,
                            item: {
                                connect: {
                                    id: mag7heavenguard.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Operation Bravo Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsXE1xNwVDv7WrFA5pnabNJGwSuN3gxtnawKOlMO6HzzhQucAm0uvFo4n2iw3h_UM-ZmilJNeLMlhpjfjxEoE/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47fireserpent.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: deserteaglegoldenkoi.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: p2000oceanfoam.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: p90emeralddragon.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: awpgraphite.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: uspsovergrowth.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: m4a4zirka.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: mac10graven.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: m4a1sbrightwater.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: galilarshattered.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: sg553wavespray.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: ump45bonepile.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: g3sg1demeter.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: novatempest.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: dualberettasblacklimba.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Huntsman Weapon Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQu0PaQIm9DtY6wzYaIxKWtN7iJwW8G6Z0h2LqWoY6s2Qy2-0Q_Nzv7IJjVLFGZqUbjlQ/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4desertstrike.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: ak47vulcan.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: uspscaiman.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: m4a1satomicalloy.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: scar20cyrex.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: mac10tatter.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: augtorque.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: xm1014heavenguard.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: ppbizonantique.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: p90module.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: cz75autotwist.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: p2000pulse.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: tec9isaac.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: galilarkami.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: ssg08slashed.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Gamma 2 Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsVFx5KAVo5PSkKV4xhfGfKTgVvIXlxNPSwaOmMLiGwzgJvJMniO-Zoo_z2wXg-EVvfSmtc78HsNoy/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47neonrevolution.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: famasrollcage.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: tec9fuelinjector.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: augsydmead.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mp9airlock.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: deserteagledirective.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: glock18weasel.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mag7petroglyph.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: sg553triarch.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: scar20powercore.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p90grim.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: fivesevenscumbria.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: negevdazzle.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: ump45briefing.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: cz75autoimprint.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: g3sg1ventilator.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: xm1014slipstream.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Operation Vanguard Weapon Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFIuh6rJImVGvtjllYaNka6la7rUxWkE65BzibvD9N7z0Q22-0Fka2GlJ5jVLFHqavWW2g/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47wastelandrebel.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p2000fireelemental.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p250cartel.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: xm1014tranquility.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: scar20cardiac.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: m4a1sbasilisk.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: m4a4griffin.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: glock18grinder.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: sawedoffhighwayman.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: mag7firestarter.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: fivesevenurbanhazard.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: ump45delusion.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: g3sg1murky.id
                                }
                            }
                        },    {
                            dropRate: 14,
                            item: {
                                connect: {
                                    id: mp9dart.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Operation Hydra Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY3navMJWgQtNm1ldLZzvOiZr-BlToIsZcoi-yTpdutiVW2-Es4NWjwIo-LMlhpinMS53M/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: gloves.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awponitaiji.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: fivesevenhyperbeast.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4hellfire.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: dualberettascobrastrike.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: galilarsugarrush.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47orbitmk01.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p250redrock.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ssg08deathshead.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p2000woodsman.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: p90deathgrip.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: uspsblueprint.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: m4a1sbriefing.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: tec9cutout.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mag7hardwater.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: famasmacabre.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mac10aloha.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: ump45metalflowers.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Operation Wildfire Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYxnaeQImRGu4S1x9TawfSmY-iHkmoD7cEl2LiQpIjz3wPl_ERkYWHwLY-LMlhp9pkR_UQ/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47fuelinjector.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4thebattlestar.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: deserteaglekumichodragon.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awpelitebuild.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: novahyperbeast.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: glock18royallegion.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: famasvalence.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: mp7impire.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: fiveseventriumvirate.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: mag7praetorian.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: uspsleadconduit.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: ssg08necropos.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: ppbizonphoticzone.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: dualberettascartel.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: mac10lapisgator.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: tec9jambiya.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Prisma Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUynfWaI25G6Ijkl9iPw_SnNrjXw2oBu8cj3b2Qo4_33QbnrUdlYD37ddCLMlhpvs0XIz0/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4theemperor.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: fivesevenangrymob.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: augmomentum.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: xm1014incinegator.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: r8revolverskullcrusher.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awpatheris.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: deserteaglelightrail.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ump45moonrise.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: tec9bamboozle.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: mp5sdgauss.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: ak47uncharted.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: galilarakoben.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p90offworld.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mac10whitefish.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: famascrypsis.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p250verdigris.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp7mischief.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Prisma 2 Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU1nfbOIj8W7oWzkYLdlPOsMOmIk2kGscAj2erE99Sn2AGw_0M4NW2hIYOLMlhpcmY0CRM/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a1splayertwo.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: glock18bulletqueen.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47phantomdisruptor.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mac10discotech.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mag7justice.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ssg08feverdream.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: sg553darkwing.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p2000acidetched.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: sawedoffapocalypto.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: scar20enforcer.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: awpcapillary.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: deserteagleblueply.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: augtomcat.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp5sddesertstrike.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: negevprototype.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: cz75autodistressed.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: r8revolverboneforged.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Revolver Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYwnfKfcG9HvN7iktaOkqD1auLTxD5SvZYgiLvFpo7xjVLh-kdrYWnzcoGLMlhpsyM-5vg/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4royalpaladin.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: r8revolverfade.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47pointdisarray.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: g3sg1theexecutioner.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p90shapewood.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: negevpowerloader.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: tec9avalanche.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: ppbizonfuelrod.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: sg553tigermoth.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: fivesevenretrobution.id
                                }
                            }
                        },    {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: xm1014tecluburner.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: r8revolvercrimsonweb.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: deserteaglecorinthian.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: augricochet.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: p2000imperial.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: scar20outbreak.id
                                }
                            }
                        },    {
                            dropRate: 12,
                            item: {
                                connect: {
                                    id: sawedoffyorick.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Shattered Web Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUznaCaJWVDvozlzdONwvKjYLiBk24IsZEl0uuYrNjw0A3n80JpZWzwIYWLMlhpLvhcskA/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awpcontainmentbreach.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mac10stalker.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ssg08bloodshot.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: tec9decimator.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: sg553colonyiv.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47ratrod.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: augarcticwolf.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mp7neonply.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p2000obsidian.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: ppbizonembargo.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: dualberettasbalance.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: r8revolvermemento.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: g3sg1blacksand.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: novaplume.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: m249warbird.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp5sdacidwash.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: scar20torn.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Shadow Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FF4u1qubIW4Su4mzxYHbzqGtZ-KGlz8EuJcg3rnE9NiijVe3_UY-Zzr2JJjVLFEEeiQRtg/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: uspskillconfirmed.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a1sgoldencoil.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47frontsidemisty.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: ssg08bigiron.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: g3sg1flux.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: galilarstonecold.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: p250wingshot.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: m249nebulacrusader.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: mp7specialdelivery.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: dualberettasdualingdragons.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: glock18wraiths.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: famassurvivorz.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: xm1014scumbria.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mac10rangeen.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mag7cobaltcore.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: scar20greenmarine.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Spectrum Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY2nfKadD4U7Y7lwYXexaGlYb3QzjlUvZ0k0ujHptug2VbirkRrNW2md4SLMlhph09hpX0/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47bloodsport.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: uspsneonoir.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a1sdecimator.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: awpfeverdream.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: cz75autoxiangliu.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m249emeraldpoisondart.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ump45scaffold.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: galilarcrimsontsunami.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mac10lastdive.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: xm1014seasons.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: deserteagleoxideblaze.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: scar20blueprint.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: fivesevencapillary.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: sawedoffzander.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: ppbizonjungleslipstream.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: p250ripple.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mp7akoben.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Spectrum 2 Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY4naeaJGhGtdnmx4Tek_bwY-iFlGlUsJMp3LuTot-mjFGxqUttZ2r3d4eLMlhpnZPxZK0/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ak47theempress.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: p250seeyalater.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a1sleadedglass.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ppbizonhighroller.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: r8revolverllamacannon.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: mp9goo.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: xm1014ziggy.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: ump45exposure.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: cz75autotacticat.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: sg553phantom.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: glock18offworld.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: augtriqua.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: tec9crackedopal.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: g3sg1hunter.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: mac10oceanic.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: sawedoffmorris.id
                                }
                            }
                        },    {
                            dropRate: 10,
                            item: {
                                connect: {
                                    id: scar20jungleslipstream.id
                                }
                            }
                        }]
                }
            }
        })
        await prisma.case.create({
            data: {
                name: "Winter Offensive Weapon Case",
                price: 25,
                imageURL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYu0aKfJz8a793gxNLfzvOkMunUwWgH7JIjj-qW8d7x2VXt_UBuMT3zIpjVLFEGDSGUSQ/256fx256f",
                items: {
                    create: [
                            {
                            dropRate: 1,
                            item: {
                                connect: {
                                    id: knife.id
                                }
                            }
                        },    {
                            dropRate: 3,
                            item: {
                                connect: {
                                    id: m4a4asiimov.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: sawedoffthekraken.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: awpredline.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: m4a1sguardian.id
                                }
                            }
                        },    {
                            dropRate: 2,
                            item: {
                                connect: {
                                    id: p250mehndi.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: dualberettasmarina.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: mp9roseiron.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: famaspulse.id
                                }
                            }
                        },    {
                            dropRate: 4,
                            item: {
                                connect: {
                                    id: novarisingskull.id
                                }
                            }
                        },    {
                            dropRate: 18,
                            item: {
                                connect: {
                                    id: ppbizoncobalthalftone.id
                                }
                            }
                        },    {
                            dropRate: 18,
                            item: {
                                connect: {
                                    id: galilarsandstorm.id
                                }
                            }
                        },    {
                            dropRate: 18,
                            item: {
                                connect: {
                                    id: fivesevenkami.id
                                }
                            }
                        },    {
                            dropRate: 18,
                            item: {
                                connect: {
                                    id: m249magma.id
                                }
                            }
                        }]
                }
            }
        })
        