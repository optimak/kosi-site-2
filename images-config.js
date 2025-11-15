// Images Configuration with Cloudinary URLs
// Grid images: w_400,q_80,f_auto for fast loading
// Full images: w_1200,q_80,f_auto for high-quality viewing

const IMAGES = {
    // Main artwork for index page
    artwork: {
        'ethereal-visions': {
            image: "https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/opium_nnzolb.jpg",
            fullImage: "https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/opium_nnzolb.jpg",
            alt: 'Opium',
            title: 'Opium'
        },
        'chaos-form': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/P_fwrzju.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/P_fwrzju.jpg',
            alt: 'P',
            title: 'P'
        },
        'identity-fragments': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/study_2024_khpphp.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/study_2024_khpphp.jpg',
            alt: 'Study 2024',
            title: 'Study 2024'
        },
        'digital-dreams': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/The_Alchemist_jnxsts.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/The_Alchemist_jnxsts.jpg',
            alt: 'The_Alchemist',
            title: 'The_Alchemist'
        },
        'mystery-portrait': {
            image: "https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Mediator_ic5aye.jpg",
            fullImage: "https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Mediator_ic5aye.jpg",
            alt: 'Mediator',
            title: 'Mediator'
        },
        'surreal-landscape': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Youth_roq2z8.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Youth_roq2z8.jpg',
            alt: 'Youth',
            title: 'Youth'
        },
        'human-condition': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Nirvana_wqqez5.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Nirvana_wqqez5.jpg',
            alt: 'Nirvana',
            title: 'Nirvana'
        },
        'bold-strokes': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Omniscient__h09j8i.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Omniscient__h09j8i.jpg',
            alt: 'Omniscient',
            title: 'Omniscient'
        },
        'anonymous-figure': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Endless_Night_hls7sd.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Endless_Night_hls7sd.jpg',
            alt: 'Endless Night',
            title: 'Endless Night'
        },
        'vibrant-chaos': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Ophelia_fcoev4.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Ophelia_fcoev4.jpg',
            alt: 'Ophelia',
            title: 'Ophelia'
        },
        'symbolic-narrative': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Visceral_z8eczn.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Visceral_z8eczn.jpg',
            alt: 'Visceral',
            title: 'Visceral'
        },
        'digital-portrait': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/3B4B6F0E-970A-4F84-A1E3-6040446888F8_rdtkht.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/3B4B6F0E-970A-4F84-A1E3-6040446888F8_rdtkht.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'DIGITAL PORTRAIT'
        },
        'vibrant-chaos1': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Allure_yh7mtk.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Allure_yh7mtk.jpg',
            alt: 'Allure',
            title: 'Allure'
        },
        'symbolic-narrative1': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Herald.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Herald.jpg',
            alt: 'Herald',
            title: 'Herald'
        },
        'digital-portrait1': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Cover_Artwork_dyr6na.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Cover_Artwork_dyr6na.jpg',
            alt: 'Cover Artwork',
            title: 'Cover Artwork'
        },
        'vibrant-chaos3': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Black_Star_fxbmkg.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Black_Star_fxbmkg.jpg',
            alt: 'Black Star',
            title: 'Black Star'
        },
        'symbolic-narrative3': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Half_Life_rswdtv.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Half_Life_rswdtv.jpg',
            alt: 'Half Life',
            title: 'Half Life'
        },
        'digital-portrait3': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Crown_Jewel_if3sni.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Crown_Jewel_if3sni.jpg',
            alt: 'Crown Jewel',
            title: 'Crown Jewel'
        },
        'vibrant-chaos2': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Entropy_hoe1eu.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Entropy_hoe1eu.jpg',
            alt: 'Vibrant Chaos - Colorful composition representing the chaos of life',
            title: 'Entropy'
        },
        'symbolic-narrative2': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Cecilia_phq7dz.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Cecilia_phq7dz.jpg',
            alt: 'Symbolic Narrative - Storytelling through symbolic imagery',
            title: 'Cecilia'
        },
        'digital-portrait2': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Opulence_bycbym.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Opulence_bycbym.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'Opulence'
        },
        'vibrant-chaos4': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Dazed_sba0le.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Dazed_sba0le.jpg',
            alt: 'Vibrant Chaos - Colorful composition representing the chaos of life',
            title: 'Dazed'
        },
        'symbolic-narrative4': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Secret_Service_tqalr4.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Secret_Service_tqalr4.jpg',
            alt: 'Symbolic Narrative - Storytelling through symbolic imagery',
            title: 'Secret Service'
        },
        'digital-portrait4': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Lucidity_zcesir.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Lucidity_zcesir.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'Lucidity'
        },
        'vibrant-chaos5': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Teflon_rtglmz.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Teflon_rtglmz.jpg',
            alt: 'Vibrant Chaos - Colorful composition representing the chaos of life',
            title: 'Teflon'
        },
        'symbolic-narrative5': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Vicious.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Vicious.jpg',
            alt: 'Symbolic Narrative - Storytelling through symbolic imagery',
            title: 'Vicious'
        },
        'digital-portrait5': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/The_Deity_c95sxl.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/The_Deity_c95sxl.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'The Deity'
        },
        'vibrant-chaos6': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Wild_West_xsj6az.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Wild_West_xsj6az.jpg',
            alt: 'Vibrant Chaos - Colorful composition representing the chaos of life',
            title: 'Wild West'
        },
        'symbolic-narrative6': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/the_king_s_secret_sjnm1v.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/the_king_s_secret_sjnm1v.jpg',
            alt: 'Symbolic Narrative - Storytelling through symbolic imagery',
            title: 'The Kings Secret'
        },
        'digital-portrait6': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Wanderlust_pqpp56.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Wanderlust_pqpp56.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'Wanderlust'
        },
        'vibrant-chaos7': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/IMG_4040_qywufr.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/IMG_4040_qywufr.jpg',
            alt: 'Vibrant Chaos - Colorful composition representing the chaos of life',
            title: 'VIBRANT CHAOS 7'
        },
        'symbolic-narrative7': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/IMG_4041_nwq7vj.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/IMG_4041_nwq7vj.jpg',
            alt: 'Symbolic Narrative - Storytelling through symbolic imagery',
            title: 'SYMBOLIC NARRATIVE 7'
        },
        'digital-portrait7': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/swimming_pools_hs5s22.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/swimming_pools_hs5s22.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'swimming pools'
        },
        'vibrant-chaos8': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/IMG_4044_ngkxaj.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/IMG_4044_ngkxaj.jpg',
            alt: 'Vibrant Chaos - Colorful composition representing the chaos of life',
            title: 'VIBRANT CHAOS 8'
        },
        'symbolic-narrative8': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/IMG_3163_gzl8on.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/IMG_3163_gzl8on.jpg',
            alt: 'Symbolic Narrative - Storytelling through symbolic imagery',
            title: 'SYMBOLIC NARRATIVE 8'
        },
        'digital-portrait8': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/self_portrait_alii3a.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/self_portrait_alii3a.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'self portrait'
        },
        'vibrant-chaos9': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/IMG_4043_ppz1fp.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/IMG_4043_ppz1fp.jpg',
            alt: 'Vibrant Chaos - Colorful composition representing the chaos of life',
            title: 'VIBRANT CHAOS 9'
        },
        'symbolic-narrative9': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/SHiny_2024_qnv09l.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/SHiny_2024_qnv09l.jpg',
            alt: 'Symbolic Narrative - Storytelling through symbolic imagery',
            title: 'shiny'
        },
        'digital-portrait9': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/IMG_3164_jqpobf.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/IMG_3164_jqpobf.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'DIGITAL PORTRAIT 9'
        },
        'vibrant-chaos10': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Pose_1_ysgeuc.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Pose_1_ysgeuc.jpg',
            alt: 'Vibrant Chaos - Colorful composition representing the chaos of life',
            title: 'pose'
        },
        'symbolic-narrative10': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Faces_2.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Faces_2.jpg',
            alt: 'Symbolic Narrative - Storytelling through symbolic imagery',
            title: 'faces 2'
        },
        'digital-portrait10': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Pose_2_ydpvia.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Pose_2_ydpvia.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'Pose 2'
        },
        'vibrant-chaos11': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Observatory.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Observatory.jpg',
            alt: 'Vibrant Chaos - Colorful composition representing the chaos of life',
            title: 'Observatory'
        },
        'symbolic-narrative11': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Faces_kv3lgs.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Faces_kv3lgs.jpg',
            alt: 'Symbolic Narrative - Storytelling through symbolic imagery',
            title: 'faces'
        },
        'digital-portrait11': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Observatory_2_ah9twa.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Observatory_2_ah9twa.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'observatory 2'
        },
        'vibrant-chaos12': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Pieces_of_a_dream_uklp8v.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Pieces_of_a_dream_uklp8v.jpg',
            alt: 'Vibrant Chaos - Colorful composition representing the chaos of life',
            title: 'pieces of a dream'
        },
        'symbolic-narrative12': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Gaze_vqphrs.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Gaze_vqphrs.jpg',
            alt: 'Symbolic Narrative - Storytelling through symbolic imagery',
            title: 'gaze'
        },
        'digital-portrait12': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/The_Motions_flxjfg.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/The_Motions_flxjfg.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'The Motions'
        },
        'vibrant-chaos13': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/3_ngqba7.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/3_ngqba7.jpg',
            alt: 'Vibrant Chaos - Colorful composition representing the chaos of life',
            title: '3'
        },
        'symbolic-narrative13': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/sixth_sense_eyhb7y.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/sixth_sense_eyhb7y.jpg',
            alt: 'Symbolic Narrative - Storytelling through symbolic imagery',
            title: 'sixth sense'
        },
        'digital-portrait13': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Badlands.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Badlands.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'BADLANDS'
        },
        'vibrant-chaos14': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Heat_apfp17.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Heat_apfp17.jpg',
            alt: 'Vibrant Chaos - Colorful composition representing the chaos of life',
            title: ' HEAT'
        },
        'symbolic-narrative14': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/unfinished_yuaecq.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/unfinished_yuaecq.jpg',
            alt: 'Symbolic Narrative - Storytelling through symbolic imagery',
            title: 'SYMBOLIC NARRATIVE 14'
        },
        'digital-portrait14': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Mind_Control_2_xblqxr.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Mind_Control_2_xblqxr.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'Mind Control 2'
        },
        'vibrant-chaos15': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Shining_Armor_n5duyi.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Shining_Armor_n5duyi.jpg',
            alt: 'Vibrant Chaos - Colorful composition representing the chaos of life',
            title: 'Shining Armor'
        },
        'symbolic-narrative15': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Daydreaming_h5cqze.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Daydreaming_h5cqze.jpg',
            alt: 'Symbolic Narrative - Storytelling through symbolic imagery',
            title: 'Daydreaming'
        },
        'digital-portrait15': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Mind_Control_1.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Mind_Control_1.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'mind control 1'
        },
        'vibrant-chaos16': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Braids_Appointment_ramdyu.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Braids_Appointment_ramdyu.jpg',
            alt: 'Vibrant Chaos - Colorful composition representing the chaos of life',
            title: 'braids appointment'
        },
        'symbolic-narrative16': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Flying_Objects_yk8emj.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Flying_Objects_yk8emj.jpg',
            alt: 'Symbolic Narrative - Storytelling through symbolic imagery',
            title: 'flying objects'
        },
        'digital-portrait16': {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Diamonds_ycwgji.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Diamonds_ycwgji.jpg',
            alt: 'Digital Portrait - Contemporary portrait created with digital techniques',
            title: 'diamonds'
        },
    },

    // Gallery images organized by category
    gallery: {
        covers: [
            {
                id: 'fantasy-cover-1',
                image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Cover_Artwork_dyr6na.jpg',
                fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Cover_Artwork_dyr6na.jpg',
                alt: 'Fantasy Novel Cover',
                title: 'Fantasy Novel Cover',
                description: 'Digital Art • 2024'
            },
            {
                id: 'romance-cover-1',
                image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Crown_Jewel_if3sni.jpg',
                fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Crown_Jewel_if3sni.jpg',
                alt: 'Romance Novel Cover',
                title: 'Crown Jewel',
                description: 'c'
            },
            {
                id: 'mystery-cover-1',
                image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Black_Star_fxbmkg.jpg',
                fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Black_Star_fxbmkg.jpg',
                alt: 'Mystery Novel Cover',
                title: 'Mystery Novel Cover',
                description: 'Albumm Cover'
            },
            {
                id: 'scifi-cover-1',
                image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Half_Life_rswdtv.jpg',
                fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Half_Life_rswdtv.jpg',
                alt: 'Sci-Fi Novel Cover',
                title: 'Sci-Fi Novel Cover',
                description: 'Albumm Cover'
            }
        ],
        portraits: [
            {
                id: 'warrior-character-1',
                image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Mediator_ic5aye.jpg',
                fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Mediator_ic5aye.jpg',
                alt: 'Warrior Character',
                title: 'Warrior Character',
                description: 'Digital Painting • 2024'
            },
            {
                id: 'elven-princess-1',
                image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Ophelia_fcoev4.jpg',
                fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Ophelia_fcoev4.jpg',
                alt: 'Elven Princess',
                title: 'Elven Princess',
                description: 'Digital Painting • 2024'
            },
            {
                id: 'commission-portrait-1',
                image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/self_portrait_alii3a.jpg',
                fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/self_portrait_alii3a.jpg',
                alt: 'Commission Portrait',
                title: 'Commission Portrait',
                description: 'Digital Painting • 2024'
            },
            {
                id: 'dragon-rider-1',
                image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/The_Deity_c95sxl.jpg',
                fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/The_Deity_c95sxl.jpg',
                alt: 'Dragon Rider',
                title: 'Dragon Rider',
                description: 'Digital Painting • 2023'
            }
        ],
        traditional: [
            {
                id: 'watercolor-study-1',
                image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Youth_roq2z8.jpg',
                fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Youth_roq2z8.jpg',
                alt: 'Watercolor Study',
                title: 'Nature Study',
                description: 'Watercolor • 2023'
            },
            {
                id: 'charcoal-drawing-1',
                image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/P_fwrzju.jpg',
                fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/P_fwrzju.jpg',
                alt: 'Charcoal Drawing',
                title: 'Portrait Study',
                description: 'Charcoal • 2023'
            },
            {
                id: 'mixed-media-1',
                image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Visceral_z8eczn.jpg',
                fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Visceral_z8eczn.jpg',
                alt: 'Mixed Media',
                title: 'Abstract Composition',
                description: 'Mixed Media • 2023'
            },
            {
                id: 'oil-painting-1',
                image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/Nirvana_wqqez5.jpg',
                fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_80,f_auto/Nirvana_wqqez5.jpg',
                alt: 'Oil Painting',
                title: 'Landscape Study',
                description: 'Oil Paint • 2023'
            }
        ]
    },

    // About page images
    about: {
        artistPhoto: {
            image: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_400,q_80,f_auto/self_portrait_alii3a.jpg',
            fullImage: 'https://res.cloudinary.com/dx8cmsjdw/image/upload/w_1200,q_95,f_auto/self_portrait_alii3a.jpg',
            alt: 'Artist in Studio',
            caption: 'In my studio, working on a new piece'
        }
    }
};

// Helper functions for easy image management
const ImageManager = {
    // Get artwork by ID
    getArtwork: (id) => IMAGES.artwork[id],
    
    // Get all artwork
    getAllArtwork: () => Object.values(IMAGES.artwork),
    
    // Get gallery images by category
    getGalleryImages: (category = 'all') => {
        if (category === 'all') {
            return [...IMAGES.gallery.covers, ...IMAGES.gallery.portraits, ...IMAGES.gallery.traditional];
        }
        return IMAGES.gallery[category] || [];
    },
    
    // Get about page images
    getAboutImages: () => IMAGES.about,
    
    // Generate placeholder images (for development)
    generatePlaceholders: () => {
        const baseUrl = 'https://via.placeholder.com';
        const artworks = Object.keys(IMAGES.artwork);
        const galleryImages = ImageManager.getGalleryImages('all');
        
        // Generate artwork placeholders
        artworks.forEach((id, index) => {
            const artwork = IMAGES.artwork[id];
            artwork.image = `${baseUrl}/600x800?text=${artwork.title.replace(/\s+/g, '+')}`;
        });
        
        // Generate gallery placeholders
        galleryImages.forEach((image, index) => {
            const size = image.id.includes('cover') ? '400x600' : '400x500';
            image.image = `${baseUrl}/${size}?text=${image.title.replace(/\s+/g, '+')}`;
        });
        
        // Generate about page placeholder
        IMAGES.about.artistPhoto.image = `${baseUrl}/500x600?text=Artist+Photo`;
    }
};